document.addEventListener('DOMContentLoaded', () => {
    const rosco = document.querySelector('.rosco');
    const preguntaEl = document.getElementById('pregunta');
    const respuestaEl = document.getElementById('respuesta');
    const submitBtn = document.getElementById('submit');
    const aciertosEl = document.getElementById('aciertos');
    const fallosEl = document.getElementById('fallos');
    const timerEl = document.getElementById('timer-container');

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
    let aciertos = 0;
    let fallos = 0;
    let timeLeft = 150;
    let timerInterval;

    function iniciarJuego() {
        mostrarPregunta();
        crearRosco();
        startTimer();
    }

    function startTimer() {
        timerInterval = setInterval(() => {
            timeLeft--;
            timerEl.textContent = timeLeft;
            if (timeLeft <= 0) {
                endGame(false);
            }
        }, 1000);
    }

    function endGame(completed) {
        clearInterval(timerInterval);
        respuestaEl.disabled = true;
        submitBtn.disabled = true;
        if (completed) {
            preguntaEl.textContent = '¡Felicidades! ¡Has completado el rosco!';
        } else {
            preguntaEl.textContent = '¡Tiempo agotado! Fin del juego.';
        }
    }

    function crearRosco() {
        rosco.innerHTML = '';
        preguntas.forEach(p => {
            const letraEl = document.createElement('div');
            letraEl.classList.add('letra');
            letraEl.textContent = p.letra.toUpperCase();
            rosco.appendChild(letraEl);
        });
    }

    function mostrarPregunta() {
        preguntaEl.textContent = preguntas[preguntaActual].pregunta;
    }

    function comprobarRespuesta() {
        const respuesta = respuestaEl.value.trim().toLowerCase();
        if (respuesta === '') return;

        if (respuesta === preguntas[preguntaActual].palabra.toLowerCase()) {
            aciertos++;
            aciertosEl.textContent = aciertos;
            marcarLetra('acertada');
        } else {
            fallos++;
            fallosEl.textContent = fallos;
            marcarLetra('fallada');
        }
        siguientePregunta();
    }

    function marcarLetra(estado) {
        const letras = rosco.querySelectorAll('.letra');
        letras[preguntaActual].classList.add(estado);
    }

    function siguientePregunta() {
        preguntaActual++;
        if (preguntaActual < preguntas.length) {
            mostrarPregunta();
        } else {
            endGame(true);
        }
        respuestaEl.value = '';
    }

    submitBtn.addEventListener('click', comprobarRespuesta);
    respuestaEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            comprobarRespuesta();
        }
    });

    iniciarJuego();
});