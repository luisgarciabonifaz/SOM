# Configuración y Personalización Linux

En este tema, aprenderás a configurar y personalizar tu sistema operativo Linux para adaptarlo a tus necesidades. Exploraremos desde la interfaz gráfica hasta la potente terminal de comandos, pasando por la gestión de usuarios, discos y mucho más.

## 1. Interfaces de Usuario de Linux

Linux ofrece principalmente dos formas de interactuar con el sistema: a través de un entorno de escritorio (GUI) o mediante la terminal de comandos (CLI).

### 1.1. Entornos de Escritorio (GUI)

Un entorno de escritorio te proporciona una interfaz gráfica completa, con ventanas, iconos y menús, similar a lo que encontrarías en otros sistemas operativos como Windows o macOS. Los más populares son:

- **GNOME**: Moderno y minimalista, se centra en la simplicidad y la facilidad de uso. Es el entorno por defecto en distribuciones como Ubuntu y Fedora.
- **KDE Plasma**: Altamente personalizable y visualmente atractivo. Ofrece una gran cantidad of opciones de configuración y efectos visuales.
- **XFCE**: Ligero y rápido, ideal para ordenadores con menos recursos. Es funcional y consume poca memoria RAM.
- **MATE**: Basado en GNOME 2, ofrece una experiencia de escritorio más tradicional y es conocido por su estabilidad.

### 1.2. Terminal de Comandos (CLI)

La **CLI (Command-Line Interface)** es una forma potente y directa de interactuar con el sistema mediante comandos de texto. Aunque puede parecer intimidante al principio, es una herramienta esencial para cualquier administrador de sistemas.

* Para abrir una terminal, busca la aplicación "Terminal" en tu menú de aplicaciones.
* La terminal te mostrará un *prompt*, que suele tener la forma `usuario@hostname:~$`, esperando a que introduzcas comandos.

## 2. Configuración del Entorno

Una de las grandes ventajas de Linux es su alta capacidad de personalización.

### 2.1. Temas, Fondos e Iconos

Puedes cambiar casi cualquier aspecto visual de tu entorno de escritorio:

* **Fondos de pantalla**: Haz clic derecho en el escritorio y busca la opción "Cambiar fondo de pantalla".
* **Temas e Iconos**: En la configuración del sistema (a menudo llamada "Ajustes" o "Centro de Control"), encontrarás secciones para cambiar el tema de las ventanas, los controles (botones, barras de desplazamiento) y los paquetes de iconos.

### 2.2. Configuración Regional e Idioma

Puedes ajustar el idioma del sistema, el formato de la fecha y hora, y la moneda.

* Ve a **Ajustes > Región e Idioma**.
* Desde aquí, podrás seleccionar el idioma principal del sistema y los formatos regionales. El sistema podría necesitar descargar paquetes adicionales.

### 2.3. Gestión de Usuarios y Grupos

En Linux, la correcta gestión de usuarios y grupos es fundamental para la seguridad y la organización. Cada usuario tiene una cuenta para interactuar con el sistema, mientras que los grupos se utilizan para conceder permisos a varios usuarios a la vez sobre archivos y directorios.

Los archivos clave que almacenan esta información son:

- `/etc/passwd`: Información de los usuarios (nombre, ID de usuario (UID), ID de grupo (GID), directorio personal, shell por defecto).
- `/etc/shadow`: Contiene las contraseñas cifradas de los usuarios. Solo es legible por el superusuario.
- `/etc/group`: Información sobre los grupos.
  
**Usuarios**

Cada persona que utiliza el sistema debe tener una **cuenta de usuario**. Los usuarios se identifican por un **nombre de usuario** y un **UID (User ID)** numérico único.

- **Usuario root:** Es el superusuario con todos los permisos en el sistema. Debe usarse con extrema precaución.
- **Usuarios normales:** Tienen permisos limitados y suelen ser los usuarios diarios del sistema.
- **Usuarios de sistema:** Cuentas especiales creadas por el sistema para ejecutar servicios (ej., `apache`, `mysql`).

**Grupos**

Los **grupos** son colecciones de usuarios. Permiten asignar permisos a un conjunto de usuarios de una vez, simplificando la administración. Cada usuario pertenece al menos a un **grupo primario** y puede pertenecer a varios **grupos secundarios**. Los grupos se identifican por un **nombre de grupo** y un **GID (Group ID)** numérico único.

## 3. Gestión de Sistemas de Archivos

Los dispositivos de almacenamiento (discos duros, USBs) necesitan ser "montados" para poder acceder a sus archivos.

### 3.1. Montaje y Desmontaje de Unidades

- **Asocia un dispositivo con un directorio (punto de montaje):** `mount`
   
