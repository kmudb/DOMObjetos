var biblioteca = new Array();

function Guardar(){
    //creación de objetos
    var libro = new Object();
    libro.isbn=document.getElementById('txtisbn').value;
    libro.nombre=document.getElementById('txttitulo').value;
    libro.autor=document.getElementById('txtautor').value;
    libro.genero=document.getElementById('txtgenero').value;

    biblioteca.push(libro);
    mostrardatos();
}

function limpiar_filas(){
    document.getElementById("divejemplo").innerHTML="";
 }

function crearfilatabla(d1,d2,d3,d4){
    tabla = document.createElement('table');
    tabla.id="datos";
    document.getElementById('divejemplo').appendChild(tabla);
    
    var table = document.getElementById("datos");
    tableRows = table.getElementsByTagName('tr');
    numerofilas = tableRows.length;
// Crea un <tr> vacio en la primera posicion de la tabla
var row = table.insertRow(numerofilas);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);

// agregar texto en las celdas:
cell1.innerHTML = d1;
cell2.innerHTML = d2;
cell3.innerHTML = d3;
cell4.innerHTML = d4;
}

function mostrardatos(){
    limpiar_filas();
    for(var datos in biblioteca){
        crearfilatabla(biblioteca[datos].isbn,biblioteca[datos].nombre,biblioteca[datos].autor,biblioteca[datos].genero);
    }
}