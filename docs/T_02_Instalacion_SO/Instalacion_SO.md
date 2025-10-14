# Instalación y Gestión Básica de un Sistema Operativo

## 1. Funciones del Sistema Operativo

El **sistema operativo (SO)** es como el director de orquesta de un ordenador. Sin él, el hardware (los componentes físicos) sería inútil. Su principal función es gestionar los recursos para que tú, el usuario, y los programas podáis usar el ordenador de forma eficiente.

### 1.1. Gestión de Recursos (CPU, memoria, E/S)

El sistema operativo (SO) es el encargado de administrar y coordinar todos los **recursos de hardware** de tu equipo para que los programas puedan funcionar de manera eficiente y sin conflictos. Piensa en él como un director de tráfico que asegura que todo fluya correctamente.


#### 1.1.1. **Gestión de la CPU (Unidad Central de Procesamiento)**

La CPU es el "cerebro" del ordenador, la parte que ejecuta las instrucciones de los programas. Dado que la CPU solo puede procesar una tarea (o muy pocas, si es multi-núcleo) en un instante determinado, el SO debe decidir de forma justa y eficiente qué programa o proceso usa la CPU en cada momento.

Imagina que la CPU es un chef muy rápido en una cocina, y cada programa (como el navegador web, un juego o un editor de texto) es un plato diferente que necesita ser cocinado. El SO actúa como el jefe de cocina que organiza al chef: le asigna un poco de tiempo a un plato, luego a otro, y así sucesivamente, tan rápido que parece que el chef está cocinando todos los platos a la vez.

El objetivo del SO es que todos los programas tengan su turno, evitando que uno monopolice al chef y que el sistema se quede "colgado" o lento. Para esto, el SO utiliza técnicas como la **multitarea**, donde alterna rápidamente entre procesos activos, dando la ilusión de que se ejecutan simultáneamente.

#### 1.1.2. **Gestión de la Memoria (RAM)**

La Memoria de Acceso Aleatorio (RAM) es como la "mesa de trabajo" del chef, donde se guardan temporalmente los ingredientes y las recetas que se están usando activamente. La RAM es mucho más rápida que el disco duro para acceder a los datos. El SO es crucial aquí porque controla qué parte de la memoria RAM usa cada programa.

Su función es:

- **Asignar espacio:** Cuando abres un programa, el SO le asigna un bloque de RAM para que cargue sus datos e instrucciones.
- **Proteger la memoria:** Evita que un programa sobrescriba la memoria de otro, lo que causaría errores o fallos en el sistema.
- **Optimizar el uso:** Libera la memoria que ya no está siendo utilizada por programas cerrados o inactivos, haciendo que esté disponible para otras aplicaciones.

**Memoria Virtual**

Sabemos que un proceso necesita estar completamente en la memoria para ejecutarse. Sin embargo, con la **Memoria Virtual**, se permite que solo las partes del proceso que se están utilizando en ese momento estén en la memoria principal, mientras que el resto permanece en la memoria secundaria. Esto libera espacio en la memoria principal para que se puedan ejecutar más procesos a la vez. Además, este método nos permite ejecutar programas que son más grandes que la memoria física del sistema.

Cuando un proceso necesita acceder a una parte de la memoria que no está en la memoria principal, ocurre un **fallo de página**. En ese momento, el sistema busca un espacio libre en la memoria principal y carga allí la información necesaria. Si no hay espacio libre, el sistema debe reemplazar una parte de la memoria ocupada por otra información menos importante, usando un algoritmo especial para decidir qué reemplazar.

Mientras se realiza este proceso, el programa que generó el fallo de página se detiene momentáneamente.

Este método permite usar la memoria de manera más eficiente, ya que podemos cargar más procesos en la misma cantidad de memoria y así aprovechar mejor el procesador. Sin embargo, si hay demasiados fallos de página, el acceso al disco se vuelve muy frecuente y el rendimiento del sistema puede disminuir drásticamente. Este problema se llama **hiperpaginación**.

!!! info "Obervación"
    Una buena gestión de RAM es fundamental para evitar la lentitud y los bloqueos del sistema.


#### 1.1.3. **Gestión de E/S (Entrada/Salida)**

E/S se refiere a la entrada de datos al ordenador (por ejemplo, al escribir en el teclado, hacer clic con el ratón, leer desde un disco) y la salida de datos del ordenador (por ejemplo, mostrar algo en pantalla, imprimir un documento, guardar un archivo en el disco). El SO se encarga de la comunicación fluida y organizada entre el ordenador y todos los dispositivos externos.

Esto incluye:

- **Teclado y ratón:** Recibe tus pulsaciones y movimientos.
- **Impresora:** Envía los documentos para que se impriman.
- **Discos duros y SSD:** Gestiona la lectura y escritura de archivos.
- **Webcams, micrófonos, altavoces:** Controla la captura y reproducción de audio y video.

