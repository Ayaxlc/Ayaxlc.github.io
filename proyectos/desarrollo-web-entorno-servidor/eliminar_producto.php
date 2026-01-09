<?php
session_start();

if (isset($_GET['index'])) {
    $index = $_GET['index'];

    if (isset($_SESSION['carrito'][$index])) {
        // Eliminar producto del carrito
        unset($_SESSION['carrito'][$index]);

        // Reordenar índices del array
        $_SESSION['carrito'] = array_values($_SESSION['carrito']);
    }
}

// Volver al carrito
header("Location: carrito.php");
exit;
