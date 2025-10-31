# Examen de Sistemas Operativos y Mantenimiento (Temas 1-3)

## Preguntas Tipo Test (15 preguntas)

**Instrucciones:** Selecciona la única respuesta correcta para cada pregunta.

---

**1. En la arquitectura Von Neumann, ¿qué componente es responsable de interpretar las instrucciones de un programa y generar las señales de control para coordinar el resto de componentes del sistema?**
    a) La Unidad Aritmético-Lógica (UAL).
    b) El bus de datos.
    c) La Unidad de Control (UC). (Correcta)
    d) La memoria principal.

**2. Un proceso se encuentra en estado "Bloqueado/En espera". ¿Cuál de las siguientes situaciones podría causar la transición de este proceso al estado "Listo"?**
    a) El planificador del sistema operativo le asigna un tiempo de CPU.
    b) El proceso ha finalizado su ejecución por completo.
    c) El proceso ha utilizado todo su cuanto de tiempo (quantum) en la CPU.
    d) Ha finalizado la operación de E/S que estaba esperando (por ejemplo, la lectura de un archivo). (Correcta)

**3. En un sistema de archivos Linux, se necesita que el propietario de un archivo tenga control total (leer, escribir y ejecutar), los miembros del grupo solo puedan leer y ejecutar, y otros usuarios no tengan ningún acceso. ¿Qué permisos en formato octal se corresponden con esta configuración?**
    a) 777
    b) 750 (Correcta)
    c) 644
    d) 700

**4. ¿Cuál es la principal ventaja de la técnica de *Journaling* en un sistema de archivos como NTFS o ext4?**
    a) Aumentar la velocidad de lectura de los archivos grandes.
    b) Permitir la compresión de archivos para ahorrar espacio en disco.
    c) Mejorar la fiabilidad y la consistencia del sistema de archivos ante un fallo de energía. (Correcta)
    d) Facilitar la compartición de archivos en una red local.

**5. ¿Cuál es la secuencia correcta en el proceso de arranque de un ordenador con un sistema operativo moderno (UEFI)?**
    a) Gestor de Arranque -> Firmware (UEFI) -> POST -> Carga del Kernel del SO.
    b) POST -> Firmware (UEFI) -> Gestor de Arranque -> Carga del Kernel del SO.
    c) Firmware (UEFI) -> POST -> Gestor de Arranque -> Carga del Kernel del SO. (Correcta)
    d) Carga del Kernel del SO -> Gestor de Arranque -> Firmware (UEFI) -> POST.

**6. ¿Cuál de las siguientes afirmaciones describe correctamente la diferencia entre el modo Usuario y el modo Núcleo (Kernel)?**
    a) El modo Usuario tiene acceso completo al hardware, mientras que el modo Núcleo es limitado.
    b) Las aplicaciones comunes se ejecutan en modo Núcleo para mayor rendimiento.
    c) Un fallo en modo Usuario puede bloquear todo el sistema, mientras que un fallo en modo Núcleo solo cierra la aplicación.
    d) El modo Núcleo tiene acceso sin restricciones al hardware, mientras que el modo Usuario tiene un acceso restringido para proteger la estabilidad del sistema. (Correcta)

**7. Si necesitas instalar 5 sistemas operativos diferentes en un disco duro de 8 TB, ¿qué esquema de particionado deberías utilizar y por qué?**
    a) MBR, porque es compatible con todos los sistemas operativos.
    b) MBR, porque permite crear hasta 128 particiones.
    c) GPT, porque soporta discos de más de 2 TB y no tiene el límite de 4 particiones primarias. (Correcta)
    d) GPT, porque es el único sistema que permite el arranque dual.

**8. ¿Qué es la hiperpaginación (thrashing) en el contexto de la gestión de memoria virtual?**
    a) Un estado en el que la CPU está inactiva la mayor parte del tiempo.
    b) Un problema de seguridad que permite a los procesos acceder a la memoria de otros.
    c) Un estado de bajo rendimiento causado por un exceso de fallos de página, donde el sistema pasa más tiempo moviendo páginas entre la RAM y el disco que ejecutando procesos. (Correcta)
    d) Una técnica de optimización que permite ejecutar programas más grandes que la memoria física disponible.

**9. ¿Cuál es la principal diferencia entre un hipervisor de Tipo 1 (bare-metal) y uno de Tipo 2 (hosted)?**
    a) El Tipo 1 se instala sobre un sistema operativo anfitrión, mientras que el Tipo 2 se instala directamente sobre el hardware.
    b) El Tipo 1 se instala directamente sobre el hardware, mientras que el Tipo 2 se ejecuta como una aplicación sobre un sistema operativo anfitrión. (Correcta)
    c) El Tipo 1 es exclusivo para virtualizar Linux, y el Tipo 2 para virtualizar Windows.
    d) El Tipo 1 es de código abierto (como VirtualBox) y el Tipo 2 es propietario (como VMware ESXi).

