function calc(){
    let pro1= document.getElementById('pro1')
    let pro2= document.getElementById('pro2')

    let p1= Number(pro1.value)
    let p2= Number(pro2.value)

    let r= (p1+p2)/2

    if(r<7){
        res.innerHTML=`MÉDIA ${r}, REPROVADO. RECUPERAÇÃO FINAL DIA 30/02` 
    } else {
        res.innerHTML=`MÉDIA ${r}, APROVADO! PARABÉNS` 
    }
}