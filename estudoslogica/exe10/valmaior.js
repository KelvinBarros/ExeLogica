function calc(){
    let val1= document.getElementById("val1")
    let val2= document.getElementById('val2')

    let v1 = Number(val1.value)
    let v2 = Number(val2.value)

    if(v1 < v2){
        res.innerHTML = `O valor ${v1} é MENOR que ${v2}`
    } else {
        res.innerHTML = `O valor ${v2} é MENOR que ${v1}`
    }
    if (v1==v2){
        res.innerHTML= 'Os valores são IGUAIS'
    }
}