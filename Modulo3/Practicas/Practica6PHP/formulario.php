<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Formulario</title>
<link href="Estilo.css" rel="stylesheet" type="text/css">
</head>

<body>
<div class="group">
    <form method="POST" action="">
    <h2><em>Formulario de Registro</em></h2>
<label for="nombre">Nombre <span><em>(requerido)</em></span></label>
<br>
<input type="text" name="nombre" class="form-input" required/>
<br>
<label for="apellido">Apellido <span><em>(requerido)</em></span></label>
<br>
<input type="text" name="apellido" class="form-input" required/>
<br>
<label for="email">Email <span><em>(requerido)</em></span></label>
<br>
<input type="text" name="email" class="form-input" />
<br>
<input class="form-btn" name="submit" type="submit" value="Suscribirse"/>


<?php

if($_POST){
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "practica6";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO usuario (nombre, apellido, mail)
VALUES ('$nombre', '$apellido', '$email')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successful";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
} 

$conn->close();
}

?>
    </form>
</div>
</body>
</html>