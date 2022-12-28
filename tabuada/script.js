function tabuada(){

    let numero = document.getElementById('txtnum') // pegando o numero digitado pelo usuario
    let tabuada = document.getElementById("tabuada") // pegando o select tabuada
    
    //se não for digitado um numero exibe um alerta de erro
    if (numero.value.length == 0){
       window.alert("Por favor, digite um numero!")
    }
    // se não é executado o programa
    else{
        let n = Number(numero.value) //tranforma o txt numero em inteiro
        tabuada.innerHTML = '' // limpa a tabuada

        //enquanto c for menor ou igual a 10 ele executa o que está no bloco e incrementa mais 1
        for (let c = 1; c <=10; c++ ){
           let item = document.createElement("option") // criando um elemnto option dentro do select tabuada
           item.text = `${n} X ${c} = ${n*c}` // texto que será exibido no option
           tabuada.appendChild(item) // para exibir
        }
    }
    
}