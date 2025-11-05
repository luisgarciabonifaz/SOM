# Configuración y Personalización de Windows

En este tema, vamos a sumergirnos en el fascinante mundo de la configuración y personalización del sistema operativo Windows. Como futuros técnicos informáticos, es fundamental que dominéis estas herramientas para poder optimizar y adaptar cualquier equipo a las necesidades de sus usuarios.

## 1. Interfaces de Usuario de Windows

Windows está diseñado para que su uso sea lo más intuitivo posible. Vamos a explorar las principales interfaces con las que interactuaréis a diario.

### 1.1. Escritorio, Menú Inicio y Barra de Tareas

-   **El Escritorio**: Es la primera pantalla que vemos al iniciar Windows. Es como vuestro tablero de trabajo, donde tenéis acceso directo a programas, archivos y carpetas mediante iconos.
-   **El Menú Inicio**: Es el centro neurálgico de Windows. Se activa pulsando la tecla `Windows` o haciendo clic en el icono de Windows en la esquina inferior izquierda. Desde aquí podéis:
    -   Acceder a todas vuestras aplicaciones instaladas.
    -   Buscar programas y archivos.
    -   Apagar, reiniciar o suspender el equipo.
    -   Acceder a la configuración del sistema.
-   **La Barra de Tareas**: Se encuentra en la parte inferior de la pantalla. Muestra los programas que están abiertos, permite anclar aplicaciones para un acceso rápido y contiene la bandeja del sistema con notificaciones y accesos a funciones como el reloj, el volumen y la conexión a internet.

### 1.2. Explorador de Archivos

El **Explorador de Archivos** (o Explorador de Windows) es vuestra herramienta principal para gestionar archivos y carpetas. Pensad en él como un archivador digital donde podéis:

- Navegar por las diferentes unidades de almacenamiento (discos duros, USB, etc.).
- Crear, mover, copiar, eliminar y renombrar archivos y carpetas.
- Buscar archivos específicos.
- Comprimir y descomprimir archivos.

Podéis abrirlo pulsando la combinación de teclas `Windows + E`.

### 1.3. Panel de Control y Configuración

El **Panel de Control** y la aplicación **Configuración** son los lugares donde podréis ajustar casi todos los aspectos de Windows.

El **Panel de Control** es una interfaz más tradicional que agrupa herramientas para la administración del sistema, como la gestión de usuarios, desinstalación de programas, configuración de red, etc.

La aplicación **Configuración** es una interfaz más moderna introducida con Windows 10. Ofrece una forma más sencilla y visual de ajustar la mayoría de las preferencias del sistema, como la personalización, la privacidad, la actualización y seguridad, etc. A menudo, las opciones en Configuración remiten al Panel de Control para ajustes más avanzados.

## 2. Preferencias de Configuración del Entorno Personal

Una de las primeras cosas que querréis hacer con un nuevo sistema es personalizarlo a vuestro gusto.

### 2.1. Fondos de Pantalla, Temas, Sonidos, Salvapantallas

- **Fondos de Pantalla**: Cambiad la imagen que aparece en vuestro escritorio. Podéis usar imágenes propias o elegir entre las que vienen preinstaladas.
- **Temas**: Un tema es un conjunto predefinido de fondos de pantalla, colores, sonidos y punteros del ratón. Cambiar de tema transforma la apariencia general de vuestro escritorio.
- **Sonidos**: Personalizad los sonidos que Windows reproduce para diferentes eventos (inicio de sesión, error, notificación, etc.).
- **Salvapantallas**: Una imagen o animación que aparece cuando el ordenador está inactivo durante un tiempo determinado, protegiendo la pantalla (aunque en las pantallas modernas su utilidad es menor).

Podéis encontrar estas opciones en **Configuración > Personalización**.

### 2.2. Configuración Regional e Idioma

Esto es crucial para que vuestro sistema se adapte a vuestra ubicación y forma de trabajo.

-   **Formato de fecha, hora y moneda**: Aseguraos de que Windows muestre estos elementos según las convenciones de vuestro país.
-   **Idioma de visualización**: Cambia el idioma en el que se muestran los menús y diálogos y texto del sistema operativo.
-   **Teclado**: Configurad la distribución del teclado para que coincida con vuestro idioma y disposición física.

