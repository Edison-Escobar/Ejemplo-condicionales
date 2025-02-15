const montocompra = parseInt(prompt("Ingrese monto de la comora : "))
let montoResultante = 0

if(montocompra >= 100 && montocompra < 200){
    montoResultante = (montocompra - (montocompra * 0.10))
} else if(montocompra >= 200){
    montoResultante = (montocompra - (montocompra * 0.20))
} else {
    montoResultante = montocompra
}

alert("El monto a pagar es: " + montoResultante)