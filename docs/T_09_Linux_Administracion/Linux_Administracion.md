# Administración y optimización del rendimiento en Linux

En este tema, exploraremos las técnicas avanzadas para administrar y optimizar sistemas operativos Linux, centrándonos en aspectos cruciales para el rendimiento y la seguridad. Aprenderemos a gestionar usuarios y grupos, controlar procesos y servicios, optimizar la memoria y el almacenamiento, y a interpretar la configuración del sistema.

## 1. Usuarios y Grupos

La administración de usuarios y grupos es fundamental para la seguridad y el control de acceso en Linux.

Recuerda que la información de usuarios y grupos se almacena en los siguientes archivos de configuración: 

- /etc/passwd para los usuarios
- /etc/shadow para las contraseñas 
- /etc/group para los grupos

En Linux, cada usuario pertenece a un **grupo primario**, que es el grupo principal asociado al usuario y se utiliza para determinar los permisos predeterminados al crear archivos. Además, los usuarios pueden pertenecer a **grupos secundarios**, que son grupos adicionales que otorgan permisos específicos sin cambiar el grupo primario.

### 1.1. Administración avanzada de usuarios y grupos

Podemos crear, modificar y eliminar usuarios y grupos, así como gestionar sus pertenencias.

**useradd**
```bash
    useradd [opciones] nombre usuario
```
Opciones:

- -d: Especifica el directorio inicial del usuario
- -s: Especifica el shell del usuario
- -g: Especifica el grupo primario del usuario
- -G: Especifica los grupos secundarios del usuario. Combinarlo con a para añadir grupos
- -m: Crea el directorio de inicio del usuario
- -e: Especifica la fecha de expiración del usuario
- -uid: Especifica el identificador de usuario para el usuario

!!! Example "Ejemplos"
    ```bash
        sudo useradd -d /home/juanito juan
        sudo useradd -m pedro
    ```

**userdel** 

```bash
    userdel [opciones] nombre usuario
```

!!! Example "Ejemplos"
    ```bash
        sudo userdel juan
        sudo userdel -r juan   # Borra el directorio personal del usuario con todo su contenido
    ```

**usermod**

```bash
    usermod [opciones] nombre usuario
```

Opciones:

- -d: Sirve para asignar un nuevo directorio HOME al usuario.
- -m: Mueve el contenido del antiguo directorio al nuevo
- -g: Cambia el grupo del usuario. Se debe usar nombre o número del grupo. Debe existir el grupo previamente.
- -l: Permite modificar el login del usuario. OJO! no cambia el nombre del directorio HOME del usuario,debería cambiarse de forma manual.

!!! Example "Ejemplos"
    Para cambiar el directorio de inicio del usuario juan para que sea /home/profesores/juan. La opción
    -m hace que mueva el contenido del antiguo directorio al nuevo emplazamiento.

    ```bash
        sudo usermod -d /home/profes/juan -m juan
    ```

    Para cambiar el grupo inicial del usuario juan para que sea profesores.

    ```bash
        sudo usermod -g profesores juan
    ```

    Para cambiar el nombre del usuario juan. El nuevo nombre es jorge.
        
    ```bash
        sudo usermod -l jorge juan
    ```

    Para cambiar la contraseña a un usuario utilizar el comando, que nos pedirá por pantalla la nueva
    contraseña
        
    ```bash
        sudo passwd usuario
    ```

Los comandos habituales para la gestión de grupos son los siguientes:

**groupadd**

```bash
    groupadd [opciones] nombre _grupo
```

!!! Example "Ejemplos"
    ```bash
        groupadd profesores
    ```

**groupdel:**

```bash
    groupdel [opciones] nombre _grupo
```

!!! Example "Ejemplos"
    ```bash
        groupdel profesores
    ```

**groupmod**

```bash
    groupmod [opciones] nombre _grupo
```

Opciones:

- -g : El valor numérico del identificador de grupo. Este valor debe ser único. Los valores entre 0 y 99 se reservan normalmente para cuentas del sistema. Este valor no puede ser negativo
- -n: El nombre del grupo será cambiado de grupo a grupo

!!! Example "Ejemplos"
    ```bash
        groupmod -n alumnos profesores
    ```

Para añadir y borrar usuarios a un grupo utilizaremos los comandos **adduser** y **deluser**, especificando el usuario y el grupo

