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
    botao.innerText = "desligar";
    lamp.src = './img/ligada.jpg';
    isLigado = false;
  } else {
    botao.innerText = 'ligar';
    lamp.src = './img/desligada.jpg';
    isLigado = true;
  }
}

// botao.addEventListener('click', lampOn);
// botao.addEventListener('click', lampOff);
// botao.addEventListener('mouseover', lampOn);
// lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
botao.addEventListener('click', toggleLamp)


