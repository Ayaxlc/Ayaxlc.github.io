<?php
// ================================
// CONEXIÓN A LA BASE DE DATOS
// ================================
$host = "localhost";
$usuario = "root";
$password = "";
$bd = "stepup_store";

$conexion = new mysqli($host, $usuario, $password, $bd);

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// ================================
// CONSULTA SQL
// ================================
$sql = "
SELECT
    p.id_pedido,
    u.nombre AS usuario,
    pr.nombre AS producto,
    d.talla,
    d.cantidad,
    d.precio
FROM pedidos p
INNER JOIN usuarios u ON p.id_usuario = u.id_usuario
INNER JOIN detalle_pedido d ON p.id_pedido = d.id_pedido
INNER JOIN productos pr ON d.id_producto = pr.id_producto
ORDER BY p.id_pedido
";

$resultado = $conexion->query($sql);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Pedidos realizados</title>
</head>
<body>

<h1>Pedidos realizados</h1>

<?php
// ================================
// MOSTRAR PEDIDOS AGRUPADOS
// ================================
$pedidoActual = null;

if ($resultado->num_rows > 0) {

    while ($fila = $resultado->fetch_assoc()) {

        if ($pedidoActual !== $fila['id_pedido']) {

            if ($pedidoActual !== null) {
                echo "<hr>";
            }

            echo "<h2>Pedido Nº " . $fila['id_pedido'] . "</h2>";
            echo "<p><strong>Usuario:</strong> " . $fila['usuario'] . "</p>";

            $pedidoActual = $fila['id_pedido'];
        }

        echo "<p>";
        echo "<strong>Producto:</strong> " . $fila['producto'] . "<br>";
        echo "<strong>Talla:</strong> " . $fila['talla'] . "<br>";
        echo "<strong>Cantidad:</strong> " . $fila['cantidad'] . "<br>";
        echo "<strong>Precio:</strong> " . $fila['precio'] . " €";
        echo "</p>";
    }

} else {
    echo "<p>No hay pedidos registrados.</p>";
}

$conexion->close();
?>

</body>
</html>
