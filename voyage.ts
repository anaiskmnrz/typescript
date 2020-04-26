class Sejour {

    constructor(private _nom:string, private _prix:number){
    }

    public get nom(): string {
        return this._nom;
    }

    public get prix(): number{
        return this._prix;
    }

}

class SejourService {
    
    private _sejourService:Sejour[];

    constructor(){
        this._sejourService = [new Sejour('Bali',2000), new Sejour('Grece',800), new Sejour('Annecy',500)];
    }

    public getSejourParNom(nom:string) :Sejour|void{
        for (const sejour of this._sejourService){
            if (sejour.nom === nom) {
                return sejour;
            }
        }
    }
}

const sejour = new SejourService();
const sejourRecup1  = sejour.getSejourParNom('Bali');

if (sejourRecup1 === undefined){
    console.log("\nle séjour demandé n'existe pas");
} else {
    console.log(sejourRecup1);
}

const sejourRecup2  = sejour.getSejourParNom('Tunisie');

if (sejourRecup2 === undefined){
    console.log("\nle séjour demandé n'existe pas");
} else {
    console.log(sejourRecup2);
}

