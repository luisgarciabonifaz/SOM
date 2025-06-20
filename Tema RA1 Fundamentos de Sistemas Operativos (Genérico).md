## Tema RA1: Fundamentos de Sistemas Operativos (Genérico)

Este tema introduce los conceptos fundamentales de los **sistemas operativos (SO)**, aplicables a cualquier entorno, ya sea Windows, Linux, macOS, o incluso en el ámbito de la virtualización. Comprender estos pilares es crucial para cualquier profesional de la informática, ya que son la base sobre la que se construyen y ejecutan todos los programas y aplicaciones.

### 1.1. Elementos Funcionales de un Sistema Informático

Un sistema informático es una combinación de componentes que trabajan juntos para procesar información. Podemos dividirlos en dos grandes categorías principales: **Hardware** y **Software**.

- **Hardware:** Se refiere a la parte física y tangible de un sistema informático. Es todo lo que puedes tocar. Incluye:
  - **Unidad Central de Procesamiento (CPU):** Es el "cerebro" del ordenador, encargado de ejecutar las instrucciones de los programas. Su rendimiento se mide en GHz y en la cantidad de núcleos.
  - **Memoria RAM (Random Access Memory):** Un tipo de almacenamiento temporal y volátil que guarda los datos y programas que se están usando activamente. Cuanta más RAM, más tareas puede manejar el sistema simultáneamente y con mayor fluidez. La información en RAM se pierde al apagar el equipo.
  - **Dispositivos de Almacenamiento:** Donde se guardan los datos de forma persistente, incluso cuando el equipo está apagado.
    - **Discos Duros (HDD):** Almacenamiento mecánico, más lento pero más económico y con mayor capacidad.
    - **Unidades de Estado Sólido (SSD):** Almacenamiento basado en memoria flash, mucho más rápidos y resistentes, pero más caros.
    - **Memorias USB, Tarjetas SD:** Dispositivos de almacenamiento externo y portátil.
  - **Periféricos de Entrada:** Permiten introducir información al sistema. Ejemplos: teclado, ratón, micrófono, escáner, cámara web.
  - **Periféricos de Salida:** Muestran información del sistema al usuario. Ejemplos: monitor, impresora, altavoces, auriculares.
  - **Periféricos de Entrada/Salida (E/S):** Realizan ambas funciones. Ejemplos: pantallas táctiles, módems/routers, unidades de CD/DVD (aunque cada vez menos comunes).
- **Software:** Es la parte lógica e intangible del sistema, compuesta por programas, datos e instrucciones. Es lo que le dice al hardware qué hacer. Se subdivide en:
  - **Sistema Operativo (SO):** El software principal y más importante. Gestiona los recursos de hardware y proporciona una plataforma para que otros programas funcionen. Actúa como el intermediario entre el usuario/aplicaciones y el hardware. Sin un SO, la mayoría de los ordenadores modernos no podrían funcionar.
  - **Aplicaciones (o Software de Aplicación):** Programas diseñados para realizar tareas específicas para el usuario. Ejemplos: navegadores web (Chrome, Firefox), procesadores de texto (Word, Writer), hojas de cálculo (Excel, Calc), juegos, editores de imágenes (Photoshop, GIMP).
  - **Controladores (Drivers):** Software que permite al sistema operativo comunicarse y controlar un hardware específico (por ejemplo, el driver de una impresora, de la tarjeta gráfica o de la tarjeta de red). Son esenciales para que el hardware funcione correctamente.

La **interacción hardware-software** es fundamental para el funcionamiento de un sistema informático. El software envía instrucciones al hardware, y el hardware las ejecuta y devuelve los resultados. El SO es el director de orquesta que coordina toda esta interacción, asegurándose de que los programas accedan al hardware cuando lo necesiten y de forma ordenada.

```
graph TD
    A[Usuario] --> B[Aplicaciones]
    B --> C[Sistema Operativo]
    C --> D[Hardware]
    D --> E[Periféricos]
    C --> B
    B --> A
    D --> C
```

### 1.2. Sistemas de Representación de la Información

Los ordenadores, a diferencia de los humanos, solo entienden y procesan información en un formato binario.

