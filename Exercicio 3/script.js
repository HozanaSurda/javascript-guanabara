function funcao_contar(){
        let inicio = document.getElementById('txti') 
        let fim = document.getElementById('txtf') 
        let passo= document.getElementById('txtp') 
        let res = document.getElementById('res') 

        if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
            res.innerHTML = 'Impossivel Contar'
            window.alert('[ERROR] faltam dados!')
            
        }else{
            res.innerHTML = 'contador:'
            let i = Number(inicio.value)
            let f = Number(fim.value)
            let p = Number(passo.value)

            if(i < f){
                //contagem crescente
            for(let c = 1; c<=f;c += p){
                res.innerHTML +=` ${c} \u{1F604}`  
            }
                res.innerHTML += ` \u{1F3c1}`
        }else{
                //contagem regressiva
            for(let c = 1; c >= f ;c -= p ){
                res.innerHTML +=` ${c} \u{1F604}` 
                }
                res.innerHTML += ` \u{1F3c1}`
              
        } 
      }
}