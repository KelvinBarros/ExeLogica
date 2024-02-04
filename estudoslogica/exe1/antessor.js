function ante() {
    let num = document.getElementById('txt1')
    let n = Number(num.value)

    let s = n - 1

    res.innerHTML = `o antecessor de ${n} é o numero ${s}`

} 