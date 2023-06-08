<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Formulario</title>
<link href="Estilo1.css" rel="stylesheet" type="text/css">
</head>

<body>
<div class="group">
    <form method="POST" action="">
    <h2><em>Formulario de Registro</em></h2>
<label for="nombre">Nombre</label>
<br>
<input type="text" name="nombre" class="form-input" required/>
<br>
<label for="primerapellido">Primer Apellido</label>
<br>
<input type="text" name="primerapellido" class="form-input" required/>
<br>
<label for="segundoapellido">Segundo Apellido</label>
<br>
<input type="text" name="segundoapellido" class="form-input" required/>
<br>
<label for="email">Email</label>
<br>
<input type="email" name="email" class="form-input" required/>
<br>
<label for="login">Login</label>
<br>
<input type="text" name="login" class="form-input" required/>
<br>
<label for="password">Password</label>
<br>
<input type="password" name="pasword" class="form-input" minlength="4" maxlength="8" required/>
<br>
<input class="form-btn" name="opcion" type="submit" value="Enviar"/>



<?php
require_once "funciones.php";
if($_POST){
    $opcion = $_POST['opcion'];
    $nombre = $_POST['nombre'];
    $primerapellido = $_POST['primerapellido'];
    $segundoapellido = $_POST['segundoapellido'];
    $email = $_POST['email'];
    $login = $_POST['login'];
    $pasword = $_POST['pasword'];

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Laboratorio";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO usuarios (nombre, primerapellido, segundoapellido, email, loginn, contraseña)
        VALUES ('$nombre', '$primerapellido', '$segundoapellido', '$email', '$login', '$pasword')";



comprobarMail($email, $resultado, $conn, $sql);


$conn->close();


}



?>
    </form>
</div>
</body>
</html>