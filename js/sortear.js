selectOp = document.querySelector('#opcoes')


function sortear(){
    const nomeGuardado = JSON.parse(sessionStorage.getItem("itens")) || [] 
    const nomeGuardado2 = JSON.parse(sessionStorage.getItem("itens")) || []
    selectOp.innerHTML = ' <option value="1" disabled selected hidden>Selecione o Nome do Participante</option>'
    loop2 = nomeGuardado2.length
    loop = nomeGuardado.length
    amig = []
    nomeGuardado.sort(() => Math.random() - 0.5) 
    for(contador1 = 0; contador1 < loop; contador1++){
        contador2 = contador1 + 1

        if(contador2 == loop){
        contador2 = 0
        }

        amig[contador1] = {rem:nomeGuardado[contador1] , des: nomeGuardado[contador2]}
    
    }
    for(contador1 = 0; contador1 < loop2; contador1++){
        selectOp.innerHTML += `<option value = '${nomeGuardado2[contador1]}'> ${nomeGuardado2[contador1]} </option>`
    }
    selectOp.value = '1'
    document.querySelector('.resultado_amigo').innerHTML = ''

}

 sortear()


function sumirResultado() {
    op = selectOp.value
    destinatario = amig.find (remname => remname.rem === op)
    document.querySelector('.resultado_amigo').innerHTML = ''
    document.querySelector('.resultado_amigo').innerHTML += `${destinatario.des}`
}
