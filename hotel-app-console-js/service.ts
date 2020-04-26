
import request, {RequestPromise} from 'request-promise-native';

export default class Service{

	listerClients(start:number, size:number){

		return new Promise( (resolve, reject) => {
			request('http://localhost:8080/clients?start='+start+'&size='+size, { json:true}, (err,res,body) => {
				if (err) { 
					reject(err); 
				} else {
					resolve(body);
				}
			});
		})
	}

	ajouterClient(saisieNom:string, saisiePrenom:string) {

		return new Promise( (resolve, reject) => {
			request('http://localhost:8080/clients', { json: true, method: 'POST',
			body: {
				nom : saisieNom,
				prenoms : saisiePrenom
			}}, (err,res,body) => {
				if (err) {
					reject(err); 
				} else {
					resolve(body);
				}
			});
		})
		
	}
}

//module.exports = Service;