```bash
    # Crear un punto de montaje (una carpeta vacía)
    sudo mkdir /mnt/mi_usb

    # Montar la partición /dev/sdb1 en el directorio creado
    # /dev/sdb1 suele ser la primera partición de un segundo disco o USB
    sudo mount /dev/sdb1 /mnt/mi_usb
```

- **Desmonta una unidad:** `umount`
  
```bash
    # Desmontar la unidad por su punto de montaje
    sudo umount /mnt/mi_usb
```

### 3.2. Formateo de Particiones

Formatear una partición borra todos sus datos y crea un nuevo sistema de archivos. ¡Usa este comando con mucho cuidado!

- **(Make Filesystem):** `mkfs`. Permite formatear una partición con un sistema de archivos específico.
  
```bash
    # Formatear la partición /dev/sdb1 con el sistema de archivos ext4
    # ¡¡¡CUIDADO!!! ESTO BORRA TODOS LOS DATOS DE /dev/sdb1
    sudo mkfs.ext4 /dev/sdb1
```

### 3.3. Comprobación y Reparación de Sistemas de Archivos

- **(File System Check):** `fsck`. Se usa para comprobar y, si es posible, reparar errores en un sistema de archivos. La unidad debe estar desmontada.

```bash
    # Primero, desmontar la unidad
    sudo umount /dev/sdb1

    # Comprobar y reparar la partición
    sudo fsck /dev/sdb1
```

## 4. Recuperación del Sistema

A veces, las cosas salen mal. Afortunadamente, Linux ofrece varias herramientas para recuperar un sistema dañado.

### 4.1. Modo de Recuperación (Recovery Mode)

La mayoría de las distribuciones Linux incluyen una opción de "Modo de Recuperación" en el menú de arranque (GRUB). Este modo arranca el sistema en un estado mínimo y ofrece opciones como:

- **root**: Acceder a una terminal de comandos como superusuario (root) para reparaciones manuales.
- **fsck**: Comprobar los sistemas de archivos del disco duro.
- **network**: Activar la red para poder descargar paquetes o buscar ayuda.

### 4.2. Uso de Live USB para Reparación

Un **Live USB** es una memoria USB que contiene un sistema operativo completo que se puede ejecutar sin instalarlo en el disco duro.

1.  Arranca el ordenador desde el Live USB.
2.  Elige la opción "Probar [Nombre de la Distribución]" (por ejemplo, "Probar Ubuntu").
3.  Una vez en el escritorio del Live USB, puedes acceder a los archivos de tu disco duro interno, hacer copias de seguridad o usar herramientas como **GParted** para gestionar particiones y **Disks** para comprobar el estado del disco.

### 4.3. Copia de Seguridad (Backup)

Realizar copias de seguridad es fundamental.

- **`tar`**: Empaqueta múltiples archivos y directorios en un solo archivo (`.tar`).
    ```bash
    # Crear un archivo comprimido de la carpeta /home/alumno
    tar -czvf backup_alumno.tar.gz /home/alumno
    ```
    - `-c`: crear un archivo.
    - `-z`: comprimir con gzip.
    - `-v`: modo detallado (verbose), muestra los archivos que se procesan.
    - `-f`: indica el nombre del archivo de salida.

- **`rsync`**: Sincroniza archivos y directorios entre dos ubicaciones (localmente o por red). Es muy eficiente, ya que solo copia los archivos que han cambiado.
    ```bash
    # Sincronizar la carpeta /home/alumno a un disco externo montado en /mnt/backup
    rsync -avh /home/alumno/ /mnt/backup/
    ```
    - `-a`: modo archivo (conserva permisos, fechas, etc.).
    - `-v`: modo detallado.
    - `-h`: formato legible para humanos (human-readable).


## 5. Actualización del Sistema

Mantener tu sistema actualizado es crucial para la seguridad y la estabilidad. Linux utiliza **gestores de paquetes** para facilitar esta tarea.

### 5.1. Gestores de Paquetes

Cada familia de distribuciones de Linux tiene su propio gestor de paquetes:

- **`apt`** (Advanced Package Tool): Usado en Debian, Ubuntu y derivados.
- **`yum` / `dnf`** (Dandified YUM): Usado en Fedora, CentOS y RHEL. `dnf` es la versión moderna de `yum`.
- **`pacman`**: Usado en Arch Linux y derivados.

### 5.2. Actualización del Sistema y Paquetes

El proceso generalmente consta de dos pasos:

1.  **Actualizar la lista de paquetes**: Descarga la información más reciente sobre las versiones de los paquetes disponibles.
2.  **Actualizar los paquetes instalados**: Descarga e instala las nuevas versiones de los paquetes que tienes en tu sistema.

**Con `apt` (Ubuntu/Debian):**

```bash
    # 1. Actualizar la lista de paquetes
    sudo apt update
    # 2. Actualizar los paquetes instalados
    sudo apt upgrade
```
**Con `dnf` (Fedora):**

