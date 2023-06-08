

<h1>Registro completado con éxito</h1>

<form method="POST" action="">
    <input class="form-btn" name="opcion" type="submit" value="Consultar"/>

</form>

<?php
require_once "funciones.php";
if ($_POST){
    mostrarDatos($resultado);
}
?>
