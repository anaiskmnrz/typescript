"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = __importDefault(require("readline"));
var service_1 = __importDefault(require("./service"));
var service = new service_1.default();
var rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
var Presentation = /** @class */ (function () {
    function Presentation() {
    }
    Presentation.prototype.start = function () {
        var _this = this;
        console.log('\n1. Lister les clients \n2. Ajouter un client\n99. Sortir\n');
        rl.question('Quelle option choisissez-vous ? : ', function (saisie) {
            if (saisie === '1') {
                console.log(">> Lister clients\n ");
                service.listerClients(0, 10)
                    .then(function (listeClients) {
                    console.log(listeClients);
                    _this.start();
                })
                    .catch(function (err) { return console.log('Erreur : ', err); });
            }
            else if (saisie === '2') {
                console.log(">> Ajouter un client\n");
                rl.question('Entrer le nom : ', function (saisieNom) {
                    rl.question('Entrer le prenom du client : ', function (saisiePrenom) {
                        service.ajouterClient(saisieNom, saisiePrenom)
                            .then(function (clientAjoute) {
                            console.log("client ajout\u00E9, uuid = " + clientAjoute.uuid + " ");
                            _this.start();
                        })
                            .catch(function (err) { return console.log("Erreur :  " + err); });
                    });
                });
            }
            else if (saisie === '99') {
                console.log('Au revoir');
                rl.close();
            }
        });
    };
    return Presentation;
}());
exports.default = Presentation;
module.exports = Presentation;
