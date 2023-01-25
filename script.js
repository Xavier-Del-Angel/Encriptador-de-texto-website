function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.querySelector(".containerMunheco").style.display = "none";
    document.querySelector(".texto").style.display = "none";
    document.querySelector(".textoDos").style.display = "none";
    document.getElementById("caja").innerHTML = txtCifrado;
    document.getElementById("caja").style.display = "show";
    document.getElementById("caja").style.display = "inherit";
    document.getElementById("msj").style.display = "show";
    document.getElementById("msj").style.display = "inherit";
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
    
}

function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.querySelector(".containerMunheco").style.display = "none";
    document.querySelector(".texto").style.display = "none";
    document.querySelector(".textoDos").style.display = "none";
    document.getElementById("caja").innerHTML = txtCifrado;
    document.getElementById("caja").style.display = "show";
    document.getElementById("caja").style.display = "inherit";
    document.getElementById("msj").style.display = "show";
    document.getElementById("msj").style.display = "inherit";
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#caja");
    contenido.select();
    document.execCommand("copy");
}