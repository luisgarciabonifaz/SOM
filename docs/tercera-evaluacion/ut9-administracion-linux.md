# UT9. Administración de Linux

!!! abstract "Resultado de aprendizaje"
    **RA4.** Realiza operaciones básicas de administración de sistemas operativos, interpretando requerimientos y optimizando el sistema para su uso.

## 9.1. Gestión de usuarios y grupos

### Comandos de usuarios

| Comando | Función |
|---|---|
| `adduser usuario` | Crea un usuario nuevo (versión interactiva, recomendada para uso manual) |
| `useradd usuario` | Crea un usuario nuevo (versión más básica, habitual en scripts) |
| `usermod` | Modifica un usuario existente |
| `userdel usuario` | Elimina un usuario (`userdel -r` también elimina su carpeta personal) |
| `passwd usuario` | Establece o cambia la contraseña de un usuario |

```bash
sudo adduser mgarcia
sudo passwd mgarcia
```

### Comandos de grupos

```bash
sudo groupadd contabilidad
sudo usermod -aG contabilidad mgarcia
```

!!! warning "La opción -aG es importante"
    `usermod -aG grupo usuario` **añade** el usuario al grupo indicado sin tocar el resto de sus grupos. Si se omite la `-a` (solo `-G`), el usuario **pierde** todos sus demás grupos, sustituidos por el indicado. Es un error muy habitual.

### Ficheros clave del sistema

| Fichero | Contenido |
|---|---|
| `/etc/passwd` | Lista de usuarios del sistema (nombre, UID, carpeta personal, shell...) |
| `/etc/shadow` | Contraseñas cifradas de los usuarios (solo accesible por root) |
| `/etc/group` | Lista de grupos y qué usuarios pertenecen a cada uno |

```bash
cat /etc/passwd
cat /etc/group
```

### Estructura de TechPyme en VM-LINUX

| Grupo | Usuarios (ejemplo) |
|---|---|
| Contabilidad | mgarcia |
| Tecnico | jlopez |

---

## 9.2. Permisos en Linux (en profundidad)

### Repaso de permisos básicos

Cada archivo y carpeta en Linux tiene tres niveles de permisos, para tres tipos de "quién":

| Nivel | A quién aplica |
|---|---|
| **Propietario (u, user)** | El usuario dueño del archivo |
| **Grupo (g, group)** | El grupo asociado al archivo |
| **Otros (o, others)** | Cualquier otro usuario del sistema |

Y tres tipos de permiso para cada nivel:

| Permiso | Sobre archivos | Sobre carpetas |
|---|---|---|
| **r** (lectura) | Ver el contenido | Listar el contenido |
| **w** (escritura) | Modificar el contenido | Crear/eliminar archivos dentro |
| **x** (ejecución) | Ejecutar el archivo como programa/script | Entrar en la carpeta (`cd`) |

```bash
ls -l archivo.txt
# -rw-r--r-- 1 mgarcia contabilidad 1024 ene 14 10:00 archivo.txt
```

Esa cadena `-rw-r--r--` se lee: tipo de elemento (`-` archivo, `d` carpeta), seguido de tres bloques de `rwx`: propietario, grupo, otros.

### Notación simbólica vs octal

| Permiso | Valor octal |
|---|---|
| `r` | 4 |
| `w` | 2 |
| `x` | 1 |
| `-` | 0 |

Se suman los valores de cada bloque: `rwxr-xr--` equivale a `754` (7 = 4+2+1, 5 = 4+1, 4 = 4).

### chmod, chown, chgrp

```bash
# Notación simbólica
chmod u+x script.sh        # añade ejecución al propietario
chmod g-w archivo.txt      # quita escritura al grupo
chmod o=r archivo.txt      # deja "otros" solo con lectura

# Notación octal
chmod 754 script.sh

# Cambiar propietario y grupo
sudo chown mgarcia archivo.txt
sudo chgrp contabilidad archivo.txt
sudo chown mgarcia:contabilidad archivo.txt   # ambos a la vez
```

### Permisos especiales

Además de `rwx`, Linux tiene tres permisos especiales adicionales:

#### SUID (Set User ID)

Al ejecutar un archivo con **SUID** activado, el proceso se ejecuta con los permisos del **propietario del archivo**, no del usuario que lo lanza.

