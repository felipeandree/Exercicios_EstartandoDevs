function inverter(salve){
    let inverterSalve = ""
    for (let i = salve.length - 1; i >= 0; i--) {
        inverterSalve += salve[i]
    }
    return inverterSalve
}


console.log(inverter("salve"))



