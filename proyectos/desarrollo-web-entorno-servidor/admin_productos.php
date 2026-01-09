<?php
session_start();
require_once "conexion.php";

// PROTEGER PÁGINA: solo admin
if (!isset($_SESSION['usuario']) || $_SESSION['rol'] !== 'admin') {
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
    <title>Administrar productos</title>
</head>
<body>

<!-- CABECERA -->
<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
    <h1>Administrar productos</h1>

    <div>
        <strong>👤 <?= $_SESSION['usuario'] ?></strong> (admin)
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

<table border="1" cellpadding="5">
    <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Imagen</th>
        <th>Acciones</th>
    </tr>

    <?php while ($producto = $resultado->fetch_assoc()) { ?>
        <tr>
            <td><?= $producto['id_producto'] ?></td>
            <td><?= $producto['nombre'] ?></td>
            <td><?= $producto['precio'] ?> €</td>
            <td>
                <img src="<?= $producto['imagen'] ?>" width="80">
            </td>
            <td>
                <a href="eliminar_producto_admin.php?id=<?= $producto['id_producto'] ?>">
                    ❌ Eliminar
                </a>
            </td>
        </tr>
    <?php } ?>
</table>

<br>
<a href="index.php">⬅️ Volver a la tienda</a>

</body>
</html>
