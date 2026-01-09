<?php
session_start();
include("conexion.php");

if (!isset($_SESSION['id_usuario'])) {
    header("Location: login.php");
    exit;
}

$id_usuario  = $_SESSION['id_usuario'];
$id_producto = $_POST['id_producto'];
$talla       = $_POST['talla'];
$cantidad    = $_POST['cantidad'];

// Obtener precio del producto
$sql_producto = "SELECT precio FROM productos WHERE id_producto = $id_producto";
$res_producto = $conn->query($sql_producto);
$producto     = $res_producto->fetch_assoc();

$precio_unitario = $producto['precio'];
$total = $precio_unitario * $cantidad;

// 1️⃣ Insertar pedido
$sql_pedido = "INSERT INTO pedidos (fecha_pedido, total, id_usuario)
               VALUES (NOW(), $total, $id_usuario)";
$conn->query($sql_pedido);

// 2️⃣ Obtener id del pedido
$id_pedido = $conn->insert_id;

// 3️⃣ Insertar detalle del pedido
$sql_detalle = "INSERT INTO detalle_pedido 
(id_pedido, id_producto, talla, cantidad, precio)
VALUES ($id_pedido, $id_producto, $talla, $cantidad, $precio_unitario)";
$conn->query($sql_detalle);

// 4️⃣ Redirigir
header("Location: pedidos.php");
exit;
