// Lógica JavaScript
const allActivities = [
    {
        id: 'act1',
        type: 'multiple-choice',
        question: '¿Cuál es la definición correcta de **virtualización**?',
        options: [
            'Una técnica para hacer que el hardware físico sea más rápido.',
            'La creación de una versión virtual (simulada por software) de un recurso informático, como un sistema operativo.',
            'Un tipo de sistema operativo como Windows o Linux.',
            'Un programa para navegar por internet de forma segura.'
        ],
        correctAnswerIndex: 1,
        feedbackCorrect: '¡Correcto! La virtualización nos permite crear "ordenadores dentro de un ordenador" mediante software.',
        feedbackIncorrect: 'Incorrecto. La virtualización es la tecnología que permite crear versiones simuladas de recursos informáticos.',
        sources: 'Sección 1'
    },
    {
        id: 'act2',
        type: 'fill-in-the-blanks',
        question: 'En un entorno de virtualización, el sistema operativo principal se llama **__1__** o host, mientras que el sistema operativo que se ejecuta dentro de la máquina virtual se llama **__2__** o guest.',
        blanks: [
            { placeholder: '1', correct: 'anfitrión' },
            { placeholder: '2', correct: 'huésped' }
        ],
        feedbackCorrect: '¡Perfecto! Es fundamental diferenciar entre el sistema anfitrión (real) y el huésped (virtual).',
        feedbackIncorrect: 'Incorrecto. Revisa los términos para el sistema operativo real y el virtual.',
        sources: 'Sección 1.1'
    },
    {
        id: 'act3',
        type: 'multiple-choice',
        question: '¿Cuál de las siguientes es una **ventaja clave** de las máquinas virtuales?',
        options: [
            'Rendimiento siempre superior al de una máquina real.',
            'No requieren recursos del ordenador anfitrión.',
            '**Aislamiento**: un problema en la MV no afecta al sistema anfitrión.',
            'Son incompatibles con la mayoría de software.'
        ],
        correctAnswerIndex: 2,
        feedbackCorrect: '¡Exacto! El aislamiento es una de las mayores ventajas, ya que proporciona un entorno seguro para pruebas.',
        feedbackIncorrect: 'No es la respuesta correcta. Piensa en la seguridad y la separación entre la máquina virtual y la real.',
        sources: 'Sección 2.1'
    },
    {
        id: 'act4',
        type: 'short-answer',
        question: '¿Qué es una **instantánea (snapshot)** en el contexto de las máquinas virtuales y para qué es útil?',
        keywords: ['foto', 'estado', 'restaurar', 'punto', 'restauración', 'cambio'],
        expectedAnswer: 'Una instantánea es una "foto" del estado completo de una MV en un momento dado. Es útil para crear puntos de restauración y poder volver a ese estado si algo sale mal después de un cambio.',
        feedbackCorrect: '¡Muy bien! Las instantáneas son una herramienta potentísima para hacer pruebas sin miedo.',
        feedbackIncorrect: 'Revisa la sección sobre ventajas o gestión de MVs. Se trata de una función que permite "guardar" el estado de la máquina.',
        sources: 'Sección 2.1 y 5.4'
    },
    {
        id: 'act5',
        type: 'multiple-choice',
        question: 'Un hipervisor de **Tipo 2 (hosted)**, como VirtualBox, se caracteriza por...',
        options: [
            'Instalarse directamente sobre el hardware físico, sin SO anfitrión.',
            'Ser exclusivo para servidores y centros de datos.',
            'Instalarse como una aplicación más dentro de un sistema operativo anfitrión existente (Windows, Linux, macOS).',
            'Ofrecer siempre un rendimiento superior a los de Tipo 1.'
        ],
        correctAnswerIndex: 2,
        feedbackCorrect: '¡Correcto! Los hipervisores de Tipo 2 funcionan como un programa normal dentro de tu SO, lo que los hace ideales para uso personal y educativo.',
        feedbackIncorrect: 'Incorrecto. Revisa la diferencia entre hipervisores de Tipo 1 y Tipo 2.',
        sources: 'Sección 3.2'
    },
    {
        id: 'act6',
        type: 'fill-in-the-blanks',
        question: 'Para instalar un sistema operativo en una máquina virtual, necesitas un archivo de imagen de disco que contiene todo lo necesario para la instalación. Este archivo se conoce comúnmente como una imagen **__1__**. Para mejorar la integración entre el anfitrión y el huésped (mejor resolución, portapapeles compartido, etc.) es esencial instalar las **__2__**.',
        blanks: [
            { placeholder: '1', correct: 'iso' },
            { placeholder: '2', correct: 'guest additions' }
        ],
        feedbackCorrect: '¡Correcto! La imagen ISO es el "CD de instalación" virtual, y las Guest Additions son clave para una buena experiencia de usuario.',
        feedbackIncorrect: 'No es correcto. Revisa las secciones sobre creación de MVs y la relación con el sistema anfitrión.',
        sources: 'Sección 4 y 6.2'
    },
    {
        id: 'act7',
        type: 'short-answer',
        question: 'Describe la diferencia principal entre una **Clonación Completa (Full Clone)** y una **Clonación Enlazada (Linked Clone)** de una máquina virtual.',
        keywords: ['independiente', 'copia', 'completa', 'enlazada', 'depende', 'diferencial'],
        expectedAnswer: 'Una clonación completa crea una copia totalmente independiente y autónoma de la MV, ocupando el mismo espacio. Una clonación enlazada crea una MV que depende de la original, compartiendo su disco y ocupando mucho menos espacio.',
        feedbackCorrect: '¡Excelente! Has captado la diferencia clave: independencia y uso de espacio.',
        feedbackIncorrect: 'Revisa la sección 5.4. La diferencia radica en si el clon es independiente o si depende de la máquina original.',
        sources: 'Sección 5.4'
    },
    {
        id: 'act8',
        type: 'multiple-choice',
        question: '¿Qué modo de red de VirtualBox permite que la máquina virtual obtenga su propia dirección IP en tu red local, comportándose como un dispositivo físico más?',
        options: [
            'NAT',
            'Adaptador Puente (Bridged Adapter)',
            'Red Interna (Internal Network)',
            'Solo anfitrión (Host-Only Adapter)'
        ],
        correctAnswerIndex: 1,
        feedbackCorrect: '¡Correcto! El modo puente es ideal si necesitas que tu MV actúe como un servidor accesible desde otros equipos de tu red.',
        feedbackIncorrect: 'Incorrecto. Revisa los modos de red. Hay uno específico que "conecta" la MV directamente a tu red local.',
        sources: 'Sección 5.1'
    },
    {
        id: 'act9',
        type: 'fill-in-the-blanks',
        question: 'El modo de red por defecto en VirtualBox es **__1__**. Es el más sencillo y permite a la MV acceder a internet compartiendo la IP del anfitrión. Para intercambiar archivos fácilmente entre el anfitrión y el huésped, se pueden configurar **__2__**.',
        blanks: [
            { placeholder: '1', correct: 'nat' },
            { placeholder: '2', correct: 'carpetas compartidas' }
        ],
        feedbackCorrect: '¡Perfecto! NAT es la configuración inicial más común, y las carpetas compartidas son muy prácticas.',
        feedbackIncorrect: 'No es correcto. Revisa la configuración de red por defecto y la forma de intercambiar archivos.',
        sources: 'Sección 5.1 y 5.3'
    },
    {
        id: 'act10',
        type: 'multiple-choice',
        question: '¿Cuál de las siguientes es un **inconveniente** de usar máquinas virtuales?',
        options: [
            'Ahorro de hardware al poder ejecutar varios SO en un solo PC.',
            'Portabilidad, ya que se pueden mover fácilmente a otro ordenador.',
            'El rendimiento puede ser inferior al de un sistema operativo instalado directamente en el hardware.',
            'Permiten probar software de forma segura sin afectar al sistema principal.'
        ],
        correctAnswerIndex: 2,
        feedbackCorrect: '¡Correcto! Debido a la capa de software extra del hipervisor, el rendimiento de una MV es generalmente algo inferior al de un sistema nativo.',
        feedbackIncorrect: 'Incorrecto. La pregunta es sobre un inconveniente, no una ventaja.',
        sources: 'Sección 2.2'
    },
    {
        id: 'act11',
        type: 'fill-in-the-blanks',
        question: 'Un hipervisor de **__1__** (o bare-metal) se instala directamente sobre el hardware, mientras que un hipervisor de **__2__** (o hosted) se instala como una aplicación sobre un SO anfitrión.',
        blanks: [
            { placeholder: '1', correct: 'tipo 1' },
            { placeholder: '2', correct: 'tipo 2' }
        ],
        feedbackCorrect: '¡Muy bien! Esa es la distinción fundamental entre los dos tipos de hipervisores.',
        feedbackIncorrect: 'Incorrecto. Revisa la clasificación de los hipervisores.',
        sources: 'Sección 3.1 y 3.2'
    },
    {
        id: 'act12',
        type: 'short-answer',
        question: '¿Qué son las **VirtualBox Guest Additions** y por qué son importantes?',
        keywords: ['controladores', 'drivers', 'integración', 'rendimiento', 'puntero', 'portapapeles', 'resolución'],
        expectedAnswer: 'Son un conjunto de controladores y aplicaciones que se instalan DENTRO de la MV para mejorar el rendimiento y la integración con el anfitrión (mejor resolución, integración del ratón, carpetas compartidas, etc.).',
        feedbackCorrect: '¡Exacto! Son esenciales para una experiencia de uso fluida y completa.',
        feedbackIncorrect: 'Piensa en el software que se instala DENTRO de la máquina virtual para que funcione mejor.',
        sources: 'Sección 6.2'
    },
    {
        id: 'act13',
        type: 'multiple-choice',
        question: 'Si quieres crear un entorno de red aislado para que varias MVs se comuniquen entre sí, pero sin acceso a internet ni al anfitrión, ¿qué modo de red usarías?',
        options: [
            'NAT',
            'Adaptador Puente',
            'Red Interna',
            'Solo anfitrión'
        ],
        correctAnswerIndex: 2,
        feedbackCorrect: '¡Correcto! La Red Interna es perfecta para crear laboratorios de red aislados.',
        feedbackIncorrect: 'Incorrecto. Hay un modo de red diseñado específicamente para la comunicación exclusiva entre MVs.',
        sources: 'Sección 5.1'
    },
    {
        id: 'act14',
        type: 'multiple-choice',
        question: '¿Qué significa que un disco duro virtual está "Reservado dinámicamente"?',
        options: [
            'Que el tamaño del disco es fijo y no se puede cambiar.',
            'Que el archivo del disco duro en la máquina anfitriona ocupa el tamaño máximo desde el principio.',
            'Que el archivo del disco duro en la máquina anfitriona crece a medida que se añaden datos dentro de la MV, hasta un límite máximo.',
            'Que el disco duro es más rápido que uno de tamaño fijo.'
        ],
        correctAnswerIndex: 2,
        feedbackCorrect: '¡Correcto! La reserva dinámica ahorra espacio en el disco anfitrión, ya que el archivo de la MV solo ocupa lo que realmente está usando.',
        feedbackIncorrect: 'Incorrecto. Piensa en cómo se gestiona el espacio que ocupa el archivo del disco virtual en tu disco real.',
        sources: 'Sección 4.1'
    },
    {
        id: 'act15',
        type: 'fill-in-the-blanks',
        question: 'La ventaja de la virtualización que permite mover una MV de un ordenador a otro se llama **__1__**. La capacidad de crear copias exactas de una MV se llama **__2__**.',
        blanks: [
            { placeholder: '1', correct: 'portabilidad' },
            { placeholder: '2', correct: 'clonación' }
        ],
        feedbackCorrect: '¡Perfecto! La portabilidad y la clonación son dos de las ventajas más potentes de la virtualización.',
        feedbackIncorrect: 'Revisa la sección de ventajas de las máquinas virtuales.',
        sources: 'Sección 2.1 y 5.4'
    },
    {
        id: 'act16',
        type: 'short-answer',
        question: '¿Por qué es importante asignar los recursos (RAM, CPU) de forma equilibrada al crear una MV?',
        keywords: ['anfitrión', 'huésped', 'lento', 'rendimiento', 'suficiente'],
        expectedAnswer: 'Porque si se asignan pocos recursos a la MV, esta irá lenta. Si se asignan demasiados, el sistema anfitrión se quedará sin recursos y también irá lento.',
        feedbackCorrect: '¡Muy bien! El equilibrio es clave para que tanto el anfitrión como el huésped funcionen de forma fluida.',
        feedbackIncorrect: 'Piensa en qué ocurre si le das muy poca RAM a la MV, o si le das casi toda la RAM de tu ordenador.',
        sources: 'Sección 2.2 y 4.3'
    },
    {
        id: 'act17',
        type: 'multiple-choice',
        question: 'Para poder usar un dispositivo USB (como un pendrive) desde dentro de una MV en VirtualBox, ¿qué se necesita instalar?',
        options: [
            'Las Guest Additions.',
            'El "Paquete de Extensiones de VirtualBox" (Extension Pack).',
            'Un driver USB especial en el sistema anfitrión.',
            'No se necesita nada, funciona por defecto.'
        ],
        correctAnswerIndex: 1,
        feedbackCorrect: '¡Correcto! El Extension Pack se instala en el anfitrión y añade funcionalidades extra como el soporte para USB 2.0/3.0.',
        feedbackIncorrect: 'Incorrecto. Hay un componente adicional que se instala en el software de VirtualBox (en el anfitrión) para esta y otras funciones avanzadas.',
        sources: 'Sección 5.2'
    },
    {
        id: 'act18',
        type: 'multiple-choice',
        question: '¿Cuál de estas empresas es la desarrolladora del software de virtualización gratuito y de código abierto VirtualBox?',
        options: [
            'Microsoft',
            'VMware',
            'Oracle',
            'Apple'
        ],
        correctAnswerIndex: 2,
        feedbackCorrect: '¡Correcto! Oracle es la empresa que mantiene VirtualBox.',
        feedbackIncorrect: 'Incorrecto. Revisa los ejemplos de software de virtualización mencionados en el tema.',
        sources: 'Sección 3.2'
    },
    {
        id: 'act19',
        type: 'fill-in-the-blanks',
        question: 'Una **instantánea** guarda el estado de una MV para poder __1__ a él más tarde. Una **clonación** crea una __2__ completa e independiente de la MV.',
        blanks: [
            { placeholder: '1', correct: 'restaurar' },
            { placeholder: '2', correct: 'copia' }
        ],
        feedbackCorrect: '¡Correcto! Has entendido la diferencia fundamental entre estas dos potentes herramientas.',
        feedbackIncorrect: 'Revisa la sección 5.4. Piensa en el propósito de cada una: una es para "volver atrás" y la otra para "duplicar".',
        sources: 'Sección 5.4'
    },
    {
        id: 'act20',
        type: 'short-answer',
        question: 'Si usas el modo de red "Solo anfitrión" (Host-Only), ¿con quién puede comunicarse la máquina virtual?',
        keywords: ['anfitrión', 'huésped', 'otras', 'mismas', 'internet no'],
        expectedAnswer: 'La MV puede comunicarse con el sistema anfitrión y con otras MVs que estén en la misma red "Solo anfitrión", pero no puede acceder a internet.',
        feedbackCorrect: '¡Muy bien! Es una red privada entre el anfitrión y sus huéspedes.',
        feedbackIncorrect: 'Revisa la descripción del modo "Solo anfitrión". ¿Permite salir a internet?',
        sources: 'Sección 5.1'
    }
];

