<?php
session_start();

// PROTEGER PÁGINA: solo usuarios logueados
if (!isset($_SESSION['usuario'])) {
    header("Location: login.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Carrito - StepUp Store</title>
</head>
<body>

<!-- CABECERA -->
<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
    <h1>Carrito de la compra</h1>

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

<?php
if (empty($_SESSION['carrito'])) {
    echo "<p>El carrito está vacío.</p>";
} else {

    $total = 0;

    foreach ($_SESSION['carrito'] as $index => $producto) {

        echo "<div style='margin-bottom:15px;'>";
        echo "<strong>" . $producto['nombre'] . "</strong><br>";
        echo "Precio: " . $producto['precio'] . " €<br>";
        echo "<img src='" . $producto['imagen'] . "' width='120'><br>";

        echo "<a href='eliminar_producto.php?index=$index'>
                ❌ Eliminar
              </a>";

        echo "</div><hr>";

        $total += $producto['precio'];
    }

    echo "<h3>Total: $total €</h3>";
}
?>

<?php if (!empty($_SESSION['carrito'])): ?>
    <form action="vaciar_carrito.php" method="post">
        <button type="submit">Vaciar carrito</button>
    </form>

    <br>

    <form action="guardar_pedido.php" method="post">
        <button type="submit">Finalizar compra</button>
    </form>
<?php endif; ?>

<br>

<a href="index.php">⬅️ Volver a la tienda</a>

</body>
</html>