``` bash
    # Actualiza la lista y los paquetes en un solo comando
    sudo dnf upgrade
```

## 6. Instalación/Desinstalación de Utilidades

Los gestores de paquetes también se usan para instalar y eliminar software.

### 6.1. Instalación de Paquetes

**Con `apt` (Ubuntu/Debian):**

``` bash
    # Instalar el editor de imágenes GIMP
    sudo apt install gimp
```

**Con `dnf` (Fedora):**

``` bash
    # Instalar el editor de imágenes GIMP
    sudo dnf install gimp
```

### 6.2. Desinstalación de Paquetes

**Con `apt` (Ubuntu/Debian):**

``` bash
    # Desinstalar GIMP
    sudo apt remove gimp

    # Desinstalar GIMP y sus archivos de configuración
    sudo apt purge gimp
```

**Con `dnf` (Fedora):**

``` bash
    # Desinstalar GIMP
    sudo dnf remove gimp
```
### 6.3. Compilación de Software desde Código Fuente (Conceptual)

A veces, un programa no está disponible en los repositorios. En esos casos, se puede compilar desde su **código fuente**. Aunque es un proceso avanzado, los pasos conceptuales son:

1. **Descargar el código fuente** (generalmente un archivo `.tar.gz`).
2. **Descomprimirlo**.
3. **Configurar**: Se ejecuta un script (`./configure`) que comprueba si tienes todas las dependencias necesarias.
4. **Compilar**: Se ejecuta el comando `make`, que traduce el código fuente a código máquina.
5. **Instalar**: Se ejecuta `sudo make install`, que copia los archivos compilados a las carpetas del sistema.

## 7. Asistentes de Configuración del Sistema

Aunque muchas tareas se pueden hacer por la terminal, los entornos de escritorio ofrecen asistentes gráficos para facilitar la configuración.

### 7.1. Configuración de Red

La mayoría de las distribuciones modernas usan **NetworkManager**, que proporciona un icono en el panel del sistema para gestionar conexiones Wi-Fi, cableadas y VPN de forma sencilla.

En servidores o sistemas sin entorno gráfico, se usan herramientas como:

- **`netplan`**: Sistema moderno para configurar redes en Ubuntu usando archivos YAML.

- **`ifconfig`** (obsoleto) / **`ip`**: Comandos para ver y configurar interfaces de red.

``` bash
    # Ver la configuración de red con el comando 'ip'
    ip addr show
```

### 7.2. Gestión de Impresoras y Dispositivos

**CUPS (Common Unix Printing System)** es el sistema de impresión estándar en Linux. La configuración de impresoras se puede hacer fácilmente desde:

- **Ajustes > Impresoras**.
- El asistente detectará automáticamente impresoras en la red o conectadas por USB.

Los dispositivos como webcams, micrófonos o monitores adicionales suelen ser **Plug and Play** y funcionan sin necesidad de instalar drivers manualmente.


## 8. Automatización de Tareas del Sistema

La automatización es una de las mayores fortalezas de Linux. En lugar de ejecutar manualmente tareas repetitivas (como copias de seguridad, actualizaciones o limpieza de archivos temporales), puedes ordenarle al sistema que las haga por ti en un horario específico. La herramienta clásica para esto es **cron**.

### 8.1. ¿Qué es Cron y para qué sirve?

Imagina a **cron** como un relojero digital que vive dentro de tu sistema. Es un **demonio** (un programa que se ejecuta en segundo plano) que se despierta cada minuto para revisar una lista de tareas. Si encuentra que alguna tarea coincide con la fecha y hora actuales, la ejecuta.

Las tareas que gestiona `cron` se conocen como **cron jobs**.

### 8.2. El Comando `crontab`

No editas directamente el "reloj" de `cron`. En su lugar, usas el comando `crontab` (que significa "cron table" o tabla de cron) para gestionar tu lista personal de tareas programadas.

- `crontab -e`: **Editar** tu archivo crontab. Si es la primera vez que lo usas, te pedirá que elijas un editor de texto (como `nano`, que es el más sencillo).
- `crontab -l`: **Listar** las tareas que tienes programadas actualmente.
- `crontab -r`: **Eliminar** *todas* tus tareas programadas. ¡Usa este comando con mucho cuidado!

### 8.3. La Sintaxis: Desglosando el Tiempo

La parte más importante de un cron job es definir *cuándo* debe ejecutarse. Cada línea en el archivo `crontab` representa una tarea y sigue una estructura estricta:

``` bash
┌───────────── minuto (0 - 59)
│ ┌───────────── hora (0 - 23)
│ │ ┌───────────── día del mes (1 - 31)
│ │ │ ┌───────────── mes (1 - 12)
│ │ │ │ ┌───────────── día de la semana (0 - 6) (Domingo=0 o 7)
│ │ │ │ │
* * * * * /ruta/al/comando_a_ejecutar
```

