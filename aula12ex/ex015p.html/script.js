function verificar() {
    var img = document.querySelector('img#imagem')
    var nasc = document.querySelector('input#nas')
    var idade = Number(nasc.value)
    var info = document.querySelector('section#info')
    var res = 2024 - idade
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (nasc.value == 0 || (nasc.value > 2024)) {
        alert('ERRO')
    }  else {
        var sex = document.getElementsByName('sexo')
        var gênero = ''
        if (sex[0].checked) {
            gênero = 'Homem'
            if (res >= 0 && res < 10) {
                img.setAttribute('src', 'homem-crianca.jpg')
            } else if (res < 25) {
                img.setAttribute('src', 'homem-jovem.webp')
            } else if (res < 45) {
                img.setAttribute('src', 'homem-adulto.jpeg')
            } else {
                img.setAttribute('src', 'homem-idoso.jpeg')
            }
        } else if (sex[1].checked) {
            gênero = 'Mulher'
            if (res >= 0 && res < 10) {
                img.setAttribute('src', 'mulher-criança.jpg')
            } else if (res < 25) {
                img.setAttribute('src', 'mulher-jovem.webp')
            } else if (res < 45) {
                img.setAttribute('src', 'mulher-adulta.jpeg')
            } else {
                img.setAttribute('src', 'mulher-idosa.webp')
            }
        }
    }
    info.style.textAlign = 'center'
    info.innerHTML = `<p>Detectamos ${gênero} de ${res} anos!</p>`
    info.appendChild(img)
}
