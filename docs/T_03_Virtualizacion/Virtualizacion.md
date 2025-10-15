<div class="titulo">
   T3 - Virtualizacion
</div>

# Virtualización

En este tema, vamos a explorar el fascinante mundo de las máquinas virtuales (MV). Aprenderemos qué son, por qué son tan útiles y cómo podemos crearlas y configurarlas para probar diferentes sistemas operativos sin necesidad de tener varios ordenadores.

## 1. Diferencia entre máquina real y máquina virtual

Para entender las máquinas virtuales, primero debemos diferenciar entre una máquina real y una virtual.

### Concepto de virtualización

La **virtualización** es la tecnología que nos permite crear versiones virtuales (es decir, simuladas por software) de recursos informáticos. En nuestro caso, nos centraremos en la virtualización de sistemas operativos. Esto significa que podemos ejecutar un sistema operativo completo dentro de otro sistema operativo, como si fuera una aplicación más.

Piensa en ello como una "computadora dentro de una computadora".

### Hardware físico vs. hardware virtualizado

- **Hardware físico (máquina real):** Es el hardware tangible que puedes tocar: la torre de tu ordenador, la placa base, el procesador (CPU), la memoria RAM, el disco duro, la tarjeta gráfica, etc. Este hardware es el que arranca directamente tu sistema operativo principal (al que llamamos **anfitrión** o **host**).
- **Hardware virtualizado (máquina virtual):** Cuando creamos una máquina virtual, estamos simulando hardware dentro de nuestro ordenador real. La máquina virtual "cree" que tiene su propio procesador, su propia RAM, su propio disco duro, etc. Sin embargo, todo esto es gestionado por el software de virtualización y, en última instancia, utiliza los recursos del hardware físico de tu máquina real.

Por ejemplo, si tu máquina real tiene 16 GB de RAM, puedes asignar 4 GB a una máquina virtual. Esos 4 GB no son RAM física separada, sino una parte de los 16 GB totales que el software de virtualización reserva para la MV.

---

## 2. Ventajas e inconvenientes de las máquinas virtuales

Las máquinas virtuales son herramientas muy potátiles y útiles, pero como todo, tienen sus pros y sus contras.

### 2.1. Ventajas

* **Aislamiento:** Una máquina virtual está completamente aislada del sistema operativo anfitrión. Esto significa que si algo sale mal en la MV (por ejemplo, si instalas un virus o un software que causa problemas), no afectará a tu sistema operativo principal. Es un entorno seguro para probar cosas.
* **Portabilidad:** Una máquina virtual es un conjunto de archivos. Puedes copiar esos archivos a otro ordenador con el mismo software de virtualización y la MV funcionará. Esto es muy útil para mover entornos de trabajo o para compartir configuraciones.
* **Ahorro de hardware:** En lugar de comprar múltiples ordenadores para probar diferentes sistemas operativos (Windows, Linux, etc.) o configuraciones, puedes tener varias máquinas virtuales en un solo ordenador físico. Esto ahorra dinero y espacio.
* **Pruebas de software:** Las MV son ideales para probar software nuevo o configuraciones sin riesgo de dañar tu sistema principal. También son perfectas para desarrollar aplicaciones en diferentes entornos.
* **Clonación y snapshots (instantáneas):** Puedes crear copias exactas de tus MV (clones) o guardar el estado de una MV en un momento dado (snapshot). Si algo sale mal, puedes volver a ese estado anterior fácilmente.

### 2.2. Inconvenientes

* **Rendimiento:** Aunque ha mejorado mucho, una máquina virtual generalmente no tendrá el mismo rendimiento que un sistema operativo instalado directamente en el hardware físico. Hay una capa de software adicional (el hipervisor) que introduce una pequeña sobrecarga.
* **Requisitos de recursos:** Para que las máquinas virtuales funcionen correctamente, tu máquina anfitriona necesita tener suficientes recursos (RAM, CPU, espacio en disco). Si intentas ejecutar varias MV con pocos recursos, el rendimiento de tu sistema se verá afectado.

