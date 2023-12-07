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
     if (fsex[0].checked){
      genero = 'Homem'
      if (idade >=0 && idade < 10){
        img.setAtribute('src', 'bbmenino.png')
      }
      else if (idade < 21){
        //jovem
      }
      else if (idade > 50){
        //adulto
      }
       else{
          //idoso
       }
      }
      
      else if(fsex[1].checked)
      genero = " mulher"
      if (idade >=0 && idade < 10){
        //criança
      }
      else if (idade < 21){
        //jovem
      }
      else if (idade > 50){
       // adulto
      }
       else{
          //idoso
       }
     }
     
   }
  res.innerHTML= `Detequitamos ${genero} de ${idade} anos.`
  res.style.textAlingn = 'center'
  res.appendChild(img)

