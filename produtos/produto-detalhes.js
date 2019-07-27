var click = false;
var icone = document.getElementById("produto-favorito");
document.getElementById("produto-favorito").addEventListener("click", cliqueFavorito)

function cliqueFavorito() {
	click = !click;

	if (click){
		icone.style.backgroundImage = "url('../imagens/iconfinder_heart2.png')";
	} else {
		icone.style.backgroundImage = "url('../imagens/iconfinder_heart1.png')";
	}
}

$(document).ready(function(){
    $('#cep-frete').mask('00000-000');
});