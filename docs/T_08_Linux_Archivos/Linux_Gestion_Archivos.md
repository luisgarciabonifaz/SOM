# Gestion de Archivos en Linux

En este temaveremos cómo se organiza, cómo gestionamos los archivos y directorios, y cómo controlamos quién puede hacer qué con ellos.


## 1. Estructura y organización del sistema de archivos en Linux

En Linux, todo se organiza de una manera muy lógica y estructurada. A diferencia de otros sistemas operativos que usan letras para las unidades (como "C:" o "D:"), Linux usa una **estructura jerárquica** que empieza desde la **raíz (`/`)**. Imaginen un árbol, donde la raíz es el tronco principal y de ahí salen todas las ramas.

### 1.1. Sistema de directorios

Vamos a ver los directorios más importantes que siempre encontrarán en un sistema Linux:

- **`/`:** Es el directorio principal de todo el sistema. ¡Todo lo demás cuelga de aquí!
- **`/home`:** Aquí se guardan los **directorios personales** de cada usuario. Si su nombre de usuario es "alumno", su directorio personal será `/home/alumno`. ¡Es como su espacio privado!
- **`/etc`:** Contiene los **archivos de configuración** del sistema y de muchas aplicaciones. Si quieren cambiar cómo funciona algo, es probable que encuentren su archivo de configuración aquí.
- **`/var`:** Guarda datos **variables** que cambian constantemente, como los archivos de *logs* (registros de actividad), *spool* de impresión, o datos de servidores web.
- **`/bin`:** Aquí se guardan los **comandos y programas esenciales** que usa el sistema y que están disponibles para todos los usuarios. `bin` viene de "binarios".
- **`/usr`:** Este directorio es muy importante y grande. Contiene la mayoría de los **programas y librerías** de usuario, así como documentación. `usr` viene de "Unix System Resources".
- **`/opt`:** Se usa para instalar **software opcional** o de terceros que no viene incluido con la distribución de Linux. Por ejemplo, si instalan un programa especial que no es parte del sistema base, podría ir aquí.
- **`/dev`:** Contiene los **archivos de dispositivos**. En Linux, los dispositivos de hardware (como discos duros, impresoras o el teclado) se representan como archivos especiales en este directorio.
- **`/proc`:** Este es un **sistema de archivos virtual** que contiene información sobre los procesos en ejecución y el *kernel* (núcleo) del sistema. No son archivos reales en el disco, sino datos generados al momento.
- **`/mnt`:** Se usa para **montar temporalmente** sistemas de archivos, como particiones de disco, unidades USB o CD/DVD.
- **`/media`:** Similar a `/mnt`, pero se usa para el **montaje automático** de dispositivos extraíbles como unidades USB o cámaras digitales cuando se conectan al sistema.


### 1.2. Tipos de sistemas de archivos

Los **sistemas de archivos** son como la forma en que se organizan los datos en un disco duro para que el sistema operativo pueda leerlos y escribirlos. Cada tipo tiene sus propias características:

- **ext2 (Second Extended Filesystem):** Fue uno de los primeros sistemas de archivos estándar de Linux. Es robusto, pero no tiene *journaling*.
- **ext3 (Third Extended Filesystem):** Una mejora de `ext2` que **agrega \*journaling\***. El *journaling* es como un diario de transacciones que ayuda a recuperar el sistema de archivos más rápido en caso de un fallo de energía o un bloqueo, reduciendo la pérdida de datos.
- **ext4 (Fourth Extended Filesystem):** El sistema de archivos **más común** y recomendado actualmente para Linux. Ofrece mejoras significativas en rendimiento, tamaño máximo de archivo y capacidad de volumen, y también tiene *journaling*.
- **XFS:** Un sistema de archivos de alto rendimiento desarrollado por SGI. Es ideal para volúmenes muy grandes y entornos con muchas operaciones de escritura/lectura. También incluye *journaling*.
- **Btrfs (B-tree File System):** Un sistema de archivos moderno con características avanzadas como *snapshots* (instantáneas), *checksums* para integridad de datos, y **manejo de volúmenes lógicos** integrado. Es una alternativa interesante a `ext4`.


### 1.3. Inodos y bloques

Para entender cómo se guardan los archivos, necesitamos conocer dos conceptos clave:

