    
function ingresar() {
    
  lp = "";
  for (i = 1; i <= document.getElementById('cantp').value; i++) {
    palabra = window.prompt("Introduce la palabra no. " + i);
    lp = lp + palabra + "\n";
  }
}

function imprimir() {
  document.getElementById("lp").value = lp;
}



