var abonnements = function() {
	document.getElementById("calculer").addEventListener("click",calcul);
																		
	}
window.addEventListener("load",abonnements);

var calcul = function(){
	A = document.getElementById("A").value;
	B = document.getElementById("B").value;
	C = document.getElementById("C").value;	
	delta =  Math.pow(B,2) - 4 * A * C; // Math.pow(B,2) sert a mettre au carre
	if (C > 0){
		C = "+ " + C;
	}
	if(A == 0){
			document.getElementById("resultat").innerHTML = "<span id='erreur'>⚠ Ce n'est pas une fonction du second degré ⚠ </span>";
			derivee =  B ; return;
		}
				
	if(B < 0){
			derivee =  2* A +"x"+ B ;
			fonction= A + "x² "+ B +"x "+ C ;
		}
	if(B > 0){
			derivee =  2* A +"x +"+ B ;
			fonction= A + "x² + " + B + "x "+ C ;
		}
	if(B == 0){
			derivee =  2* A +"x " ;
			fonction= A + "x² + " + B + "x "+ C ;
		}

		if(delta > 0){
			x1 = (-B - Math.sqrt(delta)) / (2 * A); // Math.sqrt(delta) sert a mettre au carre
			x2 = (-B + Math.sqrt(delta)) / (2 * A);
	
			tableau ="</br><img src='image/tableau.png' width='540px'></img>"
			document.getElementById("resultat").innerHTML = "Δ = " + delta + "</br> <span id='sol'> Il y a donc 2 solutions possibles : </span>" + "</br><b>	  x<sub>1</sub> = </b>" + x1 + "</br><b>	x<sub>2</sub> = </b>" + x2 +"</br>  La derivée de <b>" + fonction + "</b> est : " + derivee + tableau;
		}
		if(delta < 0){
			tableau="";
			document.getElementById("resultat").innerHTML = "Δ = " + delta + "</br><span id=passol> Il n'y a donc pas de solutions </span> " +"</br> La derivée de <b>" + fonction + "</b> est : " + derivee;
		}
		
		if(delta == 0){
			x= -B/ (2 * A)
			tableau="";
			document.getElementById("resultat").innerHTML = "Δ = " + delta + "</br> <span id='sol'> Il y a donc  solutions possibles : </span>" + "</br><b>	  x<sub>1</sub> = </b>" + x + "<br>  La derivée de <b>" + fonction + "</b> est : " + derivee + tableau;
			}
		
	
		
}