```bash
    adduser juan profesores  // Añadir a 'juan' al grupo 'profesores'
    deluser juan profesores  // Quitar a 'juan' del grupo 'profesores'
```


### Permisos sudo

El comando `sudo` (SuperUser DO) permite a usuarios autorizados ejecutar comandos con privilegios de superusuario (root) de forma segura y controlada. Es una alternativa más segura a iniciar sesión directamente como root.

- **Ejecutar un comando con sudo:**

``` bash
  sudo comando_a_ejecutar
```

  Se te pedirá tu propia contraseña de usuario para verificar tu identidad.

- **Añadir un usuario al grupo sudo o wheel** (según la distribución): Para que un usuario pueda usar `sudo`, debe pertenecer al grupo **sudo** (Debian/Ubuntu) o **wheel** (CentOS/RHEL). Esto se hace durante la creación del usuario o posteriormente con `usermod`.

``` bash
  sudo usermod -aG sudo nombre_de_usuario
```
    Después de añadir al usuario, este deberá cerrar sesión y volver a iniciarla para que los cambios surtan efecto.

- **Cambiar a otro usuario con `su`:** El comando `su` permite iniciar una sesión temporal como otro usuario, normalmente root si no se especifica usuario. A diferencia de `sudo`, `su` pide la contraseña del usuario destino y mantiene la sesión hasta que se sale con `exit` o `Ctrl+D`.

``` bash
  su -
```

  `su -` inicia una sesión de login como root, cargando el entorno y el directorio HOME de ese usuario.

- **Uso de `/etc/skel`:** El directorio `/etc/skel` contiene los archivos y carpetas de configuración predeterminados que se copian al directorio HOME de un nuevo usuario cuando se crea con `useradd -m` o `adduser`. Es útil para definir un entorno inicial común, por ejemplo con `.bashrc`, `.profile` o carpetas iniciales como `Desktop`.

  Si quieres personalizar la configuración inicial de todos los usuarios nuevos, edita los archivos dentro de `/etc/skel`.

## 2. Organización de archivos del sistema

### 2.1. Comandos `find`, `locate`, `grep`

Estos comandos son herramientas potentes para buscar archivos y contenido dentro de ellos.

- **find:** Busca archivos y directorios en un sistema de archivos basándose en criterios complejos (nombre, tipo, tamaño, fecha de modificación, etc.).

    La sintaxis básica del comando find es: `find [ruta] [expresión]`, 
    
    - [ruta] es el directorio desde donde empezar la búsqueda 
    - [expresión] define los criterios de búsqueda, como -name para el nombre, -type para el tipo de archivo, etc.
  
    Ejemplos:

    - `find /home/usuario -name "*.txt"`: Busca todos los archivos `.txt` en el directorio `/home/usuario` y sus subdirectorios.
    - `find /var/log -type f -size +1G`: Busca archivos regulares (`-type f`) mayores de 1 GB (`-size +1G`) en `/var/log`.
    - `find . -mtime -7`: Busca archivos modificados en los últimos 7 días en el directorio actual.

- **locate:** Busca archivos en una base de datos preindexada del sistema. Es mucho más rápido que `find` para búsquedas por nombre, pero la base de datos no está siempre actualizada en tiempo real.
    - `locate nombre_de_archivo`: Busca `nombre_de_archivo` en la base de datos.
    - Para actualizar la base de datos (se hace automáticamente por lo general):

``` bash
    sudo updatedb
```

- **grep (Global Regular Expression Print):** Busca patrones de texto dentro de archivos.
    - `grep "patron" archivo.txt`: Busca la cadena "patron" en `archivo.txt`.
    - `grep -i "patron" archivo.txt`: Busca "patron" ignorando mayúsculas/minúsculas.
    - `grep -r "patron" /etc/`: Busca "patron" recursivamente en todos los archivos del directorio `/etc/`.
    - `ls -l | grep ".txt"`: Combina `ls` con `grep` para listar solo archivos `.txt`.

### 2.2. Editor de texto (nano, vi/vim básico)

Los editores de texto de consola son esenciales para editar archivos de configuración o scripts directamente en el terminal.

