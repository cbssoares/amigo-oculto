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
    if (nominp.value == ""){
        window.alert('Nome Não inserido')
    } else {
        nome[contador1] = nominp.value
        lista = document.querySelector('#namelist')
        lista.innerHTML += `<li>${nome[contador1]}`
        selectOp.innerHTML += `<option value = '${nome[contador1]}'> ${nome[contador1]} </option>`
        contador1++
        nominp.value = ""
        document.querySelector('#main_info_num_pessoas').innerHTML = `${contador1} Participantes `
    }
    
    
}

const randomName = nome => {
    if (nome.length > 1){
        let index = Math.floor(Math.random() * nome.length);
        sorteado = nome.splice(index, 1);
    } else {
        sorteado = nome[0]
    }
   
}


function telaResultado() {
    if (nome.length > 0){
        mainResul.remove('invisivel')
        mainPrinc.remove('visivel')
        mainResul.add('visivel') 
        mainPrinc.add('invisivel')
         
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

function sorteio() {
        op = selectOp.value
        chaveOp = nome.indexOf(op)
        if (nome.chaveOp == -1 || nome.length === 1){
            randomName(nome)
        } else {
            nome.splice(chaveOp,1)
            randomName(nome) 
            nome.push(op)
        }
       /*  if (sorteado == op) {
            nome.push(sorteado)
            randomName(nome)
        } */
    document.querySelector('.sorteado_container').innerHTML = `<p> Seu amigo oculto é ${sorteado}</p>`
}
