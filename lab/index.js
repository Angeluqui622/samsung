function comprNombre() {
    var nombre = document.getElementById("nombre").value;
    var error = document.getElementById("errornom");
    var button = document.getElementById("nombre");
    var filtro = true;
    for (let i = 0; i < nombre.length; i++) {
        for (let j = 0; j <= 9; j++) {
            if (nombre.charAt(i) == j) {
                filtro = false;
            } 
        }
    }
    if (nombre == "" || nombre == " " || filtro == false) {
        error.style.visibility = 'visible';
        button.style.backgroundImage = "url('./images/error-icon.svg')";
        button.style.backgroundRepeat = "no-repeat";
        button.style.backgroundPosition = "380px";
        button.style.borderColor = "red";
        nombreok = false;
    }else {
        error.style.visibility = 'hidden';
        button.style.backgroundImage = "url('./images/success-icon.svg')";
        button.style.backgroundRepeat = "no-repeat";
        button.style.backgroundPosition = "380px";
        button.style.borderColor = "green";
        nombreok = true;
    }
}
function comprEmail() {
    var email = document.getElementById("email").value;
    var error = document.getElementById("errormail");
    var button = document.getElementById("email");
    var validemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/;
    if (email == "" || email == " ") {
        error.innerText = "Rellene este campo";
        error.style.visibility = 'visible';
        button.style.backgroundImage = "url('./images/error-icon.svg')";
        button.style.backgroundRepeat = "no-repeat";
        button.style.backgroundPosition = "380px";
        button.style.borderColor = "red";
        mailok = false;
    }else if (validemail.test(email)) {
        error.style.visibility = 'hidden';
        button.style.backgroundImage = "url('./images/success-icon.svg')";
        button.style.backgroundRepeat = "no-repeat";
        button.style.backgroundPosition = "380px";
        button.style.borderColor = "green";
        mailok = true;
    }else {
        error.innerText = "Email inválido";
        error.style.visibility = 'visible';
        button.style.backgroundImage = "url('./images/error-icon.svg')";
        button.style.backgroundRepeat = "no-repeat";
        button.style.backgroundPosition = "380px";
        button.style.borderColor = "red";
        mailok = false;
    }

    
}
function comprClave() {
    var clave = document.getElementById("clave").value;
    var error = document.getElementById("errorclave");
    var button = document.getElementById("clave");
    if (clave == "" || clave == " ") {
        error.innerText = "Rellene este campo";
        error.style.visibility = 'visible';
        button.style.backgroundImage = "url('./images/error-icon.svg')";
        button.style.backgroundRepeat = "no-repeat";
        button.style.backgroundPosition = "380px";
        button.style.borderColor = "red";
        claveok = false;
    }else if (clave.length > 0 && clave.length < 8 && clave != " " && clave != "") {
        error.innerText = "No debe tener menos de 8 caracteres";
        error.style.visibility = 'visible';
        button.style.backgroundImage = "url('./images/error-icon.svg')";
        button.style.backgroundRepeat = "no-repeat";
        button.style.backgroundPosition = "380px";
        button.style.borderColor = "red";
        claveok = false;
    }else {
        error.style.visibility = 'hidden';
        button.style.backgroundImage = "url('./images/success-icon.svg')";
        button.style.backgroundRepeat = "no-repeat";
        button.style.backgroundPosition = "380px";
        button.style.borderColor = "green";
        claveok = true;
    }
}
function comprClave2() {
    var clave2 = document.getElementById("clave2").value;
    var error = document.getElementById("errorclave2");
    var button = document.getElementById("clave2");
    var clave = document.getElementById("clave").value;
    if (clave != clave2 && clave2 != " " && clave2 != "") {
        error.style.visibility = 'visible';
        button.style.backgroundImage = "url('./images/error-icon.svg')";
        button.style.backgroundRepeat = "no-repeat";
        button.style.backgroundPosition = "380px";
        button.style.borderColor = "red";
        error.innerText = "Las contraseñas no coinciden";
        clave2ok = false;
    }else if (clave2 == "" || clave2 == " ") {
        error.innerText = "Rellene este campo";
        error.style.visibility = 'visible';
        button.style.backgroundImage = "url('./images/error-icon.svg')";
        button.style.backgroundRepeat = "no-repeat";
        button.style.backgroundPosition = "380px";
        button.style.borderColor = "red";
        clave2ok = false;
    }else {
        error.style.visibility = 'hidden';
        button.style.backgroundImage = "url('./images/success-icon.svg')";
        button.style.backgroundRepeat = "no-repeat";
        button.style.backgroundPosition = "380px";
        button.style.borderColor = "green";
        clave2ok = true;
    }
}

var nombreok = false;
var mailok = false;
var claveok = false;
var clave2ok = false;

function enviar() {
    comprNombre();
    comprEmail();
    comprClave();
    comprClave2();
    if (nombreok == true && mailok == true && claveok == true && clave2ok == true) {
        alert("Inscripción realizada correctamente");
    }
}