"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(tipo, num) {
        this.tipo = tipo;
        this.numero = num;
    }
    Telefono.prototype.getTipo = function () {
        return this.tipo;
    };
    Telefono.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Telefono.prototype.getNumero = function () {
        return this.numero;
    };
    Telefono.prototype.setNumero = function (num) {
        this.numero = num;
    };
    Telefono.prototype.mostrarDatos = function () {
        var datos = "(Tipo: " + this.tipo + ", Numero: " + this.numero + ")";
        return datos;
    };
    return Telefono;
}());
exports.Telefono = Telefono;
