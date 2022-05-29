function EditaTitulo(){
    var muda = document.getElementById('input')
    var titulo = document.getElementById('titulo');
    var text = document.getElementById('getText').value
    var color = document.getElementById('getCor').value
    var back = document.getElementById('getCorDeDunfo').value
    
    
    muda.value = (titulo)

    titulo.innerHTML = text;
    titulo.style.color = color;
    titulo.style.backgroundColor = back;

    Zera()
}

function Zera(){
    document.getElementById('input').value = ''
    document.getElementById('titulo').value = ''
    document.getElementById('getText').value = ''
    document.getElementById('getCor').value = ''
    document.getElementById('getCorDeDunfo').value = ''
}

function Maiusculo(){
    var nome = document.getElementById('pegarNome')
    nome.value = nome.value.toUpperCase();
}

function Minusculo(){

}

function MudaCss(){
    var h2 = document.getElementById('Clique')
    h2.style.backgroundColor = 'red'
    h2.style.color = 'green'
    h2.innerHTML = 'Agora Mudou'
}

function Atualizar(){
    var escreve = document.getElementById('escreve').value
    var serMudado = document.getElementById('muda')
    serMudado.setAttribute('value' , escreve)
}

function mouseOver(){
    var mouse = document.getElementById('mouse')
    mouse.setAttribute('class' , 'mouseOver')
}
function mouseOut(){
    var mouse = document.getElementById('mouse')
    mouse.setAttribute('class' , 'mouseOut')
}

