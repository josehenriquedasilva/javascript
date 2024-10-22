function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value == 0 || fano.value > ano) {
        window.alert('Verifique os dados')
    }
}