<p style="text-align: center; font-size: 32px;">CIPFP Mislata</p>

<p style="text-align: center; font-size: 18px;">Luis García Bonifaz - l.garciabonifaz@edu.gva.es</p>
<p style="text-align: center; font-size: 24px;">SOM  T03 - Virtualización</p>

---

<p style="text-align: left; font-size: 24px;">Actividad 1</p>

---


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