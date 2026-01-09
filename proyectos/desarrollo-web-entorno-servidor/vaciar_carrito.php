<?php
session_start();

// Vaciar todo el carrito
unset($_SESSION['carrito']);

// Volver al carrito
header("Location: carrito.php");
exit;
