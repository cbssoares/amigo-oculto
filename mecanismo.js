contador1 = 0
document.querySelector('p#mainfooter').innerHTML = `${contador1} Participantes <input type="button" value="Conluido" id="proxeta" class="bota" onclick="mudarmain()">`
nome = []
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
    } else if(contador1 > 12){
        lista = document.querySelector('ul#namelist2')
        lista.innerHTML += `<li>${nome[contador1]}`
        contador1++
        nominp.value = ""
        document.querySelector('p#mainfooter').innerHTML = `${contador1} Participantes <input type="button" value="Conluido" id="proxeta" class="bota" onclick="mudarmain()">`
    }
    else{
        lista = document.querySelector('ul#namelist2')
        lista.innerHTML += `<li>${nome[contador1]}`
        contador1++
        nominp.value = ""
        document.querySelector('p#mainfooter').innerHTML = `${contador1} Participantes <input type="button" value="Conluido" id="proxeta" class="bota" onclick="mudarmain()">`

    }
}

function mudarmain(){
    window.alert('oi')
}