function Pessoa(nome, sobrenome , idade, olho){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.olho = olho
}

var pessoa2 = {
    nome : 'Nome' , 
    sobrenome : 'Sobrenome' , 
    idade : 'Idade', 
    olhos : 'Olhos',
    exibir:function(){

        var texto = ''

        for(var i in pessoa2){
            texto += pessoa2[i] + "<br>"
        }

        return texto
    }
}

function Submit(){
    var Nome = document.getElementById('Nome').value
    var Sobrenome = document.getElementById('Sobrenome').value
    var Idade = document.getElementById('Idade').value
    var Olhos = document.getElementById('Olhos').value
    
    pessoa2.nome = Nome , 
    pessoa2.sobrenome = Sobrenome , 
    pessoa2.idade = Idade, 
    pessoa2.olhos = Olhos   

    var ColaNome = document.getElementById('ColaNome')
    ColaNome.setAttribute('value' , pessoa2.nome)
    var ColaSobrenome = document.getElementById('ColaSobrenome')
    ColaSobrenome.setAttribute('value' , pessoa2.sobrenome)
    var ColaIdade = document.getElementById('ColaIdade')
    ColaIdade.setAttribute('value' , pessoa2.idade)
    var ColaOlhos = document.getElementById('ColaOlhos')
    ColaOlhos.setAttribute('value' , pessoa2.olhos)
    Printa()
};

function Printa(){
    
    var texto = pessoa2.exibir()
    var cola = document.getElementById('cola')
    cola.innerHTML = `Result: ${texto}`

}

function AddVar(){
    variavel = document.getElementById('nomeVariavel').value
    valor = document.getElementById('valorVariavel').value
    
    pessoa2[variavel] = valor;
    Printa()
}

function DeletaAlgo(){
    var itemDeletado = document.getElementById('deletavel').value
    delete pessoa2[itemDeletado]
    Printa()
}

function CadastraGente(){
    var nome = document.getElementById('CadastraNome').value
    var sobrenome = document.getElementById('CadastraSobrenome').value
    var idade = document.getElementById('CadastraIdade').value
    var olhos = document.getElementById('CadastraOlhos').value

    var indice = 0

    Pessoa[] pessoa = new Pessoa(nome, sobrenome , idade , olhos);
}