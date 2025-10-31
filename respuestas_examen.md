# Respuestas del Examen de Sistemas Operativos y Mantenimiento (Temas 1-3)

## Preguntas Tipo Test

1.  **c) La Unidad de Control (UC).**
    *   **Justificación:** La UC es la que dirige el flujo de datos, interpreta las instrucciones y coordina a la UAL y otros componentes.

2.  **d) Ha finalizado la operación de E/S que estaba esperando (por ejemplo, la lectura de un archivo).**
    *   **Justificación:** Un proceso pasa de Bloqueado a Listo cuando el evento externo que esperaba (como una operación de disco) se completa.

3.  **b) 750**
    *   **Justificación:** Propietario (rwx) = 4+2+1=7; Grupo (r-x) = 4+0+1=5; Otros (---) = 0+0+0=0.

4.  **c) Mejorar la fiabilidad y la consistencia del sistema de archivos ante un fallo de energía.**
    *   **Justificación:** El *journaling* registra las operaciones que se van a realizar antes de ejecutarlas, lo que permite una recuperación rápida y segura del sistema de archivos tras un apagón, evitando la corrupción de datos.

5.  **c) Firmware (UEFI) -> POST -> Gestor de Arranque -> Carga del Kernel del SO.**
    *   **Justificación:** El firmware (UEFI/BIOS) se inicia primero y realiza el POST (Power-On Self-Test). Luego, cede el control al gestor de arranque, que finalmente carga el núcleo (kernel) del sistema operativo.

6.  **d) El modo Núcleo tiene acceso sin restricciones al hardware, mientras que el modo Usuario tiene un acceso restringido para proteger la estabilidad del sistema.**
    *   **Justificación:** Esta separación es un mecanismo de protección fundamental en los sistemas operativos modernos.

7.  **c) GPT, porque soporta discos de más de 2 TB y no tiene el límite de 4 particiones primarias.**
    *   **Justificación:** MBR está limitado a discos de 2 TB y a 4 particiones primarias (o 3 primarias y 1 extendida). GPT es el estándar moderno necesario para discos grandes y un mayor número de particiones.

8.  **c) Un estado de bajo rendimiento causado por un exceso de fallos de página, donde el sistema pasa más tiempo moviendo páginas entre la RAM y el disco que ejecutando procesos.**
    *   **Justificación:** La hiperpaginación ocurre cuando la memoria RAM es insuficiente y el sistema se satura intercambiando datos con el disco, lo que degrada gravemente el rendimiento.

9.  **b) El Tipo 1 se instala directamente sobre el hardware, mientras que el Tipo 2 se ejecuta como una aplicación sobre un sistema operativo anfitrión.**
    *   **Justificación:** Esta es la definición clave que diferencia a los dos tipos de hipervisores. El Tipo 1 es "bare-metal" y el Tipo 2 es "hosted".

10. **b) La instantánea guarda un estado de la MV para poder restaurarlo, mientras que un clon enlazado es una nueva MV que comparte el disco virtual con la original.**
    *   **Justificación:** Una instantánea es un punto de restauración, no una nueva MV. Un clon enlazado es una nueva MV, pero dependiente de la original.

11. **b) Para mejorar la integración entre el sistema anfitrión y el huésped (mejor rendimiento gráfico, portapapeles compartido, etc.).**
    *   **Justificación:** Las Guest Additions son un paquete de controladores y utilidades que optimizan el rendimiento y la usabilidad de la máquina virtual.

12. **c) Adaptador Puente (Bridged Adapter)**
    *   **Justificación:** El modo puente conecta la MV directamente a la red física, permitiéndole tener su propia IP y ser visible para otros dispositivos como si fuera un ordenador más en la red.

13. **c) Software que se distribuye gratuitamente para probarlo, pero con funcionalidades limitadas o por un tiempo determinado, requiriendo un pago para su uso completo.**
    *   **Justificación:** Esta es la definición del modelo de distribución "prueba antes de comprar" del shareware.

