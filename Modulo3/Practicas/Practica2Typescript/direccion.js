"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(calle, num, piso, letra, codPostal, pobla, prov) {
        this.calle = calle;
        this.numero = num;
        this.piso = piso;
        this.letra = letra;
        this.codPostal = codPostal;
        this.poblacion = pobla;
        this.provincia = prov;
    }
    Direccion.prototype.getCalle = function () {
        return this.calle;
    };
    Direccion.prototype.setCalle = function (calle) {
        this.calle = calle;
    };
    Direccion.prototype.getNumero = function () {
        return this.numero;
    };
    Direccion.prototype.setNumero = function (nom) {
        this.numero = nom;
    };
    Direccion.prototype.getPiso = function () {
        return this.piso;
    };
    Direccion.prototype.setPiso = function (piso) {
        this.piso = piso;
    };
    Direccion.prototype.getLetra = function () {
        return this.letra;
    };
    Direccion.prototype.setLetra = function (letra) {
        this.letra = letra;
    };
    Direccion.prototype.getCodPostal = function () {
        return this.codPostal;
    };
    Direccion.prototype.setCodPostal = function (codPostal) {
        this.codPostal = codPostal;
    };
    Direccion.prototype.getPoblacion = function () {
        return this.poblacion;
    };
    Direccion.prototype.setPoblacion = function (pobla) {
        this.poblacion = pobla;
    };
    Direccion.prototype.getProvincia = function () {
        return this.provincia;
    };
    Direccion.prototype.setProvincia = function (prov) {
        this.provincia = prov;
    };
    Direccion.prototype.mostrarDatos = function () {
        var datos = "(Calle: " + this.calle + ", Numero: " + this.numero + ", Piso: " + this.piso + ", Letra: " + this.letra + ", CodigoPostal: " + this.codPostal + ", Poblacion: " + this.poblacion + ", Provincia: " + this.provincia + ")";
        return datos;
    };
    return Direccion;
}());
exports.Direccion = Direccion;