```bash
chmod u+s /ruta/programa
# o en octal: chmod 4755 /ruta/programa
```

!!! example "Ejemplo real"
    El comando `passwd` tiene SUID activado y pertenece a root: así, cualquier usuario puede cambiar su propia contraseña (que se guarda en `/etc/shadow`, solo editable por root) sin necesidad de tener permisos de root de forma permanente.

#### SGID (Set Group ID)

- Sobre un **archivo ejecutable**: se ejecuta con los permisos del grupo propietario
- Sobre una **carpeta**: los archivos que se creen dentro heredan automáticamente el grupo de la carpeta, en lugar del grupo principal del usuario que los crea

```bash
chmod g+s /ruta/carpeta
# o en octal: chmod 2775 /ruta/carpeta
```

!!! example "Ejemplo real en TechPyme"
    Si la carpeta compartida de Contabilidad tiene SGID activado con grupo `contabilidad`, cualquier archivo nuevo creado dentro por cualquier usuario pertenecerá automáticamente al grupo `contabilidad`, facilitando que todo el equipo pueda acceder a los archivos que van creando sus compañeros.

#### Sticky bit

Aplicado sobre una carpeta con permisos de escritura para varios usuarios, impide que un usuario pueda **eliminar o renombrar** archivos de otros usuarios dentro de esa carpeta, aunque tenga permiso de escritura sobre la carpeta.

```bash
chmod +t /ruta/carpeta
# o en octal: chmod 1777 /ruta/carpeta
```

!!! example "Ejemplo real"
    La carpeta `/tmp` del sistema tiene sticky bit activado: todos los usuarios pueden crear archivos ahí, pero ninguno puede borrar los archivos temporales de otro usuario.

### umask

El **umask** define los permisos que **se restan** por defecto al crear un archivo o carpeta nuevos.

```bash
umask
# 0022 (valor habitual)
```

Con un umask de `022`, un archivo nuevo se crea con `644` (`666` de partida para archivos, menos `022`) y una carpeta nueva con `755` (`777` de partida, menos `022`).

### ACL: listas de control de acceso

El modelo propietario/grupo/otros es sencillo pero limitado: solo permite definir permisos para **un** propietario y **un** grupo. Cuando se necesita dar permisos distintos a **varios usuarios o grupos concretos** sobre el mismo archivo o carpeta, se usan las **ACL** (*Access Control Lists*), el equivalente conceptual a las listas de permisos NTFS avanzadas vistas en la UT6 para Windows.

```bash
# Consultar las ACL de un archivo/carpeta
getfacl carpeta_compartida/

# Dar permiso de lectura y escritura a un usuario concreto, sin tocar el resto de permisos
setfacl -m u:jlopez:rw carpeta_compartida/

# Dar permiso a un grupo concreto
setfacl -m g:tecnico:rx carpeta_compartida/

# Eliminar una entrada ACL concreta
setfacl -x u:jlopez carpeta_compartida/

# Eliminar todas las ACL de un elemento
setfacl -b carpeta_compartida/
```

!!! example "Caso de uso en TechPyme"
    La carpeta de Contabilidad pertenece al grupo `contabilidad` con permisos normales. Pero, puntualmente, hay que dar acceso de solo lectura a un usuario concreto de Técnico sin añadirlo al grupo Contabilidad completo. Una ACL permite justo eso: un permiso específico para ese usuario, sin alterar el esquema general de propietario/grupo/otros.

!!! note "Paralelismo con Windows"
    Este mecanismo es directamente comparable a lo que en Windows llamamos "permisos efectivos" cuando un usuario pertenece a varios grupos con permisos distintos (UT6): en ambos casos, el sistema permite ir más allá de un único nivel de permisos y combinar varias reglas sobre el mismo recurso.

---

## 9.3. Gestión de paquetes (ampliación)

### apt vs dpkg

- **apt**: gestor de alto nivel, resuelve dependencias automáticamente, se conecta a los repositorios
- **dpkg**: herramienta de bajo nivel que instala paquetes `.deb` sueltos ya descargados, sin resolver dependencias por sí sola

```bash
sudo dpkg -i paquete.deb
sudo apt install -f    # resuelve dependencias pendientes tras un dpkg -i fallido
```

### Gestores alternativos

