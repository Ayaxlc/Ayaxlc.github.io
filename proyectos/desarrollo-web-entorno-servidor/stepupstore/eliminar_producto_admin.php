<?php
session_start();
require_once "conexion.php";

// PROTEGER: solo admin
if (!isset($_SESSION['usuario']) || $_SESSION['rol'] !== 'admin') {
    header("Location: login.php");
    exit;
}

// Comprobar que llega el ID
if (!isset($_GET['id'])) {
    header("Location: admin_productos.php");
    exit;
}

$id = intval($_GET['id']);

// Eliminar producto de la BD
$sql = "DELETE FROM productos WHERE id_producto = $id";
$conn->query($sql);

// Volver al panel de admin
header("Location: admin_productos.php");
exit;
