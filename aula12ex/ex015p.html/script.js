function verificar() {
    var verif = document.querySelector('input#verificar')
    var img = document.querySelector('img#imagem')
    var nasc = document.querySelector('input#nas')
    var idade = Number(nasc.value)
    var info = document.querySelector('section#info')
    var res = 2024 - idade
    if (nasc.value == 0 || (nasc.value > 2024)) {
        alert('ERRO')
    } else {
        var sex = document.getElementsByName('sexo')
        var gênero = ''
        if (sex[0].checked) {
            var gênero = 'Masculino'
        } else if (sex[1].checked) {
            var gênero = 'Feminino'
        }
        info.innerHTML = `Detectamos ${sex} de ${res}!`
    }
}