El SO asegura que estos dispositivos funcionen correctamente, maneja los **controladores (drivers)** necesarios para que el hardware sea reconocido y utilizado, y gestiona las peticiones de los programas para acceder a ellos, evitando que varios programas intenten usar el mismo dispositivo a la vez de forma conflictiva.

### 1.2. Gestión de Procesos

Un **proceso** es un programa en ejecución. El SO se encarga de:

- **Crear y eliminar procesos:** Cuando abres un programa, el SO crea un proceso; cuando lo cierras, lo elimina.
- **Suspender y reanudar procesos:** Puede detener temporalmente un proceso y luego continuarlo.
- **Sincronización de procesos:** Asegura que los procesos que necesitan trabajar juntos lo hagan de forma ordenada.
- **Comunicación entre procesos:** Permite que diferentes programas se "hablen" entre sí.

**Planificación de procesos**

Para que un sistema multiprogramado sea eficaz necesita una Planificación de procesos, ir asignando procesos al procesador a lo largo del tiempo. Objetivos:

- Rendimiento: Trata de maximizar el número de acciones que se completan en un plazo de tiempo determinado.
- Tiempo de respuesta: El sistema debe responder a las solicitudes de los usuarios en un tiempo adecuado.
- Tiempo de retorno: El sistema debe ofrecer resultados de los procesos por lotes en un tiempo adecuado.
- Equidad: Todos los procesos deben ser considerados según sus características.
- Eficiencia: Se debe aspirar a que el procesador esté activo constantemente.

El módulo del sistema operativo que se encarga de esta tarea se denomina **Planificador** (en inglés, Scheduler).

Según el diseño del sistema operativo, el Planificador utilizará unos criterios u otros para llevar a cabo su tarea. Estos criterios reciben el nombre de Algoritmos de Planificación (o también, Políticas de Planificación).

### 1.3. Gestión de Archivos

El SO organiza la información en el disco duro mediante un **sistema de archivos**. Esto incluye:

- **Creación, eliminación y modificación de archivos y carpetas.**
- **Acceso a los archivos:** Permite a los programas leer y escribir en ellos.
- **Protección de archivos:** Asegura que solo los usuarios autorizados puedan acceder a cierta información.

### 1.4. Interfaz de Usuario

Es la forma en que el usuario interactúa con el SO. Puede ser:

- **Interfaz de Línea de Comandos (CLI):** El usuario escribe comandos de texto (ejemplo: `cd /home/usuario`). Es rápida y potente para usuarios avanzados.
- **Interfaz Gráfica de Usuario (GUI):** El usuario interactúa mediante ventanas, iconos, menús y un puntero (ejemplo: Windows, macOS, entornos de escritorio de Linux como GNOME o KDE). Es más intuitiva y fácil de usar para la mayoría.


## 2. Arquitectura del Sistema Operativo

La arquitectura de un sistema operativo es cómo están organizadas sus diferentes partes para trabajar juntas.

### 2.1. Núcleo (Kernel), Shell y Utilidades

- **Núcleo (Kernel):** Es la parte más importante del SO, su "corazón". Se encarga de las funciones más básicas y críticas, como la gestión de la memoria, los procesos y el acceso al hardware. El kernel es lo primero que se carga cuando enciendes el ordenador.
- **Shell:** Actúa como un intérprete entre el usuario y el kernel. Recibe las órdenes del usuario (ya sea por comandos o clics en la GUI) y las traduce para que el kernel las entienda. En sistemas como Linux, la "shell" a menudo se refiere a la interfaz de línea de comandos (ej. Bash). En Windows, la GUI y el explorador de archivos cumplen un rol similar.
- **Utilidades:** Son programas adicionales que vienen con el SO y ayudan a realizar tareas específicas, como copiar archivos, formatear discos, o comprimir datos. (ej. Bloc de notas, Calculadora, Explorador de archivos).

### 2.2. Modo Usuario y Modo Núcleo

Para garantizar la estabilidad y seguridad del sistema, los sistemas operativos modernos operan en dos modos principales:

- **Modo Usuario:** Es el modo en el que se ejecutan la mayoría de las aplicaciones y programas. En este modo, los programas tienen un acceso limitado a los recursos del hardware. Si un programa en modo usuario falla, no suele afectar a todo el sistema.
- **Modo Núcleo (o Modo Privilegiado):** Es el modo en el que se ejecuta el kernel del sistema operativo. En este modo, el kernel tiene acceso completo y sin restricciones a todo el hardware y a todos los recursos del sistema. Un fallo en el modo núcleo puede provocar que todo el sistema se bloquee o deje de funcionar (la famosa "pantalla azul de la muerte" en Windows o un "kernel panic" en Linux).


## 3. Verificación de la Idoneidad del Hardware

Antes de instalar cualquier sistema operativo, es crucial asegurarse de que tu hardware es compatible y cumple con los requisitos mínimos. Instalar un SO en un hardware inadecuado puede resultar en un rendimiento deficiente o incluso imposibilitar la instalación.

