const botao = document.getElementById('botao');
var isLigado = false;

function isLampBroken () {
  return lamp.src.indexOf('quebrada') > -1;
}

function lampOn () {
  if (!isLampBroken ()){
    lamp.src = './img/ligada.jpg';
    botao.innerText = 'Desligar';
  }
}

function lampOff () {
  if (!isLampBroken ()) {
    lamp.src = './img/desligada.jpg';
    botao.innerText = 'Ligar';
  }
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}

function toggleLamp() {
  if (isLigado) {
    botao.innerText = "Desligar";
    lamp.src = './img/ligada.jpg';
    isLigado = false;
  } else {
    botao.innerText = 'Ligar';
    lamp.src = './img/desligada.jpg';
    isLigado = true;
  }
}


lamp.addEventListener('dblclick', lampBroken);
botao.addEventListener('click', toggleLamp)


