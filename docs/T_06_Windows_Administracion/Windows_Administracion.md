# Administración y Optimización de Windows

En este tema vamos a profundizar en cómo administrar y optimizar el rendimiento de Windows. Aprenderemos a manejar cuentas de usuario, organizar archivos, controlar procesos y servicios, optimizar la memoria y el almacenamiento, y a entender lo que ocurre "detrás de las escenas" en nuestro equipo.

## 1. Usuarios y Grupos

### 1.1. Cuentas de Usuario Locales

Las **cuentas de usuario locales** son la forma en que Windows identifica y autentica a las personas que usan el equipo. Cada cuenta tiene su propio perfil, que incluye configuraciones personalizadas, documentos y permisos.

- **Creación de cuentas:** Puedes crear nuevas cuentas de usuario a través de la **Configuración de Windows** (Cuentas > Familia y otros usuarios) o mediante la **Administración de equipos** (Usuarios y grupos locales).
- **Tipos de cuentas:**
    - **Administrador:** Tiene control total sobre el sistema. Puede instalar programas, cambiar configuraciones y acceder a todos los archivos. ¡Úsala con precaución!
    - **Estándar:** Puede usar la mayoría del software, cambiar sus propias configuraciones de usuario y acceder a sus propios archivos. Necesita permiso de un administrador para realizar cambios que afecten a otros usuarios o al sistema.
    - **Invitado (deshabilitada por defecto):** Una cuenta temporal para personas que necesitan usar el equipo por un corto tiempo. No puede instalar software ni cambiar configuraciones del sistema.

### 1.2. Grupos Locales

Los **grupos locales** son colecciones de cuentas de usuario. Al añadir un usuario a un grupo, hereda los permisos y derechos de ese grupo. Esto simplifica mucho la administración, ya que en lugar de asignar permisos a cada usuario, los asignas al grupo.

- **Administradores:** Miembros de este grupo tienen permisos de administrador.
- **Usuarios:** Miembros de este grupo tienen permisos de usuario estándar. Es el grupo al que se añaden por defecto las nuevas cuentas estándar.
- **Invitados:** Este grupo está asociado a la cuenta de invitado.


### 1.3. Gestión de Usuarios y Grupos

Podemos gestionar usuarios y grupos desde:

- **Configuración de Windows:** Interfaz sencilla para tareas básicas (crear, eliminar usuarios).
- **Administración de equipos (compmgmt.msc):** Herramienta más avanzada para gestionar usuarios, grupos, establecer contraseñas, habilitar/deshabilitar cuentas y asignar pertenencias a grupos.
- **Línea de comandos (CMD/PowerShell):** Comandos como `net user` y `net localgroup` permiten una gestión potente y automatizable.

### 1.4. Gestión de Usuarios y Grupos con PowerShell

PowerShell es una potente herramienta de línea de comandos que permite una gestión avanzada y automatizada de usuarios y grupos locales. Aquí tienes algunos cmdlets (comandos de PowerShell) esenciales:


**Cmdlets para Usuarios Locales:**

- **Crear un nuevo usuario:**
    - `New-LocalUser`: Cmdlet para crear un nuevo usuario local.
    - `-Name`: Especifica el nombre de usuario.
    - `-Password`: Establece la contraseña. `Read-Host -AsSecureString` solicita la contraseña de forma segura.
    - `-FullName`: Nombre completo del usuario.
    - `-Description`: Descripción de la cuenta.
    - `-NoPassword`: Crea el usuario sin contraseña (no recomendado para cuentas activas).
- **Modificar un usuario existente (ej. cambiar contraseña, habilitar/deshabilitar):**
    - `Set-LocalUser`: Modifica propiedades de un usuario.
    - `Enable-LocalUser`: Habilita una cuenta de usuario.
    - `Disable-LocalUser`: Deshabilita una cuenta de usuario.
- **Obtener información de usuarios:**
    - `Get-LocalUser`: Lista todos los usuarios locales.
    - `Get-LocalUser -Name`: Muestra información de un usuario específico.
- **Eliminar un usuario:**
    - `Remove-LocalUser`: Elimina un usuario local.

**Cmdlets para Grupos Locales:**

- **Crear un nuevo grupo:**
    - `New-LocalGroup`: Crea un nuevo grupo local.

- **Obtener información de grupos:**
    - `Get-LocalGroup`: Lista todos los grupos locales.

- **Añadir un usuario a un grupo:**
    - `Add-LocalGroupMember`: Añade un miembro (usuario o grupo) a un grupo local.

- **Eliminar un usuario de un grupo:**
    - `Remove-LocalGroupMember`: Elimina un miembro de un grupo local.

- **Eliminar un grupo:**
      - `Remove-LocalGroup`: Elimina un grupo local.

!!! Nota
    Para ejecutar estos comandos, es necesario abrir PowerShell como **Administrador**.

### 1.5 Gestión de Contraseñas y Bloqueo de Usuarios en Windows
Una parte fundamental de la seguridad en cualquier sistema operativo es cómo gestionamos el acceso de los usuarios. En Windows, esto se controla principalmente a través de las **directivas de contraseñas** y las **directivas de bloqueo de cuentas**.

**Directivas de Contraseñas**

Las directivas de contraseñas son un conjunto de reglas que definen cómo deben ser las contraseñas de los usuarios para garantizar que sean seguras y difíciles de adivinar.

