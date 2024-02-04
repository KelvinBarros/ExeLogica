function porcentagem(){
    let total = document.getElementById('total')
    let branco = document.getElementById('branco')
    let nulo = document.getElementById('nulo')
    

    let tot = Number(total.value)
    let bra = Number(branco.value)
    let nul = Number(nulo.value)
    

    let r1= (bra/tot)*100
    let r2= (nul/tot)*100
    let r3= (tot-nul-bra)/100
    
    res.innerHTML = `O total de votos foram ${tot}.Validos:${r3}% Essas são as porcentagens: Brancos: ${r1}%, Nulos: ${r2}% `
}