Estas opciones se encuentran en **Configuración > Hora e idioma**.

### 2.3. Cuentas de Usuario y Opciones de Inicio de Sesión

La gestión de cuentas de usuario es fundamental para la seguridad y la organización en un sistema monopuesto, especialmente si varias personas lo utilizan.

-   **Tipos de cuentas**:
    -   **Administrador**: Tiene control total sobre el sistema, puede instalar software, cambiar configuraciones importantes y acceder a todos los archivos.
    -   **Estándar**: Puede usar la mayoría del software y cambiar sus propias configuraciones, pero necesita permiso de un administrador para realizar cambios que afecten a otros usuarios o al sistema.
-   **Crear y gestionar cuentas**:  Podéis añadir nuevos usuarios, cambiar sus tipos de cuenta, establecer contraseñas o eliminarlas.
-   **Opciones de inicio de sesión**:  Configurad cómo iniciar sesión, como la necesidad de una contraseña, un PIN, reconocimiento facial (Windows Hello) o una clave de seguridad USB.

Podéis gestionar esto en **Configuración > Cuentas**.

## 3. Gestión de Sistemas de Archivos Específicos en Windows

Los sistemas de archivos son la forma en que los datos se organizan y almacenan en un disco. En Windows, los más comunes son NTFS y FAT32.

### 3.1. Formateo de Unidades (NTFS, FAT32)

Formatear una unidad es el proceso de preparar un disco (o una partición) para almacenar datos, creando un sistema de archivos en él. Esto borra todos los datos existentes en la unidad.

- **NTFS (New Technology File System)**: Es el sistema de archivos predeterminado para las instalaciones de Windows modernas. Soporta archivos y particiones de gran tamaño, permisos de seguridad a nivel de archivo, cifrado y otras características avanzadas. Es ideal para discos duros internos.
- **FAT32 (File Allocation Table 32)**: Es un sistema de archivos más antiguo con limitaciones de tamaño para archivos individuales (máximo 4 GB) y particiones (máximo 2 TB). Es más compatible con una amplia gama de dispositivos (consolas, reproductores multimedia, algunos sistemas operativos antiguos). Es común en memorias USB pequeñas y tarjetas SD.

Para formatear una unidad:

1. Abrid el Explorador de Archivos.
2. Haced clic derecho en la unidad que queréis formatear.
3. Seleccionad Formatear....
4. Elegid el sistema de archivos (NTFS o FAT32) y otras opciones.
5. Haced clic en Iniciar.

### 3.2. Comprobación de Errores de Disco (chkdsk)

Los discos duros pueden desarrollar errores en su sistema de archivos o en los sectores físicos. La herramienta `chkdsk` (check disk) es fundamental para detectar y corregir estos problemas.

Para usar `chkdsk`:

1. Abrid el Explorador de Archivos.
2. Haced clic derecho en la unidad que queréis comprobar.
3. Seleccionad Propiedades.
4. Id a la pestaña Herramientas.
5. En la sección "Comprobación de errores", haced clic en Comprobar.

