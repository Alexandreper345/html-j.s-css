function contar(){
    var i = document.getElementById("tabu")
    var res = document.getElementById("contagem")
    var val = Number(i.value)
    res.innerHTML = ''
    
    
    if (i.value.length == 0){
        alert('[error] digite um numero')


    } else {

        for(var valor = 0; valor < 11 ; valor++ ){
            var item = document.createElement('option')
            item.text = (`${val} x ${valor} = ${valor*val}`)
            res.appendChild(item)
    
        }
         
    }
}

