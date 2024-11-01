function contar() {
    var input1 = document.querySelector('input#ini')
    var input2 = document.querySelector('input#fim')
    var input3 = document.querySelector('input#pass')
    var res = document.querySelector('div#cont')
    var ini = Number(input1.value)
    var fim = Number(input2.value)
    var pass = Number(input3.value)
    res.innerHTML = ('Contando:<br>')
    
    if (ini == 0){
        res.innerHTML = ('Impossivel contar!!!')
    } else if (fim == 0) {
        res.innerHTML = ('Impossivel contar!!!')
    } else if (pass == 0) {
        alert('Passo inválido! Considerando PASSO 1')
        pass = (1)
        for (ini = ini ; ini <= fim ; ini += pass) {
            res.innerHTML += (`${ini}`)
        }
    } else if (ini > fim) {
        alert('Impossivel contar! Inicio não pode ser maior que Fim!')
        res.innerHTML = ('Impossivel contar!')
    } else {
        for (ini = ini ; ini <= fim ; ini += pass) {
            res.innerHTML += (`${ini}`)
        }
    }
}