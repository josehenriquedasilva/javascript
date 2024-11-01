function tabuada() {
    var n1 = document.querySelector('input#num')
    var num = Number(n1.value) 
    var n2 = 1
    var res = document.querySelector('p#res')
    var info = document.querySelector('p#info')
    var p = document.createElement('p')
    if (n1.value.length == 0) {
        alert("[ERRO] Digite um número!")
    } else {
        for (n2 = n2 ; n2 <= 10 ; n2++) {
            info.innerHTML = ('<strong>Tabuada:</strong>')
            res.innerHTML += (`${num} x ${n2} = ${num * n2} <br>`)
            res.style.border = '1px solid'
            res.style.padding = '10px'
            res.style.width = '120px'
            
        } 
    } 
}

