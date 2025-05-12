function validar(){
    console.log("Hi")
    let eNombre = document.getElementById("nombre")
    console.log(eNombre)
    let vNombre = eNombre.value.trim()
    console.log(vNombre)
    let eErrorNombre = document.getElementById("errorNombre")
    console.log(vNombre.length)
    let eApellido = document.getElementById("apellido")
    console.log(eApellido)
    let vApellido = eApellido.value.trim()
    console.log(vApellido)
    let eErrorApellido = document.getElementById("errorApellido")
    console.log(vApellido.length)

    validarLargoMinimo(eNombre,vNombre,eErrorNombre)
    validarLargoMinimo(eApellido,vApellido,eErrorApellido)
}
function validarLargoMinimo(elemento,valor,eError){
    if(valor.trim()==0){
        console.log("Debes completar este campo")
    }
    else if(valor.length >= 3){
        console.log("Cumple")
        eError.innerText=""
        elemento.style.backgroundColor = "green"
        elemento.style.color = "white"
    }
    else{
        console.log("error pocos caracteres")
        alert("Debes ingresar al menos 3 caracteres")
        eError.innerText = "Debes ingresar 3 caracteres como minimo"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
    }
}