- **Sistemas de Numeración:**

  - **Binario (Base 2):** Es el sistema fundamental para los ordenadores. Solo utiliza dos dígitos: **0** y **1**. Cada dígito binario se conoce como un **bit** (binary digit), la unidad mínima de información. La combinación de bits forma la base de toda la información digital.
  - **Octal (Base 8):** Utiliza los dígitos del 0 al 7. Se usa a veces como una forma más compacta de representar números binarios, ya que un dígito octal equivale a tres bits binarios.
  - **Decimal (Base 10):** Nuestro sistema de numeración habitual, con dígitos del 0 al 9. Es el sistema que usamos para interactuar con los números.
  - **Hexadecimal (Base 16):** Utiliza los dígitos del 0 al 9 y las letras A (10) a la F (15). Es muy común en informática (direcciones de memoria, colores, códigos de error) para representar grandes cantidades de bits de forma concisa, ya que un dígito hexadecimal equivale a cuatro bits binarios (medio byte).

- Codificación de Caracteres:

  Los caracteres (letras, números, símbolos) también deben ser representados como números binarios para que el ordenador los entienda.

  - **ASCII (American Standard Code for Information Interchange):** Uno de los primeros estándares ampliamente adoptados para representar caracteres. Originalmente usaba 7 bits (128 caracteres), y luego 8 bits (256 caracteres), limitando la representación a caracteres latinos básicos.
  - **Unicode:** Un estándar mucho más moderno y amplio que busca codificar prácticamente todos los caracteres de todos los idiomas del mundo. Utiliza un número variable de bits por carácter (UTF-8, UTF-16, UTF-32) y ha sustituido a ASCII en la mayoría de las aplicaciones modernas, permitiendo la compatibilidad global de texto.

- Representación de Datos:

  Toda la información en un ordenador, desde un simple texto hasta una compleja imagen o un video, se almacena y procesa como secuencias de bits.

  - Por ejemplo, una **imagen digital** es una cuadrícula de píxeles, y cada píxel se representa con una combinación de bits que definen su color y brillo.
  - El **audio** se representa muestreando la onda sonora en puntos discretos y convirtiendo la amplitud de cada muestra en un número binario.
  - El **video** es una secuencia de imágenes (fotogramas) que se muestran rápidamente, combinadas con una pista de audio, todo representado digitalmente.

```
graph LR
    A[Información del Mundo Real] --> B[Digitalización]
    B --> C[Bits (0s y 1s)]
    C --> D{Representación Numérica?}
    D -- Binario --> E[Procesamiento por CPU]
    D -- Octal/Hexadecimal --> F[Visualización/Interacción Humana]
    C --> G{Codificación Caracteres?}
    G -- ASCII/Unicode --> H[Texto en Pantalla]
    C --> I{Datos Multimedia?}
    I -- Píxeles/Muestras --> J[Imágenes/Sonidos]
```

### 1.3. Procesos y sus Estados

Un **proceso** es la piedra angular de la ejecución de software en un sistema operativo. Es una instancia de un programa en ejecución. Cuando abres una aplicación (por ejemplo, tu navegador web), el sistema operativo crea uno o más procesos para que funcione.

- **Concepto de Proceso y Programa:**
  - Un **programa** es un conjunto de instrucciones estáticas y datos almacenados en el disco duro (un archivo `.exe` en Windows o un binario en Linux). Es una entidad pasiva.
  - Un **proceso** es la ejecución activa de ese programa. Incluye el código del programa, sus datos, su pila de ejecución, sus registros de CPU y su estado actual. Una misma aplicación puede tener varias instancias de proceso ejecutándose simultáneamente (por ejemplo, si abres dos ventanas de tu navegador web, cada una podría ser un proceso separado o un hilo de un mismo proceso principal).
- **Estados de un Proceso:** Un proceso no está siempre ejecutándose. Puede pasar por diferentes estados durante su ciclo de vida, gestionados por el planificador del sistema operativo:
  1. **Nuevo (New/Created):** El proceso acaba de ser creado. El sistema operativo lo está inicializando (asignando recursos como memoria).
  2. **Listo (Ready):** El proceso está cargado en memoria y esperando ser asignado a un procesador para ejecutarse. Está listo para usar la CPU en cuanto esté disponible.
  3. **Ejecución (Running):** El procesador está ejecutando las instrucciones del proceso. En un sistema de un solo núcleo, solo un proceso puede estar en este estado a la vez. En sistemas multinúcleo, puede haber tantos procesos en ejecución como núcleos disponibles.
  4. **Bloqueado/En espera (Blocked/Waiting):** El proceso está esperando que ocurra algún evento externo para poder continuar su ejecución. Ejemplos:
     - Esperando una operación de E/S (lectura de un archivo, entrada del usuario por teclado, respuesta de red).
     - Esperando que un recurso esté disponible (por ejemplo, un archivo que está siendo usado por otro proceso).
  5. **Terminado (Terminated/Exit):** El proceso ha completado su ejecución (ha finalizado todas sus instrucciones) o ha sido abortado por el sistema (por un error o por una acción del usuario). El sistema operativo libera sus recursos.