- **snap**: paquetes autocontenidos con sus propias dependencias incluidas, gestionados con `snap install`
- **flatpak**: alternativa similar a snap, popular especialmente para aplicaciones de escritorio

Se mencionan como panorama general, sin entrar en su uso detallado en este curso.

---

## 9.4. Gestión de procesos y servicios

### Consulta de procesos

Recuperando lo visto en la **UT1** sobre gestión de procesos:

```bash
ps aux
top
htop    # si está instalado, versión interactiva y más visual de top
```

### Señales y kill

```bash
kill PID           # envía la señal de terminación estándar (SIGTERM)
kill -9 PID         # fuerza la terminación inmediata (SIGKILL)
killall nombre      # termina todos los procesos con ese nombre
```

### systemd y systemctl

**systemd** es el sistema de gestión de servicios (y del propio arranque) de la mayoría de distribuciones Linux actuales. Se controla con `systemctl`.

```bash
sudo systemctl status ssh       # consulta el estado de un servicio
sudo systemctl start ssh        # inicia un servicio
sudo systemctl stop ssh         # detiene un servicio
sudo systemctl restart ssh      # reinicia un servicio
sudo systemctl enable ssh       # habilita el servicio para que arranque con el sistema
sudo systemctl disable ssh      # deshabilita el arranque automático
```

!!! note "Paralelismo con Windows"
    `systemctl start/stop/enable/disable` en Linux equivale conceptualmente a `Start-Service`/`Stop-Service` y a la configuración de "Tipo de inicio" de un servicio en Windows, visto en la UT6.

### Logs con journalctl

```bash
journalctl -u ssh          # logs de un servicio concreto
journalctl -xe              # últimos logs del sistema, con detalles de errores
```

Se introduce aquí como primera toma de contacto; el análisis avanzado de logs queda fuera del alcance de esta unidad.

---

## 9.5. Gestión de discos y sistemas de archivo

### Consulta de discos

```bash
lsblk           # lista discos y particiones de forma esquemática
sudo fdisk -l    # detalle de particiones (repaso de UT1)
```

### Montaje y desmontaje

```bash
sudo mount /dev/sdb1 /mnt/datos
sudo umount /mnt/datos
```

### Montaje automático con /etc/fstab

Para que una partición se monte automáticamente en cada arranque, se añade una línea a `/etc/fstab`:

```
/dev/sdb1   /mnt/datos   ext4   defaults   0   2
```

!!! danger "Precaución con fstab"
    Un error de sintaxis en `/etc/fstab` puede impedir que el sistema arranque correctamente. Se recomienda hacer una copia de seguridad del archivo antes de editarlo, y probar el montaje manualmente con `mount -a` antes de reiniciar.

---

## 9.6. Prácticas de la unidad — Administración de VM-LINUX

!!! example "Práctica 1 — Usuarios y grupos"
    1. Crea los grupos `contabilidad` y `tecnico`
    2. Crea al menos un usuario en cada grupo, con contraseña
    3. Comprueba con `cat /etc/group` que la pertenencia es correcta

!!! example "Práctica 2 — Permisos básicos y especiales"
    1. Crea una estructura de carpetas por departamento
    2. Asigna propietario y grupo con `chown`/`chgrp`, y permisos con `chmod` (usa ambas notaciones, simbólica y octal, en distintos casos)
    3. Activa el **SGID** en la carpeta de Contabilidad y comprueba que los archivos nuevos heredan el grupo automáticamente
    4. Activa el **sticky bit** en una carpeta compartida entre varios usuarios y comprueba que uno no puede borrar los archivos de otro

!!! example "Práctica 3 — ACL"
    Configura una ACL que dé acceso de solo lectura a un usuario concreto de Técnico sobre la carpeta de Contabilidad, sin añadirlo al grupo `contabilidad`. Comprueba el resultado con `getfacl`.

!!! example "Práctica 4 — Servicios"
    Consulta el estado de un servicio con `systemctl status`, detenlo, vuelve a iniciarlo, y practica habilitarlo/deshabilitarlo en el arranque.

!!! example "Práctica 5 — Discos y fstab"
    Si tu VM dispone de un disco secundario (o puedes añadir uno en VirtualBox), fórmatéalo en ext4, móntalo manualmente, y después añade la entrada correspondiente en `/etc/fstab` para que se monte automáticamente en el arranque.
