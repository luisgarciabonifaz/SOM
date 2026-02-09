const questionBank = [
    {
        question: "¿Qué componente de hardware es conocido como el 'cerebro' del ordenador, encargado de ejecutar instrucciones?",
        answers: [
            { text: "Memoria RAM", correct: false },
            { text: "Unidad Central de Procesamiento (CPU)", correct: true },
            { text: "Disco Duro (HDD)", correct: false },
            { text: "Tarjeta Gráfica", correct: false }
        ],
        feedback: "La CPU es el componente fundamental que interpreta y ejecuta la mayoría de las instrucciones de los programas."
    },
    {
        question: "En la arquitectura Von Neumann, ¿qué dos elementos cruciales se almacenan en la misma memoria principal?",
        answers: [
            { text: "Instrucciones y periféricos", correct: false },
            { text: "Datos y sistema operativo", correct: false },
            { text: "Instrucciones y datos", correct: true },
            { text: "Unidad de Control y UAL", correct: false }
        ],
        feedback: "La característica clave de la arquitectura Von Neumann es que tanto las instrucciones de los programas como los datos que manipulan residen en la misma memoria."
    },
    {
        question: "Si un proceso está esperando una entrada del usuario desde el teclado, ¿en qué estado se encuentra?",
        answers: [
            { text: "Listo (Ready)", correct: false },
            { text: "Ejecución (Running)", correct: false },
            { text: "Terminado (Terminated)", correct: false },
            { text: "Bloqueado/En espera (Blocked/Waiting)", correct: true }
        ],
        feedback: "Un proceso entra en estado Bloqueado o En espera cuando necesita que ocurra un evento externo (como una operación de E/S) para poder continuar."
    },
    {
        question: "¿Qué sistema de archivos es el estándar moderno en Windows y ofrece características como seguridad avanzada y journaling?",
        answers: [
            { text: "FAT32", correct: false },
            { text: "ext4", correct: false },
            { text: "NTFS", correct: true },
            { text: "exFAT", correct: false }
        ],
        feedback: "NTFS (New Technology File System) es el sistema de archivos predeterminado en las versiones modernas de Windows, conocido por su robustez, seguridad y journaling."
    },
    {
        question: "Una ruta como '/home/usuario/documentos/informe.pdf' es un ejemplo de:",
        answers: [
            { text: "Ruta relativa", correct: false },
            { text: "Ruta absoluta", correct: true },
            { text: "Ruta de red", correct: false },
            { text: "Ruta de sistema", correct: false }
        ],
        feedback: "Una ruta absoluta especifica la ubicación completa de un archivo o directorio desde la raíz del sistema de archivos."
    },
    {
        question: "Dentro de la CPU, ¿qué subcomponente realiza las operaciones matemáticas como sumas y restas?",
        answers: [
            { text: "Unidad de Control (UC)", correct: false },
            { text: "Registros", correct: false },
            { text: "Unidad Aritmético-Lógica (UAL)", correct: true },
            { text: "Bus de datos", correct: false }
        ],
        feedback: "La UAL (o ALU en inglés) es la parte de la CPU especializada en realizar cálculos aritméticos y operaciones lógicas."
    },
    {
        question: "Si quieres formatear un pendrive para usarlo en Windows, macOS y Linux con archivos de más de 4GB, ¿cuál es la mejor opción?",
        answers: [
            { text: "NTFS", correct: false },
            { text: "FAT32", correct: false },
            { text: "ext4", correct: false },
            { text: "exFAT", correct: true }
        ],
        feedback: "exFAT es el sistema de archivos ideal para unidades externas por su alta compatibilidad entre sistemas operativos y por no tener las limitaciones de tamaño de archivo de FAT32."
    },
    {
        question: "El permiso de 'Ejecución' (Execute) en un directorio permite al usuario:",
        answers: [
            { text: "Ver el contenido del directorio", correct: false },
            { text: "Crear nuevos archivos en el directorio", correct: false },
            { text: "Entrar en el directorio y acceder a sus subdirectorios", correct: true },
            { text: "Eliminar el directorio", correct: false }
        ],
        feedback: "El permiso de ejecución en un directorio es necesario para poder 'atravesarlo', es decir, acceder a su contenido y a lo que hay dentro de él."
    },
    {
        question: "¿Qué es un 'proceso' en un sistema operativo?",
        answers: [
            { text: "Un archivo ejecutable en el disco duro", correct: false },
            { text: "Una instancia de un programa en ejecución", correct: true },
            { text: "El código fuente de una aplicación", correct: false },
            { text: "Un controlador de hardware", correct: false }
        ],
        feedback: "Un programa es una entidad pasiva (un archivo), mientras que un proceso es la instancia activa de ese programa cuando se está ejecutando."
    },
    {
        question: "La técnica de 'Journaling' en un sistema de archivos sirve principalmente para:",
        answers: [
            { text: "Aumentar la velocidad de lectura", correct: false },
            { text: "Comprimir archivos automáticamente", correct: false },
            { text: "Mejorar la fiabilidad y recuperación ante fallos", correct: true },
            { text: "Gestionar permisos de usuario", correct: false }
        ],
        feedback: "El journaling registra los cambios que se van a realizar antes de hacerlos, lo que permite una recuperación rápida y segura del sistema de archivos en caso de un apagón o fallo."
    },
    {
        question: "¿Qué sistema de numeración utiliza los dígitos del 0 al 9 y las letras de la A a la F?",
        answers: [
            { text: "Binario", correct: false },
            { text: "Octal", correct: false },
            { text: "Decimal", correct: false },
            { text: "Hexadecimal", correct: true }
        ],
        feedback: "El sistema hexadecimal (base 16) es muy usado en informática para representar direcciones de memoria o colores de forma compacta."
    },
    {
        question: "El software que permite al sistema operativo comunicarse con un dispositivo de hardware específico se llama:",
        answers: [
            { text: "Aplicación", correct: false },
            { text: "Controlador (Driver)", correct: true },
            { text: "Compilador", correct: false },
            { text: "Sistema de archivos", correct: false }
        ],
        feedback: "Los controladores o drivers son piezas de software esenciales que actúan como traductores entre el SO y el hardware."
    },
    {
        question: "Cuando un proceso está listo para ejecutarse pero está esperando que la CPU se libere, se encuentra en estado:",
        answers: [
            { text: "Nuevo (New)", correct: false },
            { text: "Bloqueado (Blocked)", correct: false },
            { text: "Listo (Ready)", correct: true },
            { text: "Terminado (Terminated)", correct: false }
        ],
        feedback: "En el estado 'Listo', el proceso tiene todos los recursos que necesita para ejecutarse y solo espera su turno en la CPU."
    },
    {
        question: "¿Qué atributo de archivo impide que su contenido sea modificado o eliminado?",
        answers: [
            { text: "Oculto (Hidden)", correct: false },
            { text: "Solo lectura (Read-only)", correct: true },
            { text: "Sistema (System)", correct: false },
            { text: "Archivo (Archive)", correct: false }
        ],
        feedback: "El atributo de 'Solo lectura' protege un archivo contra escritura o borrado accidental o no autorizado."
    },
    {
        question: "La propiedad 'Atómica' de una transacción garantiza que:",
        answers: [
            { text: "La operación es duradera y no se pierde", correct: false },
            { text: "La operación se ejecuta de forma aislada", correct: false },
            { text: "La operación se completa en su totalidad o no se realiza en absoluto", correct: true },
            { text: "El sistema queda en un estado consistente", correct: false }
        ],
        feedback: "La atomicidad es la propiedad de 'todo o nada'. Evita que las operaciones queden a medias."
    },
    {
        question: "¿Qué estándar de codificación de caracteres fue diseñado para incluir todos los idiomas del mundo?",
        answers: [
            { text: "ASCII", correct: false },
            { text: "Unicode", correct: true },
            { text: "Hexadecimal", correct: false },
            { text: "Base64", correct: false }
        ],
        feedback: "Unicode es el estándar moderno que resuelve las limitaciones de ASCII, permitiendo representar caracteres de prácticamente cualquier idioma."
    },
    {
        question: "En un sistema Linux, el directorio raíz se representa con el símbolo:",
        answers: [
            { text: "C:\\", correct: false },
            { text: "~", correct: false },
            { text: "/", correct: true },
            { text: ".", correct: false }
        ],
        feedback: "En los sistemas tipo Unix (como Linux), la jerarquía de directorios comienza en la raíz, representada por una barra inclinada '/'."
    },
    {
        question: "La memoria RAM es un tipo de almacenamiento:",
        answers: [
            { text: "Persistente y lento", correct: false },
            { text: "Volátil y rápido", correct: true },
            { text: "Secuencial y permanente", correct: false },
            { text: "Óptico y extraíble", correct: false }
        ],
        feedback: "La RAM es volátil porque su contenido se pierde al apagar el equipo, pero es muy rápida, ideal para los datos y programas en uso activo."
    },
    {
        question: "El permiso de 'Escritura' (Write) en un directorio te permite:",
        answers: [
            { text: "Listar los archivos que contiene", correct: false },
            { text: "Entrar en el directorio", correct: false },
            { text: "Leer el contenido de los archivos dentro de él", correct: false },
            { text: "Crear, renombrar y eliminar archivos dentro de él", correct: true }
        ],
        feedback: "El permiso de escritura a nivel de directorio es lo que controla la capacidad de modificar la estructura de su contenido (crear, borrar, renombrar archivos)."
    },
    {
        question: "Los buses que transportan las direcciones de memoria a las que la CPU quiere acceder se llaman:",
        answers: [
            { text: "Bus de datos", correct: false },
            { text: "Bus de control", correct: false },
            { text: "Bus de direcciones", correct: true },
            { text: "Bus del sistema", correct: false }
        ],
        feedback: "El bus de direcciones se utiliza para especificar la ubicación exacta en la memoria con la que la CPU desea interactuar (leer o escribir)."
    }
];

