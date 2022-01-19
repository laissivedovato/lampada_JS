const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

// cria o evento para trocar a imagem de desligada para ligada
function lampOn () {
  lamp.src = './img/ligada.jpg'
}

// quando for clicado o botão de 'Ligar' troca para a imagem da lâmpada ligada
turnOn.addEventListener('click', lampOn);


// cria o evento para trocar a imagem de ligada para desligada
function lampOff () {
  lamp.src = './img/desligada.jpg'
}

// quando for clicado o botão de 'Desligar' troca para a imagem da lâmpada desligada
turnOff.addEventListener('click', lampOff);
