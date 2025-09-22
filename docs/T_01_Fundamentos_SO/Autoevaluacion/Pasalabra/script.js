document.addEventListener('DOMContentLoaded', () => {
    const rosco = document.querySelector('.rosco');
    const preguntaEl = document.getElementById('pregunta');
    const respuestaEl = document.getElementById('respuesta');
    const submitBtn = document.getElementById('submit');
    const aciertosEl = document.getElementById('aciertos');
    const fallosEl = document.getElementById('fallos');
    const timerEl = document.getElementById('timer-container');

    const preguntas = [
        { letra: "a", palabra: "ASCII", pregunta: "CON LA A. Estándar de codificación de caracteres obsoleto, predecesor de Unicode." },
        { letra: "b", palabra: "Buses", pregunta: "CON LA B. Caminos por los que se transmite la información entre los componentes del sistema." },
        { letra: "c", palabra: "CPU", pregunta: 'CON LA C. "Cerebro" del ordenador, encargado de ejecutar las instrucciones de los programas.' },
        { letra: "d", palabra: "Driver", pregunta: "CON LA D. Software que permite al sistema operativo comunicarse y controlar un hardware específico." },
        { letra: "e", palabra: "Ejecución", pregunta: "CON LA E. Uno de los estados de un proceso, en el que el procesador está ejecutando las instrucciones del proceso." },
        { letra: "f", palabra: "FAT32", pregunta: "CON LA F. Sistema de archivos compatible con casi todos los sistemas operativos, pero con limitaciones de tamaño de archivo." },
        { letra: "g", palabra: "Grupo", pregunta: "CON LA G. Conjunto de usuarios que tienen los mismos permisos sobre un archivo/directorio." },
        { letra: "h", palabra: "Hardware", pregunta: "CON LA H. Parte física y tangible de un sistema informático." },
        { letra: "i", palabra: "IPC", pregunta: "CON LA I. Comunicación entre procesos." },
        { letra: "j", palabra: "Journaling", pregunta: "CON LA J. Técnica que utilizan los sistemas de archivos modernos para ser más fiables." },
        { letra: "l", palabra: "Lectura", pregunta: "CON LA L. Permiso que permite ver el contenido de un archivo." },
        { letra: "m", palabra: "Memoria RAM", pregunta: "CON LA M. Almacenamiento temporal y volátil que guarda los datos y programas que se están usando activamente." },
        { letra: "n", palabra: "NTFS", pregunta: "CON LA N. Sistema de archivos predeterminado y más avanzado para Windows." },
        { letra: "o", palabra: "Oculto", pregunta: "CON LA O. Atributo de archivo que hace que no se muestre por defecto en el explorador de archivos." },
        { letra: "p", palabra: "Proceso", pregunta: "CON LA P. Instancia de un programa en ejecución." },
        { letra: "q", palabra: "Von Neumann", pregunta: "CONTIENE LA Q. Arquitectura de la mayoría de los ordenadores actuales, propuesta por John Von Neumann." },
        { letra: "r", palabra: "Raíz", pregunta: "CON LA R. Directorio principal, el punto de partida de toda la estructura de archivos." },
        { letra: "s", palabra: "Software", pregunta: "CON LA S. Parte lógica e intangible del sistema, compuesta por programas, datos e instrucciones." },
        { letra: "t", palabra: "Terminado", pregunta: "CON LA T. Estado de un proceso en el que ha completado su ejecución." },
        { letra: "u", palabra: "Unicode", pregunta: "CON LA U. Estándar de codificación de caracteres que busca codificar prácticamente todos los caracteres de todos los idiomas del mundo." },
        { letra: "v", palabra: "Von Neumann", pregunta: "CON LA V. Arquitectura de la mayoría de los ordenadores actuales, propuesta por John Von Neumann." },
        { letra: "w", palabra: "Write", pregunta: "CON LA W. Permiso que permite modificar el contenido de un archivo." },
        { letra: "x", palabra: "Execute", pregunta: "CON LA X. Permiso que permite ejecutar un archivo." },
        { letra: "y", palabra: "System", pregunta: "CONTIENE LA Y. Atributo de archivo que indica que es un archivo o directorio crítico para el funcionamiento del sistema operativo." },
        { letra: "z", palabra: "UAL/ALU", pregunta: "CONTIENE LA Z. Unidad Aritmético-Lógica." }
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