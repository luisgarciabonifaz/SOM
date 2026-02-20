## Actividad_01  Configuración básica de GNU/Linux

### Contexto

Eres el técnico/a que recibe equipos Linux recién instalados en un aula/empresa. Debes dejar el sistema **personalizado, actualizado, seguro, con usuarios, discos preparados, copias de seguridad y tareas automáticas**

------

## 1) Puesta a punto visual y regional (GUI)

**Tareas**

1. Cambia **fondo**, **tema** e **iconos** (si el entorno lo permite). Linux_Configuracion_Basica
2. Ajusta **Región e idioma** (idioma principal, formato fecha/hora). Linux_Configuracion_Basica
3. Investiga qué entorno de escritorio tenéis (GNOME/KDE/XFCE/MATE) y escribe 4 líneas: “¿qué ventajas tiene en equipos del aula?” Linux_Configuracion_Basica

**Evidencias**

- 2 capturas: escritorio + “Región e idioma”.

## 2) Terminal

**Tareas**

1. Abre terminal y explica qué significa el prompt `usuario@hostname:~$` 

   

**Evidencias**

- Textop con la explicación

------

## 3) Usuarios/grupos

**Tareas**

1. Explica qué guarda cada fichero (2–3 líneas por fichero):
   - `/etc/passwd`, `/etc/shadow`, `/etc/group` 
2. Localiza tu usuario en `/etc/passwd` (p. ej. con `grep`) y anota:
   - UID, GID, home, shell. 

**Evidencias**

- Salida de terminal + explicación.

## 4) Montaje y desmontaje de unidades

**Tareas**

1. Crea un punto de montaje `/mnt/mi_usb`.
2. Monta una unidad (USB o disco extra de la VM) con `mount` y desmonta con `umount`. 
3. Explica por qué **hay que desmontar antes** de retirar un USB.

**Evidencias**

- Mini informe: “qué monté, dónde, cómo lo verifiqué, cómo desmonté”.

## 5) Formateo y fsck 

**Tareas**

1. Explica qué hace `mkfs` y por qué es peligroso.
2. Explica qué hace `fsck` y por qué requiere la unidad desmontada. 
3. (Opcional si hay entorno controlado) Ejecuta `fsck` sobre un dispositivo de pruebas o una partición preparada por el docente.

**Evidencias**

- Respuesta razonada (6–10 líneas) + comandos de ejemplo.

## 6) Recuperación

**Tareas**

1. Describe el **Modo Recovery** (GRUB) y qué opciones típicas trae (root, fsck, network).
2. Describe cómo usarías un **Live USB** para:
   - rescatar datos
   - revisar particiones (GParted/Disks) Linux_Configuracion_Basica

**Evidencia**

- “Guía rápida de recuperación” (10–15 líneas)

------

## 7) Actualizar y gestionar paquetes

**Tareas**

1. Actualiza el sistema:

- `apt update && apt upgrade` o `dnf upgrade`

1. Instala y desinstala una utilidad (ej. GIMP) con el gestor correspondiente. 
2. Explica diferencia entre `remove` y `purge` (si usáis `apt`).

**Evidencias**

- Historial de terminal (captura o pegado) + explicación corta.

## 8) Red (asistente + CLI)

**Tareas**

1. Desde GUI (NetworkManager), muestra que la red está conectada (Wi-Fi o cable). 
2. En terminal ejecuta `ip addr show` y localiza tu IP. 
3. Escribe: “¿por qué `ifconfig` se considera obsoleto en muchos sistemas?” (2–4 líneas). 

**Evidencias**

- Captura GUI + salida de `ip addr show` + mini explicación.

------

## 9) Copia de seguridad con tar o rsync

**Tareas (elige una opción)**

- Opción A: crea un backup comprimido con `tar` de `~/taller_linux` en `~/taller_linux/backups/`. 
- Opción B: sincroniza `~/taller_linux/` a un destino (USB montado o carpeta) con `rsync`. 

**Evidencias**

- Archivo `.tar.gz` o carpeta destino con la copia + comandos usados.

## 10) Script: “backup + log”

**Tareas**

1. Crea `~/taller_linux/scripts/backup_taller.sh` que:
   - Muestre mensaje de inicio
   - Genere backup (tar o rsync)
   - Guarde un log (fecha/hora + resultado)
2. Dale permisos con `chmod +x`. 

**Evidencias**

- Contenido del script + prueba de ejecución.

## 11) Cron: automatiza y controla la salida

**Tareas**

1. Crea una tarea con `crontab -e` para ejecutar el script:
   - Cada 10 minutos durante la sesión **o** una vez al día (según aula). 
2. Redirige salida a un log usando `>>` y `2>&1`.
3. Muestra tu `crontab -l`.

**Evidencias**

- `crontab -l` + archivo de log con al menos 2 ejecuciones.

------

## Entregables finales

Documento PDF con:

- Explicaciones y respuestas
- Scripts

------