También podéis ejecutarlo desde el Símbolo del sistema (CMD) como administrador. Por ejemplo, `chkdsk C: /f /r` para la unidad C: (la opción `/f`' corrige errores y `/r` busca sectores defectuosos y recupera información legible).

### 3.3. Desfragmentación y Optimización de Unidades

Con el tiempo, los archivos en un disco duro pueden fragmentarse (partes de un archivo se guardan en diferentes lugares del disco), lo que puede ralentizar el acceso a ellos.

- La **desfragmentación** (solo para discos duros mecánicos HDD) reorganiza estos fragmentos de datos para que los archivos se almacenen de forma contigua, mejorando el rendimiento.
- Para las unidades de estado sólido (SSD), en lugar de desfragmentar, se realiza una optimización que ayuda a prolongar su vida útil y mantener su rendimiento mediante el comando TRIM.

Para optimizar/desfragmentar:

1. Abrid el Explorador de Archivos.
2. Haced clic derecho en la unidad.
3. Seleccionad Propiedades.
4. Id a la pestaña Herramientas.
5. En la sección "Optimizar y desfragmentar unidad", haced clic en Optimizar.

Windows suele programar optimizaciones automáticas, pero es bueno saber cómo hacerlo manualmente.

## 4. Métodos para la Recuperación del Sistema Operativo

A veces, las cosas no salen como esperamos y el sistema puede fallar. Windows ofrece varias herramientas para ayudar a recuperar el equipo.

### 4.1. Puntos de Restauración del Sistema

Un punto de restauración es una "instantánea" del estado del sistema en un momento dado, incluyendo archivos de sistema, programas instalados, controladores y la configuración del registro.

- Windows crea puntos de restauración automáticamente antes de eventos importantes (como la instalación de un nuevo programa o una actualización).
- También podéis crear puntos de restauración manualmente.

### 4.2. Restauración del Sistema

La Restauración del Sistema os permite revertir el equipo a un punto de restauración anterior, deshaciendo cambios que puedan haber causado problemas, como la instalación de un controlador defectuoso o un programa incompatible. No afecta a vuestros documentos personales.

Para acceder a ella: Buscad "Crear un punto de restauración" en el Menú Inicio y en la pestaña "Protección del sistema", haced clic en Restaurar sistema....

### 4.3. Copia de Seguridad y Restauración

Realizar copias de seguridad es una de las prácticas más importantes para proteger vuestros datos.

- **Copia de seguridad de archivos**: Protege vuestros documentos, fotos, videos, etc., guardándolos en otra ubicación (disco externo, nube).
- **Copia de seguridad de imagen del sistema**: Crea una copia exacta de todo vuestro disco duro, incluyendo el sistema operativo, programas y datos. Es útil para recuperar el sistema a su estado exacto en caso de un fallo grave del disco o del sistema.

Windows tiene una herramienta llamada "Copia de seguridad y restauración (Windows 7)" (aunque esté en Windows 10/11) en el Panel de Control, que permite crear estas copias de seguridad. También podéis usar el Historial de Archivos en Configuración para hacer copias de seguridad de vuestros documentos personales.

### 4.4. Modo Seguro

El **Modo Seguro** es una forma de iniciar Windows con un conjunto mínimo de controladores y servicios. Si el sistema no arranca normalmente o si tenéis problemas persistentes (virus, controladores defectuosos), el Modo Seguro os permite diagnosticar y solucionar problemas porque solo carga lo esencial.

Para acceder al Modo Seguro:

1. Reiniciad el equipo.
2. Durante el inicio, si Windows no arranca correctamente dos veces seguidas, la tercera vez debería aparecer el **Entorno de Recuperación de Windows (WinRE)**.
3. Desde WinRE, id a **Solucionar problemas > Opciones avanzadas > Configuración de inicio > Reiniciar**.
4. Cuando reinicie, veréis varias opciones para el Modo Seguro (con red, con símbolo del sistema).

## 5. Configuración para la Actualización del Sistema Operativo

Mantener el sistema actualizado es vital para la seguridad y el rendimiento.

### 5.1. Windows Update: Configuración y Gestión de Actualizaciones

Windows Update es el servicio encargado de descargar e instalar automáticamente las actualizaciones de seguridad, parches y nuevas características para Windows.

- **Configuración**: Podéis configurar cuándo y cómo se descargan e instalan las actualizaciones. Es recomendable permitir las actualizaciones automáticas.
- **Gestión**: Desde **Configuración > Actualización y seguridad > Windows Update**, podéis:
    - Buscar actualizaciones.
    - Pausar las actualizaciones.
    - Ver el historial de actualizaciones.
    - Cambiar las horas activas para evitar que el equipo se reinicie en momentos inoportunos.

### 5.2. Actualizaciones de Drivers

Los drivers (o controladores) son programas que permiten que el sistema operativo se comunique con el hardware de vuestro ordenador (tarjeta gráfica, impresora, tarjeta de red, etc.).

- Windows Update a menudo instala drivers, pero a veces es necesario actualizar los drivers manualmente, especialmente para componentes específicos como tarjetas gráficas, para obtener el mejor rendimiento o solucionar problemas.
- Podéis actualizar drivers desde el **Administrador de Dispositivos** (buscadlo en el Menú Inicio), o descargándolos directamente desde el sitio web del fabricante del hardware.

## 6. Operaciones de Instalación/Desinstalación de Utilidades

Instalar y desinstalar programas es una tarea común en cualquier sistema operativo.

### 6.1. Instalación de Programas (setup.exe, Tienda de Aplicaciones)

-   **Instaladores tradicionales (`setup.exe`)**: La mayoría de los programas de escritorio se instalan ejecutando un archivo `setup.exe` o `install.exe`. Estos suelen guiaros a través de un asistente de instalación. Siempre descargad software de fuentes fiables.
-   **Tienda de Aplicaciones (Microsoft Store)**: Windows 10 y 11 tienen una tienda de aplicaciones integrada que ofrece una forma segura y sencilla de instalar aplicaciones modernas (UWP - Universal Windows Platform). Las aplicaciones de la tienda se instalan y desinstalan de forma más limpia y controlada.

### 6.2. Desinstalación de Programas

Es importante desinstalar programas correctamente para evitar dejar archivos residuales y liberar espacio en disco.

- **Desde Configuración**: Id a **Configuración > Aplicaciones > Aplicaciones y características**. Aquí podéis seleccionar un programa y hacer clic en "Desinstalar".
- **Desde el Panel de Control**: Id a **Panel de Control > Programas > Programas y características**. Seleccionad el programa y haced clic en "Desinstalar o cambiar un programa".

### 6.3. Gestión de Programas de Inicio

Algunos programas se configuran para iniciarse automáticamente cuando arranca Windows, lo que puede ralentizar el inicio del sistema.

- Administrador de Tareas: Pulsad `Ctrl + Shift + Esc` para abrir el Administrador de Tareas. Id a la pestaña Inicio. Aquí podéis ver qué programas se inician con Windows y deshabilitar los que no necesitéis, mejorando el tiempo de arranque.

## 7. Asistentes de Configuración del Sistema

### 7.1. Configuración de Red (Adaptadores, IP, DNS)

Configurar una conexión de red es esencial para acceder a Internet y a otros recursos de red.

- **Adaptadores de red**: Son los componentes de hardware que permiten al ordenador conectarse a una red (Ethernet, Wi-Fi).
- **Dirección IP (Internet Protocol)**: Es la "matrícula" de vuestro dispositivo en la red. Puede ser asignada automáticamente (DHCP) o configurada manualmente.
- **Servidores DNS (Domain Name System)**: Traducen los nombres de dominio (como google.com) en direcciones IP.

Podéis configurar estas opciones en Configuración > Red e Internet. Para opciones más avanzadas, buscad "Centro de redes y recursos compartidos" en el Panel de Control.

### 7.2. Añadir Dispositivos e Impresoras

Windows facilita la conexión de nuevos dispositivos.

- **Añadir un dispositivo Bluetooth**: Desde **Configuración > Dispositivos > Bluetooth y otros dispositivos**, podéis emparejar auriculares, teclados, ratones Bluetooth, etc.
- **Añadir una impresora**: Desde **Configuración > Dispositivos > Impresoras y escáneres**, podéis añadir impresoras conectadas por USB, red o inalámbricas. Windows a menudo instalará los drivers automáticamente.


## 8. Automatización de Tareas del Sistema

La automatización puede ahorrar mucho tiempo y esfuerzo.

### 8.1. Programador de Tareas: Creación y Gestión de Tareas Programadas

El **Programador de Tareas** es una herramienta poderosa que permite a Windows ejecutar programas o scripts automáticamente en un momento específico o cuando ocurre un evento determinado.

Podéis usarlo para:

- Ejecutar copias de seguridad a una hora programada.
- Iniciar una aplicación al encender el ordenador.
- Limpiar archivos temporales regularmente.
- Para acceder: Buscad "Programador de tareas" en el Menú Inicio.

### 8.2. Scripts Básicos (Batch y PowerShell)

Los scripts Batch son archivos de texto simples con extensión `.bat` que contienen una serie de comandos que Windows ejecuta en secuencia. Son útiles para automatizar tareas repetitivas o sencillas que implican el uso de la línea de comandos.

Ejemplos de comandos básicos en un script batch:

- echo: Muestra texto en la pantalla.
- cd: Cambia de directorio.
- dir: Lista el contenido de un directorio.
- copy: Copia archivos.
- del: Borra archivos.
- mkdir: Crea una carpeta.

Por ejemplo, un script sencillo para limpiar la papelera de reciclaje y los archivos temporales podría contener:

```batch
@echo off
echo Limpiando archivos temporales...
del /q /s %TEMP%\*.*
echo Limpiando papelera de reciclaje...
rd /s /q C:\$Recycle.Bin
echo Limpieza completada.
pause
```

Además de los scripts Batch, Windows también cuenta con PowerShell, un potente entorno de línea de comandos y lenguaje de scripting basado en .NET. PowerShell es mucho más avanzado que Batch, permitiendo una automatización más compleja y la gestión de casi cualquier aspecto del sistema operativo y sus aplicaciones.

**Introducción a PowerShell:**

PowerShell utiliza "cmdlets" (comandos ligeros) con una sintaxis de verbo-sustantivo (por ejemplo, Get-Process, Set-Service). Es orientado a objetos, lo que significa que los comandos devuelven objetos que pueden ser fácilmente manipulados y pasados a otros comandos, lo que lo hace extremadamente flexible.

**Ejemplo de script PowerShell para la misma tarea:**

```powershell
# Limpiar archivos temporales
Write-Host "Limpiando archivos temporales..."
Get-ChildItem -Path $env:TEMP -Recurse -Force | Remove-Item -ErrorAction SilentlyContinue -Force

# Vaciar la papelera de reciclaje para todas las unidades
Write-Host "Vaciando la papelera de reciclaje..."
Clear-RecycleBin -ErrorAction SilentlyContinue -Force

Write-Host "Limpieza completada."
Read-Host "Presiona Enter para salir..."
```

Este script de PowerShell realiza una tarea similar al script Batch, pero utiliza cmdlets específicos de PowerShell que son más robustos y ofrecen mayor control.



## Actividad Práctica: Configuración, Mantenimiento y Recuperación de Sistemas Windows

**Objetivo General**

Aplicar los conocimientos adquiridos sobre las interfaces de usuario, preferencias de configuración, gestión de sistemas de archivos, recuperación del sistema operativo y automatización de tareas en Windows, simulando escenarios reales de un técnico informático.

**Instrucciones**

Realiza cada una de las siguientes tareas en un equipo con Windows (preferiblemente en un entorno de pruebas o una máquina virtual si no quieres alterar tu sistema principal). Documenta los pasos que sigues y el resultado de cada acción con capturas de pantalla que debes incluir en un documento en formato PDF.

### Parte 1: Exploración y Personalización de la Interfaz

**1. Familiarización con el Escritorio, Menú Inicio y Barra de Tareas**

- Ancla una aplicación que uses frecuentemente a la Barra de Tareas y luego desánclala.
- Abre el Explorador de Archivos y averigua la ruta absoluta de tu carpeta `Documentos`

**2. Personalización del Entorno Personal**

- Cambia el fondo de pantalla de tu escritorio por una imagen de tu elección.
- Aplica un **Tema** diferente al actual. Explica qué es un tema y qué elementos modifica.
- Verifica la **Configuración Regional e Idioma** de tu sistema. Asegúrate de que el formato de fecha, hora y moneda, así como el idioma de visualización, sean correctos.


### Parte 2: Gestión de Cuentas de Usuario y Programas

**1. Gestión de Cuentas de Usuario**

- Navega a la sección de **Cuentas de Usuario**.
- Describe los dos tipos principales de cuentas de usuario: **Administrador** y **Estándar**, y sus diferencias clave en cuanto a permisos.
- Crea una nueva cuenta de tipo "Estándar".
- Cambia el tipo de la nueva cuenta a "Administrador".

**2. Instalación y Desinstalación de Programas**

- Explica la diferencia entre instalar programas desde un instalador tradicional (`setup.exe`) y la **Microsoft Store**.
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