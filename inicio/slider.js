var imgs = [];
var imgsName = 
	[
		"slide-1",
		"slide-2", 
		"slide-3", 
		"slide-4"
	];
var imgAtual;
var maxImg;
var temp;

function preCarregamento() {
	var s = 1;

	for (var i = 0; i < imgsName.length; i++) {
		imgs[i] = new Image();
		imgs[i].src = `../imagens/${imgsName[i]}.png`;
		s++;
	}
}

function carregaImg(img) {
	slider.style.backgroundImage = "url('"+imgs[img].src+"')";
	slider.style.backgroundSize = '100% 100%'
}

function inicia() {
	preCarregamento();
	imgAtual = 0;
	maxImg = imgs.length - 1;
	slider = document.getElementById("slider");
	carregaImg(imgAtual);
	temp = setInterval(troca,3000);
}

function troca() {
	imgAtual++;
	
	if(imgAtual>maxImg){
		imgAtual = 0;
	}
	carregaImg(imgAtual);
}

window.addEventListener("load", inicia);