### 3.1. Requisitos Mínimos del Sistema (RAM, CPU, espacio en disco)

Cada sistema operativo tiene unas especificaciones mínimas para funcionar correctamente. Siempre debes consultar la documentación oficial del SO que quieres instalar.

- **RAM (Memoria de Acceso Aleatorio):** La cantidad de RAM necesaria. Si tienes menos de lo recomendado, el SO funcionará muy lento. Por ejemplo, Windows 11 requiere un mínimo de 4 GB de RAM.
- **CPU (Unidad Central de Procesamiento):** La velocidad y el número de núcleos del procesador. Algunos SO requieren procesadores de 64 bits.
- **Espacio en disco:** La cantidad de espacio libre en el disco duro o SSD que necesita el SO para instalarse y funcionar. También considera el espacio para tus programas y archivos.

### 3.2. Compatibilidad de Componentes

Además de los requisitos mínimos, es importante verificar la compatibilidad de otros componentes:

- **Tarjeta gráfica:** Algunos SO requieren tarjetas gráficas con ciertas capacidades o drivers específicos.
- **Tarjeta de red (Ethernet o Wi-Fi):** Necesaria para la conectividad a Internet.
- **Placa base:** Asegúrate de que el BIOS/UEFI de la placa base es compatible con el SO.
- **Periféricos:** Impresoras, escáneres, etc., pueden necesitar controladores específicos.

**¿Cómo verificar?**

- Consulta las páginas web oficiales del fabricante del SO.
- Utiliza herramientas de diagnóstico de hardware (algunos SO ofrecen utilidades de diagnóstico, o puedes usar programas de terceros).
- En Windows, puedes usar `dxdiag` o la información del sistema. En Linux, comandos como `lshw` o `lspci` son útiles.

## 4. Selección del Sistema Operativo

Elegir el sistema operativo adecuado es una decisión importante que depende de varios factores.

### 4.1. Criterios de Selección (licencia, requisitos, compatibilidad de software, preferencias del usuario)

- **Licencia:** ¿Es un software libre o propietario? Esto afecta al coste y a la libertad de uso.
- **Requisitos de Hardware:** Como vimos, ¿tu equipo cumple los requisitos?
- **Compatibilidad de Software:** ¿Necesitas programas específicos que solo funcionan en un SO determinado (ej. software de diseño gráfico, juegos)?
- **Preferencias del Usuario y Facilidad de Uso:** ¿Estás más cómodo con una interfaz gráfica o con la línea de comandos? ¿Ya tienes experiencia con algún SO en particular?
- **Soporte y Comunidad:** ¿Hay una buena comunidad o soporte disponible si tienes problemas?
- **Seguridad:** Algunos SO son percibidos como más seguros que otros, aunque la seguridad depende mucho de las prácticas del usuario.

### 4.2. Sistemas Operativos Libres y Propietarios

#### 4.2.1. Sistemas Operativos Propietarios

- **Definición:** Software cuyo código fuente no está disponible públicamente y su uso está restringido por una licencia. Generalmente, hay que pagar por ellos.
- **Ventajas:**
    - Soporte técnico profesional del fabricante.
    - Gran compatibilidad con hardware y software comercial.
    - Interfaz de usuario pulida y muy intuitiva.
- **Desventajas:**
    - Coste inicial.
    - Menos flexibilidad y personalización.
    - Dependencia del fabricante para actualizaciones y correcciones.
- **Ejemplos:** **Microsoft Windows**, **macOS (Apple)**.

#### 4.2.2. Sistemas Operativos Libres (Open Source)

- **Definición:** Software cuyo código fuente es accesible para cualquiera, que puede usarlo, estudiarlo, modificarlo y distribuirlo libremente. No suelen tener un coste de licencia (aunque puede haber servicios de soporte de pago).
- **Ventajas:**
    - Gratuitos (en cuanto a licencia).
    - Gran flexibilidad y personalización.
    - Mayor seguridad (la comunidad puede encontrar y corregir errores más rápido).
    - Independencia de un único fabricante.
    - Comunidad activa y colaborativa.
- **Desventajas:**
    - Curva de aprendizaje para usuarios no familiarizados.
    - Menor compatibilidad con ciertos programas comerciales o hardware muy específico.
    - El soporte suele ser comunitario (foros, wikis), aunque hay empresas que ofrecen soporte profesional para distribuciones específicas.
- **Ejemplos:** **GNU/Linux** (en sus diversas **distribuciones** como Ubuntu, Fedora, Debian, Mint), **FreeBSD**.


## 5. Elaboración de un Plan de Instalación

Una buena planificación es clave para una instalación exitosa y sin problemas.

### 5.1. Particionado del Disco

Las particiones en un disco duro son divisiones lógicas o secciones separadas que se crean en el espacio de almacenamiento de un disco. Estas particiones permiten organizar y gestionar mejor la información almacenada en el disco.

