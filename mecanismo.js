contador1 = 0
nome = []
nome2 = []
let amig = []
selectOp = document.querySelector('#opcoes')
mainResul =  document.querySelector('.resultado').classList
mainPrinc = document.querySelector('.main_inicio').classList

document.querySelector('input#nomeinp').addEventListener("keyup", function(e) {
    if (e.code === 'Enter'){
        document.querySelector('input#botao').click()
    }
})

function namesave(){
    nominp = document.querySelector('input#nomeinp')
    if (nominp.value == ""){
        window.alert('Nome Não inserido')
    } else {
        nome[contador1] = nominp.value
        nome2[contador1] = nomeinp.value
        lista = document.querySelector('#namelist')
        lista.innerHTML += `<li>${nome[contador1]}`
        selectOp.innerHTML += `<option value = '${nome[contador1]}'> ${nome[contador1]} </option>` 
        contador1++
        nominp.value = ""
        document.querySelector('#main_info_num_pessoas').innerHTML = `${contador1} Participantes `
    }
    
    loop = nome.length
}


/* function  roleta() {
    nome.sort(() => Math.random() - 0.5)
    for(contador1 = 0; contador1 < loop; contador1++){
        contador2 = contador1 + 1
        if(contador2 == loop){
            contador2 = 0
        }
        amig[contador1] = {rem:nome[contador1] , des: nome[contador2]}
    }      
} */


function telaResultado() {
    if (nome.length > 0){
        mainResul.remove('invisivel')
        mainPrinc.remove('visivel')
        mainResul.add('visivel') 
        mainPrinc.add('invisivel')
        nome.sort(() => Math.random() - 0.5)
        for(contador1 = 0; contador1 < loop; contador1++){
            contador2 = contador1 + 1
            if(contador2 == loop){
                contador2 = 0
            }
            amig[contador1] = {rem:nome[contador1] , des: nome[contador2]}
        }      
         
    } else{
        window.alert('Nenhum nome foi inserido')
    }
}

function voltarMain() {
    mainResul.remove('visivel')
    mainPrinc.remove('invisivel')
    mainResul.add('invisivel') 
    mainPrinc.add('visivel')
}

contador3 = 0

function mostrarResultado() {
    op = selectOp.value
    destinatario = amig.find (remname => remname.rem === op)
    if( contador3 > 0){
        document.querySelector('.resultado_amigo').innerHTML = ''
    }
    document.querySelector('.resultado_amigo').innerHTML += `${destinatario.des}`
    contador3++

}

function sumirResultado() {
    document.querySelector('.resultado_amigo').innerHTML = ''
    contador3 = 0
}