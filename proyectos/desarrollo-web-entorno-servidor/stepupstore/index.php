<?php
session_start();

// PROTEGER PÁGINA: solo usuarios logueados
if (!isset($_SESSION['usuario'])) {
    header("Location: login.php");
    exit;
}

/* CONEXIÓN A LA BASE DE DATOS */
$host = "localhost";
$user = "root";
$pass = "";
$db   = "stepup_store";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

/* CONSULTA DE PRODUCTOS */
$sql = "SELECT * FROM productos";
$resultado = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>StepUp Store</title>
</head>
<body>

<!-- CABECERA -->
<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
    <h1>StepUp Store</h1>

    <div>
        <strong>👤 <?= $_SESSION['usuario'] ?></strong>
        (<?= $_SESSION['rol'] ?>)
        |
        <a href="logout.php" style="
            background:#c0392b;
            color:white;
            padding:6px 10px;
            text-decoration:none;
            border-radius:5px;
        ">Cerrar sesión</a>
    </div>
</div>

<hr>

<!-- ENLACES CLIENTE -->
<div style="margin-bottom:20px;">
    <a href="carrito.php">🛒 Ver carrito</a> |
    <a href="pedidos.php">📦 Mis pedidos</a>

    <?php if ($_SESSION['rol'] === 'admin'): ?>
        | <a href="admin_productos.php">⚙️ Admin productos</a>
        | <a href="admin_usuarios.php">👥 Admin usuarios</a>
    <?php endif; ?>
</div>

<hr>

<!-- LISTADO DE PRODUCTOS -->
<?php
if ($resultado->num_rows > 0) {
    while ($producto = $resultado->fetch_assoc()) {
        echo "<h3>" . $producto['nombre'] . "</h3>";
        echo "<p><strong>Marca:</strong> " . $producto['marca'] . "</p>";
        echo "<p><strong>Precio:</strong> " . $producto['precio'] . " €</p>";

        echo "<img src='" . trim($producto['imagen']) . "' width='200'><br><br>";

        echo "
        <form action='add_carrito.php' method='post'>
            <input type='hidden' name='id' value='{$producto['id_producto']}'>
            <input type='hidden' name='nombre' value='{$producto['nombre']}'>
            <input type='hidden' name='precio' value='{$producto['precio']}'>
            <input type='hidden' name='imagen' value='{$producto['imagen']}'>
            <button type='submit'>Comprar</button>
        </form>
        ";

        echo "<hr>";
    }
} else {
    echo "<p>No hay productos disponibles</p>";
}
?>

</body>
</html>