- **Inodos (Index Nodes):** Imaginen que cada archivo y directorio en Linux tiene una tarjeta de información única, eso es un **inodo**. El inodo no contiene el contenido del archivo, sino **metadatos** sobre él:
    - Propietario y grupo.
    - Permisos.
    - Tamaño del archivo.
    - Fecha de creación, modificación y último acceso.
    - ¡Y lo más importante!: Los **punteros a los bloques de datos** donde se guarda el contenido real del archivo.
- **Bloques:** Un archivo se almacena en el disco duro en unidades llamadas **bloques**. Cuando crean un archivo, el sistema operativo le asigna uno o más bloques en el disco. El inodo de ese archivo sabe exactamente dónde están esos bloques para poder leer el contenido.


## 2. Atributos de archivos y directorios en Linux

Además de los permisos que veremos más adelante, los archivos y directorios en Linux tienen otros atributos que controlan cómo se pueden manipular.

### 2.1. Atributos extendidos (`chattr`)

Los **atributos extendidos** son propiedades adicionales que un archivo o directorio puede tener, que van más allá de los permisos estándar. Se gestionan con el comando `chattr` (change attributes) y se visualizan con `lsattr` (list attributes).

Algunos atributos comunes incluyen:

- **i  (inmutable):** Si un archivo tiene este atributo, **nadie puede modificarlo, borrarlo o renombrarlo**, ni siquiera el usuario *root*. Es como un "candado" muy fuerte. Para quitarlo, se usa `chattr -i archivo`.
- **a (append only):** Este atributo permite que el archivo solo se pueda **agregar al final**, pero no se puede sobrescribir ni borrar. Es útil para archivos de *logs* donde solo queremos añadir nueva información.

**Ejemplo:**

``` bash
# Poner el atributo inmutable a un archivo
sudo chattr +i /etc/passwd

# Intentar modificar el archivo (fallará)
sudo echo "nueva linea" >> /etc/passwd

# Quitar el atributo
sudo chattr -i /etc/passwd
```

### 2.2. Enlaces duros y blandos (`ln`)

Los enlaces son una forma de tener **múltiples nombres** para el mismo archivo o directorio. Piensen en ellos como accesos directos, pero con diferencias importantes.

- **Enlaces blandos o simbólicos (`ln -s`)**:
    - Son como los **accesos directos** de Windows.
    - Crean un nuevo archivo que **apunta al archivo original**.
    - Si el archivo original se borra, el enlace blando deja de funcionar (queda "roto").
    - Pueden apuntar a **archivos o directorios**, y a archivos en **otras particiones o discos**.
    - Cuando borran el enlace blando, el archivo original no se ve afectado.

    **Ejemplo:**

``` bash
# Crear un archivo de prueba
echo "Contenido del archivo original" > archivo_original.txt
  
# Crear un enlace blando al archivo
ln -s archivo_original.txt enlace_blando.txt
  
# Ver que el enlace blando apunta al original
ls -l
```

- **Enlaces duros (`ln`)**:
    - Son como **nombres adicionales** para el mismo inodo.
    - Múltiples enlaces duros pueden apuntar al **mismo inodo y, por lo tanto, al mismo archivo**.
    - Si borran uno de los enlaces duros, el archivo **no se borra del disco** hasta que todos los enlaces duros que apuntan a ese inodo hayan sido eliminados.
    - **No pueden apuntar a directorios** (excepto por la entrada `.` y `..`) y solo funcionan dentro de la **misma partición o sistema de archivos**.
    - Tienen el mismo inodo que el archivo original.

    **Ejemplo:**


``` bash
  # Crear un archivo de prueba
  echo "Otro contenido" > archivo_original2.txt
  
  # Crear un enlace duro al archivo
  ln archivo_original2.txt enlace_duro.txt
  
  # Ver que ambos archivos tienen el mismo inodo (el segundo campo de ls -i)
  ls -li archivo_original2.txt enlace_duro.txt
  
  # Si borramos el original, el duro sigue funcionando
  rm archivo_original2.txt
  cat enlace_duro.txt
```

## 3. Comandos para la gestión de archivos y directorios

La línea de comandos en Linux es una herramienta muy potente para trabajar con archivos y directorios. Aquí tienen los comandos más comunes que usarán a diario:

### 3.1. Navegación y listado


