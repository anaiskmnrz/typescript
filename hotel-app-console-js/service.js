"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_promise_native_1 = __importDefault(require("request-promise-native"));
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.listerClients = function (start, size) {
        return new Promise(function (resolve, reject) {
            request_promise_native_1.default('http://localhost:8080/clients?start=' + start + '&size=' + size, { json: true }, function (err, res, body) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(body);
                }
            });
        });
    };
    Service.prototype.ajouterClient = function (saisieNom, saisiePrenom) {
        return new Promise(function (resolve, reject) {
            request_promise_native_1.default('http://localhost:8080/clients', { json: true, method: 'POST',
                body: {
                    nom: saisieNom,
                    prenoms: saisiePrenom
                } }, function (err, res, body) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(body);
                }
            });
        });
    };
    return Service;
}());
exports.default = Service;
//module.exports = Service;
