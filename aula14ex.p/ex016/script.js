function contar() {
    var input1 = document.querySelector('input#ini')
    var input2 = document.querySelector('input#fim')
    var input3 = document.querySelector('input#pass')
    var res = document.querySelector('div#cont')
    var ini = Number(input1.value)
    var fim = Number(input2.value)
    var pass = Number(input3.value)
    
    if (ini == 0 || fim == 0){
        res.innerHTML = ('Impossivel contar! <br> Verifique os dados.')
    } else {
        res.innerHTML = ('Contando: <br>')
        if (pass == 0) {
            alert('Passo inválido! Considerando PASSO 1')
            pass = 1
        } if (ini > fim) {
            //Contagem crescente.
            for (ini = ini; ini >= fim; ini -= pass) {
                res.innerHTML += (`${ini} \u{1F449} `)
            }
        } else {
            //Contagem regressiva.
            for (ini = ini ; ini <= fim ; ini += pass) {
                res.innerHTML += (`${ini} \u{1F449} `)
            }
        }
        res.innerHTML += (`\u{1F3C1}`)
    }
}