function calc() {
    let sal = document.getElementById('sal')
    let total = document.getElementById('total')
    

    let s = Number(sal.value)
    let tot = Number(total.value)
    


    let r= s+(tot*5/100)

    res.innerHTML = `Valor esperado: ${r}`
}