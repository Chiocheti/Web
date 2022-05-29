
var a = 'Gabriel ';
var b = 'Chiocheti';
var c = '10';
var d = '30';
var e = c / d;
var numeros = [10,20,30,40,50,60,70,80,90]

function alerta(){
    return window.alert('Hello Seus putos');
}

function Calcula( a , b){
    console.log( a + b);
}

function Printa(){
    console.log(numeros)
}

function adiciona( value ){
    numeros.push(value)
}

function retira(){
    numeros.pop()
}

function splice(){
    numeros.splice(2, 3 , [50 , 40 , 30])
}

function elemento(){
    var elemento = document.getElementById('Intro');
    console.log(elemento);
}

function PrintaPessoa(){
    var nome = document.getElementById('Nome')
    var idade = document.getElementById('Idade')

    console.log('Nome: ',nome.value)
    console.log('Idade: ',idade.value)
}

function AlteraHtml(){
    var altera = document.getElementById('altera')
    let vaiMudar = document.getElementById('h1')
    vaiMudar.innerHTML = altera.value
}