- **nano:** Es un editor sencillo y fácil de usar, ideal para principiantes.
    - `nano nombre_de_archivo`: Abre `nombre_de_archivo` para editarlo.
    - **Comandos básicos en nano:**
        - `Ctrl + O`: Guardar el archivo.
        - `Ctrl + X`: Salir del editor.
        - `Ctrl + W`: Buscar texto.
        - `Ctrl + K`: Cortar línea.
        - `Ctrl + U`: Pegar línea.


## 3. Procesos del usuario

Los procesos son programas en ejecución. Saber cómo monitorizarlos y gestionarlos es crucial para el rendimiento del sistema.

### 3.1. Comandos `ps`, `top`, `htop`

Estas herramientas permiten ver qué procesos se están ejecutando y cómo utilizan los recursos del sistema.

#### 3.1.1. ps (process status) 

Muestra los procesos en ejecución en un momento dado.

**Opciones principales**
  
| Opción | Descripción                        |
| ------ | ---------------------------------- |
| `a`    | Procesos de todos los usuarios     |
| `u`    | Muestra el propietario del proceso |
| `x`    | Procesos sin terminal asociada     |



!!! Example "Ejemplos"

    Muestra todos los procesos de todos los usuarios con información detallada.
    ```bash
       ps aux 
    ```
    Busca el proceso `firefox`.
    ```bash
       ps -ef | grep "firefox"
    ```

#### 3.1.2. **top**

El comando `top` proporciona una vista en tiempo real de los procesos del sistema. 

En la parte superior muestra estadísticas del sistema como el tiempo de actividad, promedio de carga, número de tareas activas, uso de CPU (dividido en usuario, sistema, nice, idle, etc.) y uso de memoria (RAM y swap). 

La lista de procesos incluye columnas como:

- PID (identificador del proceso)
- USER (propietario)
- PR (prioridad)
- NI (valor nice)
- VIRT (memoria virtual)
- RES (memoria residente)
- SHR (memoria compartida)
- S (estado del proceso)
- %CPU (porcentaje de CPU usado)
- %MEM (porcentaje de memoria usado)
- TIME+ (tiempo total de CPU)
- COMMAND (nombre del comando).

**Atajos útiles dentro de `top`:**

| Tecla | Acción                           |
| ----- | -------------------------------- |
| `q`   | Salir de la aplicación           |
| `k`   | Matar un proceso (pedirá el PID) |
| `M`   | Ordenar por uso de memoria       |
| `P`   | Ordenar por uso de CPU           |


Atajos adicionales incluyen: `h` para mostrar ayuda, `z` para alternar colores, `1` para mostrar uso de CPUs individuales (en sistemas multi-core), `f` para seleccionar qué campos mostrar, `s` para cambiar el intervalo de actualización, y `u` para filtrar por usuario.

#### 3.1.3. **htop**

Versión interactiva y mejorada de `top`, con interfaz más amigable.

- Instalación: `sudo apt install htop     # o     sudo dnf install htop`
- Uso: `htop`
- Funciones:
    - Navegar con flechas del teclado.
    - Usar teclas **F1–F10** para acciones como filtrar, buscar o terminar procesos.

### 3.2. `kill`, `killall`

Estos comandos se utilizan para enviar señales a los procesos, comúnmente para terminarlos.

- **kill:** Envía una señal a un proceso específico usando su **PID** (Process ID).
    - `kill PID_del_proceso`: Envía la señal TERM (-15) (por defecto), que intenta terminar el proceso de forma "amigable".
    - `kill -9 PID_del_proceso`: Envía la señal KILL, que termina el proceso de forma forzada y sin preguntar. Útil para procesos que no responden.
- **killall:** Envía una señal a todos los procesos que tienen un nombre específico.
    - `killall nombre_del_proceso`: Termina todos los procesos con el nombre especificado.
    - `killall -9 firefox`: Fuerza el cierre de todas las instancias de Firefox.

### 3.3. Gestión de trabajos en segundo plano (`bg`, `fg`, `jobs`)

Los trabajos en segundo plano permiten ejecutar procesos sin bloquear el terminal. 

- Si un proceso se detiene con Ctrl+Z, puedes reanudarlo en segundo plano usando `bg` para que continúe ejecutándose. 
- Para finalizar un trabajo, utiliza `kill %número_de_trabajo`. 
- Los trabajos están ligados a la sesión de shell actual; al cerrar el terminal, se terminan. 
- Para que un proceso persista después de cerrar la sesión, puedes usar `nohup comando &` o `disown` después de enviarlo a segundo plano.

