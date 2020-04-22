"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
    Sejour.prototype.getNom = function () {
        return this.nom;
    };
    Sejour.prototype.getPrix = function () {
        return this.prix;
    };
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejourService = [new Sejour('Bali', 2000), new Sejour('Grece', 800), new Sejour('Annecy', 500)];
    }
    SejourService.prototype.getSejourParNom = function (nom) {
        for (var _i = 0, _a = this._sejourService; _i < _a.length; _i++) {
            var sejour_1 = _a[_i];
            if (sejour_1.getNom() === nom) {
                return sejour_1;
            }
        }
        console.log("\nle séjour demandé n'existe pas");
    };
    return SejourService;
}());
var sejour = new SejourService();
console.log(sejour.getSejourParNom('Bali'));
console.log(sejour.getSejourParNom('Tunisie'));
