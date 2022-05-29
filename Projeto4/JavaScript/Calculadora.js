var valor1 = 0;
var valor2 = 0;
var troca = false
var funcao = 'AindaNd'
var result = 0

function Printa(){
    console.log(`valor1 = ${valor1} , valor2 = ${valor2}`)
    console.log(`Sinal = ${funcao} || Troca = ${troca} || Resultado = ${result}`)
}

function FormarNumero(numero)
{
    if(troca){
        valor2 = valor2 * 10 + numero
        console.log(`Valor2`)
        console.log(`Digito: ${numero}`)
        Printa()
        cabeca = document.getElementById('head').value = valor2
    }
    else{
        valor1 = valor1 * 10 + numero
        console.log(`Valor1`)
        console.log(`Digito: ${numero}`)
        Printa()
        cabeca = document.getElementById('head').value = valor1
    }
}

function Soma()
{
    troca = true
    funcao = '+'
    Printa()
}
function Subtrai()
{
    troca = true
    funcao = '-'
    Printa()
}
function Vezes()
{
    troca = true
    funcao = '*'
    Printa()
}
function Dividi()
{
    troca = true
    funcao = '/'
    Printa()
}

function Resultado(){
    Printa()
    switch(funcao){
        case '+':
            result = valor1 + valor2
        break;
        case '-':
            result = valor1 - valor2
        break;
        case '*':
            result = valor1 * valor2
        break;
        case '/':
            result = valor1 / valor2
        break;
    }
    cabeca = document.getElementById('head').value = result
    valor1 = result
    valor2 = 0
    Printa()
}