- **Ctrl + Z:** Envía el proceso actual a segundo plano y lo detiene (stop).
- **jobs:** Lista los trabajos (procesos) que se están ejecutando o están detenidos en segundo plano.
    - El número entre corchetes `[ ]` es el número de trabajo.
- **bg (background):** Reanuda un trabajo detenido en segundo plano.
    - `bg %1`: Reanuda el trabajo número 1 en segundo plano.
- **fg (foreground):** Trae un trabajo en segundo plano al primer plano, para interactuar con él.
    - `fg %1`: Trae el trabajo número 1 al primer plano.
- **Ejecutar un comando directamente en segundo plano:**
    - `comando &`: Ejecuta `comando` directamente en segundo plano.


## 4. Servicios del sistema

Los servicios del sistema son programas que se ejecutan en segundo plano (demonios) y proporcionan funcionalidades como servidores web, bases de datos o servicios de red.

### 4.1. `systemd` (`systemctl`): inicio, detención, habilitación de servicios

**systemd** es el sistema de inicio y gestor de servicios moderno en la mayoría de las distribuciones Linux. **systemctl** es su principal herramienta de control.

| Acción | Comando |
|--------|---------|
| Iniciar un servicio | `sudo systemctl start nombre_del_servicio` |
| Detener un servicio | `sudo systemctl stop nombre_del_servicio` |
| Reiniciar un servicio | `sudo systemctl restart nombre_del_servicio` |
| Recargar la configuración de un servicio (sin reiniciarlo completamente) | `sudo systemctl reload nombre_del_servicio` |
| Comprobar el estado de un servicio | `systemctl status nombre_del_servicio` |
| Habilitar un servicio para que se inicie automáticamente en el arranque | `sudo systemctl enable nombre_del_servicio` |
| Deshabilitar un servicio para que no se inicie automáticamente en el arranque | `sudo systemctl disable nombre_del_servicio` |
| Ver todos los servicios cargados | `systemctl list-units --type=service` |


## 5. Optimización de la memoria

La memoria RAM es un recurso crítico. Una buena gestión puede mejorar significativamente el rendimiento.

### 5.1. Configuración de la partición `swap`

Durante la instalación de una distribución Linux, se recomienda crear una partición dedicada para swap. El tamaño típico es de 1 a 2 veces la cantidad de RAM instalada, aunque con sistemas modernos con mucha RAM, se puede optar por un swap más pequeño o incluso omitirlo si se planea usar un archivo swap posteriormente. La partición swap se crea con el tipo de sistema de archivos 'linux-swap'.

La **partición swap** (o espacio de intercambio) es un área en el disco duro que Linux utiliza como memoria virtual cuando la RAM física se agota. No es un sustituto de la RAM, ya que el acceso al disco es mucho más lento, pero ayuda a evitar fallos del sistema por falta de memoria.

- **Ver el uso de swap:**

``` bash
  swapon --show
  free -h    # muestra el uso de memoria RAM y swap en formato legible.
```

- **Crear un archivo swap (alternativa a una partición):** Si no tienes una partición swap, puedes crear un archivo swap. Esto es más flexible.

    1.- **Crear el archivo (ej. de 2GB):**
``` bash
     sudo fallocate -l 2G /swapfile
```
    2.- **Establecer permisos (solo root puede leer/escribir):**
``` bash
     sudo chmod 600 /swapfile
```
    3.- **Configurar el archivo como espacio swap:**
``` bash
     sudo mkswap /swapfile
```
    4.- **Activar el archivo swap:**
```
     sudo swapon /swapfile
```
    5.- **Hacer el swap persistente (para que se active en cada reinicio):** Añade la siguiente línea al final del archivo `/etc/fstab`:

``` bash
     /swapfile none swap sw 0 0
```

Puedes editar `/etc/fstab` con `sudo nano /etc/fstab`.

- **swappiness:** Este parámetro controla cuándo el kernel de Linux empieza a usar la swap. Un valor de `0` significa que el kernel intentará evitar la swap todo lo posible, mientras que `100` significa que usará la swap de forma más agresiva. Para servidores, un valor bajo (ej. 10) es común. Para escritorios, el valor por defecto (60) suele ser adecuado.
    - **Ver valor actual:**
