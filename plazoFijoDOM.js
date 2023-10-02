
//declaracion de la clase que creara un objeto cada vez que se simule un PF,
// a excepcion que el DNI sea el mismo ya ingresado

class Usuario{

    constructor( nombre , DNI, montoPF, diasPF, interesPF, totalCobroPF){
        this.nombre = nombre;
        this.DNI = DNI;
        this.montoPF = montoPF;
        this.diasPF = diasPF;
        this.interesPF = interesPF;
        this.totalCobroPF = totalCobroPF;
    }

    get_datos(){
        let parrafoPF = document.getElementById("resultadoPF");
    
        parrafoPF.innerText= `<--SIMULACION DE PLAZO FIJO-->
                Nombre: ${this.nombre}
                DNI: ${this.DNI}
                Monto de plazo fijo a simular: ${this.montoPF}
                Días de plazo fijo a simular: ${this.diasPF}
                Monto del interés generado sería: ${this.interesPF}
                Total a cobrar sería: ${this.totalCobroPF}`
    }
}

//seccion simular un PF
//evenhandler del boton calcular
let arregloPF = [];

function calcularPF(){
    let nombre = document.getElementById("nombreUsuario").value;
    let DNI = document.getElementById("DNIUsuario").value;
    
    // Comprobar si el DNI ya ha sido utilizado en una simulación previa
    let dniDuplicado = arregloPF.some(usuario => usuario.DNI === DNI);
    
    if (dniDuplicado) {
        let parrafoPF = document.getElementById("resultadoPF");
            parrafoPF.innerText= `<--NO ES POSIBLE REALIZAR UNA SIMULACION DE PLAZO FIJO-->
                El DNI ingresado ya fue utilizado en una 
                simulación previa.`
        return;   
    }
    
    let montoPF = document.getElementById("montoPF").value > 0 ? document.getElementById("montoPF").value : 0 ;
    let diasPF = document.querySelector('input[name="plazo"]:checked').value;

    let interesPF =0;
    let totalCobroPF = 0;
    
    if(diasPF ==30){
        interesPF = parseInt(montoPF * 0.0983);
    }
    else if(diasPF ==60){
        interesPF = parseInt(montoPF * 0.1966);
    }
    else if(diasPF ==90){
        interesPF = parseInt(montoPF * 0.2949);
    }
    else if(diasPF ==365){
        interesPF = parseInt(montoPF * 1.18);
    }
    
    totalCobroPF = parseInt((Number(montoPF) + Number(interesPF)))
    let usuario = new Usuario(nombre, DNI, montoPF, diasPF, interesPF, totalCobroPF);
    arregloPF.push(usuario);

    for( let usuario of arregloPF ){
        usuario.get_datos();
    }

    let arregloPFJson = JSON.stringify(arregloPF);
    localStorage.setItem("arrUsuarios", arregloPFJson);

    document.getElementById("nombreUsuario").value = "";
    document.getElementById("DNIUsuario").value ="";
    document.getElementById("montoPF").value ="";
}

//evento btn calcular
let btnCalcular = document.getElementById("botonPF");

btnCalcular.addEventListener("click", calcularPF)

//BUSCADOR DE PF SEGUN DNI

function buscadorPF (){

    let arr = localStorage.getItem("arrUsuarios");
    arr = JSON.parse (arr);
    
    let DNIIngresado = document.getElementById("buscadorDNIUsuario").value;
    let parrafoBuscadorPF = document.getElementById("parrafoBuscadorPF");

    let usuarioEncontrado = arr.find(usuario => usuario.DNI === DNIIngresado); 

    if (usuarioEncontrado) {
        parrafoBuscadorPF.innerText= `<--DATOS ENCONTRADOS-->
                Nombre: ${usuarioEncontrado.nombre}
                DNI: ${usuarioEncontrado.DNI}
                Monto de plazo fijo a simular: ${usuarioEncontrado.montoPF}
                Días de plazo fijo a simular: ${usuarioEncontrado.diasPF}
                Monto del interés generado sería: ${usuarioEncontrado.interesPF}
                Total a cobrar sería: ${usuarioEncontrado.totalCobroPF}`
    }
    else {
            parrafoBuscadorPF.innerText= `No se encuentra registro de un plazo fijo simulado
                                con el DNI ${DNIIngresado}`;
    }
    

}

//evento boton Buscar
let btnBuscarPF = document.getElementById("botonBuscarPF");
btnBuscarPF.addEventListener("click", buscadorPF)
