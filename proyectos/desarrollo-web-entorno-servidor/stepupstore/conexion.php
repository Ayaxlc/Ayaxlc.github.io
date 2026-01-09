<?php
$host = "localhost";
$usuario = "root";
$password = "";
$basedatos = "stepup_store"; // el nombre EXACTO de tu BD

$conn = new mysqli($host, $usuario, $password, $basedatos);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>