14. **d) La memoria virtual es más rápida que la memoria RAM física.**
    *   **Justificación:** Esta afirmación es falsa. La memoria virtual utiliza el disco duro, que es significativamente más lento que la memoria RAM.

15. **a) `../config/config.txt`**
    *   **Justificación:** `..` sube al directorio padre (`/home/usuario`), y desde allí se puede acceder a la carpeta `config` y al archivo `config.txt`.

---

## Preguntas de Respuesta Breve

1.  **Explica la diferencia fundamental entre un programa y un proceso.**
    Un **programa** es un conjunto estático de instrucciones almacenado en un disco (una entidad pasiva). Un **proceso** es una instancia de un programa en ejecución; es una entidad activa que tiene asignados recursos como memoria, tiempo de CPU y un estado (listo, ejecución, etc.).

2.  **Describe brevemente qué son los buses de Datos, Direcciones y Control en la arquitectura de un ordenador.**
    *   **Bus de Datos:** Transporta los datos entre la CPU, la memoria y los periféricos.
    *   **Bus de Direcciones:** Transporta las direcciones de memoria a las que la CPU necesita acceder para leer o escribir datos.
    *   **Bus de Control:** Transporta las señales de control y estado que coordinan las actividades y operaciones entre los componentes (ej. señal de lectura/escritura).

3.  **¿Por qué es crucial mantener actualizado un sistema operativo? Menciona y explica brevemente dos tipos de beneficios que aportan las actualizaciones.**
    Es crucial por seguridad y funcionalidad. Los beneficios son:
    *   **Actualizaciones de Seguridad:** Cierran vulnerabilidades y agujeros de seguridad que podrían ser explotados por malware o atacantes para dañar el sistema o robar datos.
    *   **Actualizaciones Funcionales:** Añaden nuevas características, mejoran el rendimiento del sistema y corrigen errores (bugs) que causan inestabilidad o mal funcionamiento.

4.  **¿Cuál es la diferencia principal entre una partición primaria y una partición lógica en un esquema de particionado MBR?**
    En MBR, una **partición primaria** es una de las cuatro particiones principales que se pueden crear y puede contener un sistema operativo para arrancar desde ella. Una **partición lógica** es una sub-partición que debe crearse dentro de una partición extendida (que a su vez cuenta como una de las cuatro primarias). No se puede arrancar un SO directamente desde una partición lógica.

5.  **Explica por qué generalmente se recomienda instalar Windows antes que Linux en un sistema de arranque dual.**
    Se recomienda porque el instalador de Windows tiende a sobrescribir el gestor de arranque principal (MBR o partición EFI) sin tener en cuenta otros sistemas operativos. En cambio, el instalador de la mayoría de las distribuciones de Linux detecta la presencia de Windows y configura automáticamente su gestor de arranque (como GRUB) para ofrecer un menú que permita elegir entre ambos sistemas al encender el ordenador.

6.  **¿Qué es el `shell` de un sistema operativo y cuál es su función principal?**
    El `shell` es un programa que actúa como interfaz entre el usuario y el núcleo (kernel) del sistema operativo. Su función principal es interpretar los comandos introducidos por el usuario (ya sea por texto en una CLI o acciones en una GUI) y solicitar al sistema operativo que ejecute las tareas correspondientes.

7.  **Describe la diferencia entre los permisos de Lectura (Read) y Ejecución (Execute) cuando se aplican a un directorio en un sistema de archivos tipo Linux.**
    *   **Permiso de Lectura (r):** Permite listar el contenido del directorio (ver los nombres de los archivos y subdirectorios que contiene).
    *   **Permiso de Ejecución (x):** Permite acceder o "entrar" al directorio (usar `cd`) y acceder a los archivos y subdirectorios que contiene. Sin el permiso de ejecución, no se puede acceder al contenido del directorio, aunque se tenga permiso de lectura.

