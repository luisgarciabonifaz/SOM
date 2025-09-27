const rosco = document.querySelector('.rosco');
const pregunta = document.getElementById('pregunta');
const respuesta = document.getElementById('respuesta');
const submit = document.getElementById('submit');
const aciertos = document.getElementById('aciertos');
const fallos = document.getElementById('fallos');

const preguntas = [
    { letra: 'A', pregunta: 'Estándar de codificación de caracteres obsoleto, predecesor de Unicode.', respuesta: 'ASCII' },
    { letra: 'B', pregunta: 'Caminos por los que se transmite la información entre los componentes del sistema.', respuesta: 'Buses' },
    { letra: 'C', pregunta: '"Cerebro" del ordenador, encargado de ejecutar las instrucciones de los programas.', respuesta: 'CPU' },
    { letra: 'D', pregunta: 'Software que permite al sistema operativo comunicarse y controlar un hardware específico.', respuesta: 'Driver' },
    { letra: 'E', pregunta: 'Uno de los estados de un proceso, en el que el procesador está ejecutando las instrucciones del proceso.', respuesta: 'Ejecución' },
    { letra: 'F', pregunta: 'Sistema de archivos compatible con casi todos los sistemas operativos, pero con limitaciones de tamaño de archivo.', respuesta: 'FAT32' },
    { letra: 'G', pregunta: 'Conjunto de usuarios que tienen los mismos permisos sobre un archivo/directorio.', respuesta: 'Grupo' },
    { letra: 'H', pregunta: 'Parte física y tangible de un sistema informático.', respuesta: 'Hardware' },
    { letra: 'I', pregunta: 'Comunicación entre procesos.', respuesta: 'IPC' },
    { letra: 'J', pregunta: 'Técnica que utilizan los sistemas de archivos modernos para ser más fiables.', respuesta: 'Journaling' },
    { letra: 'L', pregunta: 'Permiso que permite ver el contenido de un archivo.', respuesta: 'Lectura' },
    { letra: 'M', pregunta: 'Almacenamiento temporal y volátil que guarda los datos y programas que se están usando activamente.', respuesta: 'Memoria RAM' },
    { letra: 'N', pregunta: 'Sistema de archivos predeterminado y más avanzado para Windows.', respuesta: 'NTFS' },
    { letra: 'O', pregunta: 'Atributo de archivo que hace que no se muestre por defecto en el explorador de archivos.', respuesta: 'Oculto' },
    { letra: 'P', pregunta: 'Instancia de un programa en ejecución.', respuesta: 'Proceso' },
    { letra: 'Q', pregunta: 'Contiene la Q. Organización de las diferentes partes de un S.O para que trabajen juntas.', respuesta: 'Arquitectura' },
    { letra: 'R', pregunta: 'Directorio principal, el punto de partida de toda la estructura de archivos.', respuesta: 'Raíz' },
    { letra: 'S', pregunta: 'Parte lógica e intangible del sistema, compuesta por programas, datos e instrucciones.', respuesta: 'Software' },
    { letra: 'T', pregunta: 'Estado de un proceso en el que ha completado su ejecución.', respuesta: 'Terminado' },
    { letra: 'U', pregunta: 'Estándar de codificación de caracteres que busca codificar prácticamente todos los caracteres de todos los idiomas del mundo.', respuesta: 'Unicode' },
    { letra: 'V', pregunta: 'Arquitectura de la mayoría de los ordenadores actuales.', respuesta: 'Von Neumann' },
    { letra: 'W', pregunta: 'Permiso que permite modificar el contenido de un archivo.', respuesta: 'Write' },
    { letra: 'X', pregunta: 'Permiso que permite ejecutar un archivo.', respuesta: 'Execute' },
    { letra: 'Y', pregunta: 'Contiene la Y. Atributo de archivo que indica que es un archivo o directorio crítico para el funcionamiento del sistema operativo.', respuesta: 'System' },
    { letra: 'Z', pregunta: 'Contiene la Z. Permite que los usuarios interactúen con el sistema, puede ser GUI o CLI..', respuesta: 'Interfaz' },
];

let preguntaActual = 0;
let aciertosCount = 0;
let fallosCount = 0;

function mostrarPregunta() {
    if (preguntaActual < preguntas.length) {
        pregunta.textContent = `Con la ${preguntas[preguntaActual].letra}: ${preguntas[preguntaActual].pregunta}`;
    } else {
        pregunta.textContent = '¡Juego terminado!';
        respuesta.style.display = 'none';
        submit.style.display = 'none';
    }
}

function crearRosco() {
    preguntas.forEach(p => {
        const letraDiv = document.createElement('div');
        letraDiv.classList.add('letra');
        letraDiv.textContent = p.letra;
        letraDiv.id = `letra-${p.letra}`;
        rosco.appendChild(letraDiv);
    });
}

submit.addEventListener('click', () => {
    const respuestaUsuario = respuesta.value.trim().toLowerCase();
    const respuestaCorrecta = preguntas[preguntaActual].respuesta.toLowerCase();
    const letraDiv = document.getElementById(`letra-${preguntas[preguntaActual].letra}`);

    if (respuestaUsuario === respuestaCorrecta) {
        aciertosCount++;
        aciertos.textContent = aciertosCount;
        letraDiv.style.backgroundColor = 'blue';
    } else {
        fallosCount++;
        fallos.textContent = fallosCount;
        letraDiv.style.backgroundColor = 'red';
    }

    preguntaActual++;
    respuesta.value = '';
    mostrarPregunta();
});

crearRosco();
mostrarPregunta();