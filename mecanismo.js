contador1 = 0
document.querySelector('p#mainfooter').innerHTML = `${contador1} Participantes`
nome = []
selectOp = document.querySelector('#opcoes')
mainResul =  document.querySelector('.main_resultado').classList
mainPrinc = document.querySelector('.principal').classList
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
        lista = document.querySelector('ul#namelist1')
        lista.innerHTML += `<li>${nome[contador1]}`
        selectOp.innerHTML += `<option> ${nome[contador1]} </option>`
        contador1++
        nominp.value = ""
        document.querySelector('p#mainfooter').innerHTML = `${contador1} Participantes `
    }
    
    
}

function mudarmain(){
    mainResul.remove('invisivel')
    mainPrinc.remove('visivel')
    mainResul.add('visivel') 
    mainPrinc.add('invisivel')
}