function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if(fano.value.length == 0 || Number(fano.value) > ano){
     window.alert('[ERRO] Verifique Seus Dados')
   }
   else{
     var fsex = document.getElementsByName('radsex')
     var idade = ano - Number(fano.value)
     var genero = ''
     var img = document.createElement('img')
     img.setAttribute('id','foto')
     if (fsex[0].checked){
      genero = 'Homem'
      if (idade >=0 && idade < 10){
        img.setAttribute('src', 'bbmenino.png')
      }
      else if (idade < 21){
        img.setAttribute('src', 'jovemmenino.png')
      }
      else if (idade < 50){
        img.setAttribute('src','adultohomem.png')
      }
       else{
         img.setAttribute('src','idosohomem.png')
       }
      }
      
        else if(fsex[1].checked){
        genero = " Mulher"
      if (idade >=0 && idade < 10){
        img.setAttribute('src','bbmenina.png')
      }
      else if (idade < 21){
        img.setAttribute('src', 'jovemmenina.png')
      }
      else if (idade < 50){
       img.setAttribute('src', 'adultomulher.png')
      }
       else{
          img.setAttribute('src','idosamulher.png')
       }
     }
        }
      
     res.innerHTML= `Detequitamos ${genero} de ${idade} anos.`
     res.style.textAlign = 'center'
     res.appendChild(img)
    
   }


