function calcular(){
    let num1= document.getElementById("n1")
    let num2= document.getElementById("n2")
    let num3= document.getElementById("n3")

    let n1= Number(num1.value)
    let n2= Number(num2.value)
    let n3= Number(num3.value)

    if(n1 > n2 && n1 > n3){
        res.innerHTML=`${n1}, ${n2},${n3}`
    } if(n2 > n1 && n2 > n3){
        res.innerHTML=`${n2}, ${n1},${n3}`
    } if(n3 > n1 && n3 > n2){
        res.innerHTML=`${n3}, ${n2},${n3}`
    }
}