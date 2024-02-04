function calcular(){
    let sal = document.getElementById('sal')

    let s = Number(sal.value)

    let r = s*1.15
    let d = r-s
    res.innerHTML = `Confira o novo valor: R$${r}. Isso é R$${d} de diferença`
}