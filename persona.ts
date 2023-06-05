import {Direccion} from "./direccion"
import { Mail } from "./mail";
import { Telefono } from "./telefono";
export class Persona {
  nombre: string;
  apellidos: string;
  edad: number;
  dni: string;
  cumple: string;
  colorFav: string;
  sexo: string;
  direccion: Direccion;
  mails: Mail;
  tlfn: Telefono;
  notas: number;
    
    constructor(nom: string, apell: string, edad: number, dni:string, cum: string, colorF:string, sexo: string, direc: Direccion, mail:Mail, tlfn: Telefono, notas: number){
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
    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nom: string): void {
        this.nombre = nom;
    }

    public getApellidos(): string {
        return this.apellidos;
    }

    public setApellidos(apell: string): void {
        this.apellidos = apell;
    }

    public getEdad(): number {
        return this.edad;
    }

    public setEdad(edad: number): void {
        this.edad = edad;
    }

    public getDni(): string {
        return this.dni;
    }

    public setDni(dni: string): void {
        this.dni = dni;
    }

    public getCumple(): string {
        return this.cumple;
    }

    public setCumple(cum: string): void {
        this.cumple = cum;
    }

    public getColorFav(): string {
        return this.colorFav;
    }

    public setColorFav(colorF: string): void {
        this.colorFav = colorF;
    }

    public getSexo(): string {
        return this.sexo;
    }

    public setSexo(sexo: string): void {
        this.sexo = sexo;
    }

    public getDireccion(): string {
        return this.direccion.mostrarDatos();
    }

    public setDireccion(direc: Direccion): void {
        this.direccion = direc;
    }


    public getMails(): string {
        return this.mails.mostrarDatos();
    }

    public setMails(mail: Mail): void {
        this.mails = mail;
    }

    public getTlfn(): string {
        return this.tlfn.mostrarDatos();
    }

    public setTlfn(tlfn: Telefono): void {
        this.tlfn = tlfn;
    }

    public getNotas(): number {
        return this.notas;
    }

    public setNotas(notas: number): void {
        this.notas = notas;
    }


    public mostrarDatos(){
        var datos = "\n\nNombre: "+this.nombre+"\nApellidos: "+this.apellidos+"\nEdad: "+this.edad+"\nDNI: "+this.dni+"\nCumple: "+this.cumple+"\nColorFav: "+this.colorFav+"\nSexo: "+this.sexo+"\nDireccion: "+this.direccion.mostrarDatos()+"\nMail: "+this.mails.mostrarDatos()+"\nTelefono: "+this.tlfn.mostrarDatos()+"\nNotas: "+this.notas;
        return datos;
    }



}