- **Gestión de Procesos:** El sistema operativo es el responsable de gestionar eficientemente todos los procesos que se ejecutan en el sistema. Esto incluye:
  - **Planificación (Scheduling):** Decidir qué proceso se ejecutará a continuación en la CPU y por cuánto tiempo. Los algoritmos de planificación buscan optimizar el uso de la CPU y proporcionar una buena experiencia al usuario (por ejemplo, que las aplicaciones respondan rápidamente).
  - **Creación y Eliminación:** Iniciar nuevos procesos (cuando abres una aplicación) y terminar los que ya no se necesitan o han fallado.
  - **Sincronización:** Asegurar que los procesos que comparten recursos (como la memoria o archivos) lo hagan de forma ordenada para evitar conflictos y corrupción de datos.
  - **Comunicación entre Procesos (IPC - Inter-Process Communication):** Permitir que los procesos se intercambien información entre sí de forma controlada.

```
graph TD
    subgraph Ciclo de Vida del Proceso
        New[Nuevo] --> Ready[Listo];
        Ready --> Running[En Ejecución];
        Running --> Ready;
        Running --> Waiting[Bloqueado/En Espera];
        Waiting --> Ready;
        Running --> Terminated[Terminado];
    end
```

### 1.4. Estructura y Organización del Sistema de Archivos

El **sistema de archivos** es el método por el cual el sistema operativo organiza, almacena, nombra y recupera los archivos y directorios (carpetas) en un dispositivo de almacenamiento. Es como el índice de una biblioteca para tus datos.

- **Concepto de Sistema de Archivos:** Es una estructura lógica que define cómo se guardan los datos en el disco y cómo el sistema operativo accede a ellos. Proporciona una forma jerárquica y organizada de manejar la información, permitiendo a los usuarios y programas encontrar datos de manera eficiente.
- **Tipos de Sistemas de Archivos:** Existen varios tipos, cada uno con sus propias características, optimizaciones y compatibilidades:
  - **FAT (File Allocation Table):** Una familia de sistemas de archivos más antiguos (ej. FAT16, **FAT32**). Son compatibles con casi todos los sistemas operativos, pero tienen limitaciones importantes: tamaño máximo de archivo (4 GB para FAT32) y tamaño máximo de partición. Se usan a menudo en unidades USB o tarjetas SD por su amplia compatibilidad.
  - **NTFS (New Technology File System):** El sistema de archivos predeterminado y más avanzado para **Windows**. Ofrece características clave como:
    - Mayor seguridad (permisos detallados para archivos y carpetas).
    - Soporte para archivos y particiones muy grandes.
    - Compresión y cifrado de archivos.
    - Journaling (para mayor fiabilidad y recuperación de errores).
  - **Ext (Extended File System):** Una familia de sistemas de archivos (ext2, ext3, **ext4**) utilizados comúnmente en **Linux**.
    - **ext4** es el estándar actual en muchas distribuciones de Linux. Es un sistema de archivos con journaling, muy robusto, rápido y escalable.
  - **Otros Sistemas de Archivos Relevantes:**
    - **HFS+ y APFS:** Usados en macOS.
    - **XFS y Btrfs:** Alternativas avanzadas para Linux con características como snapshots y pools de almacenamiento.
    - **exFAT:** Un sistema de archivos de Microsoft diseñado para memorias flash, sin las limitaciones de FAT32 en tamaño de archivo, y con mayor compatibilidad que NTFS en otros SO.