---

## 3. Instalación de software para la creación de máquinas virtuales

Para crear máquinas virtuales, necesitamos un software especial llamado **hipervisor**.

### 3.1. Hipervisores tipo 1

Los hipervisores de **Tipo 1** (también conocidos como *bare-metal*) se instalan directamente sobre el hardware físico del servidor, sin necesidad de un sistema operativo anfitrión. Son muy eficientes y se usan principalmente en entornos de servidores y centros de datos. Ejemplos populares son VMware ESXi y Microsoft Hyper-V (cuando se usa como rol de servidor dedicado). Para este curso, solo necesitamos entender su concepto.

### 3.2. Hipervisores tipo 2

Los hipervisores de **Tipo 2** (también conocidos como *hosted*) se instalan como una aplicación más dentro de un sistema operativo anfitrión existente (Windows, macOS, Linux). Son los más comunes para uso personal y para entornos educativos.

Ejemplos populares incluyen:

* **Oracle VirtualBox:** Gratuito y de código abierto. Es uno de los más utilizados para aprender sobre virtualización.
* **VMware Workstation Player:** Una versión gratuita para uso personal de VMware Workstation, que es un software más completo.

### 3.3. Instalación y configuración básica de VirtualBox

Para este curso, utilizaremos **VirtualBox** por ser gratuito y de fácil acceso.