- **pwd (print working directory):** Muestra el **directorio actual** en el que se encuentran.

    **Ejemplo:**
 ``` bash
    pwd
    # Salida: /home/usuario/documentos
 ```

- **`ls` (list):** Lista el **contenido** de un directorio.
    - `ls`: Lista los archivos y directorios del directorio actual.
    - `ls -l`: Muestra una lista larga con detalles (permisos, propietario, tamaño, fecha, etc.).
    - `ls -a`: Muestra todos los archivos, incluyendo los ocultos (que empiezan por un punto `.` como `.bashrc`).
    - `ls -lh`: Combina `-l` y `-h` (human-readable) para mostrar tamaños en KB, MB, GB.
    - `ls -R`: Lista el contenido de los subdirectorios de forma recursiva.
    
    **Ejemplo:**

 ``` bash
    ls -lh
 ```

- **`cd` (change directory):** Permite **cambiar de directorio**.
    - `cd nombre_directorio`: Entra en un subdirectorio.
    - `cd ..`: Sube un nivel en la jerarquía de directorios (va al directorio padre).
    - `cd ~` o `cd`: Vuelve al directorio personal del usuario (`/home/usuario`).
    - `cd -`: Vuelve al directorio anterior en el que estaban.
    - `cd /ruta/absoluta`: Cambia a un directorio usando su ruta completa desde la raíz.

    **Ejemplo:**

 ``` bash
    cd Documentos
    cd ..
    cd /var/log
 ```

### 3.2. Creación y eliminación


- **`mkdir` (make directory):** Crea un **nuevo directorio**.
    - `mkdir nombre_directorio`: Crea un directorio.
    - `mkdir -p ruta/a/nuevo/directorio`: Crea los directorios intermedios si no existen.

    **Ejemplo:**

``` bash
    mkdir mis_proyectos
    mkdir -p copia_seguridad/documentos/fotos
```

- **`touch`:** Crea un **archivo vacío** o actualiza la fecha de modificación de un archivo existente.

    **Ejemplo:**

``` bash
    touch mi_primer_archivo.txt
```

- **`rm` (remove):** **Borra** archivos. ¡Cuidado con este comando, no hay papelera de reciclaje en la línea de comandos!
    - `rm archivo.txt`: Borra un archivo.
    - `rm -i archivo.txt`: Pregunta antes de borrar (interactivo).
    - `rm -f archivo.txt`: Fuerza el borrado sin preguntar (cuidado extremo).
    - `rm -r directorio/`: Borra un directorio y su contenido de forma recursiva.
    - `rm -rf directorio/`: Fuerza el borrado recursivo de un directorio y su contenido (¡MUY PELIGROSO! Usar con la máxima precaución).

    **Ejemplo:**

``` bash
    rm archivo_viejo.log
    rm -r proyecto_obsoleto/
```

- **`rmdir` (remove directory):** Borra un **directorio vacío**. Si el directorio no está vacío, dará un error. Para directorios con contenido, usen `rm -r`.

    **Ejemplo:**

``` bash
    rmdir directorio_vacio
```

### 3.3. Copia, movimiento y renombrado


- **`cp` (copy):** **Copia** archivos y directorios.
    - `cp origen destino`: Copia un archivo a una nueva ubicación o con un nuevo nombre.
    - `cp -r origen_directorio destino_directorio`: Copia un directorio y todo su contenido de forma recursiva.
    - `cp -i origen destino`: Pregunta antes de sobrescribir un archivo existente.

    **Ejemplo:**

``` bash
    cp informe.pdf informe_final.pdf
    cp -r documentos/ respaldo_documentos/
```

- **`mv` (move):** **Mueve** archivos y directorios, o los **renombra**.
    - `mv origen destino`: Mueve un archivo/directorio a una nueva ubicación.
    - `mv nombre_viejo nombre_nuevo`: Renombra un archivo/directorio.

    **Ejemplo:**

``` bash
    mv archivo_temporal.txt /tmp/
    mv documento_borrador.odt documento_final.odt
```

### 3.4. Visualización de contenido

- **`cat` (concatenate):** Muestra el **contenido completo** de uno o varios archivos en la pantalla.

    **Ejemplo:**

``` bash
    cat mi_archivo.txt
    cat archivo1.txt archivo2.txt > archivo_unido.txt # Concatenar y guardar en un nuevo archivo
```

