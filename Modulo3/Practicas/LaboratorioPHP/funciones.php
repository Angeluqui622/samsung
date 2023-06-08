
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Laboratorio";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
 
 
$resultado=$conn->query("SELECT * FROM usuarios");

function mostrarDatos($resultado){
    ?>
<!doctype html>
<html>
<style>table,th,td{border: 1px solid black;
}
</style>

    <table  style = "width:100%"><tr><th><u>Nombre</u><th><u>PrimerApellido</u></th><th><u>SegundoApellido</u></th><th><u>Email</u></th><th><u>Login</u></th><th><u>Password</u></th></th></tr>
    <?php
    while($dato = $resultado->fetch_assoc())   {
    echo "<tr><td>". $dato["Nombre"] .
        "</td><td>" . $dato["PrimerApellido"] .
        "</td><td>" . $dato["SegundoApellido"] .
        "</td><td>" . $dato["Email"] .
        "</td><td>" . $dato["Loginn"] .
        "</td><td>" . $dato["Contraseña"];
    }
    ?> </table>
    </html>
    <?php
}
 



function comprobarMail($email, $resultado, $conn, $sql){
    $repetido = false;
    foreach ($resultado as $dato){
        if ($dato["Email"] == $email){
            echo "Email Duplicado";
            $repetido = true;
        }
    }
    if ($repetido == false){
        
    if ($conn->query($sql) === TRUE) {
        header("Location: http://localhost/Laboratorio/consulta.php");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    } 
    }

        
}

?>


