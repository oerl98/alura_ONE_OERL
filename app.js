// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Challenge Amigo Secreto by OERL

//Variables globales
let listaNombreAmigo = [''];
let contador = 0;

function visualizarLista()
{
    // Obtener el elemento con ID listaAmigos
    let elementoHTML = document.getElementById('listaAmigos');
    
    // Limpiar el elemento
    elementoHTML.innerHTML = '';

    // Asignar el arreglo con la lista en el elemento de HTML
    for(var i = 0; i<listaNombreAmigo.length; i++)
    {
        elementoHTML.innerHTML += `<ul>${listaNombreAmigo[i]}</ul>`;
    }
}

function agregarAmigo()
{
    // Confirmar que el primer valor no esté vacío, en caso de que si, removerlo
    if(listaNombreAmigo[0]==='' || listaNombreAmigo == null){
        listaNombreAmigo.shift();
        contador++;
    }
    else{
        // Obtener el valor en caja de entrada
        let nombreAmigo = document.getElementById('amigo').value;
        console.log(nombreAmigo);   

        // Si se presiona el botón de agregar amigo y la caja está vacía, despliega alerta (contador es con el fin de no mostrar alerta la primera vez)
        if(nombreAmigo=='' && contador > 0)
        {
            alert('Ingrese un nombre')
            contador++;
            return;
        }   

        // Verificar que no se repita el nombre
        else if(listaNombreAmigo.includes(nombreAmigo))
        {
            alert('Ese amigo ya fue agregado')
            limpiarCaja();
            contador++;
            return;
        }

        // Agregar nombre a arreglo
        else
        {
            listaNombreAmigo.push(nombreAmigo);
            console.log(listaNombreAmigo);
            limpiarCaja();
            visualizarLista();
            contador++;
            return nombreAmigo;
        }
    }
}

function limpiarCaja()
{
    document.getElementById('amigo').value = '';
}

function sortearAmigo()
{
    // Verificar que el arreglo o lista de amigos contenga datos
    if(listaNombreAmigo.length === 0 || listaNombreAmigo[0] === '')
    {
        document.getElementById('resultado').innerHTML = '';
        alert("La lista está vacía");
    }
    else
    {
        // Obtener un valor random del tamaño del arreglo
        let numeroGenerado =  Math.floor(Math.random()*listaNombreAmigo.length);

        // Limpiar el elemento de listaAmigos para poner valores en un punto de reinicio
        document.getElementById('listaAmigos').innerHTML = '';
        
        // Nombre random asignado al elemento que despliega este valor
        document.getElementById('resultado').innerHTML = listaNombreAmigo[numeroGenerado];
        
        // Limpiar el arreglo para poner valores en un punto de reinicio
        listaNombreAmigo = [''];
        console.log(listaNombreAmigo);
    }
}

agregarAmigo();