Una **tabla de particiones** es una estructura de datos en un disco duro que contiene información sobre la organización de las particiones en ese disco. La tabla de particiones actúa como un mapa que le dice al sistema operativo dónde comienza y termina cada partición en el disco.

El **particionado** es el proceso de dividir un disco duro en una o más secciones lógicas llamadas **particiones**. Cada partición actúa como un disco separado.

#### 5.1.1. ¿Por qué particionar?

- **Organización:** Puedes separar el sistema operativo de tus datos personales, facilitando reinstalaciones sin perder información.
- **Sistemas multiarranque (Dual-boot):** Para instalar varios sistemas operativos en el mismo disco.
- **Rendimiento:** A veces, separar ciertas áreas (como la partición de intercambio en Linux) puede mejorar el rendimiento.

#### 5.1.2. Tablas de particiones

Hay diferentes estándares para las tablas de particiones, siendo los más comunes el MBR (Master Boot Record) y el GPT (GUID Partition Table)

- **MBR** (Master Boot Record) es un tipo de tabla de particiones y un sector de arranque que se encuentra en el primer sector (el sector cero) de un disco duro. Contiene información crítica para el inicio del sistema operativo y la organización de las particiones en el disco.
- **GPT** (GUID Partition Table) es un estándar de partición más moderno y robusto. Utiliza identificadores únicos globales (GUID) para identificar particiones y proporciona una mayor flexibilidad en términos de capacidad y organización de particiones

/// html | div[style='text-align: center;']

  | **Característica**     | **MBR**                  | **GPT**                        |
  |------------------------|--------------------------|--------------------------------|
  | **Fiabilidad**             | Menor                    | Mayor                          |
  | **Número de Particiones** | Limitadas (4)            | Ilimitadas                     |
  | **Tamaño de Particiones**  | Hasta 2TB                | Sin límite de tamaño           |
  | **Replicas**               | Una única réplica        | Varias réplicas                |
  | **Compatibilidad S.O.**    | 32 y 64 bits             | Solo 64 bits                   |

///

**Tipos de particiones en MBR**:

- **Partición Primaria:**
    - Es la partición principal en un disco duro.
    - Puedes tener hasta cuatro particiones primarias en un disco.
    - Una de estas particiones primarias puede ser designada como "activa" y contener el cargador de arranque del sistema operativo.
- **Partición Extendida**:
    - Se utiliza para crear particiones lógicas adicionales dentro de ella.
    - Puedes tener solo una partición extendida en un disco.
    - No se utiliza directamente para almacenar datos, pero sirve como contenedor para particiones lógicas.
- **Partición Lógica**:
    - Se crea dentro de una partición extendida.
    - No puedes arrancar un sistema operativo directamente desde una partición lógica; necesitas una partición primaria o una partición activa para eso.
    - Puedes tener varias particiones lógicas dentro de una partición extendida.

#### 5.1.3. Herramientas para particionar

- El propio instalador del sistema operativo (todos suelen incluir un gestor de particiones).
- Herramientas externas como GParted (Linux), la Administración de discos de Windows.

### 5.2. Creación de Medios de Instalación (USB booteable, DVD)

Necesitarás un medio para arrancar el proceso de instalación del SO.

- **Imagen ISO:** La mayoría de los sistemas operativos se distribuyen como archivos ISO, que son imágenes de disco.
- **USB booteable:** Es la opción más común hoy en día.
    - Necesitas una memoria USB (mínimo 8 GB para la mayoría de SO modernos).
    - Software para "grabar" la ISO en el USB, haciéndolo arrancable (ejemplos: Rufus en Windows, Etcher para multiplataforma, `dd` en Linux).
- **DVD:** Menos común ahora, pero sigue siendo una opción si tu equipo tiene unidad de DVD. Necesitas un DVD virgen y un programa para grabar la ISO en él.

??? info "Ejercicio practico"
    ## Ejercicio Práctico: Gestión de Particiones de Disco

    Imagina que tienes dos ordenadores con diferentes necesidades y tecnologías. Debes recomendar la mejor configuración de particiones para cada uno, utilizando los conocimientos sobre MBR y GPT.

    ### 1. Escenario del Servidor (Máximo Rendimiento y Capacidad)
    Un cliente quiere montar un servidor de archivos que requiere:

    - Máxima fiabilidad en la tabla de particiones.
    - Un disco duro de 5 TB para almacenar datos.
    - Poder crear más de diez particiones para organizar diferentes proyectos.

    Completa esta tablas con la elección que decidas más apropiada.

    |Aspecto|Elección (MBR o GPT)|	Justificación (Basada en las características)|
    |-----------|-------------------------|-----------------------|
    |Tabla de Particiones	| ||
    |Límite de Particiones	| ||
    |Fiabilidad		| ||

    ### 2. Escenario del PC de Soporte (Compatibilidad con MBR)

    Un técnico necesita preparar un antiguo PC de soporte que solo tiene el firmware BIOS para que pueda arrancar un sistema operativo de 32 bits. El disco duro es pequeño, de 500 GB, y necesita tres tipos de divisiones específicas para el arranque, los datos y una partición auxiliar.

    Asigna el tipo de partición MBR más adecuado a cada función, sabiendo que solo puedes usar una Partición Extendida.

    |Función Deseada	|Tipo de Partición MBR a Asignar|Razón de la Elección|
    |-----------|-------------------------|-----------------------|
    |División 1: Contener el cargador de arranque del SO.| ||		
    |División 2: Almacenar datos del usuario de forma segura. No debe arrancar el SO.| ||		
    |División 3: La única división que puede albergar las divisiones lógicas restantes.| ||		

