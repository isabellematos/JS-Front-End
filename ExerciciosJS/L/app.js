'use strict'

function calcular(){

    const a = parseFloat (document.getElementById('numero1').value)
    
    const resultado = document.getElementById('result')
    const diferencaForm = document.getElementById('diferenca-form')

    if (diferencaForm.reportValidity()){
    if (a >= 3 ){
        resultado.innerHTML = ' ';
    }else {
        resultado.innerHTML = 'Esse numero é menor que 3  ';
    }

    }
}

document.getElementById('calcular').addEventListener('click', calcular)