- **`less`:** Permite ver el contenido de un archivo **paginado**, lo que es ideal para archivos grandes. Pueden desplazarse hacia arriba y abajo con las flechas, `Page Up`/`Page Down`, buscar, etc. Para salir, pulsen `q`.

    **Ejemplo:**

``` bash
    less /var/log/syslog
```

- **`more`:** Similar a `less`, pero con menos funcionalidades (solo permite avanzar). Para salir, pulsen `q`.

    **Ejemplo:**

``` bash
    more mi_archivo_grande.log
```

- **`head`:** Muestra las **primeras líneas** de un archivo (por defecto, las 10 primeras).
    - `head -n 20 archivo.txt`: Muestra las primeras 20 líneas.

    **Ejemplo:**

``` bash
    head -n 5 configuracion.conf
```

- **`tail`:** Muestra las **últimas líneas** de un archivo (por defecto, las 10 últimas). Es muy útil para ver los *logs* en tiempo real.
    - `tail -n 20 archivo.txt`: Muestra las últimas 20 líneas.
    - `tail -f archivo.log`: Muestra las últimas líneas y luego **sigue mostrando las nuevas líneas** a medida que se añaden al archivo (útil para monitorear *logs* en vivo). Para salir, `Ctrl+C`.

    **Ejemplo:**

``` bash
    tail /var/log/auth.log
    tail -f /var/log/syslog
```

## 4. Permisos en Linux

Los **permisos** son fundamentales en Linux para controlar quién puede leer, escribir o ejecutar archivos y directorios. ¡Es como el sistema de seguridad de su información!

### 4.1. Modelo de permisos

Cada archivo y directorio en Linux tiene permisos asignados a tres categorías de usuarios:

- **u (User / Propietario):** Es el **creador** del archivo o directorio (o quien ha sido asignado como propietario).
- **g (Group / Grupo):** El archivo o directorio pertenece a un **grupo específico**. Cualquier usuario que sea miembro de ese grupo tendrá estos permisos.
- **o (Others / Otros):** Cualquier usuario que **no sea el propietario ni miembro del grupo** del archivo/directorio.

Para cada una de estas categorías, se pueden asignar tres tipos de permisos:

- **r (Read / Lectura):**
    - En archivos: Permite **ver el contenido** del archivo.
    - En directorios: Permite **listar el contenido** del directorio (`ls`).
- **w (Write / Escritura):**
    - En archivos: Permite **modificar o eliminar** el archivo.
    - En directorios: Permite **crear, borrar o renombrar** archivos dentro del directorio.
- **x (Execute / Ejecución):**
    - En archivos: Permite **ejecutar el archivo** (si es un programa o *script*).
    - En directorios: Permite **acceder al directorio** (`cd`) y entrar en él.

Cuando ven los permisos con `ls -l`, verán algo como esto: `-rwxr-xr--`:

- El primer carácter (**-** o **d**) indica el tipo de archivo (**-** para archivo regular, **d** para directorio, **l** para enlace simbólico, etc.).
- Los siguientes nueve caracteres se dividen en tres grupos de **rwx**:
  - **rwx**: Permisos para el propietario.
  - **r-x**: Permisos para el grupo.
  - **r--**: Permisos para otros.

### 4.2. Permisos numéricos (octal)

Los permisos también se pueden representar usando números en **base octal** (del 0 al 7). Es más rápido y conciso que usar **rwx**.

Cada permiso tiene un valor numérico:

- **r** (read) = **4**
- **w** (write) = **2**
- **x** (execute) = **1**
- **-** (sin permiso) = **0**

Para obtener el valor numérico para cada categoría (propietario, grupo, otros), se suman los valores de los permisos correspondientes:

| Permiso | r  | w  | x  | Suma |
| ------- | ---- | ---- | ---- | ---- |
| ---   | 0    | 0    | 0    | 0    |
| --x   | 0    | 0    | 1    | 1    |
| -w-   | 0    | 2    | 0    | 2    |
| -wx   | 0    | 2    | 1    | 3    |
| r--   | 4    | 0    | 0    | 4    |
| r-x   | 4    | 0    | 1    | 5    |
| rw-   | 4    | 2    | 0    | 6    |
| rwx   | 4    | 2    | 1    | 7    |


Así, un permiso como **rwxr-xr--** se traduciría a **754**:

- Propietario **(rwx)**: 4 + 2 + 1 = **7**
- Grupo **(r-x)**: 4 + 0 + 1 = **5**
- Otros **(r--)**: 4 + 0 + 0 = **4**


### 4.3. Comandos `chmod`, `chown`, `chgrp`

Estos comandos son esenciales para gestionar los permisos y la propiedad de archivos y directorios.

- **`chmod` (change mode):** Se usa para **cambiar los permisos** de archivos y directorios.

  - **Con notación numérica:**

    ``` bash
    chmod 755 mi_script.sh # rwx para propietario, r-x para grupo y otros
    chmod 644 mi_archivo.txt # rw- para propietario, r-- para grupo y otros
    ```

  - **Con notación simbólica:**

    - **u** (propietario), **g** (grupo), **o** (otros), **a** (todos).
    - **+** (añadir permiso), **-** (quitar permiso), **=** (establecer permisos).

    ``` bash
    chmod u+x mi_script.sh # Añadir permiso de ejecución al propietario
    chmod g-w mi_archivo.txt # Quitar permiso de escritura al grupo
    chmod o=r mi_otro_archivo.txt # Establecer solo permiso de lectura para otros
    chmod a+rwx mi_carpeta # Añadir todos los permisos a todos para un directorio
    ```

- **`chown` (change owner):** Se usa para **cambiar el propietario** (usuario) de un archivo o directorio. Solo *root* o el propietario actual pueden usarlo.

``` bash
  sudo chown nuevo_usuario archivo.txt
  sudo chown -R nuevo_usuario carpeta/ # -R para recursivo (aplicar a subdirectorios y archivos)
```

- **`chgrp` (change group):** Se usa para **cambiar el grupo** al que pertenece un archivo o directorio. Solo *root* o el propietario (si es miembro del nuevo grupo) pueden usarlo.

``` bash
  sudo chgrp nuevo_grupo archivo.txt
  sudo chgrp -R nuevo_grupo carpeta/ # -R para recursivo
```

  También pueden cambiar propietario y grupo con `chown usuario:grupo archivo.txt`.

### 4.4. Sticky bit, SGID, SUID

Estos son **permisos especiales** que añaden funcionalidades adicionales a los archivos y directorios. Se representan con un dígito adicional al principio en la notación octal (ej. `4755`).

- **`SUID` (Set User ID - valor 4):**
    - **En ejecutables:** Cuando un programa con el bit SUID activado es ejecutado, se ejecuta con los **permisos del propietario del archivo**, no del usuario que lo ejecuta.
    - Se ve como una `s` en lugar de una `x` en el campo de propietario (`-rwsr-xr-x`).
    - **Peligroso:** Puede ser una vulnerabilidad si un programa malicioso tiene SUID activado y pertenece a *root*.

    **Ejemplo:** El comando `passwd` tiene SUID activado para permitir a un usuario común modificar el archivo de contraseñas de *root* (`/etc/shadow`) de forma controlada.

``` bash
  chmod u+s mi_programa_ejecutable
  chmod 4755 mi_programa_ejecutable
```

- **`SGID` (Set Group ID - valor 2):**
    - **En ejecutables:** El programa se ejecuta con los **permisos del grupo del archivo**.
    - Se ve como una `s` en lugar de una `x` en el campo del grupo (`-rwxr-sr-x`).
    - **En directorios:** Los nuevos archivos y subdirectorios creados dentro de ese directorio **heredarán el grupo del directorio padre**, no el grupo del usuario que los creó. ¡Esto es muy útil para directorios compartidos!

``` bash
  chmod g+s mi_directorio_compartido
  chmod 2775 mi_directorio_compartido
```

- **`Sticky bit` (valor 1):**
    - **Solo en directorios:** Los usuarios solo pueden **borrar o renombrar los archivos que ellos mismos poseen** dentro de ese directorio, incluso si tienen permisos de escritura sobre el directorio.
    - Se ve como una `t` en lugar de una `x` en el campo de "otros" (`drwxrwxrwt`).

    **Ejemplo:** El directorio `/tmp` (donde todos pueden escribir) tiene el *sticky bit* activado para evitar que los usuarios borren los archivos temporales de otros.

``` bash
  chmod o+t /tmp
  chmod 1777 /tmp
```