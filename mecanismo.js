contador1 = 0
nome = []
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
    nome[contador1] = nominp.value
    if (nominp.value == ''){
        window.alert('Nome Não inserido')
    } else {
        nome[contador1] = nominp.value
        lista = document.querySelector('#namelist')
        lista.innerHTML += `<li>${nome[contador1]}`
        selectOp.innerHTML += `<option> ${nome[contador1]} </option>`
        contador1++
        nominp.value = ""
        document.querySelector('#main_info_num_pessoas').innerHTML = `${contador1} Participantes `
    }
    
    
}

function mudarmain(){
    if (nome.length > 0){
        mainResul.remove('invisivel')
        mainPrinc.remove('visivel')
        mainResul.add('visivel') 
        mainPrinc.add('invisivel')
    } else{
        window.alert('Nenhum nome foi inserido')
    }
}