**10. En VirtualBox, ¿cuál es la diferencia fundamental entre una instantánea (snapshot) y un clon enlazado (linked clone)?**
    a) La instantánea es una copia completa e independiente, mientras que el clon enlazado depende de la máquina virtual original.
    b) La instantánea guarda un estado de la MV para poder restaurarlo, mientras que un clon enlazado es una nueva MV que comparte el disco virtual con la original. (Correcta)
    c) Solo se pueden crear clones enlazados de máquinas virtuales Linux.
    d) Las instantáneas ocupan más espacio en disco que los clones enlazados.

**11. ¿Para qué sirven las "Guest Additions" de VirtualBox?**
    a) Para instalar un nuevo sistema operativo en una máquina virtual.
    b) Para mejorar la integración entre el sistema anfitrión y el huésped (mejor rendimiento gráfico, portapapeles compartido, etc.). (Correcta)
    c) Para conectar la máquina virtual a Internet.
    d) Para crear instantáneas y clones de la máquina virtual.

**12. Quieres que tu máquina virtual actúe como un servidor accesible desde otros ordenadores de tu red local, obteniendo su propia dirección IP del router. ¿Qué tipo de configuración de red deberías usar en VirtualBox?**
    a) NAT
    b) Red Interna
    c) Adaptador Puente (Bridged Adapter) (Correcta)
    d) Solo anfitrión (Host-Only Adapter)

**13. ¿Qué es una licencia "Shareware"?**
    a) Software que se puede usar, modificar y distribuir libremente, incluido su código fuente.
    b) Software gratuito cuyo código fuente no está disponible.
    c) Software que se distribuye gratuitamente para probarlo, pero con funcionalidades limitadas o por un tiempo determinado, requiriendo un pago para su uso completo. (Correcta)
    d) Un contrato que restringe la copia y distribución del software.

**14. ¿Cuál de las siguientes afirmaciones sobre la memoria virtual es FALSA?**
    a) Permite ejecutar programas cuyo tamaño es mayor que la memoria RAM física.  (Correcta)
    b) Utiliza espacio en el disco duro para extender la memoria RAM.
    c) Un fallo de página ocurre cuando la parte del proceso necesitada no se encuentra en la memoria RAM.
    d) La memoria virtual es más rápida que la memoria RAM física.

**15. En un sistema de archivos, el directorio actual es `/home/usuario/documentos`. ¿Cuál es la ruta relativa para acceder al archivo `config.txt` ubicado en `/home/usuario/config`?**
    a) `../config/config.txt` (Correcta)
    b) `~/config/config.txt`
    c) `/home/usuario/config/config.txt`
    d) `config/config.txt`

---

## Preguntas de Respuesta Breve (15 preguntas)

**Instrucciones:** Responde a cada pregunta de forma clara y concisa.

---

**1. Explica la diferencia fundamental entre un programa y un proceso.**

**2. Describe brevemente qué son los buses de Datos, Direcciones y Control en la arquitectura de un ordenador.**

**3. ¿Por qué es crucial mantener actualizado un sistema operativo? Menciona y explica brevemente dos tipos de beneficios que aportan las actualizaciones.**

**4. ¿Cuál es la diferencia principal entre una partición primaria y una partición lógica en un esquema de particionado MBR?**

**5. Explica por qué generalmente se recomienda instalar Windows antes que Linux en un sistema de arranque dual.**

**6. ¿Qué es el `shell` de un sistema operativo y cuál es su función principal?**

**7. Describe la diferencia entre los permisos de Lectura (Read) y Ejecución (Execute) cuando se aplican a un directorio en un sistema de archivos tipo Linux.**

**8. ¿Qué problema soluciona el estándar de codificación de caracteres Unicode en comparación con ASCII?**

**9. En el contexto de la virtualización, ¿cuál es la principal desventaja en términos de rendimiento y por qué ocurre?**

**10. Explica la diferencia entre una clonación completa (full clone) y una clonación enlazada (linked clone) en VirtualBox, indicando una ventaja y una desventaja de cada una.**

**11. ¿Qué es una instantánea (snapshot) en VirtualBox y para qué situación práctica la utilizarías?**

**12. Si estás solucionando un problema en un sistema operativo que no arranca, ¿qué es un "Live USB" y para qué te serviría?**

**13. Define qué es la memoria virtual y explica brevemente cómo funciona el mecanismo de paginación.**

**14. ¿Qué son los atributos de "Solo Lectura" (Read-only) y "Oculto" (Hidden) en un archivo y cuál es su propósito?**

**15. Explica qué es un gestor de arranque (bootloader) como GRUB y cuál es su papel en un sistema con múltiples sistemas operativos.**
