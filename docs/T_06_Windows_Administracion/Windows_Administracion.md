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
  
## 2. Organización de Archivos del Sistema
### 2.1. Explorador de Archivos Avanzado

El **Explorador de Archivos** (Windows + E) es nuestra ventana principal al sistema de archivos. Más allá de copiar y pegar, podemos:

- **Ver propiedades de archivos y carpetas:** Clic derecho > Propiedades para ver tamaño, fecha de creación, permisos, etc.
- **Opciones de carpeta:** Accede a ellas desde el menú "Ver" o "Opciones" en el Explorador. Permiten:
    - Mostrar/ocultar extensiones de archivo.
    - Mostrar/ocultar archivos y carpetas ocultos.
    - Mostrar archivos protegidos del sistema operativo.
- **Acceso rápido y bibliotecas:** Personaliza el acceso a tus carpetas más usadas y organiza tus archivos por categorías (Documentos, Imágenes, Música, etc.).
- **Búsqueda avanzada:** Utiliza filtros (tipo de archivo, fecha de modificación, tamaño) para encontrar rápidamente lo que necesitas.

### 2.2. Administrador de Discos: Particionado, Asignación de letras de unidad

El **Administrador de discos** (`diskmgmt.msc`) es una herramienta fundamental para gestionar tus unidades de almacenamiento.

- **Particionado:** Divide un disco físico en varias secciones lógicas llamadas **particiones**. Cada partición puede tener su propio sistema de archivos y actuar como una unidad independiente (por ejemplo, C: para el sistema, D: para datos).
    - **Crear y eliminar particiones:** Permite organizar el espacio de tu disco.
    - **Extender y reducir particiones:** Ajusta el tamaño de las particiones existentes sin perder datos (si hay espacio contiguo disponible).
- **Asignación de letras de unidad:** A cada partición se le asigna una letra (C:, D:, E:, etc.) para que el sistema la identifique. Puedes cambiar estas letras según tu preferencia.
- **Formatear unidades:** Prepara una partición para almacenar datos, eligiendo un sistema de archivos (NTFS, FAT32, exFAT).
- **Unidades dinámicas o volúmenes dinámicos:** Son las divisiones que se crean en un disco que ha sido configurado como dinámico. Este tipo de configuración ofrece mucha más flexibilidad que los discos básicos tradicionales. La principal ventaja es que puedes realizar operaciones avanzadas que involucran uno o más discos físicos, como mejorar el rendimiento o proteger tus datos contra fallos de un disco. Los tipos de volumenes dinámicos más comunes son:
    - **Volumen Simple:** Es el tipo más básico y equivale a una partición normal en un disco básico. Se crea en el espacio libre de un único disco dinámico.
    - **Volumen Distribuido (Spanned):** Este volumen combina el espacio libre de varios discos físicos para crear una única unidad lógica más grande. Los datos se van guardando en el primer disco y, cuando se llena, continúan en el siguiente.
    - **Volumen Seccionado (Striped o RAID 0):** Este volumen también une el espacio de dos o más discos físicos, pero distribuye los datos en "franjas" (stripes) de manera simultánea entre todos los discos. Esto aumenta significativamente la velocidad de lectura y escritura.
    - **Volumen Reflejado (Mirrored o RAID 1):** Este volumen crea una copia exacta (un espejo) de los datos en dos discos físicos. Todo lo que escribes en un disco se duplica instantáneamente en el otro. Su objetivo es la tolerancia a fallos.
    - **Volumen RAID-5**: Es una configuración avanzada que necesita un mínimo de tres discos físicos. Combina el seccionado (para el rendimiento) con un sistema de "paridad" para la tolerancia a fallos. La paridad es información de recuperación que se distribuye entre todos los discos.


## 3. Procesos del Usuario 
### 3.1. Administrador de Tareas

El **Administrador de tareas** (`Ctrl + Shift + Esc` o `Ctrl + Alt + Supr`) es tu centro de control para ver qué está haciendo tu equipo.

- **Pestaña Procesos:** Muestra todas las aplicaciones y procesos en ejecución. Puedes:
  - **Finalizar tarea:** Detiene una aplicación o proceso que no responde. ¡Úsalo con cuidado, ya que forzar el cierre de procesos del sistema puede inestabilizar Windows!
  - **Ver detalles:** Abre la pestaña "Detalles" para obtener más información sobre el proceso.
- **Pestaña Detalles:** Ofrece una vista más granular de los procesos:
  - **Establecer prioridad:** Puedes cambiar la prioridad de un proceso (Baja, Normal, Alta, Tiempo real). Aumentar la prioridad puede dar más recursos a un programa, pero también puede ralentizar el resto del sistema. **La prioridad "Tiempo real" puede ser inestable y debe usarse con extrema precaución.**
  - **Establecer afinidad:** Decide qué núcleos de CPU puede usar un proceso.
