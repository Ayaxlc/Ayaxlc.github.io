<?php
session_start();

// Inicializar carrito si no existe
if (!isset($_SESSION['carrito'])) {
    $_SESSION['carrito'] = [];
}

// Comprobar que llegan los datos del producto
if (!isset($_POST['id'], $_POST['nombre'], $_POST['precio'], $_POST['imagen'])) {
    header("Location: index.php");
    exit;
}

// Crear producto a partir del formulario
$producto = [
    'id' => $_POST['id'],
    'nombre' => $_POST['nombre'],
    'precio' => $_POST['precio'],
    'imagen' => $_POST['imagen']
];

// Añadir producto al carrito
$_SESSION['carrito'][] = $producto;

// Redirigir al carrito
header("Location: carrito.php");
exit;
