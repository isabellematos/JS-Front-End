'use strict'

function calcularEquacao(){ 

    const a = parseFloat (document.getElementById('numero1').value)
    const b = parseFloat (document.getElementById('numero2').value)
    const c = parseFloat (document.getElementById('numero3').value)
    const resultado = document.getElementById('result')
    const mediaForm = document.getElementById('media-form')
    var delta = (b*b) - 4*a*c;

    if (mediaForm.reportValidity()){
    if (delta > 0 ){
    let raiz1 = (-b + Math.sqrt(delta) )/(2*a);
    let raiz2 = (-b - Math.sqrt(delta) )/(2*a);

     resultado.innerHTML = "Raiz 1: " + raiz1 + " " +"Raiz 2: " + raiz2;
    }else {
        if (delta==0){
            let raiz = (-b + Math.sqrt(delta) )/(2*a);
            resultado.innerHTML="Raiz dupla: " + raiz;
           }else{
           let real = (-b)/(2*a);
           let img1  = Math.sqrt(-delta)/(2*a);
           let img2  = - Math.sqrt(-delta)/(2*a);
   
            resultado.innerHTML = "Raiz 1: " + real + "+" + img1+"i"+" " +
                "Raiz 2: " + real + "+" + img2+"i"
           }
        }
    }
}

document.getElementById('calcular').addEventListener('click', calcularEquacao)