8.  **¿Qué problema soluciona el estándar de codificación de caracteres Unicode en comparación con ASCII?**
    Unicode soluciona el problema de la limitación de caracteres de ASCII. Mientras que ASCII solo puede representar 128 o 256 caracteres (principalmente del alfabeto inglés), Unicode es un estándar universal diseñado para representar prácticamente todos los caracteres de todos los idiomas del mundo, permitiendo así la correcta visualización de textos multilingües.

9.  **En el contexto de la virtualización, ¿cuál es la principal desventaja en términos de rendimiento y por qué ocurre?**
    La principal desventaja es la **sobrecarga de rendimiento**. Ocurre porque existe una capa de software adicional, el **hipervisor**, que se interpone entre el hardware físico y la máquina virtual. El hipervisor debe traducir y gestionar las peticiones de recursos de la MV, lo que consume tiempo de CPU y memoria que en un sistema real se usarían directamente.

10. **Explica la diferencia entre una clonación completa (full clone) y una clonación enlazada (linked clone) en VirtualBox, indicando una ventaja y una desventaja de cada una.**
    *   **Clonación Completa:** Crea una copia totalmente independiente de la MV. **Ventaja:** Es autónoma y no depende de la original. **Desventaja:** Ocupa mucho espacio en disco (el mismo que la original) y tarda más en crearse.
    *   **Clonación Enlazada:** Crea una MV que comparte el disco virtual con la original. **Ventaja:** Es muy rápida de crear y ocupa muy poco espacio. **Desventaja:** Depende de la MV original; si la original se borra o daña, el clon deja de funcionar.

11. **¿Qué es una instantánea (snapshot) en VirtualBox y para qué situación práctica la utilizarías?**
    Una instantánea es una "foto" guardada del estado completo de una máquina virtual en un momento concreto. La utilizaría justo **antes de realizar un cambio potencialmente peligroso**, como instalar un software desconocido, aplicar una actualización importante o modificar una configuración crítica del sistema. Si el cambio causa un problema, puedo restaurar la MV a la instantánea y deshacerlo todo al instante.

12. **Si estás solucionando un problema en un sistema operativo que no arranca, ¿qué es un "Live USB" y para qué te serviría?**
    Un **Live USB** es una memoria USB que contiene un sistema operativo completo que puede arrancar y ejecutarse directamente desde el USB sin instalarse en el disco duro. Sería útil para arrancar el ordenador, acceder a los archivos del disco duro interno para hacer una copia de seguridad, usar herramientas de diagnóstico para reparar el sistema de archivos o reinstalar el gestor de arranque.

13. **Define qué es la memoria virtual y explica brevemente cómo funciona el mecanismo de paginación.**
    La **memoria virtual** es una técnica que permite a un sistema simular que tiene más memoria principal (RAM) de la que realmente posee, utilizando para ello espacio en el disco duro. Funciona mediante la **paginación**, que divide los procesos en bloques de tamaño fijo (páginas). Solo las páginas necesarias se cargan en la RAM, y cuando se necesita una página que está en el disco (fallo de página), el SO la carga en la RAM, intercambiándola si es necesario por una página que no se esté usando.

14. **¿Qué son los atributos de "Solo Lectura" (Read-only) y "Oculto" (Hidden) en un archivo y cuál es su propósito?**
    *   **Solo Lectura:** Es un atributo que impide que un archivo sea modificado o borrado. Su propósito es proteger archivos importantes de cambios accidentales.
    *   **Oculto:** Es un atributo que hace que el archivo no sea visible por defecto en los exploradores de archivos. Su propósito es esconder archivos de sistema o de configuración que el usuario no necesita ver, para evitar desorden y manipulaciones indebidas.

15. **Explica qué es un gestor de arranque (bootloader) como GRUB y cuál es su papel en un sistema con múltiples sistemas operativos.**
    Un gestor de arranque es el primer programa que se ejecuta después de que la BIOS/UEFI completa su revisión inicial. Su función es cargar el núcleo (kernel) de un sistema operativo en la memoria para que comience a ejecutarse. En un sistema con múltiples SO, su papel es mostrar un menú al usuario al inicio, permitiéndole **elegir qué sistema operativo desea arrancar** en esa sesión.
