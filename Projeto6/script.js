// Insere o Elemento 3 na sequencia correta
var elemento3 = document.createElement("h3");
var texto = document.createTextNode("Elemento 3");

elemento3.appendChild(texto);

var head = document.getElementById("head");
head.appendChild(elemento3);

// Tira o 4 e coloca o 6
var elemento6 = document.createElement('h3')
var texto2 = document.createTextNode('Elemento 6')
elemento6.appendChild(texto2)

var elemento4 = document.getElementById('elemento4')

var body = document.getElementById("body");
body.replaceChild(elemento6 , elemento4)

// Coloca o 0 antes do 6
var elemento0 = document.createElement('h5')
var texto3 = document.createTextNode('Elemento 0')
elemento0.appendChild(texto3)

body.insertBefore(elemento0 , elemento6)