- **Pestaña Rendimiento:** Muestra gráficos en tiempo real del uso de CPU, memoria, disco y red. Muy útil para identificar cuellos de botella.

### 3.2. Monitor de Recursos

El **Monitor de recursos** (accedible desde el Administrador de tareas, pestaña Rendimiento, o ejecutando `resmon.exe`) ofrece una visión mucho más detallada del uso de los recursos del sistema.

- **Visión global:** Muestra el uso de CPU, disco, red y memoria en tiempo real, desglosado por procesos.
- **Filtros:** Puedes filtrar la información para ver qué procesos están usando más un recurso específico.
- **Análisis profundo:** Permite identificar exactamente qué archivos está leyendo o escribiendo un proceso en el disco, o qué conexiones de red está utilizando. Ideal para diagnosticar problemas de rendimiento.


## 4. Servicios del Sistema 

### 4.1. Servicios de Windows

Los **servicios de Windows** son programas que se ejecutan en segundo plano y realizan funciones esenciales del sistema operativo (red, impresión, actualizaciones, etc.). Se gestionan desde la consola **Servicios** (`services.msc`).

- **Estado:** Muestra si un servicio está "En ejecución" o "Detenido".
- **Tipo de inicio:**
    - **Automático (Inicio automático):** El servicio se inicia automáticamente con Windows. Ideal para servicios esenciales.
    - **Automático (Inicio retrasado):** El servicio se inicia automáticamente, pero con un ligero retraso para mejorar el tiempo de arranque del sistema.
    - **Manual:** El servicio se inicia solo cuando una aplicación o el sistema lo requiere.
    - **Deshabilitado:** El servicio no se puede iniciar. Útil para deshabilitar servicios innecesarios y mejorar el rendimiento o la seguridad, pero ¡cuidado con deshabilitar servicios esenciales!
- **Inicio/Detención/Reinicio:** Puedes controlar el estado de un servicio con un clic derecho.

### 4.2. Dependencias de Servicios

Muchos servicios dependen de otros para funcionar correctamente. Si intentas detener un servicio que tiene dependencias, Windows te advertirá sobre los servicios que también se verán afectados.

- **Pestaña Dependencias:** En las propiedades de un servicio, puedes ver de qué servicios depende y qué servicios dependen de él. Esto es crucial para la resolución de problemas; si un servicio no se inicia, puede ser porque uno de sus servicios dependientes no lo hace.


## 5. Optimización de la Memoria Disponible

### 5.1. Gestión de la Memoria Virtual (Archivo de Paginación)

La **memoria virtual** es una técnica que permite a un sistema operativo utilizar espacio en el disco duro como si fuera RAM cuando la memoria física es insuficiente. El **archivo de paginación** (`pagefile.sys`) es el archivo en el disco duro que almacena esta memoria virtual.

- **¿Por qué es importante?** Evita que las aplicaciones se bloqueen por falta de RAM y permite ejecutar más programas de los que cabrían solo en la RAM física.
- **Configuración:** Se gestiona desde las **Opciones de rendimiento** de Windows (Panel de control > Sistema y seguridad > Sistema > Configuración avanzada del sistema > Pestaña Opciones avanzadas > Rendimiento > Configuración > Pestaña Opciones avanzadas > Memoria virtual > Cambiar).
- **Tamaño recomendado:** Generalmente, Windows gestiona el tamaño automáticamente. Para usuarios avanzados, se puede establecer un tamaño personalizado, a menudo 1.5 a 2 veces la cantidad de RAM física, aunque esto depende del uso del equipo. En SSDs, es mejor dejar que Windows lo gestione o limitar el tamaño para reducir el desgaste.

### 5.2. Programas de Optimización de Memoria

Existen herramientas de terceros que prometen "optimizar" la memoria RAM.

- **Funcionamiento:** Suelen liberar memoria cerrando procesos innecesarios o forzando la escritura de datos a disco.
- **Realidad:** En sistemas operativos modernos como Windows, la gestión de memoria es muy eficiente. A menudo, estos programas ofrecen beneficios marginales y, en algunos casos, pueden incluso ralentizar el sistema al forzar constantemente la liberación de RAM que Windows podría necesitar. **Generalmente, es mejor dejar que Windows gestione la memoria.** La mejor optimización de memoria es tener suficiente RAM física.


## 6. Actividad del Sistema

### 6.1. Visor de Eventos

