let num = document.getElementById("inicio")
let out = document.getElementById("outpu")
let res = document.getElementById("res")
let valores = []


function isnumero(n){
    if (Number(n) >= 1 && Number(n) <=100) {
        return true

    } else
    return false

}

function inlista(n , l){
    if (l.indexOf(Number(n)) != -1){
        return true

    } else {
        return false
    }

}

function adicionar(){
    if(isnumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value))
        item = document.createElement('option')
        item.text = `valor ${num.value} foi adicionado`
        out.appendChild(item)
    }else {
        window.alert('valor invalido ou já encontrado')
    }
    num.value = 1
    num.focus()

}

function finalizar(){
    if (valores.legth ==0) {
        alert('adicione valores antes de finalizar! ')


    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]

        }
        media = soma/ tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. <p>`
        res.innerHTML += `<p> o maior valor ${maior} <p>`
        res.innerHTML += `<p> o menor valor  ${menor}. <p>`
        res.innerHTML += `<p> somando os valores  ${soma}. <p>`
        res.innerHTML += `<p> a media dos valores  ${media}s. <p>`

    }

}









