/* Calcoli per la app sul BMI */

function calcolo(){
//identificare i dati del form
var peso=document.forms.BMI.peso.valueAsNumber;
var altezza=document.forms.BMI.altezza.valueAsNumber;
var sesso=document.forms.BMI.sesso.value;

// verifico se l'utente è m o f; i dati non possono essere vuoti --> required
if(sesso="m"){
	var totale= peso/(altezza*altezza);
	/* Math.pow(base,esponente)
	 * Math.pow(altezza,2) */
	document.getElementById('calcola').innerHTML="BMI ="+totale;
	}

	else if(sesso="f"){
	// applico la formula bmi per femmine
	var totale= (peso/(altezza*altezza))*0.9;
	document.getElementById('calcola').innerHTML="BMI ="+totale;
	}

}

function cancella(){
	document.getElementById('calcola').innerHTML=" ";
}