const activitiesContainer = document.getElementById('activities-container');

// Función para barajar un array (algoritmo de Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Barajar las actividades y seleccionar las primeras 10
shuffleArray(allActivities);
const activities = allActivities.slice(0, 10);

// Renumerar los IDs de las actividades para que sean consecutivos
activities.forEach((activity, index) => {
    activity.originalId = activity.id;
    activity.id = 'act' + (index + 1);
});


// Function to create and display activities
function createActivityElement(activity) {
    let htmlContent = `
        <div class="activity" id="${activity.id}">
            <h3>Actividad ${activity.id.replace('act', '')}</h3>
            <div class="question">${activity.question}</div>
    `;

    if (activity.type === 'multiple-choice') {
        htmlContent += `<div class="options">`;
        activity.options.forEach((option, index) => {
            htmlContent += `
                <label>
                    <input type="radio" name="${activity.id}-option" value="${index}">
                    ${option}
                </label>
            `;
        });
        htmlContent += `</div>`;
    } else if (activity.type === 'fill-in-the-blanks') {
        htmlContent += `<div class="blanks-container">`;
        let currentPrompt = activity.question;
        activity.blanks.forEach((blank, index) => {
            currentPrompt = currentPrompt.replace(`__${blank.placeholder}__`, `<input type="text" class="text-input blank-input" id="${activity.id}-blank-${index}" placeholder="Respuesta ${blank.placeholder}">`);
        });
        htmlContent = htmlContent.replace(activity.question, currentPrompt); // Replace original question with prompt containing inputs
        htmlContent += `</div>`;
    } else if (activity.type === 'short-answer') {
        htmlContent += `
            <textarea class="text-input" id="${activity.id}-answer" rows="5" placeholder="Escribe tu respuesta aquí..."></textarea>
        `;
    }

    htmlContent += `
            <button class="button" onclick="checkAnswer('${activity.id}')">Comprobar Respuesta</button>
            <div class="feedback" id="${activity.id}-feedback"></div>
            <div class="sources"><strong>Fuentes:</strong> ${activity.sources}</div>
        </div>
    `;
    return htmlContent;
}

