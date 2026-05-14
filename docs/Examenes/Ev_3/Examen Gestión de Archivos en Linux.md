# Examen Gestión de Archivos en Linux

------

# Instrucciones generales

En la plantilla adjunta rellena las respuesta a los apartados del examen. En unos apartados tendrás que escribir los comandos solicitados y en otros responder a las preguntas teóricas.

------

# Parte 1 — Estructura del sistema de archivos (1,5 puntos)

## Ejercicio 1

Responde utilizando comandos y ejemplos reales:

1. Muestra tu directorio actual.
2. Accede al directorio `/var/log` usando una ruta absoluta (un solo comando).
3. Vuelve a tu directorio personal usando una ruta relativa (un solo comando).
4. Muestra el contenido de `/etc` en formato largo y con archivos ocultos usando rutas absolutas (un solo comando).
5. Explica brevemente para qué sirven los directorios:
   - `/home`
   - `/etc`
   - `/var`
   - `/dev`

------

# Parte 2 — Gestión de archivos y directorios (1,5 puntos)

## Ejercicio 2

Realiza las siguientes operaciones:

1. Crea la siguiente estructura:

```
practica/
├── documentos/
├── imagenes/
└── backups/
```

2. Dentro de `documentos`, crea los archivos:
   - `notas.txt`
   - `tareas.txt`
3. Copia `notas.txt` a la carpeta `backups`.
4. Renombra `tareas.txt` a `tareas_final.txt`.
5. Mueve `tareas_final.txt` a la carpeta `backups`.
6. Elimina el directorio `imagenes`.

------

# Parte 3 — Visualización y búsqueda de contenido (1 punto)

## Ejercicio 3

1.  Crea un archivo llamado `log.txt` con al menos 15 líneas de texto.

Después:

2. Muestra las 5 primeras líneas.
3. Muestra las 3 últimas líneas.


------

# Parte 4 — Enlaces y atributos (1 punto)

## Ejercicio 4

1. Crea un archivo llamado `original.txt`.
2. Crea un enlace simbólico llamado `enlace_blando.txt`
3. Crea un enlace duro llamado `enlace_duro.txt`


------


# Parte 5 — Permisos en Linux (3 puntos)

## Ejercicio 5

1. Crea un archivo llamado `script.sh` y realiza las siguientes operaciones:

2. Asigna permisos:
   - Propietario: lectura, escritura y ejecución.
   - Grupo: lectura y ejecución.
   - Otros: solo lectura.
3. Muestra los permisos resultantes.
4. Expresa esos permisos en formato simbólico.
5. Expresa esos permisos en formato octal.

------

## Ejercicio 6

Usando notación simbólica:

1. Añade permiso de ejecución al grupo.
2. Quita permiso de lectura a otros.
3. Da permisos completos al propietario.
4. Muestra el resultado tras cada cambio.

------

## Ejercicio 7

1. Crea un directorio llamado `compartido`.
2. Asigna permisos para que:
   - Todos puedan acceder.
   - Solo el propietario pueda borrar archivos ajenos.

------

# Parte 6 — Propietarios y grupos (1 punto)

## Ejercicio 9

Supón que existen:

- Usuario: `alumno`
- Grupo: `informatica`

Realiza:

1. Cambia el propietario de `script.sh` a `alumno`.
2. Cambia el grupo a `informatica`.
3. Haz el cambio de forma recursiva sobre el directorio `practica`.

------

# Parte 7 — Reflexión práctica (1 punto)

## Ejercicio 10

Responde de forma breve y práctica:

1. Diferencia entre enlace duro y enlace simbólico.
2. ¿Qué ocurre si borras un archivo que tiene un enlace duro?
3. ¿Para qué sirve el permiso de ejecución en un directorio?
4. ¿Por qué puede ser peligroso usar `rm -rf`?

------

# Material permitido

- Máquina virtual Linux.
- Manuales del sistema (`man`).
- NO se permite acceso a Internet ni herramientas de IA.