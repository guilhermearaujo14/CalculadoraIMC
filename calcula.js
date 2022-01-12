 function pegaDados(){
     
    const peso = parseInt(document.getElementById('peso').value)
    const altura = parseInt(document.getElementById('altura').value)
   
    return {peso, altura}
}



function validar(peso, altura){
    if(isNaN(peso) || isNaN(altura)){
        return false
    }
    return true
}



function calcula(peso, altura){
    const alturaConvertida = altura / 100
    const imc = peso / (alturaConvertida * alturaConvertida)

    return imc
    console.log(imc)
}

function mostraMensagem(imc){
    const mensagem = document.getElementById('mostraMensagem');
    const containerMensagem = document.querySelector('.mensagem')
    containerMensagem.hidden = false;
    return mensagem.innerHTML =  `O IMC é ${imc.toFixed(3)}` 

}

function someMensagem(){
        const containerSumir = document.querySelector('.mensagem').hidden = true
}

async function imc(event){
    event.preventDefault();

    const {peso, altura } = pegaDados()

    const isValido =  validar(peso, altura)

    if(!isValido){
        console.log('[ERRO]')
        return
    }else{

    const imc = calcula(peso, altura)
 
    mostraMensagem(imc);

     setInterval( ()=>{
      someMensagem();    
    }, 10000)

}
}