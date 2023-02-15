

var Criptografar = document.querySelector(".botao-criptografar"); 
var Descriptografar = document.querySelector(".botao-descriptografar"); 
var Container2 = document.querySelector(".container2");
var resultado = document.querySelector(".text-resultado");
const Copiar = document.querySelector(".botao-copiar");




Criptografar.onclick = botaocriptografar;
Descriptografar.onclick = botaodescriptografar;
Copiar.addEventListener("click", copiaText);










function botaocriptografar() {

	apagar();
	resultado.textContent = criptografarT(retornarValortexto());

	

}

function botaodescriptografar() {

	apagar();
	resultado.textContent = descriptografarT(retornarValortexto());

	

}


function apagar(){

	Container2.classList.add("apagar");



}

function retornarValortexto() {

	var AreaTexto = document.querySelector(".area-texto");

	



	
	
	return AreaTexto.value;

}


function criptografarT(m) {

	var txt = m;
	var txtF ="";

	for(var i = 0; i < txt.length; i++) {

		if(txt[i] == "e"){

			txtF = txtF +"enter"
		}

		else if(txt[i] == "i"){

			txtF = txtF +"imes"
		}

		else if(txt[i] == "a"){

			txtF = txtF +"ai"
		}

		else if(txt[i] == "o"){

			txtF = txtF +"ober"
		}

		else if(txt[i] == "u"){

			txtF = txtF +"ufat"
		}

		else{

			txtF= txtF + txt[i];
		}






	}

	return txtF;
}

function descriptografarT(m) {

	var txt = m;
	var txtF ="";

	for(var i = 0; i < txt.length; i++) {

		if(txt[i] == "e"){

			txtF = txtF +"e"
			i = i + 4;
		}

		else if(txt[i] == "i"){

			txtF = txtF +"i"
			i = i + 3;
		}

		else if(txt[i] == "a"){

			txtF = txtF +"a"
			i = i + 1;
		}

		else if(txt[i] == "o"){

			txtF = txtF +"o"
			i = i + 3;
		}

		else if(txt[i] == "u"){

			txtF = txtF +"u"
			i = i + 3;
		}

		else{

			txtF= txtF + txt[i];
		}






	}

	return txtF;
}

function copiaText(e) {

	navigator.clipboard.writeText(resultado.innerHTML)

}

















