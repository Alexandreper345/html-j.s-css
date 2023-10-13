function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    
    if (fano.value.length == 0 || fano.value > ano) {

        window.alert(' [ERRO] verifique os dados e tente novamente! ')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
     
        
        if (fsex[0].checked) {
            
            genero = 'homem'
            if (idade >= 0 && idade <10){
                img.setAttribute('src','criança_H.png')

            } else if (idade <21 ){
                img.setAttribute('src','jovem_H.png')

            }else if (idade < 50){
                img.setAttribute('src','homem.png')

            } else {
                img.setAttribute('src','VELHO.png')
            }
        } else if (fsex[1].checked) { 
            
            genero = 'mulher'

            if (idade >=0 && idade <10){
                img.setAttribute('src','criança_M.png')

            } else if (idade <21 ){
                img.setAttribute('src','jovem_H.png')

            }else if (idade < 50){
                img.setAttribute('src','mulher.png')

            } else {
                img.setAttribute('src','VELHA.png')
            }

        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} ano de idade`
        res.appendChild(img)
    }

}