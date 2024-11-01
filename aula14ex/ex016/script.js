function tabuada() {
    var n1 = document.querySelector('input#num')
    var num = Number(n1.value)
    var res = document.querySelector('textarea#tbd')

    for (num = num ; num >= 0 ;) {
        res.innerHTML = (`${num}`)
    }
}

var n = 1

for (n = 1 ; n >= 0 ; n * n) {
    console.log(n)
    n*n
}