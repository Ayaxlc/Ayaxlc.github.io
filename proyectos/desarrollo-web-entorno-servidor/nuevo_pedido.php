<?php
session_start();
include("conexion.php");

// Si no está logueado, fuera
if (!isset($_SESSION['id_usuario'])) {
    header("Location: login.php");
    exit;
}

// Obtener productos
$sql = "SELECT * FROM productos";
$resultado = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Nuevo pedido - StepUp Store</title>
</head>
<body>

<h1>Realizar pedido</h1>

<form action="guardar_pedido.php" method="POST">

    <label>Producto:</label><br>
    <select name="id_producto" required>
        <?php while ($producto = $resultado->fetch_assoc()) { ?>
            <option value="<?= $producto['id_producto'] ?>">
                <?= $producto['nombre'] ?> - <?= $producto['precio'] ?> €
            </option>
        <?php } ?>
    </select>
    <br><br>

    <label>Talla:</label><br>
    <input type="number" name="talla" required>
    <br><br>

    <label>Cantidad:</label><br>
    <input type="number" name="cantidad" min="1" value="1" required>
    <br><br>

    <button type="submit">Confirmar pedido</button>

</form>

<br>
<a href="index.php">Volver a productos</a>

</body>
</html>
