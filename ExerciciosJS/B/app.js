'use strict'

function verificar(){

    const n = parseFloat (document.getElementById('numero1').value)
    const resultado = document.getElementById('result')
    const verificaForm = document.getElementById('verifica-form')
    let verificacao;


    if (verificaForm.reportValidity()){
    if (n < 0){
        verificacao = n*-1
    }else{
        verificacao = n
    }

    resultado.innerHTML = verificacao
    }
}

document.getElementById('calcular').addEventListener('click', verificar)