### 5.3. Copia de Seguridad de Datos

**¡ESTO ES LO MÁS IMPORTANTE!** Antes de cualquier instalación o manipulación de discos, **siempre haz una copia de seguridad de todos tus datos importantes**. Un error en el proceso de instalación puede borrar tus archivos irremediablemente.

- **¿Qué respaldar?** Documentos, fotos, videos, proyectos, configuraciones personalizadas de programas.
-0 **¿Dónde respaldar?** Discos duros externos, servicios de almacenamiento en la nube (Google Drive, OneDrive, Dropbox), otras unidades de red.


## 6. Configuración de Parámetros Básicos de la Instalación

Durante el proceso de instalación, el SO te pedirá una serie de configuraciones esenciales.

### 6.1. Idioma, Zona Horaria, Teclado

- **Idioma:** El idioma principal del sistema operativo.
- **Zona horaria:** Para que el reloj del sistema muestre la hora correcta.
- **Disposición del teclado:** Muy importante para que las teclas correspondan con los caracteres que se muestran en pantalla (ej. teclado español tiene la 'ñ', el inglés no).

### 6.2. Creación de Usuarios y Contraseñas

- **Usuario Administrador/Root:** En muchos SO, se te pedirá crear una cuenta con privilegios administrativos (superusuario). Esta cuenta tiene control total sobre el sistema. Es crucial elegir una contraseña **fuerte**.
- **Usuario Estándar:** Para el uso diario, es recomendable usar una cuenta de usuario estándar con menos privilegios. Esto reduce el riesgo si se ejecuta software malicioso.
- **Contraseñas:**
    - Usa combinaciones de letras mayúsculas y minúsculas, números y símbolos.
    - Evita información personal fácil de adivinar.
    - No uses la misma contraseña para todo.

### 6.3. Configuración de Red Básica

Durante la instalación, el SO intentará configurar la conexión a Internet.

- **DHCP (Dynamic Host Configuration Protocol):** En la mayoría de los casos, la configuración se realiza automáticamente si hay un servidor DHCP en tu red (tu router).
- **Configuración Manual:** Si tu red lo requiere, deberás introducir manualmente:
    - Dirección IP
    - Máscara de subred
    - Puerta de enlace predeterminada (Gateway)
    - Servidores DNS


## 7. Arranque de un ordenador

El proceso de arranque de un ordenadoar es una secuencia de relevos de control:

1.  **Encendido y Control del Firmware (BIOS/UEFI):**
    * Al encender el PC, la CPU comienza a ejecutar el código almacenado en una memoria especial de la placa base: el **Firmware** (BIOS o UEFI).
    * El Firmware realiza el **POST** (*Power-On Self-Test*), una autocomprobación para asegurar que los componentes de *hardware* esenciales funcionen correctamente.
    * Inicializa los componentes principales (como los controladores de disco).
    * Finalmente, busca un dispositivo de arranque (disco duro, USB, etc.) según el orden de arranque configurado.

2.  **Transición al Gestor de Arranque (Bootloader):**
    * Una vez que el Firmware localiza el dispositivo de arranque, lee los primeros sectores (en sistemas **BIOS/MBR**) o la partición del sistema EFI (en sistemas **UEFI**) para encontrar el **Gestor de Arranque** (Bootloader).
    * El Firmware **transfiere el control** de la CPU al Bootloader.

3.  **Carga del Sistema Operativo por el Bootloader:**
    * El Bootloader toma el control.
    * Si hay varios sistemas operativos instalados, puede mostrar un **menú** para que el usuario elija.
    * El Bootloader sabe dónde se encuentra el **núcleo (kernel)** del sistema operativo en el disco.
    * Procede a **cargar** ese núcleo del SO y los archivos iniciales a la memoria **RAM**.
    * Una vez que el núcleo del SO está cargado en la memoria, el Bootloader **transfiere el control** a este núcleo.

4.  **Inicio del Sistema Operativo:**
    * El núcleo del SO toma el control total del sistema, inicializa todos los *drivers* y procesos restantes, y finalmente carga el entorno de usuario (por ejemplo, el escritorio de Windows o Linux).


**Diferencia entre Firmware y Gestor de Arranque**

