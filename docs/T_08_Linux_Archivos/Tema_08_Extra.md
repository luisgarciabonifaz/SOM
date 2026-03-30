# ACTIVIDAD EXTRA

## Migración y aseguramiento de un sistema Linux

## Objetivo

Simular una situación real donde el alumnado debe:

- Diseñar y construir una estructura de archivos
- Detectar errores
- Corregir configuraciones
- Aplicar buenas prácticas de administración

------

## ESCENARIO GENERAL

Una empresa va a migrar su sistema de archivos a un nuevo servidor Linux. Antes de ponerlo en producción, debes:

1. Crear la estructura
2. Configurar accesos correctamente
3. Garantizar la integridad de ciertos archivos
4. Revisar errores dejados por otro administrador



------

# PARTE 1: Construcción del entorno

Crea en tu `/home` la siguiente estructura:

```
empresa/
├── proyectos/
│   ├── app1/
│   │   ├── src/
│   │   └── logs/
│   ├── app2/
│   │   ├── src/
│   │   ├── backups/
│   ├── backup_app1/
│   └── historico_logs/
├── compartido/
└── admin/
```

### 🔧 Tareas

Crea un script llamado e*structura.sh* que haga lo siguiente:

1. Crea toda la estructura en un solo comando cuando sea posible
2. Dentro de:
   - `app1/src` crea 3 archivos `.sh`
   - `app1/logs` crea 2 archivos `.log`
   - `app2/src` crea 2 archivos `.py`
3. Crea un archivo `config.conf` dentro de `admin`



------

#  PARTE 2: Configuración de permisos

Creaos un script llamado *configuracion.sh* que configure los siguientes permisos:

1. En `app1/src`:
   - Solo el propietario puede escribir
   - Grupo puede leer y ejecutar
   - Otros sin acceso
2. En `logs`:
   - Todos pueden leer
   - Solo propietario puede escribir
3. En `admin/config.conf`:
   - Solo accesible por el propietario
4. En `compartido`:
   - Todos los usuarios pueden leer y escribir archivos

👉 Usa notación **numérica y simbólica al menos una vez cada una**.

------

# PARTE 3: Propiedad y grupos

Supón que existen usuarios:

- `ana`
- `juan`

Y grupo:

- `devs`

### Tareas

1. Crea un script llamado *propietarios.sh* que haga los siguiente:
   - Todo `app1` pertenezca a `ana:devs`
   - Todo `app2` pertenezca a `juan:devs`
2. Explica en un fichero de texto llamado *teoria.txt*:
   - Qué diferencia hay entre `chown` y `chgrp`
   - Cuándo usarías cada uno

------

# PARTE 4: Enlaces

Crea un script llamado *enlaces.sh* que haga lo siguiente:

1. En `app1`, cree:
   - Un **enlace simbólico** en `compartido` que apunte a un `.log`
   - Un **enlace duro** de uno de los scripts
2. Responde en el fichero de texto anterior:

- ¿Qué pasa si borras el archivo original del enlace simbólico?
- ¿Qué pasa si borras el original del enlace duro?
- ¿Cómo puedes comprobar que dos archivos comparten inodo?

------

# PARTE 5: Diagnóstico de errores

Te dan esta información:

```
-rwxrwxrwx 1 ana devs script.sh
-rw-r--r-- 1 juan devs secreto.txt
lrwxrwxrwx 1 ana devs acceso -> /ruta/inexistente
-rw-rw-rw- 1 root root datos.db
```

### Tareas

En el fichero de texto *teoria.txt* responde a estas preguntas:

1. Identifica **al menos 4 problemas**
2. Explica por qué son errores
3. Propón soluciones con comandos

------

# PARTE 6: Gestión de archivos

Crea un script llamado *gestion.sh* que realice esto:

1. Copia todo `app1` a `backup_app1`
2. Mueve los `.log` a otra carpeta llamada `historico_logs`
3. Renombra un script a `main.sh`
4. Une dos archivos en uno nuevo usando `cat`

------

# PARTE 7: Preguntas de reflexión

Añade al fichero de texto *teoria.txt* las respuestas a estas preguntas:

1. Explica la diferencia entre:
   - Ruta absoluta vs relativa
2. ¿Por qué Linux usa estructura jerárquica y no letras de unidad?
3. ¿Qué información contiene un inodo?
4. ¿Puede un archivo existir sin nombre? Explica

------

