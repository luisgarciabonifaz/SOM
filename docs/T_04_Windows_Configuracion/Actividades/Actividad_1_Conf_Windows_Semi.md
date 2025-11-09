<p style="text-align: center; font-size: 32px;">CIPFP Mislata</p>

<p style="text-align: center; font-size: 18px;">Luis García Bonifaz - l.garciabonifaz@edu.gva.es</p>
<p style="text-align: center; font-size: 24px;">SOM  T04 - Windows Configuración Básica</p>

---

<p style="text-align: left; font-size: 24px;">Actividad 1</p>

---

### Objetivo de la Actividad

**Objetivo General**

Aplicar los conocimientos adquiridos sobre las interfaces de usuario, preferencias de configuración, gestión de sistemas de archivos, recuperación del sistema operativo y automatización de tareas en Windows, simulando escenarios reales de un técnico informático.

**Instrucciones**

Realiza cada una de las siguientes tareas en un equipo con Windows (preferiblemente en un entorno de pruebas o una máquina virtual si no quieres alterar tu sistema principal). 
Elabora un video (no es necesario audio) con todos los pasos que sigues y el resultado de cada acción. 
Una buena aplicación para generar el video es [aTube Catcher](https://www.atube.me/es/){:target="_blank"}

### Parte 1: Exploración y Personalización de la Interfaz

**1. Familiarización con el Escritorio, Menú Inicio y Barra de Tareas**

- Ancla una aplicación que uses frecuentemente a la Barra de Tareas y luego desánclala.
- Abre el Explorador de Archivos y averigua la ruta absoluta de tu carpeta `Documentos`

**2. Personalización del Entorno Personal**

- Cambia el fondo de pantalla de tu escritorio por una imagen de tu elección. No te dejará porque no has activado Windows. Captura la pantalla en el que te informa de este problema.
- Aplica un **Tema** diferente al actual. Explica qué es un tema y qué elementos modifica.No te dejará porque no has activado Windows. Captura la pantalla en el que te informa de este problema.
- Cambia la regiona a Estados Unidos
- Cambia el idioma de la configuración a Ingles de Estados Unidos, tendrás que añadir el idioma.

### Parte 2: Gestión de Cuentas de Usuario y Programas

**1. Gestión de Cuentas de Usuario**

- Navega a la sección de **Cuentas de Usuario**.
- Describe los dos tipos principales de cuentas de usuario: **Administrador** y **Estándar**, y sus diferencias clave en cuanto a permisos.
- Crea una nueva cuenta "Pepe" de tipo "Estándar".
- Cambia el tipo de la nueva cuenta a "Administrador".

**2. Instalación y Desinstalación de Programas**

- Explica la diferencia entre instalar programas desde un instalador tradicional (`setup.exe`) y la **Microsoft Store**. Instala el navegador Opera desde la Microsofat Store.
- Desinstala un programa que ya no utilices. Utiliza la ruta desde **Configuración** y menciona la ruta alternativa desde el **Panel de Control**.
- Abre el **Administrador de Tareas** (`Ctrl + Shift + Esc`) y ve a la pestaña **Inicio**. Identifica al menos dos programas que se inicien automáticamente con Windows y explica cómo deshabilitar uno de ellos.


### Parte 3: Gestión de Sistemas de Archivos

**1. Sistemas de Archivos y Formateo**

- Abre el **Explorador de Archivos**, haz clic derecho en una unidad y selecciona **Propiedades**. Identifica su sistema de archivos (NTFS o FAT32).
- Añade 3 discos de 5 GB a tu máquina virtual,uno de elloss que sea un SSD.
- Formatea uno de esos discos como NTFS.
- Crea un volumen espejo de una capacidad util de 2 GB
- Crea un volumen distribuido de 4 GB utilizando espacio de 2 discos.

**2. Mantenimiento de Discos**

- Realiza una **Comprobación de Errores de Disco** (`chkdsk`). Accede desde las propiedades de la unidad en el Explorador. Describe su función.
- Accede a la herramienta de **Optimización y Desfragmentación de Unidades**. Explica la diferencia entre desfragmentar (para HDD) y optimizar (para SSD), y por qué es importante para el rendimiento.


### Parte 4: Recuperación y Actualización del Sistema

**1. Puntos de Restauración y Restauración del Sistema**

- Busca **"Crear un punto de restauración"** en el Menú Inicio.
- Crea un punto de restauración manual. Explica qué información guarda y para qué sirve la Restauración del Sistema.

**2. Modo Seguro y Copias de Seguridad**

- Describe qué es el **Modo Seguro** y su utilidad para diagnosticar problemas graves.
- Explica los pasos para acceder al Modo Seguro, incluyendo el **Entorno de Recuperación de Windows (WinRE)**.
- Menciona las dos principales herramientas de copia de seguridad:

  Explica la diferencia entre una **copia de seguridad de archivos** y una **copia de seguridad de imagen del sistema**.

**3. Actualización del Sistema**

- Accede a **Windows Update**
- Muestra cómo:
    - Buscar actualizaciones
    - Pausarlas
    - Ver el historial de actualizaciones

  Explica por qué es recomendable permitir las actualizaciones automáticas.

- Describe dos métodos para actualizar controladores:
    - A través de **Windows Update**
    - Manualmente desde el **Administrador de Dispositivos** o la web del fabricante.


### Parte 5: Automatización Básica y Redes (Desafío Adicional)

**1. Programador de Tareas**

- Abre el **Programador de Tareas** 
- Crea una tarea programada sencilla (por ejemplo, abrir `notepad.exe` al iniciar sesión o a una hora específica). Explica su utilidad general.

**2. Scripts Básicos**

- Explica la diferencia entre scripts **Batch (.bat)** y **PowerShell (.ps1)** en cuanto a potencia y automatización.
- Ejemplo de script Batch:

```bat
@echo off
mkdir MiCarpeta
dir MiCarpeta
```

- Ejemplo de script PowerShell:

```powershell
Get-Process
```

**3. Configuración de Red**

- Describe los pasos para acceder a la **configuración de red** y cómo cambiar manualmente:
    - Dirección IP
    - Servidores DNS

Explica brevemente qué son.