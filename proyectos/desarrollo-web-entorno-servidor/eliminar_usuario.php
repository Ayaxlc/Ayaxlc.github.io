<?php
session_start();
require_once "conexion.php";

// Solo admin
if (!isset($_SESSION['rol']) || $_SESSION['rol'] !== 'admin') {
    header("Location: index.php");
    exit;
}

// Comprobar ID
if (!isset($_GET['id'])) {
    header("Location: admin_usuarios.php");
    exit;
}

$id = intval($_GET['id']);

// Evitar borrar administradores
$sql = "SELECT rol FROM usuarios WHERE id_usuario = $id";
$resultado = $conn->query($sql);

if ($resultado->num_rows !== 1) {
    header("Location: admin_usuarios.php");
    exit;
}

$usuario = $resultado->fetch_assoc();

// ❌ NO permitir borrar admins
if ($usuario['rol'] === 'admin') {
    header("Location: admin_usuarios.php");
    exit;
}

// ✅ Borrar cliente
$conn->query("DELETE FROM usuarios WHERE id_usuario = $id");

// Volver al panel
header("Location: admin_usuarios.php");
exit;
