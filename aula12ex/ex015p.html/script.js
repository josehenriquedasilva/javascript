function verificar() {
    var sexom = document.querySelector('input#sexom')
    var sexof = document.querySelector('input#sexof')
    var verif = document.querySelector('input#verificar')
    var img = document.querySelector('img#imagem')
    var nasc = document.querySelector('input#nas')
    var idade = Number(nasc.value)
    var info = document.querySelector('section#info')
    var res = 2024 - idade

switch (info) {
    case sexom:
        info.innerHTML = `Detectamos um Homem de ${res} anos!`
        break
    case sexof:
        info.innerHTML = `Detectamos uma Mulher de ${res} anos!`
}
}