| Componente | Nombres Comunes | Función Principal | Orientación | Dependencia |
| :--- | :--- | :--- | :--- | :--- |
| **Firmware** | **BIOS** (Sistema Básico de Entrada/Salida) o **UEFI** (Interfaz de Firmware Extensible Unificada) | Inicializa y verifica el **hardware** del ordenador (CPU, RAM, discos, etc.). Busca y transfiere el control al *Bootloader*. | **Hardware** (Es leal a la placa base). | Específico del hardware. |
| **Gestor de Arranque** (**Bootloader**) | **GRUB**, **LILO**, **Windows Boot Manager** (Bootmgr) | Localiza, carga e inicia el **núcleo** (kernel) del sistema operativo (SO) en la memoria RAM. A menudo ofrece un menú para elegir el SO. | **Software** (Es leal al sistema operativo). | Específico del SO. |

En esencia, el **Firmware** es el primer programa que se ejecuta y prepara la plataforma; el **Bootloader** es el segundo programa que se ejecuta y es el puente entre el hardware listo y el inicio del sistema operativo.


El **gestor de arranque (boot manager/loader)** es un pequeño programa que se carga antes que el sistema operativo. Su función principal es permitirte elegir qué sistema operativo iniciar si tienes varios instalados en tu ordenador.

### 7.1. Gestor de Arranque (GRUB, Windows Boot Manager)

- **¿Qué hace?** Muestra un menú al iniciar el ordenador, dándote la opción de seleccionar qué SO quieres cargar. También se encarga de iniciar el SO elegido.
- **Ejemplos:**
    - **GRUB (Grand Unified Bootloader):** Es el gestor de arranque estándar en la mayoría de las distribuciones de GNU/Linux. Es muy potente y configurable.
    - **Windows Boot Manager:** Es el gestor de arranque por defecto en los sistemas operativos de Microsoft Windows (desde Windows Vista en adelante).

### 7.2. Instalación y Configuración para Sistemas Multiarranque

Cuando instalas un segundo sistema operativo (ej. Linux junto a Windows), el nuevo SO intentará instalar su gestor de arranque.

- **Orden de Instalación:** Generalmente, es más sencillo instalar primero Windows y luego Linux. El instalador de Linux suele detectar Windows y configurar GRUB para que puedas elegir entre ambos.
- **Ubicación del Gestor de Arranque:**
    - **MBR (Master Boot Record):** En sistemas BIOS/MBR, el gestor de arranque se instala en el MBR, el primer sector del disco duro.
    - **EFI/UEFI:** En sistemas más modernos, el gestor de arranque se instala en la **EFI System Partition (ESP)**.
- **Problemas Comunes:** Si instalas Windows después de Linux, Windows puede sobrescribir el GRUB, haciendo que no puedas arrancar Linux. En ese caso, necesitarás reparar GRUB usando un Live USB de Linux.

## 8. Incidencias de la Instalación

Incluso con una buena planificación, pueden surgir problemas durante la instalación. Saber cómo identificarlos y resolverlos es una habilidad valiosa.

### 8.1. Errores Comunes y su Resolución

- **"No bootable device found" o similar:**
    - **Causa:** El ordenador no encuentra un sistema operativo o un medio de instalación.
    - **Solución:**
        - Verifica que el USB/DVD de instalación esté bien conectado y sea booteable.
        - Comprueba la **secuencia de arranque (boot order)** en la BIOS/UEFI para asegurarte de que el ordenador intenta arrancar desde el medio correcto.
        - Asegúrate de que el disco duro está correctamente conectado y reconocido.
- **Pantalla negra/problemas gráficos:**
    - **Causa:** Incompatibilidad de controladores gráficos o problemas con la resolución.
    - **Solución:**
        - Prueba a arrancar el instalador en **modo seguro** o con opciones de "nomodeset" (en Linux).
        - Asegúrate de que tu tarjeta gráfica sea compatible.
- **Errores de particionamiento:**
    - **Causa:** Intentar instalar en una partición que no es adecuada, o errores al crear/redimensionar particiones.
    - **Solución:** Revisa el plan de particionamiento. Asegúrate de tener espacio suficiente y de no borrar particiones importantes.
- **El sistema operativo no arranca después de la instalación:**
    - **Causa:** Problemas con el gestor de arranque (MBR corrupto, GRUB mal configurado) o errores críticos durante la instalación.
    - **Solución:**
        - Usa las herramientas de reparación del propio instalador (ej. "Reparar inicio" en Windows).
        - Para Linux, usa un Live USB y herramientas como `boot-repair`.

### 8.2. Herramientas de Diagnóstico

- **BIOS/UEFI:** Puedes acceder a la configuración de la BIOS/UEFI al iniciar el ordenador (normalmente pulsando `Del`, `F2`, `F10` o `F12`). Desde allí puedes verificar la detección de hardware, la secuencia de arranque y realizar algunas pruebas básicas.
- **Live USB/DVD:** Un Live USB/DVD de un sistema operativo (normalmente Linux) te permite arrancar el ordenador sin instalar nada. Es una herramienta muy útil para:
    - Acceder a los archivos del disco duro si el SO principal no arranca.
    - Reparar el gestor de arranque.
    - Probar si el hardware funciona correctamente antes de instalar.
    - Particionar o formatear discos.
