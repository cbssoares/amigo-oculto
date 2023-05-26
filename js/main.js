contador1 = 0
nome = []
nome2 = []
let amig = []
limite = 0
aviso = document.querySelector('.p-aviso')
aviso2 = document.querySelector('.aviso2')
nominp = document.querySelector('input#nomeinp')
formu = document.querySelector("#nomebot")
lista = document.querySelector('#namelist')
const itens = JSON.parse(sessionStorage.getItem("itens")) || [] 
contadorN = itens.length


itens.forEach( (itemchave) => {
    lista.innerHTML += `<li class = 'itemlista'> ${itemchave}  <input type='button' value='x' class ="remover ${itemchave}"> `
    document.querySelector('#main_info_num_pessoas').innerHTML = `${itens.length} Participantes `
    nome.push(itemchave)
})


function listaMaker(){
    const  itensInp = document.querySelectorAll('.remover')
    itensInp.forEach((element) => {
        const Inp = element.classList[1]
        element.addEventListener("click", function (){nomeRemover(Inp)})
            
    });
}

function nomeRemover(listaitem) {
    tirarI = nome.indexOf(listaitem)
    nome.splice(tirarI, 1)
    nome2.splice(tirarI, 1)
    loop = nome.length
    lista.innerHTML = ''
    for (contador2 = 0; contador2 < loop; contador2++){
        lista.innerHTML += `<li class ='itemlista'> ${nome[contador2]}  <input type='button' value='x' class ="remover ${nome[contador2]}"> `
       
    }
    
    listaMaker()

    sessionStorage.setItem("itens", JSON.stringify(nome))

    document.querySelector('#main_info_num_pessoas').innerHTML = `${loop} Participantes `

    contadorN--
}

listaMaker()



mainResul =  document.querySelector('.resultado').classList
mainPrinc = document.querySelector('.main_inicio').classList
mainInter = document.querySelector('.intermediaria').classList

nominp.addEventListener("click", function() {
    aviso.innerHTML = ''
    aviso2.innerHTML = ''
    
})

formu.addEventListener("submit", (evento) => {
    evento.preventDefault()

    if (nominp.value == ""){
        aviso.innerHTML = 'Nome Não inserido!'
    } else if (nome.indexOf(nominp.value) != -1) {
            aviso.innerHTML = 'Você já digitou esse nome!'
        } else{
        aviso.innerHTML = ''
        aviso2.innerHTML = ''
        nome[contadorN]= nominp.value
        nome2[contadorN] = nominp.value
        loop = nome.length

        sessionStorage.setItem("itens", JSON.stringify(nome))
       
        lista.innerHTML += `<li class = 'itemlista'> ${nome[contadorN]}  <input type='button' value='x' class ="remover ${nome[contadorN]}"> `
                
        listaMaker()
        
        contadorN++
    
        document.querySelector('#main_info_num_pessoas').innerHTML = `${loop} Participantes `
    }  
    nominp.value = ""   
})


    




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
            mainInter.add('invisivel') 
            clearInterval(intervalo)
            clearInterval(intervaloTimer)
        }
        setTimeout(function() {
            window.location.href = "resultado.html";
        }, 2500);
    } else{
        aviso2.innerHTML = ' Minimo de particpantes = 3'
    }
}






