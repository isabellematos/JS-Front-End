'use strict'

function calcularMedia(){

    const n1 = parseFloat (document.getElementById('numero1').value)
    const n2 = parseFloat (document.getElementById('numero2').value)
    const n3 = parseFloat (document.getElementById('numero3').value)
    const n4 = parseFloat (document.getElementById('numero4').value)
    let exame;
    const resultado = document.getElementById('result')
    const mediaForm = document.getElementById('media-form')
    let status;
    let valorMedia = ((n1 + n2 + n3 + n4)/4)


    if (mediaForm.reportValidity()){
    if (valorMedia >= 5 ){
     status = 'Aprovado'
    }else {
         exame = parseFloat(prompt('Voce ficou abaixo da media e deve fazer o exame'));
            valorMedia = (valorMedia + exame) /2;
         if (valorMedia >= 5){
            status ='Aprovado em exame'
        }else{
            status = 'Reprovado'
        }
    }

        resultado.innerHTML = 'O estudante esta: ' + status
    }
}

document.getElementById('calcular').addEventListener('click', calcularMedia)