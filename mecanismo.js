contador1 = 0
nome = []
nome2 = []
let amig = []
selectOp = document.querySelector('#opcoes')
mainResul =  document.querySelector('.resultado').classList
mainPrinc = document.querySelector('.main_inicio').classList
mainInter = document.querySelector('.intermediaria').classList

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
        nome2[contador1] = nominp.value
        loop = nome.length
        lista = document.querySelector('#namelist')
        lista.innerHTML += `<li> ${nome[contador1]}`
        contador1++
        nominp.value = ""
        document.querySelector('#main_info_num_pessoas').innerHTML = `${loop} Participantes `
    }
    
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

function telaInter() {
    if (nome.length > 2){
        mainInter.remove('invisivel')
        mainPrinc.remove('visivel')
        mainInter.add('visivel') 
        mainPrinc.add('invisivel')
        selectOp.innerHTML = ' <option value="1" disabled selected hidden>Selecione o Nome do Participante</option>'
        loop2 = nome2.length
        nome.sort(() => Math.random() - 0.5)
        for(contador1 = 0; contador1 < loop; contador1++){
            contador2 = contador1 + 1

            if(contador2 == loop){
                contador2 = 0
            }

            amig[contador1] = {rem:nome[contador1] , des: nome[contador2]}
            
        }
        for(contador1 = 0; contador1 < loop2; contador1++){
            selectOp.innerHTML += `<option value = '${nome2[contador1]}'> ${nome2[contador1]} </option>`
        }
        selectOp.value = '1'
        document.querySelector('.resultado_amigo').innerHTML = ''
        let intervalo = setInterval(telaResultado, 3000)

        function telaResultado() {
            mainInter.remove('visivel')
            mainResul.remove('invisivel')
            mainInter.add('invisivel') 
            mainResul.add('visivel')
            clearInterval(intervalo)
        }
        
    } else{
        window.alert('Quantidade de participantes insuficiente(min = 3)')
    }
}

function voltarMain() {
    mainResul.remove('visivel')
    mainPrinc.remove('invisivel')
    mainResul.add('invisivel') 
    mainPrinc.add('visivel')
}




function sumirResultado() {
    op = selectOp.value
    destinatario = amig.find (remname => remname.rem === op)
    document.querySelector('.resultado_amigo').innerHTML = ''
    document.querySelector('.resultado_amigo').innerHTML += `${destinatario.des}`
}