'use strict'

function calcularDiferenca(){

    const a = parseFloat (document.getElementById('numero1').value)
    const b = parseFloat (document.getElementById('numero2').value)
    const resultado = document.getElementById('result')
    const diferencaForm = document.getElementById('diferenca-form')
    let conta;


    if (diferencaForm.reportValidity()){
    if (a > b){
     conta = a - b
    }else if (b > a){
     conta = b - a
    }

    resultado.innerHTML = 'a diferenca do maior numero pelo menor e igual a ' + conta
    }
}

document.getElementById('calcular').addEventListener('click', calcularDiferenca)