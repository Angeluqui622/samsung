"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var direccion_1 = require("./direccion");
var mail_1 = require("./mail");
var telefono_1 = require("./telefono");
var persona_1 = require("./persona");
var Persona1 = new persona_1.Persona("Pablo", "Garcia Barba", 21, "52647836H", "25/03/02", "Naranja", "Hombre", new direccion_1.Direccion("Madrid", 2, 5, "A", 25966, "Madrid", "Madrid"), new mail_1.Mail("gmail", "paco134@gmail.com"), new telefono_1.Telefono("movil", 548313625), 8.5);
var Persona2 = new persona_1.Persona("Alonso", "Madrona Martini", 23, "54856321B", "20/07/00", "Negro", "Hombre", new direccion_1.Direccion("Cristobal", 8, 6, "F", 52144, "Madrid", "Madrid"), new mail_1.Mail("gmail", "nano33@gmail.com"), new telefono_1.Telefono("movil", 965315427), 10);
var Persona3 = new persona_1.Persona("Ángela", "Fernández Cambronero", 21, "51629584A", "07/07/02", "Azul", "Mujer", new direccion_1.Direccion("Gasset", 5, 6, "K", 28033, "Madrid", "Madrid"), new mail_1.Mail("gmail", "princesita02@gmail.com"), new telefono_1.Telefono("movil", 659431254), 11);
console.log(Persona1.mostrarDatos());
console.log(Persona2.mostrarDatos());
console.log(Persona3.mostrarDatos());
var Personas;
Personas = [Persona1, Persona2, Persona3];
for (var i = 0; i < Personas.length; i++) {
    if (Personas[i].getDni() == "54856321B") {
        Personas[i].setDireccion(new direccion_1.Direccion("Arzobispo", 8, 6, "C", 28045, "Madrid", "Madrid"));
        Personas[i].setMails(new mail_1.Mail("gmail", "nano38@gmail.com"));
        Personas[i].setTlfn(new telefono_1.Telefono("movil", 625435847));
    }
}
console.log(Persona1.mostrarDatos());
console.log(Persona2.mostrarDatos());
console.log(Persona3.mostrarDatos());
