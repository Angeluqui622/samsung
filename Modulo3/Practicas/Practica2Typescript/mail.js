"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(tipo, direcc) {
        this.tipo = tipo;
        this.direccion = direcc;
    }
    Mail.prototype.getTipo = function () {
        return this.tipo;
    };
    Mail.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Mail.prototype.getDireccion = function () {
        return this.direccion;
    };
    Mail.prototype.setDireccion = function (direc) {
        this.direccion = direc;
    };
    Mail.prototype.mostrarDatos = function () {
        var datos = "(Tipo: " + this.tipo + ", Direccion: " + this.direccion + ")";
        return datos;
    };
    return Mail;
}());
exports.Mail = Mail;
