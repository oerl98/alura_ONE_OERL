// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombreAmigo = [''];
let contador = 0;

function visualizarLista()
{
    let elementoHTML = document.getElementById('listaAmigos');
    elementoHTML.innerHTML = '';
    for(var i = 0; i<listaNombreAmigo.length; i++)
    {
        elementoHTML.innerHTML += `<ul>${listaNombreAmigo[i]}</ul>`;
    }
}

function agregarAmigo()
{
    if(listaNombreAmigo[0]==='' || listaNombreAmigo == null){
        listaNombreAmigo.shift();
        contador++;
    }
    else{
        let nombreAmigo = document.getElementById('amigo').value;
        console.log(nombreAmigo);   
        if(nombreAmigo=='' && contador > 0)
        {
            alert('Ingrese un nombre')
            contador++;
            return;
        }   
        else if(listaNombreAmigo.includes(nombreAmigo))
        {
            alert('Ese amigo ya fue agregado')
            limpiarCaja();
            contador++;
            return;
        }
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
    if(listaNombreAmigo.length === 0 || listaNombreAmigo[0] === '')
    {
        document.getElementById('resultado').innerHTML = '';
        alert("La lista está vacía");
    }
    else
    {
        let numeroGenerado =  Math.floor(Math.random()*listaNombreAmigo.length);
        document.getElementById('listaAmigos').innerHTML = '';
        document.getElementById('resultado').innerHTML = listaNombreAmigo[numeroGenerado];
        listaNombreAmigo = [''];
        console.log(listaNombreAmigo);
    }
}

agregarAmigo();
