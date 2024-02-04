function calc(){
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')

    let a = Number(ano.value)
    let m = Number(mes.value)
    let d = Number(dia.value)
    
    let r= a*365 + m*30 + d

    res.innerHTML = r
}