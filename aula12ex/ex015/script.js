function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value == 0 || Number(fano.value) > ano) {
        window.alert('{ERRO} Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'homem-crianca.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'homem-jovem.webp')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem-adulto.jpeg')
            } else {
                //Idoso
                img.setAttribute('src', 'homem-idoso.jpeg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'mulher-criança.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'mulher-jovem.webp')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher-adulta.jpeg')
            } else {
                //Idoso
                img.setAttribute('src', 'mulher-idosa.webp')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${gênero} de ${idade} anos.</p>`
        res.appendChild(img)
    }
}