- **Configuraciones más importantes:**
    - **Requerir complejidad de la contraseña:** Esta opción obliga a que las contraseñas cumplan ciertos requisitos para ser consideradas "fuertes". Generalmente, deben incluir al menos tres de los siguientes cuatro tipos de caracteres:
        - Letras mayúsculas (A-Z)
        - Letras minúsculas (a-z)
        -  Números (0-9)
        -  Símbolos (!, @, #, $, %, etc.)
    - **Longitud mínima de la contraseña:** Establece el número mínimo de caracteres que debe tener una contraseña. Una longitud mayor aumenta exponencialmente la dificultad para ser descifrada. Lo recomendable hoy en día es un mínimo de **8 a 12 caracteres**.
    - **Vigencia máxima de la contraseña:** Determina el período de tiempo (normalmente en días) tras el cual un usuario está obligado a cambiar su contraseña. Esto ayuda a mitigar el riesgo si una contraseña es comprometida. Un valor común es de **90 días**.
    - **Historial de contraseñas:** Impide que los usuarios reutilicen contraseñas antiguas. Windows puede recordar un número determinado de contraseñas anteriores para que el usuario no pueda volver a usarlas inmediatamente. Por ejemplo, si se establece en "5", el sistema recordará las últimas 5 contraseñas.

- **¿Dónde se configura?** Estas políticas se gestionan a través del **Editor de directivas de grupo local** (`gpedit.msc`). La ruta es: `Configuración del equipo > Configuración de Windows > Configuración de seguridad > Directivas de cuenta > Directiva de contraseñas`


**Directivas de Bloqueo de Cuentas**

El bloqueo de cuentas es una medida de seguridad que deshabilita temporalmente una cuenta de usuario después de un número determinado de intentos de inicio de sesión fallidos. Su objetivo es prevenir **ataques de fuerza bruta**, donde un atacante prueba miles de contraseñas rápidamente.

- **Configuraciones clave:**
    - **Umbral de bloqueo de cuenta:** Define cuántos intentos de inicio de sesión fallidos se permiten antes de que la cuenta se bloquee. Un valor seguro y común es de **3 a 5 intentos**.
    - **Duración del bloqueo de cuenta:** Especifica cuánto tiempo (en minutos) permanecerá bloqueada la cuenta. Puede configurarse para que se desbloquee automáticamente después de, por ejemplo, **30 minutos**, o para que requiera la intervención manual de un administrador.
    - **Restablecer contador de bloqueo de cuenta después de:** Indica el tiempo que debe pasar después de un intento fallido para que el contador de intentos se reinicie a cero.
 - **¿Dónde se configura?** 
    - También se gestionan desde el **Editor de directivas de grupo local** (`gpedit.msc`), justo debajo de las directivas de contraseña: `Configuración del equipo > Configuración de Windows > Configuración de seguridad > Directivas de cuenta > Directiva de bloqueo de cuentas`


**Buenas Prácticas y Consejos Adicionales**

- **Concienciación del usuario:** La seguridad no es solo técnica. Es crucial enseñar a los usuarios a no compartir sus contraseñas, no apuntarlas en lugares visibles y a desconfiar de correos o mensajes que se las soliciten (phishing).
- **Contraseñas largas son mejores:** Una frase de contraseña (por ejemplo, `MiPerroSeLlamaRocky2023!`) es más fácil de recordar para el usuario y mucho más difícil de descifrar que una contraseña corta y compleja.
- **Usar un gestor de contraseñas:** Para usuarios que manejan múltiples cuentas, un gestor de contraseñas es una herramienta excelente para generar y almacenar contraseñas únicas y fuertes para cada servicio.
- **Autenticación Multifactor (MFA):** La capa de seguridad más efectiva hoy en día. Además de la contraseña, requiere un segundo método de verificación (como un código en el móvil o una huella dactilar). Aunque no es una política de contraseñas tradicional, es el siguiente paso lógico en la seguridad de cuentas.
  
## 2. Procesos del Usuario 
### 2.1. Administrador de Tareas

El **Administrador de tareas** (`Ctrl + Shift + Esc` o `Ctrl + Alt + Supr`) es tu centro de control para ver qué está haciendo tu equipo.

- **Pestaña Procesos:** Muestra todas las aplicaciones y procesos en ejecución. Puedes:
    - **Finalizar tarea:** Detiene una aplicación o proceso que no responde. ¡Úsalo con cuidado, ya que forzar el cierre de procesos del sistema puede inestabilizar Windows!
    - **Ver detalles:** Abre la pestaña "Detalles" para obtener más información sobre el proceso.
- **Pestaña Detalles:** Ofrece una vista más granular de los procesos:
    - **Establecer prioridad:** Puedes cambiar la prioridad de un proceso (Baja, Normal, Alta, Tiempo real). Aumentar la prioridad puede dar más recursos a un programa, pero también puede ralentizar el resto del sistema. **La prioridad "Tiempo real" puede ser inestable y debe usarse con extrema precaución.**
    - **Establecer afinidad:** Decide qué núcleos de CPU puede usar un proceso.
- **Pestaña Rendimiento:** Muestra gráficos en tiempo real del uso de CPU, memoria, disco y red. Muy útil para identificar cuellos de botella.

### 2.2. Monitor de Recursos

El **Monitor de recursos** (accedible desde el Administrador de tareas, pestaña Rendimiento, o ejecutando `resmon.exe`) ofrece una visión mucho más detallada del uso de los recursos del sistema.

- **Visión global:** Muestra el uso de CPU, disco, red y memoria en tiempo real, desglosado por procesos.
- **Filtros:** Puedes filtrar la información para ver qué procesos están usando más un recurso específico.
- **Análisis profundo:** Permite identificar exactamente qué archivos está leyendo o escribiendo un proceso en el disco, o qué conexiones de red está utilizando. Ideal para diagnosticar problemas de rendimiento.


## 3. Servicios del Sistema 

### 3.1. Servicios de Windows

Los **servicios de Windows** son programas que se ejecutan en segundo plano y realizan funciones esenciales del sistema operativo (red, impresión, actualizaciones, etc.). Se gestionan desde la consola **Servicios** (`services.msc`).

- **Estado:** Muestra si un servicio está "En ejecución" o "Detenido".
- **Tipo de inicio:**
    - **Automático (Inicio automático):** El servicio se inicia automáticamente con Windows. Ideal para servicios esenciales.
    - **Automático (Inicio retrasado):** El servicio se inicia automáticamente, pero con un ligero retraso para mejorar el tiempo de arranque del sistema.
    - **Manual:** El servicio se inicia solo cuando una aplicación o el sistema lo requiere.
    - **Deshabilitado:** El servicio no se puede iniciar. Útil para deshabilitar servicios innecesarios y mejorar el rendimiento o la seguridad, pero ¡cuidado con deshabilitar servicios esenciales!
- **Inicio/Detención/Reinicio:** Puedes controlar el estado de un servicio con un clic derecho.

### 3.2. Dependencias de Servicios

Muchos servicios dependen de otros para funcionar correctamente. Si intentas detener un servicio que tiene dependencias, Windows te advertirá sobre los servicios que también se verán afectados.

- **Pestaña Dependencias:** En las propiedades de un servicio, puedes ver de qué servicios depende y qué servicios dependen de él. Esto es crucial para la resolución de problemas; si un servicio no se inicia, puede ser porque uno de sus servicios dependientes no lo hace.


## 4. Optimización de la Memoria Disponible

### 4.1. Gestión de la Memoria Virtual (Archivo de Paginación)

La **memoria virtual** es una técnica que permite a un sistema operativo utilizar espacio en el disco duro como si fuera RAM cuando la memoria física es insuficiente. El **archivo de paginación** (`pagefile.sys`) es el archivo en el disco duro que almacena esta memoria virtual.

- **¿Por qué es importante?** Evita que las aplicaciones se bloqueen por falta de RAM y permite ejecutar más programas de los que cabrían solo en la RAM física.
- **Configuración:** Se gestiona desde las **Opciones de rendimiento** de Windows (Panel de control > Sistema y seguridad > Sistema > Configuración avanzada del sistema > Pestaña Opciones avanzadas > Rendimiento > Configuración > Pestaña Opciones avanzadas > Memoria virtual > Cambiar).
- **Tamaño recomendado:** Generalmente, Windows gestiona el tamaño automáticamente. Para usuarios avanzados, se puede establecer un tamaño personalizado, a menudo 1.5 a 2 veces la cantidad de RAM física, aunque esto depende del uso del equipo. En SSDs, es mejor dejar que Windows lo gestione o limitar el tamaño para reducir el desgaste.

### 4.2. Programas de Optimización de Memoria

Existen herramientas de terceros que prometen "optimizar" la memoria RAM.

- **Funcionamiento:** Suelen liberar memoria cerrando procesos innecesarios o forzando la escritura de datos a disco.
- **Realidad:** En sistemas operativos modernos como Windows, la gestión de memoria es muy eficiente. A menudo, estos programas ofrecen beneficios marginales y, en algunos casos, pueden incluso ralentizar el sistema al forzar constantemente la liberación de RAM que Windows podría necesitar. **Generalmente, es mejor dejar que Windows gestione la memoria.** La mejor optimización de memoria es tener suficiente RAM física.


## 5. Actividad del Sistema

### 5.1. Visor de Eventos

El **Visor de eventos** (`eventvwr.msc`) es una herramienta esencial para diagnosticar problemas y auditar la actividad del sistema. Registra eventos importantes que ocurren en Windows.

- **Registros de Windows:**
    - **Aplicación:** Eventos relacionados con programas instalados (errores de aplicaciones, inicio/cierre).
    - **Seguridad:** Eventos de seguridad (inicios de sesión exitosos/fallidos, acceso a archivos, cambios en permisos). ¡Muy importante para auditorías!
    - **Sistema:** Eventos del sistema operativo (errores de controladores, inicio/apagado del sistema, problemas de red).
    - **Configuración:** Eventos relacionados con cambios en la configuración.
    - **Reenviados:** Eventos reenviados desde otros equipos.
- **Filtrado de eventos:** Puedes filtrar por nivel (Error, Advertencia, Información), origen, ID de evento, etc., para encontrar rápidamente lo que buscas.
- **Creación de vistas personalizadas:** Guarda filtros comunes para un acceso rápido.

### 5.2. Monitor de Rendimiento

El **Monitor de rendimiento** (`perfmon.msc`) permite recopilar y ver datos de rendimiento en tiempo real y a lo largo del tiempo. Es mucho más potente que la pestaña "Rendimiento" del Administrador de tareas.

- **Contadores de rendimiento:** Puedes añadir contadores para casi cualquier métrica del sistema (uso de CPU, RAM disponible, lecturas/escrituras de disco, tráfico de red, etc.).
- **Conjuntos de recopiladores de datos:** Permite configurar grabaciones de datos de rendimiento durante un período específico para un análisis posterior. Útil para identificar tendencias o problemas intermitentes.
- **Alertas:** Puedes configurar alertas para que se disparen cuando un contador de rendimiento supere un umbral determinado.


## 6. Optimización de los Dispositivos de Almacenamiento

### 6.1. Desfragmentación (HDD)

La **desfragmentación** es un proceso que reorganiza los fragmentos de archivos dispersos en un disco duro (HDD) para que se almacenen de forma contigua.

- **¿Por qué es necesaria en HDDs?** Los archivos se "fragmentan" a medida que se escriben, modifican y eliminan, lo que hace que la cabeza lectora del disco tenga que moverse más, ralentizando el acceso.
- **Herramienta:** El **Optimizador de unidades** de Windows (busca "Desfragmentar y optimizar unidades").
- **Frecuencia:** Windows suele programarla automáticamente. Si tienes un HDD, una desfragmentación mensual o trimestral puede mejorar el rendimiento.

### 6.2. Optimización de Unidades (SSD)

Las **unidades de estado sólido (SSD)** funcionan de manera diferente a los HDDs. No tienen partes móviles y el acceso a datos es electrónico.

- **Optimización en SSDs (TRIM):** El "Optimizador de unidades" de Windows realiza una operación **TRIM** en los SSDs. TRIM informa al SSD qué bloques de datos ya no están en uso y pueden ser borrados internamente, lo que ayuda a mantener su rendimiento y alargar su vida útil. Esta operación se ejecuta automáticamente.

!!! Danger "**¡No desfragmentar SSDs!**"
    La desfragmentación no solo no mejora el rendimiento de un SSD, sino que puede reducir su vida útil al provocar escrituras innecesarias.


### 6.3. Limpieza de Disco

La **Limpieza de disco** (`cleanmgr.exe`) es una herramienta integrada de Windows que ayuda a liberar espacio en el disco duro eliminando archivos innecesarios.

- **Tipos de archivos que elimina:** Archivos temporales de Internet, archivos de programa descargados, archivos temporales de Windows, archivos de la papelera de reciclaje, informes de errores de Windows, y más.
- **Limpiar archivos del sistema:** Permite eliminar actualizaciones de Windows antiguas o puntos de restauración del sistema, liberando aún más espacio. ¡Úsalo con criterio!


## 7. Recursos Compartibles

### 7.1. Compartir Carpetas y Archivos en Red

Windows permite compartir carpetas y archivos con otros usuarios de la red local.

- **Compartir básico:** Clic derecho sobre una carpeta > Propiedades > Pestaña Compartir. Permite compartir rápidamente con usuarios específicos o "Todos".
- **Uso compartido avanzado:** Ofrece más control sobre los permisos de compartición y la cantidad de conexiones simultáneas.
- **Ruta de red:** Una vez compartida, la carpeta es accesible a través de una ruta de red como `\\NombreEquipo\NombreCarpetaCompartida`.

### 7.2. Permisos de Compartición vs. Permisos NTFS

¡Esta es una parte crucial y a menudo confusa! Hay dos tipos de permisos que controlan el acceso a recursos compartidos:

- **Permisos de Compartición:** Se aplican cuando se accede a un recurso a través de la red. Son más sencillos (Lectura, Cambio, Control Total).
- **Permisos NTFS:** Se aplican a los archivos y carpetas directamente en el disco duro, sin importar cómo se acceda a ellos (localmente o por red). Son mucho más granulares (Leer, Escribir, Ejecutar, Eliminar, Modificar, Control Total, y permisos especiales).

!!! Info "**¡Regla de oro:**"
    El permiso más restrictivo es el que prevalece. Si un usuario tiene "Control Total" en los permisos de compartición pero solo "Lectura" en los permisos NTFS, su acceso efectivo será "Lectura". 
    
    **Siempre configura ambos.**

### 7.3. Acceso a Recursos Compartidos

- **Explorador de Archivos:** Navega a "Red" para ver los equipos disponibles.
- **Ruta de red directa:** Escribe la ruta `\\NombreEquipo\NombreCarpetaCompartida` en la barra de direcciones del Explorador de Archivos.
- **Mapear unidad de red:** Asigna una letra de unidad (por ejemplo, Z:) a una carpeta compartida en la red, haciéndola parecer una unidad local. Esto facilita el acceso regular.


## 8. Información y Configuración del Sistema Operativo

### 8.1. Comandos de Línea de Comandos

La línea de comandos (CMD o PowerShell) es una herramienta muy potente para obtener información del sistema.

- **`ipconfig`:** Muestra la configuración de red de tu equipo (dirección IP, máscara de subred, puerta de enlace predeterminada, DNS).
  - `ipconfig /all`: Muestra información de configuración completa, incluyendo direcciones MAC.
  - `ipconfig /release` y `ipconfig /renew`: Libera y renueva una dirección IP, útil para solucionar problemas de red.
- **`systeminfo`:** Muestra información detallada sobre la configuración del sistema operativo (versión de Windows, tipo de procesador, memoria RAM, fecha de instalación, etc.).
- **`tasklist`:** Lista todos los procesos en ejecución en el sistema, similar a la pestaña "Procesos" del Administrador de tareas, pero en texto.
  - `tasklist /svc`: Muestra los servicios asociados a cada proceso.
  - `tasklist /m`: Muestra los módulos (DLLs) cargados por cada proceso.


### 8.2. Registro de Windows 

El **Registro de Windows** es una base de datos jerárquica que almacena configuraciones de bajo nivel para el sistema operativo, hardware, software y perfiles de usuario. Se accede a él mediante el editor del Registro (`regedit.exe`).

- **Estructura:** Organizado en claves y valores, similar a un sistema de archivos.
    - **HKEY_LOCAL_MACHINE (HKLM):** Configuraciones del equipo.
    - **HKEY_CURRENT_USER (HKCU):** Configuraciones del usuario actual.
    - **HKEY_USERS (HKU):** Configuraciones de todos los perfiles de usuario cargados.
    - **HKEY_CLASSES_ROOT (HKCR):** Información sobre tipos de archivo y objetos COM.
    - **HKEY_CURRENT_CONFIG (HKCC):** Perfil de hardware actual.

!!! danger "**Precuacion**"

    - **¡Modificar el Registro incorrectamente puede dañar gravemente el sistema operativo y dejarlo inoperable!**. 
    - Se puede usar para **consultar** información específica, pero rara vez para modificar. 
    - **Siempre haz una copia de seguridad antes de cualquier modificación.**


## 9. Informaciónd el sistema

### 9.1. Información del Sistema

La herramienta **Información del sistema** (`msinfo32.exe`) proporciona un resumen exhaustivo de la configuración de hardware y software del equipo.

- **Resumen del sistema:** Muestra el modelo del equipo, el tipo de CPU, la cantidad de RAM, la versión de Windows, la BIOS, etc.
- **Componentes:** Información detallada sobre cada componente de hardware (tarjeta gráfica, sonido, red, almacenamiento). Útil para verificar si los controladores están instalados correctamente o para conocer las especificaciones exactas.
- **Recursos de hardware:** Muestra los recursos de hardware utilizados por los dispositivos (IRQ, DMA, direcciones de memoria), útil para diagnosticar conflictos.
- **Entorno de software:** Lista los programas que se inician con Windows, los controladores instalados, los servicios, etc.


## 10. Actividad 1: Auditoría, administración y optimización de un equipo Windows

### Contexto (escenario)

Eres el/la técnico/a de una microempresa (8–12 empleados) que ha detectado:

- Usuarios que comparten contraseñas.
- Equipos lentos al arrancar y durante el uso.
- Dudas sobre qué servicios/procesos consumen recursos.
- Necesidad de compartir una carpeta en red con permisos correctos.
- Errores intermitentes (cuelgues) sin causa aparente.

Tu misión será **administrar usuarios**, **mejorar seguridad**, **diagnosticar rendimiento**, **revisar eventos**, **optimizar el sistema** y **configurar compartición en red**.

### 1) Objetivos de aprendizaje

Al terminar, el alumnado será capaz de:

1. Crear y gestionar **usuarios y grupos locales** desde GUI y desde línea de comandos (CMD/PowerShell).
2. Aplicar **políticas de contraseñas** y **bloqueo de cuenta** (seguridad básica).
3. Identificar procesos problemáticos con **Administrador de tareas** y **Monitor de recursos**.
4. Comprender y gestionar **servicios**, tipos de inicio y **dependencias**.
5. Ajustar/explicar **memoria virtual (pagefile)** y valorar “optimizers” de RAM.
6. Analizar el sistema con **Visor de eventos** y **Monitor de rendimiento**.
7. Aplicar optimización básica de almacenamiento (**TRIM/Desfragmentación + Limpieza de disco**) con criterio.
8. Configurar **carpetas compartidas** y justificar el acceso final (Compartición vs NTFS).
9. Obtener información del sistema con **ipconfig/systeminfo/tasklist** y usar el **Registro** con precaución (consulta y backup).
10. Documentar una auditoría técnica clara y reproducible.

### 2) Materiales y preparación

- 1 PC o VM por pareja (ideal).
- Cuenta con privilegios de **administrador**.
- Red local o red virtual (para pruebas de compartición).
- Carpeta “EVIDENCIAS” en el Escritorio para capturas y logs.

**Normas de seguridad del aula (muy importante)**

- No modificar el Registro salvo para **consultar** o con **copia de seguridad previa**.
- No deshabilitar servicios “a ciegas”: justificar y registrar cambios.
- Si se cambia configuración (servicios, pagefile, políticas), anotar “antes/después”.

### 3) Entregables (lo que entregan)

1. **Informe técnico (PDF o DOCX)** con capturas y conclusiones.
2. **Script PowerShell** (o comandos anotados) usados para gestionar usuarios/grupos.
3. Evidencias:
    - Capturas de `eventvwr.msc`, `perfmon.msc`, `services.msc`, `resmon.exe`
    - Salidas de `ipconfig /all`, `systeminfo`, `tasklist /svc`
4. Tabla final de permisos de la carpeta compartida (quién puede qué y por qué).

### 4) Evaluación (rúbrica sugerida /100)

- **Usuarios y grupos (20 pts):** creación, grupos, membresía, evidencia.
- **Seguridad (20 pts):** políticas de contraseña + bloqueo + pruebas documentadas.
- **Procesos y rendimiento (20 pts):** diagnóstico razonado con tareas/resmon/perfmon.
- **Servicios (15 pts):** cambios justificados + dependencias entendidas.
- **Eventos y logs (15 pts):** filtros, IDs/orígenes, explicación de hallazgos.
- **Compartición y permisos (10 pts):** coherencia “más restrictivo prevalece” + pruebas.

------

### 5) Desarrollo por fases (guía paso a paso)

#### FASE A — Identidad y control del equipo: usuarios y grupos (1,5–2 h)

**A1. Inventario inicial**

1. Ejecuta y captura:
    - `winver`
    - `systeminfo`
2. Lista usuarios locales:
    - GUI: `compmgmt.msc` → Usuarios y grupos locales
    - PowerShell: `Get-LocalUser`

**Evidencia:** captura o salida de comandos.

**A2. Creación de estructura de empresa**

Crea estas cuentas locales:

- `admin_soporte` (administrador)
- `empleado1` (estándar)
- `empleado2` (estándar)
- `invitado_temp` (estándar, luego deshabilitar)

Crea estos grupos locales:

- `GG_Soporte`
- `GG_Oficina`

Asigna:

- `admin_soporte` → `Administradores` + `GG_Soporte`
- `empleado1` y `empleado2` → `Usuarios` + `GG_Oficina`
- `invitado_temp` → `GG_Oficina` y después **deshabilitar**

**Obligatorio (PowerShell):** al menos una parte debe hacerse con cmdlets.
 Ejemplos de acciones que deben aparecer en evidencias:

- `New-LocalUser`, `New-LocalGroup`
- `Add-LocalGroupMember`
- `Disable-LocalUser`
- `Get-LocalUser`, `Get-LocalGroup`

**Evidencias mínimas:**

- Captura de los usuarios creados.
- Captura de membresía de grupos o salida del comando.

**A3. Comprobación con CMD (extra de robustez)**

Usa (y documenta) al menos:

- `net user`
- `net localgroup`

**Mini-preguntas (informe)**

- ¿Qué ventajas tiene gestionar permisos por grupos y no por usuario?
- ¿Por qué la cuenta Administrador debe usarse “con precaución”?

------

#### FASE B — Seguridad: contraseñas y bloqueo (1–1,5 h)

**B1. Configura directiva de contraseñas**

En `gpedit.msc`, configura (propuesta):

- Complejidad: **habilitada**
- Longitud mínima: **10**
- Vigencia máxima: **90 días**
- Historial: **5**

**Evidencia:** captura de la ruta completa y los valores.

**B2. Configura bloqueo de cuenta**

Configura (propuesta):

- Umbral: **5 intentos**
- Duración: **30 min**
- Restablecer contador: **30 min**

**Prueba obligatoria**

1. Intenta iniciar sesión con `empleado1` y contraseña incorrecta hasta bloquearlo.
2. Documenta qué ocurre y cómo lo detectas.

**Mini-preguntas**

- Explica con tus palabras qué ataque reduce el bloqueo de cuenta.
- Propón una alternativa moderna: ¿qué aporta MFA?

------

#### FASE C — Diagnóstico de rendimiento: procesos y recursos (1–1,5 h)

**C1. Administrador de tareas: análisis guiado**

1. Abre el Administrador de tareas.
2. Identifica:
    - Top 3 procesos por CPU
    - Top 3 por Memoria
    - Top 3 por Disco (si aplica)

**Acción práctica**

- Cambia la **prioridad** de un proceso “de usuario” (por ejemplo, navegador) y describe el impacto esperado (sin usar “Tiempo real”).

**Evidencia:** captura en pestañas Procesos/Rendimiento/Detalles.

**C2. Monitor de recursos (`resmon.exe`)**

Tareas:

- En CPU: filtra un proceso y mira hilos/uso.
- En Disco: identifica qué archivos está leyendo/escribiendo un proceso “pesado”.
- En Red: identifica conexiones activas de un proceso (si hay).

**Mini-pregunta**

- ¿Qué aporta `resmon` frente al Administrador de tareas?

#### FASE D — Servicios: estabilidad, inicio y dependencias (1–1,5 h)

**D1. Inspección de servicios**

En `services.msc`:

1. Elige 3 servicios “bien conocidos” (por ejemplo: Windows Update, Cola de impresión, etc.).
2. Para cada uno, anota:
   - Estado
   - Tipo de inicio
   - Qué función cumple (explicación breve)

**D2. Dependencias (obligatorio)**

Elige 1 servicio con dependencias visibles:

- Captura la pestaña **Dependencias**
- Explica qué podría pasar si lo detienes.

**D3. Cambio controlado (con criterio)**

Realiza **un** cambio seguro:

- Cambiar un servicio no crítico a “Manual” o “Inicio retrasado”
- Reiniciar un servicio

**Importante:** justificar y documentar “antes/después”.

#### FASE E — Memoria virtual y “optimización” realista (45–60 min)

**E1. Pagefile (memoria virtual)**

1. Localiza la configuración de memoria virtual.
2. Documenta:
   - ¿Está gestionado por el sistema?
   - ¿En qué unidad está?
3. Decide (y justifica) una de estas opciones:
   - Mantener automático (recomendado en la mayoría de casos)
   - Establecer tamaño personalizado (si justificas el escenario)

**Mini-preguntas**

- ¿Para qué sirve `pagefile.sys`?
- ¿Por qué en SSD se recomienda no obsesionarse con “ajustes agresivos” del pagefile?

**E2. Debate técnico corto (en el informe)**

- Explica por qué muchos “optimizadores de RAM” pueden ser inútiles o contraproducentes.

#### FASE F — Auditoría: Visor de eventos y Monitor de rendimiento (1,5–2 h)

**F1. Visor de eventos (`eventvwr.msc`)**

Tareas obligatorias:

1. En **Sistema**, filtra por:
    - Nivel: Error y Advertencia
    - Rango temporal: “últimas 24 h” (o desde el arranque)
2. Identifica:
    - 2 errores recurrentes o relevantes
    - 2 advertencias relevantes
3. En **Seguridad**, busca:
    - intentos fallidos/exitosos de inicio de sesión (relacionado con la fase de bloqueo)

**Evidencia:** capturas de filtros y eventos seleccionados.

**F2. Monitor de rendimiento (`perfmon.msc`)**

1. Añade contadores:
    - CPU
    - Memoria disponible
    - Actividad de disco (básico)
2. Crea un **Conjunto de recopiladores de datos**:
    - duración 3–5 minutos mientras abres varias apps
3. Extrae una conclusión:
    - ¿Dónde estuvo el cuello de botella?

**Evidencia:** captura del conjunto y de la gráfica/resultados.

#### FASE G — Optimización de almacenamiento (sin particionado) (45–60 min)

> *Ojo:* aquí **NO** se toca el Administrador de discos ni particiones.

**G1. Optimizar unidades**

1. Abre “Desfragmentar y optimizar unidades”.
2. Identifica si la unidad es HDD o SSD.
3. Ejecuta:
    - HDD: desfragmentación (si procede)
    - SSD: optimización/TRIM (si procede)
4. Explica por qué **no** se debe desfragmentar un SSD.

**G2. Limpieza de disco (`cleanmgr.exe`)**

1. Ejecuta limpieza estándar.
2. Si procede, “Limpiar archivos del sistema” y explica qué has eliminado (con criterio).


#### FASE H — Recursos compartidos: permisos reales (1–1,5 h)

**H1. Crear carpeta compartida**

1. Crea `C:\Empresa\Compartida`
2. Comparte la carpeta por red y anota la ruta UNC: `\\EQUIPO\Compartida`

**H2. Permisos de compartición vs permisos NTFS (obligatorio y clave)**

Configura un caso donde se vea la “regla de oro”:

- Permisos de compartición: `GG_Oficina` = Control total
- Permisos NTFS: `GG_Oficina` = Lectura

**Prueba:**

- Inicia sesión como `empleado1` e intenta crear/modificar archivos en la carpeta compartida desde la red.
- Documenta el resultado y explica por qué pasa (prevalece el más restrictivo).

**H3. Mapear unidad de red**

Mapea como `Z:` la carpeta compartida desde el usuario estándar.

**Evidencias:** capturas de permisos, prueba y unidad mapeada.

#### FASE I — Información del sistema y Registro (consulta segura) (45–60 min)

**I1. Comandos obligatorios**

Ejecuta y adjunta salida:

- `ipconfig /all`
- `tasklist /svc`
- `systeminfo`

Pregunta:

- ¿Qué comando te da más pistas si sospechas problemas de red?

**I2. Comandos PowerShell**

Busca y ejeucta los comandos de PowerShell alternativos a estos comandos del cmd

- `ipconfig /all`
- `tasklist /svc`
- `systeminfo`


**I3. Registro (solo consulta + precaución)**

1. Abre `regedit.exe`
2. Explica la diferencia entre HKLM y HKCU.
3. Realiza una **copia de seguridad** de una rama (exportar) **antes** de tocar nada.
4. Consulta una clave (sin modificar) y documenta qué información aporta.

**Prohibido:** cambios “porque sí”.


### 6) Plantilla rápida para el informe (estructura sugerida)

1. **Portada** (nombre, curso, fecha, equipo/VM).
2. **Objetivo del trabajo** (5–6 líneas).
3. **Usuarios y grupos** (capturas + tabla de cuentas y grupos).
4. **Políticas de seguridad** (valores + prueba de bloqueo).
5. **Rendimiento** (tareas/resmon/perfmon: hallazgos).
6. **Servicios** (cambios y dependencias).
7. **Eventos** (errores/advertencias y explicación).
8. **Optimización** (TRIM/defrag según tipo + cleanmgr).
9. **Compartición** (tabla permisos compartición vs NTFS + prueba).
10. **Comandos y registro** (salidas + conclusiones).
11. **Conclusiones y recomendaciones** (5 bullets accionables).


### 7) Ampliaciones (si van rápido)

- Automatiza todo lo posible con PowerShell: crear usuarios/grupos + añadir miembros + deshabilitar usuario temporal.
- Crea una “lista blanca” de servicios que jamás tocarías y justifica por qué.


## 11. Actividad 2: Estructura de empresa y permisos NTFS por departamentos

### Contexto

Una empresa pequeña quiere organizar su información por departamentos y proyectos. Hay conflictos porque:

- Algunos usuarios ven carpetas que no deberían.
- Otros pueden borrar documentos sin querer.
- Los responsables necesitan acceso total.
- El equipo de soporte debe poder recuperar y auditar, pero sin trabajar como “dueño” de los archivos.

Tu misión es **diseñar y aplicar una estructura de permisos** basada en **grupos**, no en usuarios individuales, y **demostrar con pruebas** que funciona.

### 1) Objetivos

Al finalizar, el alumnado será capaz de:

- Diseñar un modelo de permisos por **roles** (grupos).
- Aplicar permisos NTFS correctos usando **herencia** y **excepciones**.
- Entender la diferencia entre **Listar carpeta**, **Leer**, **Modificar**, **Control total** y permisos avanzados (eliminar, crear, escribir).
- Aplicar y justificar una **ruptura de herencia** en subcarpetas.
- Verificar con **Permisos efectivos / Acceso efectivo** y con pruebas reales (logins).
- Documentar el diseño (matriz de acceso) y las evidencias.


### 2) Preparación (usuarios y grupos)

> Si ya tienes cuentas del ejercicio anterior, reutilízalas. Si no, créalas.

#### Usuarios

- `ana_admin` (Administración)
- `dani_com` (Comercial)
- `carmen_it` (IT)
- `sergio_dir` (Dirección)
- `soporte` (cuenta técnica / administradora, para recuperación)

#### Grupos (roles)

- `GG_Direccion`
- `GG_Administracion`
- `GG_Comercial`
- `GG_IT`
- `GG_Todos` (incluye a los empleados, excluye soporte si decides)

**Regla obligatoria:**
 ✅ Los permisos se asignan a **grupos**, no a usuarios.
 ❌ Solo se permite asignación directa a usuario en 1 caso: el usuario “dueño” (ver apartado de CREATOR OWNER).


### 3) Estructura de carpetas (a crear)

Crea esta estructura en `D:\EMPRESA` (o `C:\EMPRESA` si no hay D:)

```
EMPRESA
│
├── 00_PUBLICO
│   ├── Plantillas
│   └── Comunicados
│
├── 10_ADMIN
│   ├── Facturas
│   ├── Nominas
│   └── Proveedores
│
├── 20_COMERCIAL
│   ├── Clientes
│   ├── Ofertas
│   └── Contratos
│
├── 30_IT
│   ├── Documentacion
│   ├── Scripts
│   └── Backups
│
└── 99_DIRECCION
    ├── Estrategia
    └── Confidencial
```


### 4) Reglas de negocio (lo que debe cumplirse) — MUY IMPORTANTE

Estas reglas definen el reto. Tu configuración debe cumplirlas **exactamente**:

**Regla A — Público (00_PUBLICO)**

1. Todos los empleados (`GG_Todos`) pueden:
    - **Leer** `00_PUBLICO` completo.
2. Solo `GG_IT` puede:
    - **Modificar** `00_PUBLICO\Plantillas`.
3. En `00_PUBLICO\Comunicados`:
    - `GG_Direccion` puede **Modificar**.
    - `GG_Todos` solo **Leer**.

✅ Aquí deben practicar herencia + excepción en subcarpeta.


**Regla B — Administración (10_ADMIN)**

1. Solo `GG_Administracion` y `GG_Direccion` pueden acceder a `10_ADMIN`.
2. `GG_Administracion` tiene:
    - **Modificar** en `10_ADMIN` y subcarpetas.
3. `GG_Direccion` tiene:
    - **Lectura** en `10_ADMIN`, salvo `Nominas` donde tiene **Control total**.
4. Nadie más (ni Comercial ni IT) debe **ver** el contenido de `10_ADMIN`.

✅ Aquí deben practicar: “no solo que no entren, sino que no lo vean”.


**Regla C — Comercial (20_COMERCIAL)**

1. `GG_Comercial` puede **Modificar** todo `20_COMERCIAL`.
2. `GG_Direccion` puede **Lectura** en todo `20_COMERCIAL`.
3. Subcarpeta `20_COMERCIAL\Contratos`:
    - Solo `GG_Comercial` y `GG_Direccion` pueden acceder.
    - IT **no** debe ver esta carpeta.
4. Subcarpeta `20_COMERCIAL\Clientes`:
    - `GG_Comercial` puede **Modificar**, pero **NO** puede borrar archivos (ni propios ni ajenos).
    - Dirección puede **Lectura**.

✅ Esta regla es “trampa”: obliga a permisos avanzados (quitar “Eliminar” y “Eliminar subcarpetas y archivos”).

**Regla D — IT (30_IT)**

1. `GG_IT` tiene **Modificar** en `30_IT\Documentacion`.
2. `30_IT\Scripts`:
    - Solo `GG_IT` puede acceder.
    - Y dentro, cada usuario de IT debe poder modificar **solo sus scripts**:
        - Crea subcarpetas: `Scripts\carmen_it`, `Scripts\carlos_it` (si no existe, inventa otro usuario IT).
        - Cada usuario solo puede modificar su carpeta.
        - `GG_IT` puede leer todo Scripts, pero no modificar carpetas ajenas.
        - `soporte` (admin) puede Control total en todo `30_IT`.
3. `30_IT\Backups`:
    - Solo `soporte` puede Control total.
    - `GG_IT` solo Lectura.

✅ Aquí practican: permisos por subcarpetas + “cada uno lo suyo” + diferencia entre grupo y propietario.

**Regla E — Dirección (99_DIRECCION)**

1. Solo `GG_Direccion` puede acceder a `99_DIRECCION`.
2. `99_DIRECCION\Confidencial`:
    - Solo `sergio_dir` (usuario) debe tener acceso total.
    - Ni siquiera otros de Dirección (si los hay) deben entrar.
3. Todo lo anterior debe seguir permitiendo que `soporte` (admin) pueda recuperar información (por ser admin), pero el informe debe explicar la diferencia entre:
    - acceso por permisos NTFS
    - acceso por privilegios de administrador / tomar posesión

✅ Aquí practican: excepción extrema + explicación de “admin puede tomar posesión”.


### 5) Condiciones obligatorias de implementación (para obligarles a pensar)

1. En la raíz `EMPRESA`:
    - Mantén herencia razonable.
    - No uses “Todos” (Everyone) a lo loco.
2. Solo se permite un máximo de **12 entradas** (ACEs) por carpeta (para que no lo hagan a base de parches).
3. Para aplicar una excepción en subcarpeta, deben:
    - **Romper herencia** y elegir si “copiar” o “quitar”.
    - Justificarlo en el informe.
4. Deben usar **al menos una vez**:
    - `Denegar` (Deny) **o** una alternativa equivalente (preferible sin Deny si lo resuelven bien).
    - Si usan Deny, deben explicar riesgos (Deny gana).
5. Deben comprobar “Acceso efectivo”:
    - Pestaña Seguridad → Avanzado → Acceso efectivo / Permisos efectivos (según versión Windows).


### 6) Pruebas prácticas obligatorias (no solo teoría)

Para cada usuario (ana_admin, dani_com, carmen_it, sergio_dir):

1. Inicia sesión o usa “Ejecutar como usuario” y prueba:
    - Entrar en carpetas permitidas.
    - Confirmar que carpetas prohibidas **no se ven** o dan acceso denegado (según diseño).
2. En carpetas con Modificar:
    - Crear archivo
    - Modificar
    - Renombrar
3. En `Clientes` (Comercial) prueba específicamente:
    - Crear archivo ✅
    - Modificar archivo ✅
    - Intentar borrar archivo ❌ (debe fallar)
4. En `Scripts` (IT) prueba:
    - Carmen puede modificar `Scripts\carmen_it`
    - Carmen no puede modificar `Scripts\carlos_it`
    - IT (grupo) puede leer ambos
5. En `99_DIRECCION\Confidencial`:
    - `sergio_dir` entra ✅
    - otro usuario de Dirección (si creas uno) no entra ❌

**Evidencias mínimas por prueba:**

- 1 captura por caso conflictivo (denegación o restricción).
- 1 captura por caso “funciona”.


### 7) Entregables

1. **Matriz de permisos** (tabla) con:
    - Carpetas (filas)
    - Grupos/usuarios (columnas)
    - Permiso resultante (Leer/Modificar/Control total/No acceso)
2. **Informe** con:
    - Justificación del diseño (por qué así)
    - Capturas clave (mínimo 12)
    - Explicación de herencia y rupturas
    - Explicación de por qué “no borrar” se resolvió como se resolvió
3. **Checklist de pruebas** firmado:
    - “Probado con usuario X: OK / NO OK” + evidencia

### 8) Evaluación (100 puntos)

- Diseño por grupos y limpieza (20)
- Herencia + rupturas justificadas (20)
- “No borrar en Clientes” conseguido correctamente (20)
- Scripts: cada uno lo suyo + lectura global IT (20)
- Evidencias y verificación (20)

