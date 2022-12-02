let time, h, m, s;
let carga=1000;
let siempre =true;
var datos=[];
var segundoDatos=[];


//Ponemos las listas vacías
function inicio(){
  document.getElementById("mostrarPilas").innerHTML = segundoDatos;
  document.getElementById("mostrarColas").innerHTML = datos;
}

//Esta función toma e imprime la hora en directo y la línea del final hace que se actualice
function hora() {
    tiempo = new Date();
    h = tiempo.getHours();
    m = tiempo.getMinutes();
    s = tiempo.getSeconds();
    if ( s < 10 ){
      s = "0" + s;
    }
    total=(h + ':' + m + ':' + s)
    document.getElementById("hora").innerHTML = total;
  }
setInterval(hora, 1000);

//Añadir Pila
function apila(){
  let valor=document.getElementById("anadir").value;
  segundoDatos.push(valor);
  document.getElementById("mostrarPilas").innerHTML = segundoDatos;
}
//Añadir Fila
function afila(){
  let valor=document.getElementById("anadirC").value;
  datos.push(valor);
  document.getElementById("mostrarColas").innerHTML = datos;
}

//Eliminar Pila
function epila(){
  segundoDatos.pop();
  document.getElementById("mostrarPilas").innerHTML = segundoDatos;
}
//Eliminar Fila
function efila(){
  datos.shift();
  document.getElementById("mostrarColas").innerHTML = datos;
}
