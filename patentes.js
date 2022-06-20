var patentes = [];

function registra_ingreso() {
    const milisegundos= Date.now();
    var fecha = new Date(milisegundos);
    var producto = {
        fechaIngreso: fecha.toLocaleString(),
        patente: document.getElementById("igpatente").value,
        fechaSalida: "--",
        montoTotal: 0,
        accion: ""
    };
    patentes.push(producto);
    mostrarPatente();
}
function mostrarPatente() {
    var tabla = document.getElementById("lista_patentes");
    tabla.innerHTML = "";
    var i=patentes.length;
    for (var i = 0; i != patentes.length; i++) {
        var fila = tabla.insertRow(i);
        var celdaFechaIngreso = fila.insertCell(0);
        var celdaPatente = fila.insertCell(1);
        var celdaFechaSalida = fila.insertCell(2);
        var celdaMontoTotal = fila.insertCell(3);
        var celdaAcción = fila.insertCell(4);
        celdaFechaIngreso.innerHTML = patentes[i].fechaIngreso;
        celdaPatente.innerHTML = patentes[i].patente;
        celdaFechaSalida.innerHTML = patentes[i].fechaSalida;
        celdaMontoTotal.innerHTML = patentes[i].montoTotal;
        celdaAcción.innerHTML =
          '<button class="btn btn-primary" onclick="salida('+i+')">Salida</button>';
    }
}
function salida(indice){//indice es posicion donde esta el boton en la tabla
    var milisegundos= Date.now();
    var fecha = new Date(milisegundos);
    for (var i = 0; i < patentes.length; i++) {
        if(i==indice){
          let celdasalida = document.getElementById("lista_patentes").rows[indice].cells;
          let celdamonto = document.getElementById("lista_patentes").rows[indice].cells;
          let celdaaccion = document.getElementById("lista_patentes").rows[indice].cells;
          celdasalida[2].innerHTML = fecha.toLocaleString();
          celdamonto[3].innerHTML = "500";
          celdaaccion[4].innerHTML = "Salio";
        }
    }
}