El **Visor de eventos** (`eventvwr.msc`) es una herramienta esencial para diagnosticar problemas y auditar la actividad del sistema. Registra eventos importantes que ocurren en Windows.

- **Registros de Windows:**
    - **Aplicación:** Eventos relacionados con programas instalados (errores de aplicaciones, inicio/cierre).
    - **Seguridad:** Eventos de seguridad (inicios de sesión exitosos/fallidos, acceso a archivos, cambios en permisos). ¡Muy importante para auditorías!
    - **Sistema:** Eventos del sistema operativo (errores de controladores, inicio/apagado del sistema, problemas de red).
    - **Configuración:** Eventos relacionados con cambios en la configuración.
    - **Reenviados:** Eventos reenviados desde otros equipos.
- **Filtrado de eventos:** Puedes filtrar por nivel (Error, Advertencia, Información), origen, ID de evento, etc., para encontrar rápidamente lo que buscas.
- **Creación de vistas personalizadas:** Guarda filtros comunes para un acceso rápido.

### 6.2. Monitor de Rendimiento

El **Monitor de rendimiento** (`perfmon.msc`) permite recopilar y ver datos de rendimiento en tiempo real y a lo largo del tiempo. Es mucho más potente que la pestaña "Rendimiento" del Administrador de tareas.

- **Contadores de rendimiento:** Puedes añadir contadores para casi cualquier métrica del sistema (uso de CPU, RAM disponible, lecturas/escrituras de disco, tráfico de red, etc.).
- **Conjuntos de recopiladores de datos:** Permite configurar grabaciones de datos de rendimiento durante un período específico para un análisis posterior. Útil para identificar tendencias o problemas intermitentes.
- **Alertas:** Puedes configurar alertas para que se disparen cuando un contador de rendimiento supere un umbral determinado.


## 7. Optimización de los Dispositivos de Almacenamiento

### 7.1. Desfragmentación (HDD)

La **desfragmentación** es un proceso que reorganiza los fragmentos de archivos dispersos en un disco duro (HDD) para que se almacenen de forma contigua.

- **¿Por qué es necesaria en HDDs?** Los archivos se "fragmentan" a medida que se escriben, modifican y eliminan, lo que hace que la cabeza lectora del disco tenga que moverse más, ralentizando el acceso.
- **Herramienta:** El **Optimizador de unidades** de Windows (busca "Desfragmentar y optimizar unidades").
- **Frecuencia:** Windows suele programarla automáticamente. Si tienes un HDD, una desfragmentación mensual o trimestral puede mejorar el rendimiento.

### 7.2. Optimización de Unidades (SSD)

Las **unidades de estado sólido (SSD)** funcionan de manera diferente a los HDDs. No tienen partes móviles y el acceso a datos es electrónico.

- **Optimización en SSDs (TRIM):** El "Optimizador de unidades" de Windows realiza una operación **TRIM** en los SSDs. TRIM informa al SSD qué bloques de datos ya no están en uso y pueden ser borrados internamente, lo que ayuda a mantener su rendimiento y alargar su vida útil. Esta operación se ejecuta automáticamente.

!!! Danger "**¡No desfragmentar SSDs!**"
    La desfragmentación no solo no mejora el rendimiento de un SSD, sino que puede reducir su vida útil al provocar escrituras innecesarias.


### 7.3. Limpieza de Disco

La **Limpieza de disco** (`cleanmgr.exe`) es una herramienta integrada de Windows que ayuda a liberar espacio en el disco duro eliminando archivos innecesarios.

- **Tipos de archivos que elimina:** Archivos temporales de Internet, archivos de programa descargados, archivos temporales de Windows, archivos de la papelera de reciclaje, informes de errores de Windows, y más.
- **Limpiar archivos del sistema:** Permite eliminar actualizaciones de Windows antiguas o puntos de restauración del sistema, liberando aún más espacio. ¡Úsalo con criterio!


## 8. Recursos Compartibles

### 8.1. Compartir Carpetas y Archivos en Red

Windows permite compartir carpetas y archivos con otros usuarios de la red local.

- **Compartir básico:** Clic derecho sobre una carpeta > Propiedades > Pestaña Compartir. Permite compartir rápidamente con usuarios específicos o "Todos".
- **Uso compartido avanzado:** Ofrece más control sobre los permisos de compartición y la cantidad de conexiones simultáneas.
- **Ruta de red:** Una vez compartida, la carpeta es accesible a través de una ruta de red como `\\NombreEquipo\NombreCarpetaCompartida`.

### 8.2. Permisos de Compartición vs. Permisos NTFS

