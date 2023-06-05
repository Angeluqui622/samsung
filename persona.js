"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nom, apell, edad, dni, cum, colorF, sexo, direc, mail, tlfn, notas) {
        this.nombre = nom;
        this.apellidos = apell;
        this.edad = edad;
        this.dni = dni;
        this.cumple = cum;
        this.colorFav = colorF;
        this.sexo = sexo;
        this.direccion = direc;
        this.mails = mail;
        this.tlfn = tlfn;
        this.notas = notas;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    Persona.prototype.getApellidos = function () {
        return this.apellidos;
    };
    Persona.prototype.setApellidos = function (apell) {
        this.apellidos = apell;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Persona.prototype.getDni = function () {
        return this.dni;
    };
    Persona.prototype.setDni = function (dni) {
        this.dni = dni;
    };
    Persona.prototype.getCumple = function () {
        return this.cumple;
    };
    Persona.prototype.setCumple = function (cum) {
        this.cumple = cum;
    };
    Persona.prototype.getColorFav = function () {
        return this.colorFav;
    };
    Persona.prototype.setColorFav = function (colorF) {
        this.colorFav = colorF;
    };
    Persona.prototype.getSexo = function () {
        return this.sexo;
    };
    Persona.prototype.setSexo = function (sexo) {
        this.sexo = sexo;
    };
    Persona.prototype.getDireccion = function () {
        return this.direccion.mostrarDatos();
    };
    Persona.prototype.setDireccion = function (direc) {
        this.direccion = direc;
    };
    Persona.prototype.getMails = function () {
        return this.mails.mostrarDatos();
    };
    Persona.prototype.setMails = function (mail) {
        this.mails = mail;
    };
    Persona.prototype.getTlfn = function () {
        return this.tlfn.mostrarDatos();
    };
    Persona.prototype.setTlfn = function (tlfn) {
        this.tlfn = tlfn;
    };
    Persona.prototype.getNotas = function () {
        return this.notas;
    };
    Persona.prototype.setNotas = function (notas) {
        this.notas = notas;
    };
    Persona.prototype.mostrarDatos = function () {
        var datos = "\n\nNombre: " + this.nombre + "\nApellidos: " + this.apellidos + "\nEdad: " + this.edad + "\nDNI: " + this.dni + "\nCumple: " + this.cumple + "\nColorFav: " + this.colorFav + "\nSexo: " + this.sexo + "\nDireccion: " + this.direccion.mostrarDatos() + "\nMail: " + this.mails.mostrarDatos() + "\nTelefono: " + this.tlfn.mostrarDatos() + "\nNotas: " + this.notas;
        return datos;
    };
    return Persona;
}());
exports.Persona = Persona;
