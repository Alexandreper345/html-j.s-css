var agora = new Date()
var horario = agora.getHours()

if ( horario < 12 ){
    console.log('BOM DIA MEU AMIGO')
} else if (horario <= 18){
    console.log('BOA TARDE MEU AMIGO')

}else{  
    console.log('BOA NOITE MEU AMIGO')

}