<?php
session_start();

// Si ya hay sesión iniciada, redirigir a la tienda
if (isset($_SESSION['usuario'])) {
    header("Location: index.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Login - StepUp Store</title>
</head>
<body>

<h1>Iniciar sesión</h1>

<?php
// Mostrar mensaje de error si existe
if (isset($_GET['error'])) {
    echo "<p style='color:red;'>Email o contraseña incorrectos</p>";
}
?>

<form action="procesar_login.php" method="POST">

    <label>Email:</label><br>
    <input type="email" name="email" required><br><br>

    <label>Contraseña:</label><br>
    <input type="password" name="password" required><br><br>

    <button type="submit">Entrar</button>

</form>

</body>
</html>
