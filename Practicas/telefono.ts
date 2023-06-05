export class Telefono{
    tipo: string;
    numero: number;

        constructor(tipo: string, num: number){
            this.tipo = tipo;
            this.numero = num;
        }

        public getTipo(): string {
            return this.tipo;
        }
    
        public setTipo(tipo: string): void {
            this.tipo = tipo;
        }
        public getNumero(): number {
            return this.numero;
        }
    
        public setNumero(num: number): void {
            this.numero = num;
        }

        public mostrarDatos(){
            var datos = "(Tipo: "+this.tipo+", Numero: "+this.numero+")";
            return datos;
        }
}