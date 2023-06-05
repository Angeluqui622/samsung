export class Direccion {
    calle: string;
    numero: number;
    piso: number;
    letra: string;
    codPostal: number;
    poblacion: string;
    provincia: string;

        constructor(calle: string, num: number, piso: number, letra: string, codPostal: number, pobla: string, prov: string){
            this.calle = calle;
            this.numero = num;
            this.piso = piso;
            this.letra = letra;
            this.codPostal = codPostal;
            this.poblacion = pobla;
            this.provincia = prov;
        }

        public getCalle(): string {
            return this.calle;
        }
    
        public setCalle(calle: string): void {
            this.calle = calle;
        }
        public getNumero(): number {
            return this.numero;
        }
    
        public setNumero(nom: number): void {
            this.numero = nom;
        }
        public getPiso(): number {
            return this.piso;
        }
    
        public setPiso(piso: number): void {
            this.piso = piso;
        }
        public getLetra(): string {
            return this.letra;
        }
    
        public setLetra(letra: string): void {
            this.letra = letra;
        }
        public getCodPostal(): number {
            return this.codPostal;
        }
    
        public setCodPostal(codPostal: number): void {
            this.codPostal = codPostal;
        }
        public getPoblacion(): string {
            return this.poblacion;
        }
    
        public setPoblacion(pobla: string): void {
            this.poblacion = pobla;
        }
        public getProvincia(): string {
            return this.provincia;
        }
    
        public setProvincia(prov: string): void {
            this.provincia = prov;
        }

        public mostrarDatos(){
            var datos = "(Calle: "+this.calle+", Numero: "+this.numero+", Piso: "+this.piso+", Letra: "+this.letra+", CodigoPostal: "+this.codPostal+", Poblacion: "+this.poblacion+", Provincia: "+this.provincia+")";
            return datos;
        }
}