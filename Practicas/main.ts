import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from "./telefono";
import {Persona} from "./persona";
var Persona1 = new Persona("Pablo", "Garcia Barba", 21, "52647836H", "25/03/02", "Naranja", "Hombre", new Direccion("Madrid", 2, 5, "A", 25966, "Madrid", "Madrid"), new Mail("gmail", "paco134@gmail.com"), new Telefono("movil", 548313625),8.5);
var Persona2 = new Persona("Alonso", "Madrona Martini", 23, "54856321B", "20/07/00", "Negro", "Hombre", new Direccion("Cristobal", 8, 6, "F", 52144, "Madrid", "Madrid"), new Mail("gmail", "nano33@gmail.com"), new Telefono("movil", 965315427), 10);
var Persona3 = new Persona("Ángela", "Fernández Cambronero", 21, "51629584A", "07/07/02", "Azul", "Mujer", new Direccion("Gasset", 5, 6, "K", 28033, "Madrid", "Madrid"), new Mail("gmail", "princesita02@gmail.com"), new Telefono("movil", 659431254), 11);
console.log(Persona1.mostrarDatos());
console.log(Persona2.mostrarDatos());
console.log(Persona3.mostrarDatos());
var Personas: Persona[];
Personas = [Persona1, Persona2, Persona3];
for (let i=0; i<Personas.length; i++){
    if (Personas[i].getDni() == "54856321B"){
        Personas[i].setDireccion(new Direccion("Arzobispo", 8, 6, "C", 28045, "Madrid", "Madrid"));
        Personas[i].setMails(new Mail("gmail", "nano38@gmail.com"));
        Personas[i].setTlfn(new Telefono("movil", 625435847));
    }
}


console.log(Persona1.mostrarDatos());
console.log(Persona2.mostrarDatos());
console.log(Persona3.mostrarDatos());
