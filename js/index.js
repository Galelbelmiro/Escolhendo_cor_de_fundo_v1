
let input_de_cores_1 = document.querySelector('#cor_escolhida_1');

input_de_cores_1.addEventListener('blur', trocarCor)

function trocarCor(){

    let cores = new Object()
    cores.cor_1 = input_de_cores_1.value,
   
    console.log('Houve troca de cor de fundo')

    document.body.style.background = cores.cor_1;


 }