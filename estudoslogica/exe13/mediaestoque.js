function calcular(){
    let esto = document.getElementById("esto")
    let max = document.getElementById("max")
    let min = document.getElementById("min")

    let est= Number(esto.value)
    let ma= Number(max.value)
    let mi= Number(min.value)

    let media = (mi+ma)/2

    if(est <= media){
        res.innerHTML= 'Precisa repor estoque! Compre mais produtos'
    } else {
        res.innerHTML= 'Estoque não precisa de reposição!'
    }
}