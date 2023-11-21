function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date ()
    var hora = 19
    //var hora = data.getHours()
    msg.innerHTML=`Agora São ${hora} Horas`
    if(hora >=0 && hora < 12 ){
        img.src = 'fotodia.png'
        document.body.style.background = '#F3B28F'
    }
    else if(hora >= 12 && hora < 18){
        img.src = 'fototarde.png'
        document.body.style.background = '#5B8075'
    }
    else{
        img.src = 'fotonoite.png'
        document.body.style.background = '#3CA79A'
    }
}