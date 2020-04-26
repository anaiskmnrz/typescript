import readline from 'readline';

const Service = require('./service.js');
const service = new Service();


const rl = readline.createInterface({   
	input: process.stdin,   
	output: process.stdout 
});

export default class Presentation {

	start(){

		console.log('\n1. Lister les clients \n2. Ajouter un client\n99. Sortir\n');
		rl.question('Quelle option choisissez-vous ? : ', saisie => {
			if (Number(saisie) === 1){
				
				console.log(">> Lister clients\n ");
				service.listerClients(0,10)
						.then(listeClients => {
							console.log(listeClients);
							this.start();
						})
						.catch(err => console.log('Erreur : ',err));
			}
			else if (Number(saisie) === 2){
				console.log(">> Ajouter un client\n");
				rl.question('Entrer le nom : ', saisieNom => {

					rl.question('Entrer le prenom du client : ', saisiePrenom => {
						service.ajouterClient(saisieNom, saisiePrenom)
								.then(clientAjoute => {
									console.log(`client ajouté, uuid = ${clientAjoute.uuid} `);
									this.start();
								})
								.catch(err => console.log(`Erreur :  ${err}`));
					})
				})
			}
			else if (Number(saisie) === 99) {
				console.log('Au revoir')
				rl.close();
			}
		})
	
	}
}

module.exports = Presentation;