- **Herramientas de diagnóstico de disco:** `chkdsk` en Windows, `fsck` en Linux, o herramientas de terceros como `CrystalDiskInfo` para verificar la salud del disco duro.
- **MemTest86:** Una herramienta para probar la memoria RAM y detectar posibles fallos.


## 9. Normas de Utilización del Software (Licencias)

Entender las licencias de software es fundamental para usarlo de forma legal y ética.

### 9.1. Tipos de Licencias (GPL, EULA, freeware, shareware)

- **Licencia de Software Propietario (EULA - End-User License Agreement):**
    - **Definición:** Un contrato entre el desarrollador del software y el usuario final. Define los términos bajo los cuales el software puede ser usado.
    - **Características:** Generalmente restringe la copia, modificación y distribución. El usuario compra el derecho a usar el software, no el software en sí.
    - **Ejemplo:** La mayoría de software comercial como Microsoft Office, Adobe Photoshop.

- **Licencia Pública General (GPL - General Public License):**
    - **Definición:** Una de las licencias de software libre más populares. Garantiza cuatro libertades esenciales para los usuarios:
        1.  La libertad de ejecutar el programa para cualquier propósito.
        2.  La libertad de estudiar cómo funciona el programa y modificarlo.
        3.  La libertad de redistribuir copias.
        4.  La libertad de distribuir copias de sus versiones modificadas.
    - **Características:** Cualquier trabajo derivado de software con licencia GPL también debe ser GPL. Es una licencia "copyleft".
    - **Ejemplo:** El kernel de Linux, GIMP, LibreOffice.

- **Freeware:**
    - **Definición:** Software que se puede descargar y usar de forma gratuita.
    - **Características:** El código fuente no suele estar disponible. No permite la modificación o redistribución. Puede incluir publicidad o tener funcionalidades limitadas.
    - **Ejemplo:** Skype, Adobe Reader, Google Chrome.

- **Shareware:**
    - **Definición:** Software distribuido de forma gratuita para que los usuarios puedan probarlo antes de comprarlo.
    - **Características:** Suele tener un período de prueba limitado, funcionalidades reducidas o publicidad. Después del período de prueba, se requiere una compra para seguir usándolo o desbloquear todas las funciones.
    - **Ejemplo:** WinRAR, algunos juegos con demo.

### 9.2. Importancia del Cumplimiento de las Licencias

- **Legalidad:** Usar software sin la licencia adecuada es ilegal y puede acarrear sanciones (multas, demandas).
- **Ética:** Respetar los derechos de los desarrolladores y creadores de software.
- **Seguridad:** El software pirata a menudo viene con malware o no recibe actualizaciones de seguridad, lo que te expone a riesgos.
- **Soporte:** Las licencias válidas te dan derecho a soporte técnico y actualizaciones, lo que es vital para la seguridad y el buen funcionamiento del sistema.

## 10. Actualización del Sistema Operativo

Mantener tu sistema operativo actualizado es una de las tareas más importantes para cualquier usuario.

### 10.1. Importancia de las Actualizaciones de Seguridad y Funcionales

- **Actualizaciones de Seguridad:**
    - **Cierre de vulnerabilidades:** Los hackers y ciberdelincuentes buscan constantemente fallos de seguridad en el software. Las actualizaciones corrigen estos fallos, protegiendo tu sistema de ataques como virus, ransomware, o accesos no autorizados.1
    - **Protección de datos:** Ayudan a salvaguardar tu información personal y sensible.
- **Actualizaciones Funcionales (o de características):**
    - **Mejoras de rendimiento:** Optimizaciones que hacen que el SO funcione más rápido y de manera más eficiente.
    - **Nuevas características:** Añaden nuevas funcionalidades o mejoran las existentes.
    - **Compatibilidad:** Mejoran la compatibilidad con nuevo hardware o software.
    - **Corrección de errores:** Solucionan fallos o "bugs" que causan inestabilidad o mal funcionamiento.

### 10.2. Procedimientos de Actualización

Los procedimientos varían ligeramente entre sistemas operativos, pero los principios son los mismos:

- **Windows:**
    - Ve a **Configuración > Windows Update**.
    - Puedes buscar actualizaciones manualmente o configurar las actualizaciones automáticas.
    - Es común que requieran reiniciar el equipo.
- **macOS:**
    - Ve a **Ajustes del Sistema > General > Actualización de software**.
    - Se descargan e instalan automáticamente, o puedes gestionarlas manualmente.
- **GNU/Linux (ej. Ubuntu):**
    - Utiliza el **Gestor de Actualizaciones** gráfico.
    - Desde la terminal, puedes usar comandos como `sudo apt update` y `sudo apt upgrade` (para sistemas basados en Debian/Ubuntu).
    - Para actualizaciones de versión (ej. de Ubuntu 22.04 a 24.04), se usa `sudo do-release-upgrade`.

