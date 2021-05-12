function verificar(){
    var data = new Date ()
    var ano = data.getFullYear()
    var fano =  document.getElementById ('txtano') 
    var res =  document.querySelector ('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os Dados e Tente Novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero ='Homem'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'Imagem/menino 8 anos.jpeg')
            }else if( idade < 21){
                //Jovem
                img.setAttribute('src', 'Imagem/menino 19 anos.jpeg')
            }else if( idade < 50){
                //Adulto
                img.setAttribute('src', 'Imagem/homem 40 anos.jpeg')
            }else{
                //Idoso
                img.setAttribute('src', 'Imagem/velho 86 anos.jpeg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'Imagem/4 anos.jpeg')
            }else if( idade < 21){
                //Jovem
                img.setAttribute('src', 'Imagem/menina 17 anos.jpeg')
            }else if( idade < 50){
                //Adulto
                img.setAttribute('src', 'Imagem/mulher 37 anos.jpeg')
            }else{
                //Idoso
                img.setAttribute('src', 'Imagem/velha 90 anos.jpeg')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos` 
        res.appendChild(img)
    }

}