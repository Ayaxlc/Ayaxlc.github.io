<?php
session_start();
require_once "conexion.php";

// comprobación de que es admin
if (!isset($_SESSION['rol']) || $_SESSION['rol'] !== 'admin') {
    header("Location: index.php");
    exit;
}

$sql = "SELECT id_usuario, nombre, email, rol FROM usuarios";
$resultado = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Administrar usuarios</title>
</head>
<body>

<h1>Usuarios</h1>

<table border="1">
    <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Email</th>
        <th>Rol</th>
        <th>Acciones</th>
    </tr>

    <?php while ($fila = $resultado->fetch_assoc()) { ?>
        <tr>
            <td><?= $fila['id_usuario'] ?></td>
            <td><?= $fila['nombre'] ?></td>
            <td><?= $fila['email'] ?></td>
            <td><?= $fila['rol'] ?></td>
            <td>
                <a href="eliminar_usuario.php?id=<?= $fila['id_usuario'] ?>">
                    Eliminar
                </a>
            </td>
        </tr>
    <?php } ?>
</table>

</body>
</html>