¡Esta es una parte crucial y a menudo confusa! Hay dos tipos de permisos que controlan el acceso a recursos compartidos:

- **Permisos de Compartición:** Se aplican cuando se accede a un recurso a través de la red. Son más sencillos (Lectura, Cambio, Control Total).
- **Permisos NTFS:** Se aplican a los archivos y carpetas directamente en el disco duro, sin importar cómo se acceda a ellos (localmente o por red). Son mucho más granulares (Leer, Escribir, Ejecutar, Eliminar, Modificar, Control Total, y permisos especiales).

!!! Info "**¡Regla de oro:**"
    El permiso más restrictivo es el que prevalece. Si un usuario tiene "Control Total" en los permisos de compartición pero solo "Lectura" en los permisos NTFS, su acceso efectivo será "Lectura". 
    
    **Siempre configura ambos.**

### 8.3. Acceso a Recursos Compartidos

- **Explorador de Archivos:** Navega a "Red" para ver los equipos disponibles.
- **Ruta de red directa:** Escribe la ruta `\\NombreEquipo\NombreCarpetaCompartida` en la barra de direcciones del Explorador de Archivos.
- **Mapear unidad de red:** Asigna una letra de unidad (por ejemplo, Z:) a una carpeta compartida en la red, haciéndola parecer una unidad local. Esto facilita el acceso regular.


## 9. Información y Configuración del Sistema Operativo

### 9.1. Comandos de Línea de Comandos

La línea de comandos (CMD o PowerShell) es una herramienta muy potente para obtener información del sistema.

- **`ipconfig`:** Muestra la configuración de red de tu equipo (dirección IP, máscara de subred, puerta de enlace predeterminada, DNS).
  - `ipconfig /all`: Muestra información de configuración completa, incluyendo direcciones MAC.
  - `ipconfig /release` y `ipconfig /renew`: Libera y renueva una dirección IP, útil para solucionar problemas de red.
- **`systeminfo`:** Muestra información detallada sobre la configuración del sistema operativo (versión de Windows, tipo de procesador, memoria RAM, fecha de instalación, etc.).
- **`tasklist`:** Lista todos los procesos en ejecución en el sistema, similar a la pestaña "Procesos" del Administrador de tareas, pero en texto.
  - `tasklist /svc`: Muestra los servicios asociados a cada proceso.
  - `tasklist /m`: Muestra los módulos (DLLs) cargados por cada proceso.


### 9.2. Registro de Windows 

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


## 10. Administración de tareas y Eventos

### 10.1. Administrador de Tareas

Volvemos al Administrador de tareas para una visión integral:

- **Pestaña Procesos:** Ya la hemos visto para finalizar tareas y entender el uso de CPU/memoria por aplicación. Aquí se puede enfatizar la identificación de procesos sospechosos o de alto consumo.
- **Pestaña Rendimiento:** Gráficos en tiempo real de CPU, memoria, disco y red. Es vital para:
    - Identificar cuellos de botella (¿qué recurso está al 100%?).
    - Entender la capacidad del hardware actual.
    - Distinguir entre problemas de software (un programa que consume mucha CPU) y problemas de hardware (poca RAM).
- **Pestaña Historial de aplicaciones:** Muestra el tiempo de CPU y el uso de red por aplicación, útil para ver qué aplicaciones han sido más activas.

### 10.2. Visor de Eventos

Comprobamos la importancia del Visor de eventos como herramienta de diagnóstico:

- **Errores (Rojo):** Indican un problema grave (fallo de hardware, de un servicio crítico, etc.).
- **Advertencias (Amarillo):** Indican un problema potencial que no es crítico, pero que podría llevar a uno (espacio en disco bajo, un servicio que se detuvo y se reinició).
- **Información (Azul):** Eventos normales de operación (inicio/parada de servicios, instalación de software, inicio de sesión exitoso).

### 10.3. Información del Sistema

La herramienta **Información del sistema** (`msinfo32.exe`) proporciona un resumen exhaustivo de la configuración de hardware y software del equipo.

- **Resumen del sistema:** Muestra el modelo del equipo, el tipo de CPU, la cantidad de RAM, la versión de Windows, la BIOS, etc.
- **Componentes:** Información detallada sobre cada componente de hardware (tarjeta gráfica, sonido, red, almacenamiento). Útil para verificar si los controladores están instalados correctamente o para conocer las especificaciones exactas.
- **Recursos de hardware:** Muestra los recursos de hardware utilizados por los dispositivos (IRQ, DMA, direcciones de memoria), útil para diagnosticar conflictos.
- **Entorno de software:** Lista los programas que se inician con Windows, los controladores instalados, los servicios, etc.
