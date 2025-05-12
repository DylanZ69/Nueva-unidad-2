let personas = []





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

    let vlmNombre = validarLargoMinimo(eNombre,vNombre,eErrorNombre)
    let vlmApellido = validarLargoMinimo(eApellido,vApellido,eErrorApellido)
    if(vlmNombre == true && vlmApellido == true){
    let persona = {
        nombre : vNombre,
        apellido : vApellido
    }    
        personas.push(persona)
        eNombre.value = ""
        eApellido.value = ""
        console.log(personas)
        cargarTabla()
    }
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
        return true //funciona
    }
    else{
        console.log("error pocos caracteres")
        alert("Debes ingresar al menos 3 caracteres")
        eError.innerText = "Debes ingresar 3 caracteres como minimo"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return false //nofunciona
    }
}
function cargarTabla(){
    let tablaPersonas = document.getElementById("tablaPersonas")
    let personasMap = personas.map((p)=>{
        return "<tr><td>"+p.nombre+"</td>"+
                "<td>"+p.apellido+"</td></tr>"
    })
    console.log("Convirtiendo.....")
    console.log(personasMap)
    let personasStr = personasMap.join("")
    tablaPersonas.innerHTML = personasStr
}