**Consejos adicionales:**

- **Conexión a Internet estable:** Las actualizaciones pueden ser grandes.
- **Batería suficiente:** Si estás en un portátil, asegúrate de tener suficiente batería o estar conectado a la corriente.
- **Reiniciar:** Muchos cambios importantes requieren un reinicio para aplicarse completamente.
- **Copia de seguridad:** Aunque menos crítico que en una instalación, es buena práctica hacer copias de seguridad antes de actualizaciones mayores de versión, por si acaso.

## Actividad

### Objetivo:
Aplicar los conocimientos sobre la instalación y gestión básica de sistemas operativos para **planificar, simular y reflexionar** sobre un proceso de instalación de un sistema multiarranque (dual-boot), incluyendo la selección del SO, la preparación del hardware, el particionado del disco y la configuración inicial.

### Escenario:
Imagina que un amigo te pide ayuda para instalar un nuevo sistema operativo en su ordenador. Actualmente tiene **Windows 10** instalado en un disco duro y quiere **conservarlo**, pero también le gustaría probar un nuevo sistema operativo para aprender sobre él. Te da la siguiente información sobre su equipo:

* **Sistema Operativo Actual:** Windows 10 (instalado y funcionando)
* **Procesador:** Intel Core i5 de 7ª generación (64 bits)
* **RAM:** 8 GB
* **Disco Duro:** 500 GB (100 GB usados por Windows 10 y sus programas, **400 GB libres**)
* **Tarjeta Gráfica:** Integrada Intel HD Graphics
* **Conexión a Internet:** Wi-Fi y Ethernet disponibles
* **Periféricos:** Teclado, ratón, impresora

---

### Parte 1: Planificación (Pre-instalación)

**1. Verificación de Hardware y Selección del SO:**

- Tu amigo quiere instalar una **distribución de GNU/Linux** para tener un **sistema multiarranque (dual-boot)** junto a Windows 10.

    - **Tarea 1.1:** Basándote en los **requisitos de hardware** del equipo de tu amigo y en la información sobre **sistemas operativos libres**, propón tres distribuciones de GNU/Linux diferentes que sean adecuadas para su equipo y sus intereses (dual-boot). Justifica brevemente tu elección para cada una, considerando aspectos como la **compatibilidad de hardware** y las **preferencias del usuario** (ej. facilidad de uso, interfaz gráfica, soporte comunitario).

    - **Tarea 1.2:** Si tu amigo te preguntara qué tipo de licencia tienen las distribuciones Linux que le propones en comparación con Windows, ¿cómo se lo explicarías usando los conceptos de **Licencia Pública General (GPL)** y **Licencia de Software Propietario (EULA)**? Menciona al menos dos **ventajas y desventajas** de cada tipo de licencia.

**2. Preparación del Disco y Medios de Instalación:**

- **Tarea 2.1:** Explica detalladamente cómo harías el **particionado del disco** de 500GB para permitir la coexistencia de Windows 10 y la nueva distribución Linux. Indica qué **tipos de particiones** crearías para Linux (ej. partición principal, de intercambio si aplica) y qué tamaño aproximado les asignarías, explicando la **finalidad de cada una**. Recuerda que Windows ya ocupa 100GB.

- **Tarea 2.2:** Antes de cualquier manipulación de discos o instalación, ¿cuál es el **paso MÁS IMPORTANTE** a realizar? Explica por qué es tan crucial y dónde recomendarías guardar esos datos.

- **Tarea 2.3:** Describe el proceso general para crear el **medio de instalación** (USB booteable) para la distribución Linux que elijas. Menciona los elementos necesarios (imagen ISO, software).

### Parte 2: Simulación de la Instalación y Configuración

**1. Configuración Inicial y Gestor de Arranque:**

- **Tarea 3.1:** Durante la instalación de Linux, el sistema pedirá configurar algunos **parámetros básicos**. ¿Cuáles son los **tres parámetros esenciales** que se configuran al inicio de una instalación? Explica brevemente la importancia de cada uno.

- **Tarea 3.2:** Tu amigo te pregunta sobre el **gestor de arranque**. Explica qué es un gestor de arranque y cómo se configura para que pueda elegir entre Windows y Linux al iniciar el equipo, haciendo referencia a **GRUB** y al **orden de instalación recomendado** para sistemas multiarranque.

### Parte 3: Post-instalación y Mantenimiento

**1. Actualizaciones y Mantenimiento:**

- **Tarea 5.1:** Una vez que Linux esté instalado y funcionando, ¿por qué es **crucial mantener el sistema operativo actualizado**? Menciona las dos razones principales y explica brevemente cada una.

- **Tarea 5.2:** Describe los **procedimientos generales para actualizar** un sistema GNU/Linux, mencionando un ejemplo de comando si fuera posible.

