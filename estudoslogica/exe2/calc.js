function calcular(){
    let num1 = document.getElementById('base')
    let num2 = document.getElementById('altura')

    let n1 = Number(num1.value)
    let n2 = Number(num2.value)

    let r = n1*n2

    res.innerHTML= `A area do retangulo desejado é de ${r}`
}