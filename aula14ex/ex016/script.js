function tabuada() {
    var n1 = document.querySelector('input#num')
    var num = Number(n1.value)
    var res = document.querySelector('textarea#tbd')

    for (num = num ; num >= 0 ;) {
        res.innerHTML = (`${num}`)
    }
}
