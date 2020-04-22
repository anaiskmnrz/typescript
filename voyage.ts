class Sejour {

    constructor(private nom:string, private prix:number){

    }

     public getNom(): string {
        return this.nom;
    }

    public getPrix(): number{
        return this.prix;
    }

}

class SejourService {
    
    private _sejourService:Sejour[];

    constructor(){
        this._sejourService = [new Sejour('Bali',2000), new Sejour('Grece',800), new Sejour('Annecy',500)];
    }

    public getSejourParNom(nom:string) :Sejour|void{
        for (let sejour of this._sejourService){
            if (sejour.getNom() === nom) {
                return sejour;
            }
        }
        console.log("\nle séjour demandé n'existe pas");
    }
}

let sejour = new SejourService();
console.log(sejour.getSejourParNom('Bali'));

console.log(sejour.getSejourParNom('Tunisie'));

