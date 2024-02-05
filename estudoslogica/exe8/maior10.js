function calc(){
    let num = document.getElementById("num")

    let n= Number(num.value)

    if(n >10){
        res.innerHTML = 'Esse numero é maior que 10!'
    } else{
        res.innerHTML = 'Esse numero é menor que 10!'
    }
    if(n==10){
        res.innerHTML = 'Esse numero é 10!'
    }
}