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
		if(totale<20.1){
		document.getElementById('spiegazione').innerHTML="Sottopeso :(";	
	    }
	    else if(totale<25){
		document.getElementById('spiegazione').innerHTML="Peso Ottimale!! GoodJob Boy :D";
		}
		else if(totale<29.9){
		document.getElementById('spiegazione').innerHTML="Sovreppeso :/ ";
		}
		else if(totale<35){
		document.getElementById('spiegazione').innerHTML="Obesià di 1° Grado.. o.o ";
		}
		else if(totale<40){
		document.getElementById('spiegazione').innerHTML="Obesià di 2° Grado.. XO ";
		}
		else{
		document.getElementById('spiegazione').innerHTML="USA citizen boy!! You must go on a diet.";
		}
	}
		

	else if(sesso="f"){
	// applico la formula bmi per femmine
	var totale= (peso/(altezza*altezza))*0.9;
	document.getElementById('calcola').innerHTML="BMI ="+totale;
		if(totale<18.7){
		document.getElementById('spiegazione').innerHTML="Sottopeso :(";	
	    }
		else if(totale<23.8){
		document.getElementById('spiegazione').innerHTML="Peso Ottimale!! GoodJob Girl:D";
		}
		else if(totale<28.6){
		document.getElementById('spiegazione').innerHTML="Sovreppeso :/ ";
		}
		else if(totale<35){
		document.getElementById('spiegazione').innerHTML="Obesià di 1° Grado.. o.o ";
		}
		else if(totale<40){
		document.getElementById('spiegazione').innerHTML="Obesià di 2° Grado.. XO ";
		}
		else{
		document.getElementById('spiegazione').innerHTML="USA citizen girl!! You must go on a diet.";
		}
	}

}

function cancella(){
	document.getElementById('calcola').innerHTML=" ";
}
