# Examen Configuración Básica Linux

------

# Instrucciones generales

En la plantilla adjunta rellena las respuesta a los apartados del examen. En unos apartados tendrás que escribir los comandos solicitados y en otros responder a las preguntas teóricas.

------

# Parte 1 — Gestión de usuarios y grupos (2 puntos)

## Ejercicio 1

Muestra la siguiente información del usuario de administración (el que creaste en la instalación):

1. Comprueba su UID y GID.
2. Muestra a qué grupos pertenece el usuario.

------

## Ejercicio 2

Consulta la información del usuario anterior en:

- `/etc/passwd`
- `/etc/group`

Explica qué representa cada uno de los campos principales.

------

# Parte 2 — Gestión de discos y sistemas de archivos (2 puntos)

## Ejercicio 3

Muestra:

1. Los discos y particiones del sistema.
2. El tipo de sistema de archivos de cada partición.
3. El espacio utilizado y disponible.

------

## Ejercicio 4

Supón que conectas un USB identificado como `/dev/sdb1`.

Escribe los comandos necesarios para:

1. Crear un punto de montaje.
2. Montar la unidad.
3. Comprobar que está montada.
4. Desmontarla correctamente.

------

# Parte 3 — Copias de seguridad y recuperación (2 puntos)

## Ejercicio 5

1. Crea una copia comprimida de la carpeta `/home/practica` utilizando `tar`.

El archivo debe llamarse:

```
backup_practica.tar.gz
```

Después:

2. Muestra el contenido del archivo comprimido sin extraerlo.
3. Extrae la copia en `/mnt/recuperacion`.

------


# Parte 4 — Gestión de paquetes y actualizaciones (1,5 puntos)

## Ejercicio 6

En un sistema Ubuntu/Debian:

1. Busca el paquete `nginx`.
2. Muestra información detallada del paquete.
3. Instálalo.

------

# Parte 5 — Automatización de tareas (1,5 puntos)

## Ejercicio 7

1. Edita crontab para el usuario actual.

Programa una tarea con `cron` para que:

- Se ejecute todos los días a las 03:30.
- Ejecute el script:

```
/home/practica/scripts/backup.sh
```

- Guarde tanto la salida normal como los errores en:

```
/var/log/backup.log
```

Después:

2. Muestra la línea completa del `crontab`.
3. Explica el significado de cada campo.

------

# Parte 6 — Scripts Bash (1 punto)

## Ejercicio 8

Crea un script llamado `actualizar_sistema.sh` que:

1. Muestre el mensaje:

```
=== INICIO DE ACTUALIZACIÓN ===
```

2. Actualice la lista de paquetes.
3. Actualice el sistema automáticamente.
4. Muestre:

```
=== FIN DE ACTUALIZACIÓN ===
```

5. Dale permisos de ejecución.

------

# Material permitido

- Máquina virtual Linux.
- Manuales del sistema (`man`).
- NO se permite IA ni acceso a Internet.