``` bash
    cat /proc/sys/vm/swappiness
```
    - **Cambiar temporalmente (hasta el reinicio):**
``` bash
    sudo sysctl vm.swappiness=10
```
    - **Hacer persistente:** Añade o modifica la línea `vm.swappiness=` en `/etc/sysctl.conf`:
``` bash
    vm.swappiness=10
```


## 6. Análisis de la actividad del sistema

Los archivos de log y las herramientas de registro son vitales para diagnosticar problemas, auditar actividades y monitorizar el sistema.

Un archivo de log (o registro) es un archivo que contiene un registro cronológico de eventos, mensajes y actividades del sistema operativo, aplicaciones o servicios. Estos archivos son esenciales para el diagnóstico de problemas, la auditoría de seguridad y la monitorización del rendimiento.

### 6.1. Archivos de log (`/var/log/syslog`, `/var/log/auth.log`, etc.)


El directorio `/var/log/` contiene la mayoría de los archivos de registro del sistema.

- **`/var/log/syslog` (Debian/Ubuntu) o `/var/log/messages` (CentOS/RHEL):** Contiene mensajes generales del sistema, incluyendo arranques, eventos del kernel, errores, etc. Es el log más importante.
- **`/var/log/auth.log`:** Registra eventos de autenticación, como intentos de inicio de sesión (exitosos y fallidos), sudo, etc.
- **`/var/log/kern.log`:** Mensajes del kernel.
- **`/var/log/dpkg.log` (Debian/Ubuntu):** Registra la actividad del gestor de paquetes DPKG (instalaciones, eliminaciones).
- **`/var/log/apt/history.log` (Debian/Ubuntu):** Historial de operaciones de APT.
- **Archivos de log de aplicaciones:** Muchas aplicaciones tienen sus propios archivos de log, por ejemplo, los servidores web Apache o Nginx suelen tener logs en `/var/log/apache2/` o `/var/log/nginx/`.
- **Cómo ver el contenido de los logs:**
    - `cat /var/log/syslog`: Muestra todo el contenido (puede ser muy largo).
    - `less /var/log/syslog`: Permite ver el log paginado (usa flechas para moverte, `q` para salir).
    - `tail -f /var/log/syslog`: Muestra las últimas líneas del log y lo "sigue" en tiempo real, útil para monitorizar eventos a medida que ocurren.
    - `grep "error" /var/log/syslog`: Busca la palabra "error" en el log.

### Comando `journalctl`

`journalctl` es la herramienta de `systemd` para consultar los logs del **Journal**. El Journal es un sistema de registro unificado que centraliza los mensajes de diferentes fuentes, incluyendo el kernel, servicios, aplicaciones y syslog. Es el método preferido para ver logs en sistemas `systemd`.

- **Ver todos los logs recientes:**
``` bash
  journalctl
```
    Esto abrirá los logs en `less`.
- **Ver logs desde el último arranque:**
``` bash
  journalctl -b
```
- **Ver logs de un servicio específico:**
``` bash
  journalctl -u nombre_del_servicio
```
  Ejemplo: `journalctl -u apache2.service`
- **Ver logs en tiempo real (como `tail -f`):**
``` bash
  journalctl -f
```
- **Ver logs por fecha y hora:**
``` bash
  journalctl --since "2023-01-01 10:00:00" --until "2023-01-01 11:00:00"
```
- **Filtrar por prioridad (errores, advertencias, etc.):**
    - `journalctl -p err`: Muestra solo mensajes de error.
    - `journalctl -p warning`: Muestra solo advertencias.
    - Prioridades: `emerg` (0), `alert` (1), `crit` (2), `err` (3), `warning` (4), `notice` (5), `info` (6), `debug` (7).


## 7. Optimización de los dispositivos de almacenamiento

La eficiencia de los dispositivos de almacenamiento afecta directamente el rendimiento general del sistema.

### 7.1. Uso de `du`, `df` para analizar espacio

- **`df` (disk free):** Muestra el espacio libre y usado en los sistemas de archivos montados.
    - `df -h`: Muestra la información en formato legible para humanos (KB, MB, GB).
