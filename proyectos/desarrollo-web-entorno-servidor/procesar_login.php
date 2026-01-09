<?php
session_start();
include "conexion.php";

// Comprobar que llegan los datos del formulario
if (!isset($_POST['email']) || !isset($_POST['password'])) {
    header("Location: login.php");
    exit;
}

$email = $_POST['email'];
$password = $_POST['password'];

// Consulta del usuario
$sql = "SELECT * FROM usuarios WHERE email='$email' AND password='$password'";
$resultado = $conn->query($sql);

if ($resultado && $resultado->num_rows === 1) {

    $usuario = $resultado->fetch_assoc();

    // Guardar datos en sesión
    $_SESSION['usuario'] = $usuario['nombre'];
    $_SESSION['rol'] = $usuario['rol'];
    $_SESSION['id_usuario'] = $usuario['id_usuario'];

    // Redirección según rol
    if ($usuario['rol'] === 'admin') {
        header("Location: admin_productos.php");
    } else {
        header("Location: index.php");
    }
    exit;

} else {
    // Login incorrecto → volver al login con error
    header("Location: login.php?error=1");
    exit;
}
