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
      if (idade >=0 && < 10){
        criança
      }
      else if (idade < 21)
      }
     }
     else if(fsex[1].checked)
     genero = " mulher"
   }
  res.innerHTML= `Detequitamos ${genero} de ${idade} anos.`
  res.style.textAlingn = 'center'
}