- **Jerarquía de Directorios y Archivos:** Los sistemas de archivos organizan la información en una estructura de árbol, similar a cómo organizas documentos en carpetas dentro de otras carpetas:
  - **Raíz:** El directorio principal, el punto de partida de toda la estructura de archivos. En Windows, cada unidad de disco tiene su propia raíz (ej. `C:\`, `D:\`). En Linux, hay una única raíz (`/`).
  - **Directorios (Carpetas):** Contenedores que organizan archivos y otros subdirectorios. Permiten una organización lógica de la información.
  - **Archivos:** Las unidades básicas de almacenamiento de datos. Un archivo contiene información específica (un documento de texto, una imagen, un programa ejecutable).
- **Rutas Absolutas y Relativas:**
  - **Ruta Absoluta:** Especifica la ubicación completa y exacta de un archivo o directorio desde la raíz del sistema de archivos. Es única y no depende de la ubicación actual del usuario.
    - Ejemplo en Windows: `C:\Users\Juan\Documents\informe.docx`
    - Ejemplo en Linux: `/home/juan/documentos/informe.pdf`
  - **Ruta Relativa:** Especifica la ubicación de un archivo o directorio respecto a la ubicación actual del usuario (el "directorio de trabajo"). Es más corta pero solo funciona desde una posición específica.
    - Ejemplo: Si estás en el directorio `C:\Users\Juan` (Windows), la ruta relativa a `informe.docx` sería `Documents\informe.docx`.
    - Ejemplo: Si estás en `/home/juan` (Linux), la ruta relativa a `informe.pdf` sería `documentos/informe.pdf`.
    - Los puntos `.` y `..` se usan comúnmente: `.` representa el directorio actual, `..` representa el directorio padre.

```
graph TD
    A[/ (Raíz Linux) o C:\ (Raíz Windows)] --> B[Carpeta 1]
    A --> C[Carpeta 2]
    B --> D[Subcarpeta 1.1]
    B --> E[Archivo 1.1]
    C --> F[Archivo 2.1]
    D --> G[Archivo 1.1.1]

    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#fcf,stroke:#333,stroke-width:2px
    style C fill:#fcf,stroke:#333,stroke-width:2px
    style D fill:#fcf,stroke:#333,stroke-width:2px
    style E fill:#ccf,stroke:#333,stroke-width:2px
    style F fill:#ccf,stroke:#333,stroke-width:2px
    style G fill:#ccf,stroke:#333,stroke-width:2px
```

### 1.5. Atributos de Archivos y Directorios

Los **atributos** son propiedades especiales o banderas asociadas a archivos y directorios que controlan su comportamiento o indican ciertas características. No son parte del contenido del archivo, sino metadatos sobre el archivo.

- **Propiedades Básicas (comunes a casi todos los sistemas):**
  - **Tamaño:** La cantidad de espacio que ocupa el archivo en el disco, generalmente en bytes, KB, MB, GB. Para directorios, suele ser el tamaño combinado de su contenido.
  - **Fecha de Creación:** La marca de tiempo que indica cuándo se creó por primera vez el archivo o directorio.
  - **Fecha de Modificación:** La marca de tiempo de la última vez que se modificó el contenido del archivo. Para directorios, la última vez que se modificó su contenido (se añadió/eliminó un archivo).
  - **Fecha de Acceso:** La marca de tiempo de la última vez que se leyó o accedió al archivo (por ejemplo, un programa lo abrió para leer su contenido, aunque no lo modificara).
- **Atributos Especiales (ejemplos comunes, pueden variar entre SO):**
  - **Solo Lectura (Read-only):** Impide que el contenido del archivo sea modificado o eliminado por el usuario o por un programa.
  - **Oculto (Hidden):** El archivo o directorio no se muestra por defecto en las vistas del explorador de archivos. Se usa para archivos del sistema o datos que no son de interés directo para el usuario.
  - **Sistema (System):** Indica que es un archivo o directorio crítico para el funcionamiento del sistema operativo. Suelen estar ocultos y protegidos para evitar eliminaciones accidentales.
  - **Archivo (Archive):** Un atributo utilizado por algunos programas de copia de seguridad para indicar si el archivo ha sido modificado desde la última copia de seguridad. Se activa automáticamente cuando el archivo se modifica.
  - **Comprimido (Compressed):** Indica que el archivo o directorio está almacenado de forma comprimida en el disco para ahorrar espacio. El SO lo descomprime automáticamente al acceder a él.
  - **Cifrado (Encrypted):** Indica que el archivo o directorio está cifrado para proteger su contenido de accesos no autorizados. El SO lo descifra automáticamente para el usuario autorizado.

La gestión de atributos se realiza normalmente a través de las propiedades del archivo o directorio en la interfaz gráfica del sistema operativo, o mediante comandos específicos en la línea de comandos (ej. `attrib` en Windows, `chattr` en Linux para atributos extendidos).

### 1.6. Permisos de Archivos y Directorios

Los **permisos** son reglas fundamentales de seguridad que definen quién puede acceder a un archivo o directorio y qué acciones puede realizar sobre él (leer, escribir, ejecutar). Son vitales para la privacidad y la integridad de los datos en entornos multiusuario.

- **Concepto de Permisos de Acceso:** El sistema operativo utiliza permisos para controlar quién puede interactuar con los archivos y directorios y de qué manera. Esto evita que usuarios no autorizados accedan, modifiquen o eliminen información.

- **Modelos de Permisos:** Aunque la implementación varía entre sistemas operativos (NTFS en Windows, permisos de usuario/grupo/otros en Linux), la idea central es similar: se define el acceso para diferentes "identidades".

  - **Propietario:** Es el usuario que creó el archivo o directorio. Este usuario generalmente tiene el control total sobre los permisos del archivo.
  - **Grupo:** Un conjunto de usuarios que tienen los mismos permisos sobre el archivo/directorio. Esto facilita la administración de permisos para equipos de trabajo.
  - **Otros (Everyone/World):** Cualquier otro usuario del sistema que no es el propietario ni pertenece al grupo asignado. A menudo se le otorgan los permisos más restrictivos.

- Tipos de Permisos (acciones que se pueden permitir o denegar):

  Los permisos básicos son:

  - **Lectura (Read - R):**
    - Para **archivos**: Permite ver el contenido del archivo.
    - Para **directorios**: Permite listar los archivos y subdirectorios que contiene.
  - **Escritura (Write - W):**
    - Para **archivos**: Permite modificar el contenido del archivo, guardarlo, o eliminarlo.
    - Para **directorios**: Permite crear, eliminar o renombrar archivos y subdirectorios dentro de ese directorio.
  - **Ejecución (Execute - X):**
    - Para **archivos**: Permite ejecutar el archivo (si es un programa o script).
    - Para **directorios**: Permite "entrar" en el directorio, es decir, acceder a su contenido o a sus subdirectorios.

- **Aplicación y Modificación de Permisos:**

  - En **Windows (NTFS):** Los permisos se gestionan a través de la pestaña "Seguridad" en las propiedades de archivos y carpetas. Se pueden asignar permisos muy detallados a usuarios y grupos específicos. Existe el concepto de "herencia de permisos", donde los archivos y subcarpetas heredan los permisos del directorio padre por defecto.
  - En **Linux (ext4, etc.):** Los permisos se suelen gestionar a través de la línea de comandos con comandos como `chmod` (para cambiar permisos), `chown` (para cambiar propietario) y `chgrp` (para cambiar grupo). Los permisos se representan a menudo de forma numérica (octal), donde R=4, W=2, X=1. Por ejemplo, `755` significa `rwx` para el propietario, `r-x` para el grupo y `r-x` para otros.

```
graph LR
    A[Archivo/Directorio] --> B{Propietario?};
    B --> C[Permisos Propietario];
    A --> D{Grupo?};
    D --> E[Permisos Grupo];
    A --> F{Otros?};
    F --> G[Permisos Otros];

    C --> H[Lectura (R)]
    C --> I[Escritura (W)]
    C --> J[Ejecución (X)]

    E --> H
    E --> I
    E --> J

    G --> H
    G --> I
    G --> J
```

### 1.7. Sistemas Transaccionales y Selección de Sistemas de Archivos

Este punto aborda conceptos más avanzados que influyen en la robustez, fiabilidad y rendimiento de los sistemas de archivos, especialmente en caso de fallos del sistema.

- Introducción a los Sistemas Transaccionales:

  En informática, una transacción es una secuencia de una o más operaciones que se consideran una unidad indivisible y atómica. Esto significa que, desde la perspectiva del sistema, la transacción debe ser:

  - **Atómica:** O todas las operaciones dentro de la transacción se completan con éxito (se "confirman" o *commit*), o ninguna de ellas se aplica (se "revierte" o *rollback*). No hay estados intermedios.
  - **Consistente:** La transacción lleva el sistema de un estado válido a otro estado válido.
  - **Aislada:** Las operaciones de una transacción no deben ser visibles para otras transacciones concurrentes hasta que se confirme.
  - **Duradera:** Una vez que una transacción se ha confirmado, sus efectos son permanentes y persisten incluso ante fallos del sistema.

  El concepto de transacciones es crucial en bases de datos, pero también se aplica a los sistemas de archivos para asegurar la integridad.

- Repercusiones al Seleccionar un Sistema de Archivos (en relación con sistemas transaccionales):

  La fiabilidad de un sistema de archivos, especialmente ante un apagado inesperado o un fallo de energía, depende en gran medida de si implementa mecanismos transaccionales. El mecanismo más común en sistemas de archivos modernos es el Journaling.

  - **Journaling (Registro por Diario):**
    - Muchos sistemas de archivos modernos (como **NTFS** en Windows y **ext3/ext4** en Linux) implementan *journaling*.
    - Funciona manteniendo un **diario (journal)**, que es un área especial en el disco donde se registran las intenciones de cambio antes de que los datos reales se escriban.
    - Cuando se va a realizar una operación de escritura (por ejemplo, guardar un archivo), el sistema de archivos primero escribe en el diario un "registro" que describe la operación. Una vez que este registro está en el diario, entonces procede a escribir los datos reales.
    - **Ventaja:** Si el sistema falla inesperadamente (un corte de energía, un bloqueo del SO) antes de que la operación de escritura completa se haya realizado en los datos, al reiniciar, el sistema de archivos puede "reproducir" el diario. Esto le permite:
      - **Completar** las operaciones que estaban en progreso y no se habían escrito completamente.
      - **Deshacer** (rollback) las operaciones que no se habían iniciado correctamente, dejando el sistema de archivos en un estado consistente.
    - **Importancia:** Los sistemas de archivos con journaling minimizan este riesgo, asegurando que el sistema de archivos siempre esté en un estado conocido y consistente, lo que mejora drásticamente la fiabilidad y reduce la necesidad de largas comprobaciones de disco.
  - **Impacto en la Integridad y Fiabilidad de los Datos:**
    - Los sistemas de archivos sin journaling (como FAT) son susceptibles a la corrupción si el sistema se apaga de forma brusca durante una operación de escritura. Esto puede llevar a archivos dañados o a una estructura de directorio inconsistente.
    - Los sistemas de archivos con journaling minimizan este riesgo, asegurando que el sistema de archivos siempre esté en un estado conocido y consistente, lo que mejora drásticamente la fiabilidad y reduce la necesidad de largas comprobaciones de disco.
  - **Rendimiento:**
    - El journaling puede introducir una ligera sobrecarga en el rendimiento, ya que cada operación de escritura implica escribir primero en el diario y luego en la ubicación final de los datos. Sin embargo, los beneficios en fiabilidad suelen compensar con creces esta pequeña penalización.
    - Algunos sistemas de archivos de journaling permiten diferentes modos de journaling (solo metadatos, datos y metadatos) para equilibrar rendimiento y fiabilidad.
  - **Consideraciones al Seleccionar un Sistema de Archivos:** Al elegir un sistema de archivos para una partición o un dispositivo de almacenamiento, es crucial considerar:
    - **Fiabilidad y Resistencia a Fallos:** ¿Es un sistema de archivos con journaling? ¿Qué tan bien maneja los fallos del sistema?
    - **Rendimiento:** ¿Qué tan rápido es para operaciones de lectura/escritura intensivas?
    - **Compatibilidad:** ¿Con qué sistemas operativos es compatible (por ejemplo, NTFS es óptimo para Windows, pero leerlo en Linux o macOS es más complejo)?
    - **Características Adicionales:** ¿Soporta características avanzadas como compresión, cifrado, cuotas de disco, snapshots, deduplicación?
    - **Escalabilidad:** ¿Qué tamaños máximos de archivos y particiones soporta? ¿Es adecuado para grandes volúmenes de datos?
    - **Casos de Uso:** No es lo mismo un sistema de archivos para un pendrive que para un servidor de bases de datos o el disco principal de un ordenador personal.

```
graph TD
    A[Operación de Escritura (Ej: Guardar Archivo)] --> B{Sistema de Archivos con Journaling?};
    B -- Sí --> C[1. Registrar en el Journal (Diario)];
    C --> D[2. Escribir Datos Reales en Disco];
    D --> E[3. Confirmar en el Journal (Operación Completa)];
    B -- No --> D;

    F[Fallo del Sistema (Ej: Apagón)]
    subgraph Recuperación
        G[El SO Reinicia y Detecta Inconsistencia];
        G --> H{¿Hay un Journal?};
        H -- Sí --> I[Revisar Journal];
        I --> J[Revertir/Completar Operaciones Pendientes];
        H -- No --> K[Ejecutar Chequeo Completo del Disco (Lento, Riesgo de Pérdida)];
    end
    F --> G;
```