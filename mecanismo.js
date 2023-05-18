contador1 = 0
nome = []
nome2 = []
let amig = []
limite = 0

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
        lista.innerHTML += `<li> ${nome[contador1]}  <input type='button' value='x' class ="remover ${nome[contador1]}"> `
        function listaMaker(){
            const  itensInp = document.querySelectorAll('.remover')
            function nomeNaLista(){
                const nomeInp = itensInp[contador2].classList[1]
                itensInp[contador2].addEventListener("click", function (){nomeRemover(nomeInp)})
            }
                
            for (contador2 = 0; contador2 < loop; contador2++){
                    nomeNaLista()
            }
        }
       listaMaker()
        
        function nomeRemover(listaitem) {
            tirarI = nome.indexOf(listaitem)
            nome.splice(tirarI, 1)
            nome2.splice(tirarI, 1)
            loop = nome.length
            lista.innerHTML = ''
            for (contador2 = 0; contador2 < loop; contador2++){
                lista.innerHTML += `<li> ${nome[contador2]}  <input type='button' value='x' class ="remover ${nome[contador2]}"> `
               
            }
            listaMaker()
            document.querySelector('#main_info_num_pessoas').innerHTML = `${loop} Participantes `
            contador1--
        }
        

        contador1++
    
        document.querySelector('#main_info_num_pessoas').innerHTML = `${loop} Participantes `
    }  
    nominp.value = ""   
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
        amig = []
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
        let intervalo = setInterval(telaResultado, 2500);
        let intervaloTimer = setInterval(timer, 400);
        function timer(){
            document.querySelector('.titulo-inter').innerHTML += '.';
            limite++
            if ( limite > 3) {
                document.querySelector('.titulo-inter').innerHTML = 'Sorteando'
                limite = 0
            }
        }
        timer()
        function telaResultado() {
            mainInter.remove('visivel')
            mainResul.remove('invisivel')
            mainInter.add('invisivel') 
            mainResul.add('visivel')
            clearInterval(intervalo)
            clearInterval(intervaloTimer)
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