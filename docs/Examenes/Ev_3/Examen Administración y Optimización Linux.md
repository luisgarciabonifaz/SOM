# Examen Administración y Optimización Linux

------

# Instrucciones generales

En la plantilla adjunta rellena las respuesta a los apartados del examen. En unos apartados tendrás que escribir los comandos solicitados y en otros responder a las preguntas teóricas.

------

# Parte 1 — Administración de usuarios y grupos (2 puntos)

## Ejercicio 1

Realiza las siguientes tareas:

1. Crea un grupo llamado `administracion`.
2. Crea un usuario llamado `tecnico`:
   - Con directorio personal.
   - Shell `/bin/bash`.
   - Grupo principal `administracion`.
3. Añade el usuario `tecnico` al grupo secundario `sudo`.
4. Cambia la contraseña del usuario `tecnico`.

------

## Ejercicio 2

Responde de forma práctica:

1. Diferencia entre grupo primario y grupo secundario.
2. ¿Para qué sirve `/etc/skel`?
3. Diferencia entre `sudo` y `su -`.

------

# Parte 2 — Búsqueda y edición de archivos (1,5 puntos)

## Ejercicio 3

1. Busca todos los archivos `.log` dentro de `/var/log`.
2. Busca archivos mayores de 100 MB en `/home`.
3. Busca la palabra `error` dentro de `/var/log/syslog`.

------

# Parte 3 — Procesos y monitorización (2 punto)

## Ejercicio 4

1. Muestra todos los procesos del sistema.
2. Ejecuta el comando:

```
sleep 300
```
3. Envíalo a segundo plano.


------

## Ejercicio 5

Responde utilizando herramientas reales del sistema:

1. ¿Qué comando permite ver procesos ordenados por consumo de memoria?
2. ¿Cuantas tareas hay en ejecución? 

------

# Parte 4 — Servicios del sistema (1 punto)

## Ejercicio 6

Utilizando `systemctl`:

1. Comprueba el estado del servicio `ssh`.
2. Inicia el servicio.
3. Reinicia el servicio.

------

# Parte 5 — Memoria y almacenamiento (1,5 puntos)

## Ejercicio 7

1. Muestra el espacio libre de todos los sistemas de archivos.
2. Muestra el tamaño total del directorio `/var/log`.
3. Muestra los 5 archivos/directorios más grandes dentro de `/home`.

------

# Parte 6 — Logs y análisis del sistema (0,5 puntos)

## Ejercicio 8

1. Visualiza las últimas líneas de `/var/log/syslog`.

------

# Parte 7 — Red y configuración del sistema (1,5 puntos)

## Ejercicio 9

1. Muestra Dirección IP del sistema.
2. Muestra Tabla de rutas.
3. Muestra Puertos abiertos en escucha.
4. Explica brevemente la función de:
   - `/etc/fstab`

------

# Parte 8 — Compartición de recursos (1 punto)

## Ejercicio 10

Responde de forma práctica:

1. Diferencia entre NFS y SMB.

------

# Material permitido

- Máquina virtual Linux.
- Manuales del sistema (`man`).
- NO se permite acceso a Internet ni herramientas de IA.