const questionElement = document.getElementById('question');
const questionCounterElement = document.getElementById('question-counter');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');
const feedbackElement = document.getElementById('feedback');
const progressBar = document.getElementById('progress-bar');

let shuffledQuestions, currentQuestionIndex, score;
const TOTAL_QUESTIONS = 10;

function startQuiz() {
    shuffledQuestions = questionBank.sort(() => Math.random() - 0.5).slice(0, TOTAL_QUESTIONS);
    currentQuestionIndex = 0;
    score = 0;
    resultsContainer.classList.add('hide');
    quizContainer.classList.remove('hide');
    nextButton.classList.add('hide');
    updateProgressBar();
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionCounterElement.innerText = `Pregunta ${currentQuestionIndex + 1} de ${TOTAL_QUESTIONS}`;
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    feedbackElement.classList.remove('correct', 'incorrect');
    feedbackElement.style.display = 'none';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    
    if (correct) {
        score++;
    }
    
    setStatusClass(selectedButton, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct === "true") {
            setStatusClass(button, true);
        }
        button.disabled = true;
    });

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    feedbackElement.innerText = currentQuestion.feedback;
    feedbackElement.classList.add(correct ? 'correct' : 'incorrect');
    feedbackElement.style.display = 'block';
    
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        showResults();
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

function updateProgressBar() {
    const progressPercentage = ((currentQuestionIndex) / TOTAL_QUESTIONS) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

function showResults() {
    progressBar.style.width = '100%';
    quizContainer.classList.add('hide');
    resultsContainer.classList.remove('hide');
    scoreElement.innerText = score;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    updateProgressBar();
    setNextQuestion();
});

restartButton.addEventListener('click', startQuiz);

startQuiz();
