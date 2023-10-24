function contar(){
    inicio = document.getElementById("inicio")
    fim = document.getElementById("fim")
    passos =document.getElementById("passos")
    res = document.getElementById("contagem")

    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
        alert("[error] algum campo vazio. preencha tudo corretamente")
    }else {
        res.innerHTML = "contando: <br> "
        i = Number(inicio.value)
        f = Number(fim.value)
        p = Number(passos.value)

        if (p <= 0){
            alert("[error] passo invalido ! considerando passo 1")
            p = 1

        }

        if (i < f){
            for (var c =i; c <= f; c+= p){
    
                res.innerHTML += ` ${c} \u{1f449}`
    
        } 
        }else {
            for (var c =i; c >= f; c -= p){
    
                res.innerHTML += ` ${c} \u{1f449}`
                }  
            res.innerHTML +=`\u{1f3C1}`
    
            }
        

    }
       
}