// Render all activities
activities.forEach(activity => {
    activitiesContainer.innerHTML += createActivityElement(activity);
});

// Function to check answers
window.checkAnswer = function(activityId) {
    const activityElement = document.getElementById(activityId);
    const feedbackElement = document.getElementById(`${activityId}-feedback`);
    const activityData = activities.find(act => act.id === activityId);

    let isCorrect = false;
    let actualAnswer = '';

    if (activityData.type === 'multiple-choice') {
        const selectedOption = activityElement.querySelector(`input[name="${activityId}-option"]:checked`);
        if (selectedOption) {
            isCorrect = (parseInt(selectedOption.value) === activityData.correctAnswerIndex);
        }
    } else if (activityData.type === 'fill-in-the-blanks') {
        isCorrect = true;
        activityData.blanks.forEach((blank, index) => {
            const input = document.getElementById(`${activityId}-blank-${index}`);
            if (!input || input.value.trim().toLowerCase() !== blank.correct.toLowerCase()) {
                isCorrect = false;
            }
        });
    } else if (activityData.type === 'short-answer') {
        const answerInput = document.getElementById(`${activityId}-answer`);
        actualAnswer = answerInput ? answerInput.value.trim().toLowerCase() : '';

        // Simple keyword matching for short answers
        isCorrect = activityData.keywords.some(keyword => actualAnswer.includes(keyword.toLowerCase()));

        if (!isCorrect) { // If keywords don't match fully, provide the expected answer
            feedbackElement.innerHTML = `<p>${activityData.feedbackIncorrect}</p><p>La respuesta esperada era: **${activityData.expectedAnswer}**</p>`;
            feedbackElement.classList.remove('correct');
            feedbackElement.classList.add('incorrect');
            feedbackElement.style.display = 'block';
            return; // Exit early if incorrect
        }
    }

    // Display feedback
    feedbackElement.classList.remove('correct', 'incorrect');
    if (isCorrect) {
        feedbackElement.innerHTML = activityData.feedbackCorrect;
        feedbackElement.classList.add('correct');
    } else {
        feedbackElement.innerHTML = activityData.feedbackIncorrect;
        if (activityData.type === 'short-answer') {
            feedbackElement.innerHTML += `<p>La respuesta esperada era: **${activityData.expectedAnswer}**</p>`;
        }
        feedbackElement.classList.add('incorrect');
    }
    feedbackElement.style.display = 'block';
};

// Function to replace bold markdown in questions with HTML strong tags
function formatQuestions() {
    activities.forEach(activity => {
        const questionElement = document.querySelector(`#${activity.id} .question`);
        if (questionElement) {
            questionElement.innerHTML = questionElement.innerHTML.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        }
    });
}

// Call formatQuestions after activities are loaded
document.addEventListener('DOMContentLoaded', formatQuestions);