function calcular(){
    let conta = document.getElementById('nconta').value
    let saldo = document.getElementById('saldo').value
    let gasto = document.getElementById('gastos').value
    let entra = document.getElementById('entrada').value

    let total = parseInt(saldo)-parseInt(gasto) + parseInt(entra)
   
    if(conta <= 0){
        alert('Campo não preenchido corretamente')
    } else{
        res.innerHTML= `Esse é o saldo final da sua conta ${total}`
    }


    if(total <= 0){
        res2.innerHTML= 'Seu saldo esta negativo'
    } else {
        res2.innerHTML= 'Seu saldo esta positivo!'
    }
}