- **`du` (disk usage):** Estima el uso de espacio de un archivo o directorio.
    - `du -sh /home/usuario/Documentos`: Muestra el tamaño total del directorio `Documentos` en formato legible.
    - `du -h --max-depth=1 /var/log/`: Muestra el tamaño de los subdirectorios dentro de `/var/log/`, con una profundidad máxima de 1.
    - `du -a /home/usuario | sort -nr | head -n 10`: Muestra los 10 archivos o directorios más grandes en `/home/usuario`.

### 7.2. Monitorización de I/O

La I/O (Input/Output) se refiere a las operaciones de lectura y escritura en los dispositivos de almacenamiento. Una alta actividad de I/O puede indicar un cuello de botella.

- **`iostat`:** Proporciona estadísticas de I/O para dispositivos y particiones. (Puede requerir instalación de `sysstat`: `sudo apt install sysstat` o `sudo dnf install sysstat`).
    - `iostat -x 1 10`: Muestra un informe extendido cada segundo, 10 veces.
    - **Métricas clave:**
        - `%util`: Porcentaje de tiempo que el dispositivo está ocupado con operaciones de I/O. Un valor cercano al 100% indica un cuello de botella.
        - `r/s`, `w/s`: Número de lecturas/escrituras por segundo.
        - `kB_read/s`, `kB_wrtn/s`: Kilobytes leídos/escritos por segundo.
        - `avgqu-sz`: Tamaño promedio de la cola de solicitudes de I/O. Un valor alto indica espera.
        - `await`: Tiempo promedio (en ms) que las solicitudes de I/O esperan en la cola y son atendidas.
- **`iotop`:** Muestra el uso de I/O por proceso de forma interactiva (similar a `top` para CPU/memoria). (Puede requerir instalación: `sudo apt install iotop` o `sudo dnf install iotop`).
    - `sudo iotop`: Inicia la aplicación.
    - Permite identificar qué procesos están realizando más operaciones de I/O.


## 8. Recursos compartibles

Compartir recursos en red es una parte fundamental de la administración de sistemas.

### 8.1. Compartir directorios con Samba (conceptual)

**Samba** es un software que permite la interoperabilidad entre sistemas Linux/Unix y clientes Windows, permitiendo compartir archivos e impresoras.

- **Conceptual:** Samba crea "recursos compartidos" (shares) en Linux que son accesibles desde máquinas Windows usando el protocolo SMB/CIFS.
- **Ventajas:** Facilita la colaboración en entornos mixtos.
- **Configuración principal:** Se realiza en el archivo `/etc/samba/smb.conf`, donde se definen los directorios a compartir, permisos de acceso, usuarios, etc.

??? info "Configuración Samba"

    **Instalación en el servidor:**

    ``` bash
    sudo apt update
    sudo apt install samba
    ``` 

    Crear la carpeta:  
    ``` bash
    mkdir -p /home/tu_usuario/compartida
    ```
    Asignar permisos: 
    ``` bash
    chmod 777 /home/tu_usuario/compartida
    ``` 
    **Configuración del servidor samba**

    ``` bash
    sudo cp /etc/samba/smb.conf /etc/samba/smb.conf.bak
    sudo nano /etc/samba/smb.conf
    ```
    
    Pegar al final

    ``` bash
    [CarpetaCompartida]
    path = /home/tu_usuario/compartida
    browseable = yes
    read only = no
    guest ok = yes
    force user = tu_usuario
    ```
 
    Ejecutar
 
    ``` bash
     sudo systemctl restart smbd
    ```
 
    **Conexión desde los clientes:**

    Abre el Explorador de Archivos.
    
    En la barra de direcciones superior, escribe: \\192.168.1.15\CarpetaCompartida



### 8.2. Montaje de unidades de red (NFS, SMB)

Podemos montar directorios compartidos desde otros sistemas en nuestro propio sistema de archivos, haciéndolos parecer como directorios locales.

- **NFS (Network File System):** Protocolo nativo de Unix/Linux para compartir archivos en red. Es eficiente para entornos Linux a Linux.
    - **Montar un recurso NFS:**

``` bash
    sudo mount -t nfs servidor:/ruta/remota /punto/de/montaje/local
```

  - Para que el montaje sea persistente después de un reinicio, se añade una línea al archivo `/etc/fstab`.