1.  **Descarga:** Ve a la página oficial de VirtualBox [https://www.virtualbox.org/](https://www.virtualbox.org/) y descarga la versión adecuada para tu sistema operativo anfitrión (Windows, macOS, Linux).
2.  **Instalación:** Ejecuta el instalador. Sigue los pasos del asistente de instalación, aceptando las opciones por defecto en la mayoría de los casos. Durante la instalación, es posible que se te pida instalar algunos controladores de red adicionales; acéptalos.
3.  **Primer inicio:** Una vez instalado, inicia VirtualBox. Verás la ventana principal del gestor de VirtualBox.

---

## 4. Creación de máquinas virtuales

Ahora que tenemos VirtualBox instalado, ¡vamos a crear nuestra primera máquina virtual!

Para crear una MV, necesitarás el archivo **ISO** del sistema operativo que deseas instalar. Un archivo ISO es una imagen de disco que contiene todo lo necesario para instalar un sistema operativo. Es el equivalente al CD/DVD de instalación.

### 4.1. Creación de MV para Windows

1.  **Obtener ISO de Windows:** Para Windows, necesitarás un archivo ISO de una versión de Windows (por ejemplo, Windows 10 o Windows 11). Puedes obtener versiones de evaluación o usar una licencia que tengas. [Aquí puedes descargar la iso de Windows 11](https://www.microsoft.com/es-es/software-download/windows11)  
2.  **Crear nueva MV en VirtualBox:**
    * Haz clic en **"Nueva"** en la ventana principal de VirtualBox.
    * Sigue el asistente:
        * **Nombre y Sistema Operativo:** Dale un nombre a tu MV (ej. "Windows 10 MV"). Selecciona el tipo de SO (Microsoft Windows) y la versión específica.
        * **Memoria RAM:** Asigna la cantidad de RAM que la MV utilizará de tu sistema anfitrión. Para Windows 10/11, se recomiendan al menos 4 GB (4096 MB) si tu máquina anfitriona tiene suficiente.
        * **Disco duro:** Elige "Crear un disco duro virtual ahora". Selecciona "VDI (VirtualBox Disk Image)", "Reservado dinámicamente" (para que el archivo de disco crezca solo lo necesario) y asigna un tamaño inicial (por ejemplo, 50 GB para Windows).
3.  **Instalar Windows en la MV:**
    * Selecciona tu MV recién creada en la lista y haz clic en **"Iniciar"**.
    * Cuando se te pida seleccionar un disco de inicio, busca el archivo ISO de Windows que descargaste.
    * La MV arrancará desde el ISO y comenzará el proceso de instalación de Windows, igual que si lo instalaras en una máquina real. Sigue los pasos de instalación de Windows.

### 4.2. Creación de MV para Linux

El proceso es muy similar al de Windows, pero con un archivo ISO de Linux.

1.  **Obtener ISO de Linux:** Descarga el archivo ISO de tu distribución Linux favorita (por ejemplo, Ubuntu, Linux Mint). Son gratuitas y fáciles de encontrar en sus sitios web oficiales.
2.  **Crear nueva MV en VirtualBox:**
    * Haz clic en **"Nueva"**.
    * Dale un nombre (ej. "Ubuntu MV"). Selecciona el tipo de SO (Linux) y la versión (ej. Ubuntu 64-bit).
    * **Memoria RAM:** Para la mayoría de las distribuciones Linux, 2 GB (2048 MB) suelen ser suficientes, aunque 4 GB siempre son mejor.
    * **Disco duro:** Crea un nuevo disco duro virtual, siguiendo los mismos pasos que para Windows. 20-30 GB suelen ser suficientes para la mayoría de las instalaciones de Linux.
3.  **Instalar Linux en la MV:**
    * Selecciona tu MV y haz clic en **"Iniciar"**.
    * Selecciona el archivo ISO de Linux cuando se te pida.
    * Sigue el proceso de instalación de Linux.

### 4.3. Consideraciones de recursos (RAM, CPU, disco)

Al crear una MV, es crucial asignar los recursos adecuados:

* **RAM:** Asigna suficiente RAM para que el sistema operativo invitado funcione fluidamente, pero no tanta que tu sistema anfitrión se quede sin memoria. Un buen equilibrio es clave.
* **CPU:** Puedes asignar uno o más núcleos de tu procesador a la MV. Para uso general, 1 o 2 núcleos virtuales suelen ser suficientes. Si vas a hacer tareas pesadas, puedes asignar más, siempre y cuando tu CPU física tenga suficientes núcleos disponibles.
* **Disco:** El tamaño del disco duro virtual dependerá del sistema operativo y del software que planeas instalar. Siempre es mejor dejar un poco más de espacio del mínimo recomendado.

---

## 5. Configuración de máquinas virtuales

Una vez que tu MV está instalada, puedes ajustar su configuración para optimizar su funcionamiento y permitir la comunicación con el anfitrión.

Para acceder a la configuración de una MV, selecciónala en la lista de VirtualBox y haz clic en **"Configuración"** o pulsa `Ctrl+S`.

### 5.1. Configuración de red (NAT, Puente, Red Interna)

La configuración de red es fundamental para que tu MV pueda acceder a internet o comunicarse con otras máquinas.

* **NAT (Network Address Translation - Traducción de Direcciones de Red):** Es la configuración por defecto y la más sencilla. La MV comparte la dirección IP de tu máquina anfitriona. La MV puede acceder a internet, pero el acceso directo desde fuera a la MV es más complicado. Es ideal para navegar por internet desde la MV.
* **Adaptador Puente (Bridged Adapter):** La MV obtiene su propia dirección IP en tu red local, como si fuera un dispositivo físico más. Esto permite que la MV sea accesible desde otras máquinas en tu red y viceversa. Es útil si quieres que tu MV actúe como un servidor.
* **Red Interna (Internal Network):** Las MV conectadas a la misma "Red Interna" pueden comunicarse entre sí, pero no pueden acceder a la red externa (internet) ni a la máquina anfitriona directamente. Ideal para crear entornos de red aislados para pruebas.
* **Solo anfitrión (Host-Only Adapter):** Crea una red privada entre la máquina anfitriona y las máquinas virtuales. Las MV pueden comunicarse con el anfitrión y entre ellas, pero no tienen acceso a internet. Es útil para servicios o pruebas que solo necesitan comunicarse con el anfitrión.

Puedes cambiar el tipo de red en la sección **"Red"** de la configuración de la MV.

### 5.2. Dispositivos virtuales (CD/DVD, USB, tarjetas de red)

* **CD/DVD:** Puedes "montar" un archivo ISO en la unidad de CD/DVD virtual de la MV para instalar software o arrancar sistemas operativos.
* **USB:** Para acceder a dispositivos USB conectados a tu máquina anfitriona desde la MV, necesitas instalar el **"Paquete de Extensiones de VirtualBox"** (se descarga por separado de la web de VirtualBox). Una vez instalado, puedes seleccionar qué dispositivos USB conectar a la MV desde el menú "Dispositivos" -> "USB" mientras la MV está en ejecución.
* **Tarjetas de red:** Puedes agregar múltiples tarjetas de red virtuales a una MV y configurar cada una con un tipo de conexión diferente (NAT, Puente, etc.) para entornos de red complejos.

### 5.3. Carpetas compartidas

Las carpetas compartidas te permiten intercambiar archivos fácilmente entre tu máquina anfitriona y la máquina virtual.

1.  En la configuración de la MV, ve a **"Carpetas compartidas"**.
2.  Haz clic en el icono de la carpeta con un "+" para añadir una nueva carpeta compartida.
3.  Selecciona la ruta de la carpeta en tu máquina anfitriona que deseas compartir.
4.  Asigna un "Nombre de la carpeta" (este será el nombre que verá la MV).
5.  Marca **"Automontar"** para que la carpeta se monte automáticamente cada vez que inicies la MV. También puedes marcar **"Hacer permanente"**.

Para que funcione correctamente, necesitas instalar las **Guest Additions** dentro de la MV (ver siguiente sección).

### 5.4. Instantáneas (Snapshots) y Clonación

Dos de las herramientas más potentes en la gestión de máquinas virtuales son las instantáneas y la clonación. Ambas te permiten guardar y replicar estados de una MV, pero sirven para propósitos diferentes.

**Instantáneas (Snapshots)**

Una instantánea es una "foto" del estado completo de una máquina virtual en un momento concreto. Esto incluye el contenido del disco duro virtual, la memoria RAM y la configuración de los dispositivos virtuales.

- **¿Para qué sirven?** Son extremadamente útiles para crear puntos de restauración. Antes de realizar un cambio arriesgado en la MV (como instalar un software nuevo, aplicar una actualización importante o cambiar una configuración crítica), puedes tomar una instantánea. Si algo sale mal, puedes restaurar la MV a ese punto exacto en segundos, deshaciendo todos los cambios.
- **¿Cómo funcionan?** Cuando tomas una instantánea, VirtualBox deja de modificar el archivo del disco duro virtual original (lo pone en modo de solo lectura) y crea un nuevo archivo de disco "diferencial". Todos los cambios que hagas a partir de ese momento se guardan en este nuevo archivo. Puedes crear múltiples instantáneas, generando una cadena de estados a los que puedes volver.
- **Gestión**: En VirtualBox, puedes gestionar las instantáneas desde el panel "Instantáneas" de la MV. Desde ahí puedes tomar nuevas instantáneas, restaurar a un estado anterior o eliminar las que ya no necesites.

**Clonación**

Clonar una máquina virtual significa crear una copia completa e independiente de ella. Es como fotocopiar un ordenador entero. El resultado es una nueva MV idéntica a la original que puedes usar y modificar sin afectar a la primera.

En VirtualBox, al clonar una MV, se te ofrecen dos opciones:

- **Clonación Completa (Full Clone)**:
    - Crea una copia total y autónoma de todos los archivos de la MV, incluido el disco duro virtual.
    - La nueva MV es completamente independiente de la original. Puedes borrar la original y el clon seguirá funcionando.
    - **Inconveniente**: Ocupa la misma cantidad de espacio en disco que la MV original.

- **Clonación Enlazada (Linked Clone)**:
    - Crea una nueva MV que comparte el disco duro virtual con la máquina original. Al igual que con las instantáneas, se crea un disco diferencial donde se guardan los cambios del clon.
    - **Ventaja**: Es mucho más rápido de crear y ocupa muy poco espacio en disco inicialmente.
    - **Inconveniente**: El clon depende de la MV original. Si eliminas o mueves la máquina original, el clon enlazado dejará de funcionar.

**¿Cuándo usar cada una?**

- Usa instantáneas para crear puntos de restauración temporales antes de realizar cambios en una única MV.
- Usa una clonación completa cuando necesites una copia duplicada y totalmente independiente de una MV base para trabajar en un proyecto a largo plazo o para dársela a otra persona.
- Usa una clonación enlazada cuando necesites desplegar rápidamente varias copias de una misma MV para pruebas cortas (por ejemplo, para probar cómo funciona un software en red con varias máquinas), ahorrando mucho espacio en disco.

## 6. Relación de la máquina virtual con el sistema operativo anfitrión

### 6.1. Comunicación entre anfitrión y huésped

La comunicación entre el sistema operativo anfitrión (tu PC real) y el sistema operativo huésped (la MV) es fundamental para una buena experiencia de virtualización. Más allá de la red y las carpetas compartidas, existen herramientas para mejorar esta interacción.

### 6.2. Herramientas de integración (Guest Additions en VirtualBox)

Las **VirtualBox Guest Additions** (o Adiciones de Invitado) son un conjunto de controladores de dispositivo y aplicaciones de sistema que se instalan dentro del sistema operativo de la máquina virtual. Son esenciales para:

* **Mejor rendimiento gráfico:** Resolución de pantalla adaptativa, mejor rendimiento de video.
* **Integración del puntero del ratón:** El ratón se mueve sin problemas entre la ventana de la MV y el escritorio del anfitrión sin necesidad de "capturar" y "soltar" el ratón.
* **Arrastrar y soltar:** Permite arrastrar y soltar archivos entre el anfitrión y el huésped.
* **Portapapeles compartido:** Copiar texto en el anfitrión y pegarlo en el huésped (y viceversa).
* **Carpetas compartidas:** Habilitan el acceso a las carpetas compartidas que configuraste previamente.

**¿Cómo instalar las Guest Additions?**

1.  Inicia tu máquina virtual.
2.  Una vez que el sistema operativo invitado haya arrancado, ve al menú **"Dispositivos"** de la ventana de VirtualBox y selecciona **"Insertar imagen de CD de las "Guest Additions""**.
3.  Dentro de la MV, abre el explorador de archivos y verás un CD virtual con el instalador de las Guest Additions. Ejecútalo y sigue las instrucciones. Es posible que tengas que reiniciar la MV al finalizar.


## 7. Pruebas de rendimiento del sistema

Aunque el rendimiento de una MV nunca será idéntico al de un sistema real, es útil saber cómo monitorizar y, conceptualmente, comparar su rendimiento.

### 7.1. Monitorización del uso de recursos

Puedes monitorizar el uso de recursos de tus máquinas virtuales desde tu sistema anfitrión y desde la propia MV.

* **En el anfitrión:**
    * **Windows:** Usa el Administrador de Tareas (`Ctrl+Shift+Esc`) para ver el uso de CPU, RAM, disco y red por parte de la aplicación VirtualBox y sus procesos.
    * **Linux:** Usa herramientas como `top`, `htop`, `gnome-system-monitor` o `ksysguard` para ver el uso de recursos.
    * **VirtualBox:** El gestor de VirtualBox muestra un resumen de los recursos asignados a cada MV.
* **En la MV:**
    * **Windows:** Usa el Administrador de Tareas dentro de la MV para ver cómo utiliza los recursos el propio sistema operativo invitado.
    * **Linux:** Usa herramientas como `top`, `htop` o el monitor del sistema gráfico de tu distribución Linux.

Monitorizar los recursos te ayudará a identificar si una MV está "ahogada" por falta de RAM o CPU, o si está consumiendo demasiados recursos de tu anfitrión.

### 7.2. Comparación de rendimiento entre MV y sistema real (conceptual)

No es necesario realizar pruebas exhaustivas de benchmarking para este curso, pero es importante entender que:

* Una MV siempre tendrá una pequeña sobrecarga de rendimiento debido a la capa de virtualización.
* El rendimiento variará mucho dependiendo de los recursos asignados a la MV y de la potencia del hardware de tu máquina anfitriona.
* Para tareas cotidianas (navegar, usar ofimática), la diferencia de rendimiento entre una MV bien configurada y un sistema real puede ser mínima. Para tareas que requieren muchos recursos (edición de video, juegos pesados), la diferencia será más notoria.

La virtualización es una herramienta increíblemente potente y flexible que te permitirá explorar diferentes sistemas operativos y entornos de desarrollo sin comprometer tu sistema principal.

## Actividad

### Objetivo de la Actividad
Esta actividad te guiará en la creación de máquinas virtuales (MV) para Windows y Linux, permitiéndote entender la **virtualización** como la tecnología que posibilita ejecutar un sistema operativo completo dentro de otro. Aprenderás a configurar estas MV, y a utilizar las funciones clave de **instantáneas (snapshots)** y **clonación** para gestionar y proteger tus entornos virtuales.

### Conceptos Clave que Reforzaremos
- **Virtualización y MV:** Diferencia entre hardware físico y virtualizado.
- **Ventajas de la virtualización:** Aislamiento, portabilidad, ahorro de hardware, pruebas de software, clonación e instantáneas.
- **Hipervisor Tipo 2:** Uso de VirtualBox.
- **Gestión de recursos:** Asignación de RAM, CPU y disco.
- **Configuración de red:** NAT para acceso a Internet.
- **Herramientas de integración:** VirtualBox Guest Additions para mejorar el rendimiento y la comunicación.
- **Instantáneas (Snapshots):** Crear puntos de restauración para la MV.
- **Clonación:** Duplicar MVs de forma independiente.

### Materiales Necesarios
- Un ordenador anfitrión (tu máquina real) con **VirtualBox instalado**. Asegúrate de tener la versión adecuada para tu sistema operativo anfitrión.
- Archivo **ISO de Windows** (por ejemplo, Windows 10/11). Puedes obtener versiones de evaluación o usar una licencia que tengas.
- Archivo **ISO de una distribución Linux** (por ejemplo, Ubuntu, Linux Mint). Son gratuitas y fáciles de encontrar en sus sitios web oficiales.


### Parte 1: Preparación y Configuración Inicial del Entorno

1.  **Verificación de Recursos del Anfitrión:**
    - Antes de empezar, asegúrate de que tu máquina anfitriona (el ordenador real) tiene **suficientes recursos (RAM, CPU, espacio en disco)** para ejecutar las máquinas virtuales.
    - Puedes **monitorizar el uso de recursos** usando el Administrador de Tareas en Windows (`Ctrl+Shift+Esc`) o herramientas como `top`/`htop` en Linux para ver el uso de CPU, RAM, disco y red por parte de la aplicación VirtualBox y sus procesos.

2.  **Instalación de VirtualBox:**
    - Si aún no lo tienes, descarga e instala **Oracle VirtualBox** desde [su página oficial](https://www.virtualbox.org/). Sigue los pasos del asistente de instalación, aceptando las opciones por defecto y los controladores de red adicionales.

### Parte 2: Creación y Gestión Avanzada de la Máquina Virtual de Windows

1.  **Creación e Instalación de la Máquina Virtual de Windows:**
    - En el gestor de VirtualBox, haz clic en **"Nueva"**.
    - Asigna un **nombre descriptivo** (ej. "Mi Windows 10 MV") y selecciona el tipo "Microsoft Windows" y la versión específica.
    - Asigna **al menos 4 GB (4096 MB) de RAM** a la MV, siempre y cuando tu anfitrión tenga suficiente memoria disponible. Recuerda que esta RAM se reservará de tus recursos físicos.
    - Cuando se te pida configurar el disco duro, elige **"Crear un disco duro virtual ahora"**. Selecciona "VDI (VirtualBox Disk Image)" y "Reservado dinámicamente". Asigna un tamaño inicial de **al menos 50 GB** para Windows.
    - Una vez creada, selecciona la MV y haz clic en **"Iniciar"**. Cuando te pida el disco de inicio, busca y selecciona el archivo ISO de Windows que descargaste.
    - Sigue el **proceso de instalación de Windows** dentro de la MV, tal y como lo harías en una máquina real.
    - Elabora un pequeño informe con la instalación de Windows, incluyendo las preguntas que se plantean en el proceso de instalación y la respuesta justificada de cada una de ellas.

2.  **Configuración Básica y Herramientas de Integración (Windows MV):**
    - Una vez que Windows esté completamente instalado y arrancado dentro de la MV:
        - **Instala las VirtualBox Guest Additions:** Ve al menú "Dispositivos" de la ventana de la MV y selecciona **"Insertar imagen de CD de las "Guest Additions""**. Dentro de la MV, abre el explorador de archivos, verás un CD virtual con el instalador. Ejecútalo y sigue las instrucciones. Esto es esencial para **mejorar el rendimiento gráfico, la integración del ratón, arrastrar y soltar, y el portapapeles compartido**. Reinicia la MV si te lo pide.
        - **Configura la Red (NAT por defecto):** La configuración por defecto **NAT (Network Address Translation)** permite a tu MV acceder a Internet. Verifica que puedes navegar por la web desde tu MV.
        - **(Opcional) Configura una Carpeta Compartida:** Esto te permitirá intercambiar archivos fácilmente entre tu anfitrión y la MV. Ve a la configuración de la MV, luego a **"Carpetas compartidas"**. Añade una nueva carpeta, selecciona una ruta en tu anfitrión, y marca **"Automontar"** y "Hacer permanente".
        - En el documento anterior incluye las capturas de pantalla de la instalación de las Guest Aditions y la configuración de red.

3.  **Uso de Instantáneas (Snapshots) en la MV de Windows:** Las instantáneas son como "fotos" del estado completo de tu MV en un momento dado, ideales para crear puntos de restauración.
    - **Instantánea 1: "Windows Base - Post-Instalación"**
        - Con la MV de Windows **apagada** o en **estado guardado**.
        - En el gestor de VirtualBox, selecciona tu MV de Windows.
        - Ve a la pestaña **"Instantáneas"**.
        - Haz clic en el icono de la cámara (o el botón "Tomar").
        - Asigna el nombre "Windows Base - Post-Instalación" y una descripción (ej. "Sistema Windows recién instalado con Guest Additions").
        - Esta instantánea te permitirá **volver a este estado** de la MV en cualquier momento.
    - **Instantánea 2: "Windows - Con Software de Prueba"**
        - Inicia tu MV de Windows. Realiza una modificación significativa: por ejemplo, instala un programa, cambia el fondo de pantalla, o crea varios archivos y carpetas en el escritorio.
        - **Apaga la MV** o guarda su estado.
        - Crea una **segunda instantánea**. Nómbrala "Windows - Con Software de Prueba".
        - **Practica Restaurar una Instantánea:** Inicia la MV, haz algún cambio menor (ej. borra un archivo), y luego apaga la MV. Ahora, selecciona la instantánea "Windows Base - Post-Instalación" en la lista y haz clic en "Restaurar". Confirma. Inicia la MV y verás que ha vuelto al estado original de la primera instantánea, deshaciendo los cambios que hiciste, ¡incluida la instalación del software de prueba! Esto demuestra la utilidad de las instantáneas para pruebas de software sin riesgo.
    - Incluye en el documento anterior las capturas de pantalla que demuestren la creación y restauración de instantáneas.

4.  **Clonación de la Máquina Virtual de Windows:** Clonar crea una copia completa e independiente de tu MV.
    - Con la MV de Windows **apagada**.
    - En el gestor de VirtualBox, haz clic derecho sobre tu MV de Windows ("Mi Windows 10 MV").
    - Selecciona **"Clonar..."**.
    - Asigna un **nombre al nuevo clon** (ej. "Windows Clon para Pruebas").
    - Elige **"Clon Completo (Full Clone)"**. Esta opción crea una copia totalmente autónoma, lo que significa que el clon es independiente de la MV original y ocupará su propio espacio en disco.
    - Haz clic en **"Clonar"**.
    - Una vez que el clon se haya creado, tendrás **dos MV de Windows separadas y funcionales** en tu gestor de VirtualBox. Puedes iniciar y usar el clon para experimentar sin afectar la MV original.
    - Incluye en el documento anterior las capturas de pantalla que demuestren la clonación de la MV.

### Parte 3: Creación y Configuración de la Máquina Virtual de Linux

1.  **Creación e Instalación de la Máquina Virtual de Linux:**
    - En el gestor de VirtualBox, haz clic nuevamente en **"Nueva"**.
    - Asigna un **nombre** (ej. "Mi Ubuntu MV") y selecciona el tipo "Linux" y la versión adecuada (ej. "Ubuntu 64-bit").
    - Asigna **al menos 2 GB (2048 MB) de RAM** (aunque 4 GB son mejores si puedes).
    - Crea un disco duro virtual VDI de **al menos 20-30 GB**, reservado dinámicamente.
    - **Inicia la MV** y selecciona el archivo ISO de Linux para comenzar la instalación. Sigue los pasos de instalación de tu distribución Linux.
    - Elabora un pequeño informe con la instalación de Linux, incluyendo las preguntas que se plantean en el proceso de instalación y la respuesta justificada de cada una de ellas.


2.  **Configuración Básica y Herramientas de Integración (Linux MV):**
    - Una vez que Linux esté completamente instalado y arrancado dentro de la MV:
        - **Instala las VirtualBox Guest Additions:** Al igual que con Windows, ve al menú "Dispositivos" de la ventana de la MV y selecciona **"Insertar imagen de CD de las "Guest Additions""**. Dentro de la MV de Linux, se montará el CD virtual. Navega hasta él y ejecuta el script de instalación (normalmente `VBoxLinuxAdditions.run` desde una terminal). Esto mejorará la **resolución de pantalla, el rendimiento gráfico, la integración del ratón y el portapapeles compartido**. Reinicia la MV.
        - **Verifica la Red:** La configuración **NAT** debería estar funcionando, permitiendo acceso a Internet desde tu MV de Linux.
    - En el documento anterior incluye las capturas de pantalla de la instalación de las Guest Adittions y la configuración de red.


### Parte 4: Creación y Configuración de una Máquina Virtual con Arranque DUAL Windows y Linux

1.  **Configuración Básica:**
    - Crea una Máquina Virtual nueva con espacio en disco suficiente para instalar dos sistemas operativos, Windows y L
    - Elabora un pequeño informe con la configuración de la Máquina Virtual.

2.  **Instalación de los Sistemas OpertivosConfiguración Básica:**

    - En el documento anterior incluye información sobre el proceso de instalación de los sistemas operativos y alguna captura de pantalla que demuestre que ambos sistemas operativos están instalados en la misma máquina.