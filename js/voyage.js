"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejourService = [new Sejour('Bali', 2000), new Sejour('Grece', 800), new Sejour('Annecy', 500)];
    }
    SejourService.prototype.getSejourParNom = function (nom) {
        for (var _i = 0, _a = this._sejourService; _i < _a.length; _i++) {
            var sejour_1 = _a[_i];
            if (sejour_1.nom === nom) {
                return sejour_1;
            }
        }
    };
    return SejourService;
}());
var sejour = new SejourService();
var sejourRecup1 = sejour.getSejourParNom('Bali');
if (sejourRecup1 === undefined) {
    console.log("\nle séjour demandé n'existe pas");
}
else {
    console.log(sejourRecup1);
}
var sejourRecup2 = sejour.getSejourParNom('Tunisie');
if (sejourRecup2 === undefined) {
    console.log("\nle séjour demandé n'existe pas");
}
else {
    console.log(sejourRecup2);
}