- **SMB/CIFS (Server Message Block / Common Internet File System):** Protocolo utilizado por Windows para compartir archivos. Podemos montar recursos compartidos de Windows (o Samba) en Linux.

  - **Montar un recurso SMB:** (Necesitas el paquete `cifs-utils`: `sudo apt install cifs-utils` o `sudo dnf install cifs-utils`).

``` bash
    sudo mount -t cifs //servidor/recurso_compartido /punto/de/montaje/local -o username=usuario_remoto,password=contraseña_remota
```

  - Para el montaje persistente, también se añade una línea a `/etc/fstab`, a menudo con credenciales almacenadas de forma segura en un archivo de permisos restringidos.


## 9. Información de configuración del sistema operativo

Entender los archivos de configuración y las herramientas de diagnóstico es clave para solucionar problemas y personalizar el sistema.

### 9.1. Archivos de configuración comunes (`/etc/fstab`, `/etc/network/interfaces`, etc.)

El directorio `/etc/` es el corazón de la configuración del sistema.

- **`/etc/fstab` (file system table):** Define los sistemas de archivos que se montarán automáticamente al inicio del sistema. Cada línea especifica una partición o recurso de red, su punto de montaje, tipo de sistema de archivos, opciones de montaje, y parámetros de volcado y verificación.
    - Ejemplo de línea: `UUID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx / ext4 defaults 0 1` (monta la partición raíz).
    - Ejemplo de swap: `/swapfile none swap sw 0 0`
    - Ejemplo de montaje de red (NFS): `servidor:/ruta/compartida /mnt/nfs nfs defaults 0 0`
- **`/etc/network/interfaces` (Debian/Ubuntu):** Define la configuración de las interfaces de red. (En muchas distribuciones modernas, especialmente las que usan NetworkManager, esta configuración se gestiona de forma diferente).
    - Permite configurar direcciones IP estáticas o DHCP, gateways, DNS, etc.
- **`/etc/resolv.conf`:** Contiene la configuración del resolvedor de DNS, indicando qué servidores DNS debe usar el sistema para traducir nombres de dominio a direcciones IP.
    - Ejemplo: `nameserver 8.8.8.8` (Servidor DNS de Google).
- **`/etc/hostname`:** Almacena el nombre de host del sistema.
- **`/etc/hosts`:** Contiene mapeos estáticos entre direcciones IP y nombres de host, útiles para resoluciones locales o para anular resoluciones DNS temporales.
- **`/etc/default/grub`:** Archivo de configuración para el gestor de arranque GRUB, donde se pueden definir opciones de arranque del kernel.
- **`/etc/sudoers`:** Controla qué usuarios o grupos pueden usar `sudo` y qué comandos pueden ejecutar. Se edita usando el comando `visudo` para evitar errores de sintaxis.

### 9.2. Comandos de diagnóstico de red (`ping`, `ip a`, `route`)

Estos comandos son fundamentales para verificar la conectividad de red y solucionar problemas.

- **`ping`:** Envía paquetes ICMP a un host de destino para verificar la conectividad de red y medir el tiempo de respuesta.
    - `ping google.com`: Envía pings continuos a `google.com`. Presiona `Ctrl + C` para detener.
    - `ping -c 4 192.168.1.1`: Envía 4 pings a la dirección IP `192.168.1.1`.
- **`ip a` (o `ip addr show`):** Muestra las direcciones IP asignadas a las interfaces de red, el estado de las interfaces y otra información de red. Es la herramienta moderna preferida sobre `ifconfig`.
    - `ip a`: Muestra todas las interfaces.
    - `ip a show eth0`: Muestra información de la interfaz `eth0`.
- **`ip r` (o `ip route show`):** Muestra la tabla de enrutamiento del sistema, es decir, cómo el sistema sabe a dónde enviar el tráfico de red.
    - `ip r`: Muestra las rutas de red.
    - Identifica la puerta de enlace predeterminada (`default via ...`).
- **`ss` (socket statistics):** Muestra información sobre sockets de red, incluyendo conexiones TCP/UDP, puertos abiertos y estadísticas de red. Es el sucesor de `netstat`.
    - `ss -tunl`: Muestra todos los puertos TCP y UDP en escucha (`-t` TCP, `-u` UDP, `-n` numérico, `-l` listening).
- **`dig` (domain information groper):** Herramienta para consultar servidores DNS y resolver nombres de dominio.
    - `dig google.com`: Muestra información DNS para `google.com`.