Para cada campo de tiempo, puedes usar:

- Un **asterisco `\*`**: Significa "siempre" o "cada". Por ejemplo, un `*` en el campo de los minutos significa "cada minuto".
- Un **número específico**: Por ejemplo, un `15` en el campo de los minutos significa "a los 15 minutos".
- Una **coma `,`** para separar múltiples valores: `0,15,30,45` en el campo de los minutos significa "en el minuto 0, 15, 30 y 45".
- Un **guion `-`** para definir un rango: `8-17` en el campo de la hora significa "desde las 8 de la mañana hasta las 5 de la tarde (17h), inclusive".
- Una **barra `/`** para indicar "pasos" o intervalos. `*/15` en el campo de los minutos significa "cada 15 minutos". Es un atajo para `0,15,30,45`.

### 8.4. Ejemplos Prácticos

Vamos a ver cómo se traduce esto en tareas reales. Abriríamos el editor con `crontab -e` y añadiríamos estas líneas:

**1. Ejecutar un script de limpieza cada noche a las 2:30 AM:**

``` bash
    30 2 * * * /home/alumno/scripts/limpiar_temporales.sh
```

**2. Realizar una copia de seguridad con `rsync` todos los domingos a las 4:00 AM:**

``` bash
    0 4 * * 0 rsync -a /home/alumno/documentos/ /mnt/backup/
```

*(Recuerda: el 0 en el último campo significa domingo).*

**3. Comprobar las actualizaciones del sistema dos veces al día, a las 10:00 y a las 18:00:**

``` bash
    0 10,18 * * * sudo apt update
```

**4. Ejecutar un script cada 10 minutos, pero solo durante el horario laboral (de lunes a viernes de 9 a 17h):**

``` bash
    */10 9-17 * * 1-5 /home/alumno/scripts/monitorizar.sh
```

### 8.5. Cadenas Especiales para Simplificar

Para las tareas más comunes, `cron` ofrece atajos mucho más legibles:

| Cadena     | Equivalente | Descripción                                      |
| ---------- | ----------- | ------------------------------------------------ |
| `@reboot`  | -           | Se ejecuta una sola vez, al arrancar el sistema. |
| `@yearly`  | `0 0 1 1 *` | Se ejecuta una vez al año.                       |
| `@monthly` | `0 0 1 * *` | Se ejecuta una vez al mes.                       |
| `@weekly`  | `0 0 * * 0` | Se ejecuta una vez a la semana.                  |
| `@daily`   | `0 0 * * *` | Se ejecuta una vez al día (a medianoche).        |
| `@hourly`  | `0 * * * *` | Se ejecuta una vez cada hora.                    |

**Ejemplo con atajo:**

``` bash
    # Versión simple de la copia de seguridad semanal
    @weekly rsync -a /home/alumno/documentos/ /mnt/backup/
```

### 8.6. Gestionando la Salida de los Comandos

Por defecto, si un comando programado produce algún tipo de salida en pantalla (texto, errores, etc.), `cron` intentará enviarla por correo electrónico al propietario del crontab. Esto no siempre es práctico.

Para gestionar esto, puedes redirigir la salida:

- **Guardar la salida en un archivo de log:**

``` bash
    0 2 * * * /ruta/al/script.sh >> /var/log/mi_script.log 2>&1
```

  - `>>`: Añade la salida estándar al final del archivo (en lugar de sobreescribirlo).
  - `2>&1`: Redirige la salida de errores (stderr) al mismo sitio que la salida estándar (stdout). Esto es clave para capturar tanto los mensajes de éxito como los errores.

- **Descartar toda la salida (si no te interesa):**

``` bash
    */5 * * * * /ruta/al/comando_silencioso.sh >/dev/null 2>&1
```

  - `/dev/null` es un "agujero negro" en Linux; todo lo que se envía allí, desaparece.

### 8.2. Scripts de Shell (Bash Scripting Básico)

Un **script de shell** es un archivo de texto que contiene una secuencia de comandos. Es una forma sencilla de automatizar tareas repetitivas.

**Ejemplo de script básico**: Un script que actualiza el sistema.

1. Crea un archivo llamado `actualizar.sh`:

``` bash
    #!/bin/bash
    # Este script actualiza el sistema (para Debian/Ubuntu)
   
    echo "=== Iniciando actualización del sistema ==="
   
    # Actualizar la lista de paquetes
    sudo apt update
   
    # Actualizar los paquetes instalados
    sudo apt upgrade -y  # La opción -y responde 'sí' automáticamente
   
    echo "=== Actualización completada ==="
```
2. Dale permisos de ejecución:

``` bash
    chmod +x actualizar.sh
```
3. Ejecútalo:

``` bash
   ./actualizar.sh
```