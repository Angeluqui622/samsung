export class Mail{
    tipo: string;
    direccion: string;

        constructor(tipo: string, direcc: string){
            this.tipo = tipo;
            this.direccion = direcc;
        }

        public getTipo(): string {
            return this.tipo;
        }
    
        public setTipo(tipo: string): void {
            this.tipo = tipo;
        }
        public getDireccion(): string {
            return this.direccion;
        }
    
        public setDireccion(direc: string): void {
            this.direccion = direc;
        }

        public mostrarDatos(){
            var datos = "(Tipo: "+this.tipo+", Direccion: "+this.direccion+")";
            return datos;
        }
}