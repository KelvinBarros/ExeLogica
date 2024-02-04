function calcular(){
    let num1 = document.getElementById('nota1')
    let num2 = document.getElementById('nota2')
    let num3 = document.getElementById('nota3')

    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let n3 = Number(num3.value)

    let media= (n1*2 + n2*3 + n3*5) /10

    res.innerHTML = `A média ponderada é ${media}`
}