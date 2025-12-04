# Gestión de Archivos y Directorios

En este tema exploraremos la estructura del sistema de archivos, la gestión de atributos y permisos, y la identificación de elementos funcionales clave en Windows.

## 1. Estructura y organización del sistema de archivos en Windows

El sistema de archivos es la forma en que el sistema operativo organiza y almacena los datos en un disco. En Windows, esta organización se basa en unidades, carpetas (también conocidas como directorios) y archivos.

### 1.1. Unidades, carpetas y archivos

* **Unidades:** Representan dispositivos de almacenamiento como discos duros, unidades SSD, unidades USB o unidades de DVD. Cada unidad se identifica con una letra seguida de dos puntos (por ejemplo, `C:`, `D:`). La unidad `C:` es típicamente donde se instala el sistema operativo Windows.
* **Carpetas (Directorios):** Son contenedores que agrupan archivos y otras subcarpetas. Permiten una organización lógica de la información en el disco. Por ejemplo, la carpeta `Documentos` agrupa los documentos del usuario.
* **Archivos:** Son la unidad básica de almacenamiento de información. Cada archivo contiene datos (texto, imágenes, programas, etc.) y tiene un nombre y una extensión (por ejemplo, `documento.docx`, `imagen.jpg`, `programa.exe`). La extensión indica el tipo de archivo y con qué programa se asocia por defecto.

### 1.2. Sistema de archivos **NTFS**

**NTFS (New Technology File System)** es el sistema de archivos principal utilizado por las versiones modernas de Windows (Windows NT, 2000, XP, Vista, 7, 8, 10, 11). Ofrece numerosas ventajas sobre sistemas de archivos anteriores:

* **Seguridad y permisos:** Permite establecer permisos detallados a nivel de archivo y carpeta, controlando quién puede acceder y qué acciones puede realizar. Esto es fundamental para entornos multiusuario y la protección de datos.
* **Recuperación ante fallos:** Incorpora un sistema de registro de transacciones (journaling) que ayuda a recuperar el sistema de archivos a un estado consistente después de un fallo de energía o del sistema, minimizando la pérdida de datos.
* **Compresión de archivos:** Permite comprimir archivos y carpetas para ahorrar espacio en disco, sin necesidad de herramientas de compresión externas.
* **Cifrado de archivos (EFS - Encrypting File System):** Ofrece la capacidad de cifrar archivos individuales para proteger su confidencialidad, incluso si el disco es accedido por personas no autorizadas.
* **Soporte para discos grandes:** Admite volúmenes de disco y tamaños de archivo mucho más grandes que FAT32, lo que es esencial para los discos duros modernos.
* **Cuotas de disco:** Permite a los administradores limitar la cantidad de espacio en disco que pueden utilizar usuarios o grupos específicos.
* **Enlaces duros y enlaces simbólicos:** Proporciona formas avanzadas de referenciar archivos y directorios, mejorando la flexibilidad del sistema de archivos.

### 1.3. Sistema de archivos **FAT32**

**FAT32 (File Allocation Table 32)** es un sistema de archivos más antiguo, común en dispositivos de almacenamiento extraíbles como unidades USB y tarjetas SD, y en sistemas operativos más antiguos.

**Diferencias y limitaciones principales con respecto a NTFS:**

* **Sin seguridad/permisos:** FAT32 no ofrece la capacidad de establecer permisos de seguridad a nivel de archivo o carpeta, lo que lo hace inadecuado para la protección de datos en entornos multiusuario.
* **Tamaño máximo de archivo:** Un archivo individual no puede superar los 4 GB de tamaño. Esto es una limitación importante para archivos grandes como vídeos de alta resolución o imágenes de disco.
* **Tamaño máximo de volumen:** El tamaño máximo de una partición FAT32 es de 2 TB (aunque en la práctica es más limitado por las herramientas de formateo de Windows a 32 GB).
* **Sin recuperación ante fallos:** FAT32 es más propenso a la corrupción de datos en caso de un fallo del sistema o apagón, ya que carece de las características de journaling de NTFS.
* **Sin compresión ni cifrado:** No soporta las funciones de compresión o cifrado de archivos integradas que ofrece NTFS.

---

## 2. Atributos de archivos y directorios en Windows

Además de su nombre, extensión, tamaño y fecha de modificación, los archivos y directorios en Windows poseen atributos que definen ciertas características o comportamientos.

### 2.1. Atributos comunes

Estos atributos se pueden aplicar a archivos y carpetas para modificar su comportamiento:

* **Solo lectura (Read-only):** Indica que el archivo o carpeta no debe ser modificado o borrado accidentalmente. Aunque se puede modificar programáticamente, la mayoría de las aplicaciones y el Explorador de Archivos lo tratarán como no modificable. Es útil para proteger documentos importantes.
* **Oculto (Hidden):** Hace que el archivo o carpeta no sea visible por defecto en el Explorador de Archivos. Se utiliza para ocultar archivos del sistema o datos que no se desea que el usuario vea habitualmente. Se pueden mostrar activando la opción "Elementos ocultos" en el Explorador de Archivos.
* **Sistema (System):** Atributo utilizado por el sistema operativo para marcar archivos y carpetas vitales para su funcionamiento. Estos archivos suelen estar ocultos y solo se muestran si se desactiva la opción "Ocultar archivos protegidos del sistema operativo" en la configuración del Explorador de Archivos. Manipularlos incorrectamente puede dañar el sistema.
* **Comprimido (Compressed):** Indica que el archivo o carpeta está comprimido para ahorrar espacio en disco. Este atributo solo está disponible en unidades formateadas con NTFS. El acceso a los archivos comprimidos es transparente para el usuario.
* **Cifrado (Encrypted):** Indica que el archivo o carpeta está cifrado utilizando EFS (Encrypting File System). Solo el usuario que cifró el archivo (o un usuario con la clave de recuperación adecuada) puede acceder a su contenido. Este atributo solo está disponible en unidades formateadas con NTFS.

### 2.2. Gestión de atributos desde el explorador de archivos

Puedes gestionar los atributos de archivos y carpetas de la siguiente manera:

1.  **Selecciona** el archivo o carpeta.
2.  Haz clic con el botón derecho y selecciona **"Propiedades"**.
3.  En la pestaña **"General"**, encontrarás las opciones para **"Solo lectura"** y **"Oculto"**. Marca o desmarca las casillas según sea necesario.
4.  Para **"Comprimido"** y **"Cifrado"**, haz clic en el botón **"Opciones avanzadas..."**. Aquí podrás marcar o desmarcar las casillas correspondientes. Ten en cuenta que estos atributos son excluyentes (un archivo no puede estar comprimido y cifrado a la vez con las opciones nativas de Windows).

---

## 3. Permisos NTFS

Los permisos NTFS son una característica fundamental para la seguridad y el control de acceso a los recursos en sistemas Windows, especialmente en entornos multiusuario o de red. Permiten definir quién puede acceder a un archivo o carpeta y qué acciones puede realizar sobre ellos.

### 3.1. Concepto de permisos a nivel de archivo y carpeta

* **Permisos a nivel de archivo:** Controlan el acceso a archivos individuales.
* **Permisos a nivel de carpeta:** Controlan el acceso a la propia carpeta y, por defecto, se heredan a los archivos y subcarpetas dentro de ella.

Cuando un usuario intenta acceder a un archivo o carpeta, el sistema operativo verifica sus permisos. Si el usuario no tiene los permisos necesarios para la acción solicitada, se le denegará el acceso.

### 3.2. Tipos de permisos (Lectura, Escritura, Ejecución, Modificación, Control total)

Los permisos NTFS se pueden combinar para otorgar diferentes niveles de acceso. Los permisos básicos son:

* **Control total (Full Control):** Permite al usuario o grupo realizar cualquier acción sobre el archivo o carpeta: leer, escribir, ejecutar, modificar, eliminar, cambiar permisos y tomar posesión.
* **Modificar (Modify):** Permite al usuario o grupo leer, escribir, ejecutar y eliminar el archivo o carpeta. No permite cambiar permisos o tomar posesión.
* **Lectura y ejecución (Read & Execute):** Permite al usuario o grupo ver el contenido del archivo/carpeta, ejecutar programas y acceder a los atributos.
* **Lectura (Read):** Permite al usuario o grupo ver el contenido del archivo/carpeta y sus atributos.
* **Escritura (Write):** Permite al usuario o grupo crear nuevos archivos/carpetas dentro de la carpeta, o modificar el contenido de un archivo existente.

Existen permisos avanzados que se combinan para formar estos permisos básicos. Por ejemplo, "Lectura" incluye permisos como "Leer datos/Listar contenido de la carpeta" y "Leer atributos".

Comparativa entre los permisos de fichero y de carpeta

| Permiso                                  | Archivos                                                  | Carpetas                                                     |
| ---------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------ |
| **Lectura (Read)**                       | El usuario puede abrir y leer el archivo.                 | Permite ver el nombre de los archivos dentro de la carpeta.  |
| **Escritura (Write)**                    | Puede cambiar el contenido del archivo.                   | Permite crear nuevos archivos o carpetas dentro de la carpeta. |
| **Lectura y ejecución (Read & Execute)** | Permite ejecutar archivos ejecutables (.exe, .bat, .ps1). | Permite entrar en la carpeta (“atravesarla”).                |
| **Modificar (Modify)**                   | Leer, escribir y borrar el archivo.                       | Permite borrar archivos dentro de la carpeta.                |
| **Control total (Full Control)**         | Puede cambiar permisos y tomar posesión.                  | Puede cambiar permisos, tomar posesión y borrar la carpeta.  |



### 3.3. Herencia de permisos

La herencia de permisos es un mecanismo que simplifica la administración de la seguridad. Cuando se establecen permisos en una carpeta padre, por defecto, esos permisos se aplican automáticamente (se "heredan") a todos los archivos y subcarpetas creados dentro de ella.

* **Ventajas de la herencia:** Simplifica la administración, ya que no es necesario establecer permisos individualmente para cada archivo.
* **Cómo funciona:** Si creas una nueva subcarpeta o archivo dentro de una carpeta con permisos heredados, el nuevo elemento automáticamente obtendrá los mismos permisos que la carpeta padre.
* **Desactivar la herencia:** Es posible desactivar la herencia en una carpeta específica. Cuando se desactiva, puedes optar por:
    * Copiar los permisos heredados existentes en permisos explícitos para esa carpeta.
    * Eliminar todos los permisos existentes y empezar de cero con permisos explícitos.

### 3.4. Modificación de permisos y propiedad

Para modificar los permisos NTFS, necesitas tener los permisos adecuados (normalmente "Control total" o ser el "Propietario" del archivo/carpeta).

**Pasos para modificar permisos:**

1.  **Selecciona** el archivo o carpeta.
2.  Haz clic con el botón derecho y selecciona **"Propiedades"**.
3.  Ve a la pestaña **"Seguridad"**.
4.  Haz clic en **"Editar..."** para modificar los permisos existentes o añadir nuevos usuarios/grupos.
5.  Haz clic en **"Agregar..."** para añadir un nuevo usuario o grupo.
6.  Escribe el nombre del usuario o grupo (o usa "Comprobar nombres" para buscarlo) y haz clic en "Aceptar".
7.  Selecciona el usuario/grupo y marca o desmarca las casillas de **"Permitir"** o **"Denegar"** para los permisos deseados. Es crucial entender que los permisos "Denegar" tienen prioridad sobre los permisos "Permitir".
8.  Haz clic en **"Opciones avanzadas"** para gestionar la herencia, ver permisos efectivos o cambiar el propietario.

**Concepto de Propietario:**

* El **propietario** de un archivo o carpeta es el usuario o grupo que tiene el control total sobre ese recurso, incluyendo la capacidad de cambiar permisos y asignar la propiedad a otros.
* Por defecto, el usuario que crea un archivo o carpeta se convierte en su propietario.
* El administrador puede tomar posesión de cualquier archivo o carpeta en el sistema.

**Cambiar la propiedad:**

Desde la ventana de "Opciones avanzadas" de seguridad, puedes cambiar el propietario de un archivo o carpeta. Esto es útil si un usuario ha creado archivos y luego ha dejado la organización, o si necesitas tomar el control de un recurso.

## 4. PowerShell para la gestión de archivos y directorios

PowerShell es una potente herramienta de línea de comandos y lenguaje de scripting que permite automatizar y gestionar casi cualquier aspecto de Windows. Para la gestión de archivos y directorios, PowerShell utiliza cmdlets (pronunciado "command-lets") que siguen una convención de nombres `Verbo-Sustantivo`.

Para abrir PowerShell, busca "PowerShell" en el menú de inicio y ejecútalo como **administrador** si necesitas realizar operaciones que requieran permisos elevados.

### 4.1. Listar contenido (directorios y archivos)

* **`Get-ChildItem`:** Muestra los elementos (archivos y directorios) dentro de una ubicación específica.

    ```powershell
    # Muestra el contenido del directorio actual
    Get-ChildItem

    # Muestra el contenido del directorio especificado
    Get-ChildItem c:/Users/Luis/Descargas  # Ruta absoluta
    Get-ChildItem Descargas  # Ruta relativa

    # Muestra solo directorios
    Get-ChildItem -Directory

    # Muestra solo archivos
    Get-ChildItem -File

    # Muestra elementos ocultos y del sistema
    Get-ChildItem -Force
    ```

### 4.2. Cambiar de directorio

* **`Set-Location`:** Cambia el directorio de trabajo actual.

    ```powershell
    # Ir al directorio raíz de la unidad C:
    Set-Location C:\

    # Ir a un directorio específico
    Set-Location C:\Windows\System32  # Ruta absoluta
    Set-Location Descargas  # Ruta relativa

    # Ir al directorio padre
    Set-Location ..

    ```

### 4.3. Crear directorios

* **`New-Item`:** Crea un nuevo elemento. Para directorios, se usa el parámetro `-ItemType Directory`.

    ```powershell
    # Crear un nuevo directorio llamado "MiCarpeta" en el directorio actual
    New-Item MiCarpeta -ItemType Directory

    # Crear un nuevo directorio en una ruta específica
    New-Item C:\Trabajo\Proyectos -ItemType Directory
    ```

### 4.4. Crear archivos

* **`New-Item`:** Crea un nuevo archivo. Se usa el parámetro `-ItemType File`.

    ```powershell
    # Crear un archivo de texto vacío llamado "MiArchivo.txt" en el directorio actual
    New-Item MiArchivo.txt -ItemType File
    ```

### 4.5. Escribir o Sobrescribir Contenido de Archivos

* **`Set-Content`:** Este cmdlet se utiliza para **escribir o reemplazar el contenido de un archivo**. Si el archivo no existe, `Set-Content` lo creará. Si el archivo ya existe, su contenido actual será **sobrescrito** completamente por el nuevo contenido que especifiques. Es muy útil para crear o actualizar archivos de texto, configuración, scripts, etc.

    **Sintaxis básica:**

    ```powershell
    Set-Content <RutaDelArchivo> -Value <ContenidoAConservar>
    ```

    * `-Value`: Proporciona el contenido que se escribirá en el archivo. Esto puede ser una cadena de texto, un array de cadenas (cada elemento será una línea nueva), o la salida de otro comando.

    **Ejemplo práctico de `Set-Content`:**

    Imagina que quieres crear un archivo de texto con las notas de un día, o actualizar un archivo de configuración.

    1.  **Crear un nuevo archivo y escribir contenido en él:**

        ```powershell
        # Creamos un archivo llamado "notas.txt" en el directorio actual y le escribimos una línea
        Set-Content notas.txt -Value "Hoy es un gran día para aprender PowerShell."
        ```

    2.  **Sobrescribir el contenido de un archivo existente:**

        Ahora, supongamos que `notas.txt` ya existe y queremos reemplazar su contenido por completo.

        ```powershell
        # Sobrescribimos el contenido de "notas.txt"
        Set-Content notas.txt -Value "Mañana seguiremos con los permisos NTFS."
        ```

### 4.6. Copiar archivos y directorios

* **`Copy-Item`:** Copia uno o más elementos de una ubicación a otra.

    ```powershell
    # Copiar un archivo
    Copy-Item C:\Origen\documento.txt C:\Destino\

    # Copiar un directorio y todo su contenido (recursivo)
    Copy-Item C:\Origen\MiCarpeta C:\Destino\ -Recurse

    # Copiar varios archivos usando comodines
    Copy-Item C:\Origen\*.docx C:\Destino\
    ```

### 4.7. Mover archivos y directorios

* **`Move-Item`:** Mueve uno o más elementos de una ubicación a otra.

    ```powershell
    # Mover un archivo
    Move-Item C:\Origen\imagen.jpg C:\NuevaUbicacion\imagen.jpg

    # Mover un directorio
    Move-Item C:\AntiguaRuta\MiCarpeta C:\NuevaRuta\
    ```

### 4.8. Renombrar archivos y directorios

* **`Rename-Item`:** Cambia el nombre de un elemento.

    ```powershell
    # Renombrar un archivo
    Rename-Item C:\documento.txt informe_final.txt

    # Renombrar un directorio
    Rename-Item C:\MiCarpeta DocumentosImportantes
    ```

### 4.9. Eliminar archivos y directorios

* **`Remove-Item`:** Elimina uno o más elementos. ¡Usa este comando con precaución!

    ```powershell
    # Eliminar un archivo
    Remove-Item C:\archivo_obsoleto.txt

    # Eliminar un directorio vacío
    Remove-Item C:\CarpetaVacia

    # Eliminar un directorio y todo su contenido (recursivo y forzado)
    Remove-Item  C:\CarpetaConContenido -Recurse -Force
    # El parámetro -Force es crucial para eliminar archivos ocultos/de sistema o si hay algún bloqueo.
    ```

### 4.10. Ver el contenido de un archivo

* **`Get-Content`:** Muestra el contenido de un archivo de texto.

    ```powershell
    # Ver el contenido de un archivo de texto
    Get-Content C:\MisDocumentos\Notas.txt
    ```

### 4.11. Configurar atributos (avanzado)

Para modificar atributos como "Solo lectura" u "Oculto" desde PowerShell, se utiliza el cmdlet `Set-ItemProperty` y se accede a la propiedad `Attributes` del objeto de archivo o directorio.

- Atributos en powershell:  
    - ReadOnly
    - Hidden
    - System
    - Archive
    - Normal
    - Temporary

```powershell
# Obtener un archivo y establecerlo como solo lectura y Oculto
Set-ItemProperty C:rutaarchivo.txt -Name Attributes -Value "ReadOnly, Hidden"
```

## 5. Uso de comodines en PowerShell

Los comodines son caracteres especiales que se utilizan para representar uno o más caracteres en un nombre de archivo o ruta. Son extremadamente útiles para trabajar con múltiples archivos o directorios que comparten un patrón común, permitiendo realizar operaciones por lotes de manera eficiente.

En PowerShell, los comodines principales son:

- (Asterisco): Representa cero o más caracteres.
- ? (Signo de interrogación): Representa un único carácter.
- [] (Corchetes): Representa un rango de caracteres o un conjunto específico de caracteres.

**Ejemplos de uso de * (Asterisco)**

El asterisco es el comodín más común y versátil.

- **Coincidir con cualquier nombre de archivo con una extensión específica:**
```powershell
# Listar todos los archivos .txt en el directorio actual
Get-ChildItem *.txt

# Copiar todos los archivos .jpg de una carpeta a otra
Copy-Item C:\Fotos\*.jpg C:\BackupFotos\
```
- **Coincidir con cualquier extensión de archivo para un nombre de archivo dado:**
```powershell
# Listar todos los archivos llamados "documento" con cualquier extensión
Get-ChildItem documento.*
```
- **Coincidir con archivos que contienen una cadena específica en su nombre:**
```powershell
# Listar todos los archivos que contienen "informe" en su nombre
Get-ChildItem *informe*

# Eliminar todos los archivos temporales (que a menudo terminan en .tmp o empiezan por ~)
Remove-Item  *.tmp, ~*.doc
```
- **Coincidir con subdirectorios:**
```powershell
# Listar todos los directorios que empiezan por "Proyecto"
Get-ChildItem Proyecto* -Directory

# Eliminar todas las carpetas que contienen "Backup" en su nombre
Remove-Item *Backup* -Recurse -Force -Directory
```
- **Combinar con rutas:**
```powershell
# Listar todos los archivos .log en cualquier subdirectorio de "C:\Logs"
Get-ChildItem  C:\Logs\*\*.log
```
**Ejemplos de uso de ? (Signo de interrogación)**

El signo de interrogación se utiliza cuando se sabe que hay un carácter en una posición específica, pero no se sabe cuál es.

- **Coincidir con nombres de archivo de longitud y patrón específicos:**
```powershell
# Listar archivos como "doc1.txt", "doc2.txt", pero no "doc10.txt"
Get-ChildItem doc?.txt

# Listar archivos como "foto_01.png", "foto_02.png", etc.
Get-ChildItem foto_??.png
```

**Ejemplos de uso de [] (Corchetes)**

Los corchetes permiten especificar un conjunto o rango de caracteres para una posición específica.

- **Coincidir con un conjunto de caracteres:**
```powershell
# Listar archivos que empiezan por 'a', 'b' o 'c'
Get-ChildItem [abc]*.txt

# Listar archivos que tienen un número del 1 al 5 en la segunda posición
Get-ChildItem doc[1-5].txt
```

**Consideraciones importantes al usar comodines:**

- **Precaución con Remove-Item**: Siempre ten mucho cuidado al usar comodines con Remove-Item, especialmente con *, ya que podrías eliminar una gran cantidad de archivos o directorios de forma irreversible si no especificas bien el patrón. Es recomendable usar Get-ChildItem primero con el mismo patrón para verificar qué elementos se seleccionarán antes de ejecutar Remove-Item.
- **Sensibilidad a mayúsculas/minúsculas**: Por defecto, PowerShell en Windows no es sensible a mayúsculas y minúsculas para los nombres de archivos y directorios. Sin embargo, esto puede variar en sistemas de archivos específicos o en otros sistemas operativos.
- **Parámetro -LiteralPath**: Si el nombre de un archivo o directorio contiene un carácter que normalmente se interpretaría como un comodín (por ejemplo, un archivo llamado mi*archivo.txt), puedes usar el parámetro -LiteralPath en los cmdlets para indicar que la ruta debe interpretarse literalmente, sin expandir comodines.

El dominio de los comodines es fundamental para la eficiencia en la administración de archivos y directorios desde la línea de comandos, permitiendo automatizar tareas repetitivas y gestionar grandes volúmenes de datos con mayor facilidad.


## 6. Redirecciones de la salida estándar en PowerShell

Las **redirecciones** permiten enviar el resultado de un comando:

- a un archivo
- a otro comando
- descartar la salida
- guardar errores

Esto es fundamental para tareas automatizadas o scripts.

### 6.1. Tipos de salida principales

| Tipo de salida             | Número | Significado                  |
| -------------------------- | ------ | ---------------------------- |
| **Salida estándar**        | `1`    | Resultado normal del comando |
| **Errores**                | `2`    | Mensajes de error            |
| **Advertencias**           | `3`    | Warnings                     |
| **Mensajes detallados**    | `4`    | Verbose                      |
| **Mensajes de depuración** | `5`    | Debug                        |


### 6.2. Redirección básica de salida

**Enviar la salida a un archivo (sobrescribe)**

```
Get-ChildItem > listado.txt
```

**Añadir al final de un archivo (sin borrar lo anterior)**

```
Get-ChildItem >> listado.txt
```

### 6.3. Redirección de salida de error

**Redirigir SOLO los errores**

```
Get-ChildItem C:\CarpetaInexistente 2> errores.txt
```

### 6.4. Redirigir la salida a null (descartar)

```
Get-ChildItem *> $null
```

## 7. Práctica 1

### Objetivos de la actividad

Al finalizar esta práctica, el alumno será capaz de:

- Comprender la estructura del sistema de archivos en Windows.
- Manipular carpetas, archivos y atributos desde el Explorador.
- Configurar permisos NTFS básicos.
- Usar PowerShell para automatizar tareas básicas de gestión de archivos.
- Utilizar comodines en PowerShell de forma segura.

### **Parte 1 – Explorador de Archivos: creación y gestión básica**

#### **1. Crear la estructura de carpetas**

En tu carpeta personal (Documentos), crea la siguiente estructura:

```
GestionArchivos(Nombre de Pila)
│
├── Proyectos
│   ├── ProyectoA
│   └── ProyectoB
│
└── Recursos
    ├── Imagenes
    └── Textos
    

```

**NOTA**: Ejemplo de la carpeta GestionArchivos --> **GestionArchivosLuis**. Toda la practica se realizará dentro de esa carpeta.

#### **2. Crear archivos**

Dentro de cada carpeta, crea los siguientes archivos:

- En **ProyectoA**:
  - `informeA.txt`
- En **ProyectoB**:
  - `informeB.txt`
- En **Imagenes**:
  - `foto1.jpg` (puede estar vacío)
- En **Textos**:
  - `notas.txt`
  - `lista.docx`

#### **3. Aplicar atributos**

En el Explorador:

- Marca `informeA.txt` como **Solo lectura**.
- Marca `foto1.jpg` como **Oculto**.
- Comprime la carpeta **Textos** usando el atributo NTFS de compresión.

#### Preguntas rápidas

1. ¿Por qué el archivo `foto1.jpg` deja de verse al marcarlo como oculto?
2. ¿Qué efecto tiene “Solo lectura” sobre `informeA.txt`?
3. ¿Se podría cifrar un archivo situado en una unidad FAT32?


### **Parte 2 – Permisos NTFS**

Usa la carpeta:
 `GestionArchivos/Proyectos`

#### **4. Crear usuario local de pruebas**

(El profesor puede crearlo o dar instrucciones si no hay permisos).
 Usuario sugerido: **usuario2**

#### **5. Configurar permisos**

En la carpeta **ProyectoA**:

- Deniega a *usuario2* el permiso **Escritura**.
- Permite **Lectura** y **Lectura y ejecución**.

En la carpeta **ProyectoB**:

- Permite a *usuario2* **Modificar**.

#### **Comprobación**

Pide a *usuario2*:

- Intentar editar `informeA.txt` → ¿debe permitirlo?
- Modificar `informeB.txt` → ¿debe permitirlo?

#### Preguntas rápidas

1. ¿Qué permiso tiene prioridad: Permitir o Denegar?
2. ¿Qué es la herencia de permisos?
3. ¿Qué ocurre si rompes la herencia en una carpeta?

------

### **Parte 3 – PowerShell: operaciones básicas**

Abre PowerShell 

#### **6. Navegación**

- Cambia al directorio **GestionArchivos** usando una **ruta absoluta**

- Cambia a **Recursos/Textos** usando **ruta relativa**

- Vuelve dos niveles atrás

- Ve directamente a **ProyectoB** usando ruta absoluta

#### **7. Listar contenido**

- Situate en el directorio **GestionArchivos** y lista su contenido y el de todas sus subcarpetas

- Muestra **solo archivos** usando ruta relativa
- Muestra **solo carpetas** de Proyectos (ruta absoluta)
- Muestra con elementos **ocultos**

#### **8. Crear directorios y  archivos**

- Situate en el directorio **GestionArchivos**
- Crear carpeta **Logs** con ruta relativa
- Crear carpeta **Exportaciones** usando ruta absoluta
- Crear un archivo dentro de Logs con tu nombre completo como contenido
- Crear un archivo usando ruta absoluta

#### **9. Copiar, mover y renombrar**

- Situate en el directorio **GestionArchivos**
- Crea carpeta **Logs** con ruta relativa
- Copia todo el contenido de **Textos** a **Backup** 
  - usando Ruta relativa
  - Ruta absoluta
- Lista los archivos `.txt` dentro de **Backup**, tanto con ruta relativa como absoluta
- Mueve `informeB.txt` a Backup usando ruta relativa
- Mueve `foto1.jpg` (oculto) desde ruta absoluta al directorio Backup
- Renombra el archivo movido

#### **10. Eliminar elementos**

- Situate en el directorio **Backup**
- Elimina todos los `.docx` mediante ruta absoluta
- Elimina la carpeta **Logs** (solo si está vacía)
- Elimina la carpeta **Exportaciones** con todo su contenido

------

### **Parte 4 – Comodines**

#### **11. Trabajar con comodines**

- Lista todos los archivos que comiencen por `info` y terminen en `.txt`  de la carpeta **Backup**
- Lista archivos tipo `log1.txt`, `log2.txt`, `log3.txt`… en Logs
- Listar archivos tipo `img01.jpg`, `img02.jpg`, etc. (rango de dos dígitos)
- Listar archivos que empiezan por **a**, **b** o **c** dentro de **Textos**
- Seleccionar archivos cuyo segundo carácter sea un número entre 1 y 5
- Seleccionar archivos en Backup cuyo nombre *no* empiece por `i`

#### **12. Rutas + Comodines + Operaciones**

- Copia **todos los archivos .txt** de cualquier subcarpeta dentro de Recursos a Backup:
- Mueve todos los archivos cuya extensión tenga **tres caracteres exactos**
- Elimina todos los archivos que **no** sean `.txt` dentro de Backup
- Copia todos los archivos `.jpg` desde **cualquier subcarpeta**, usando ruta absoluta

------

### **Parte 5 – Automatización**

Simular un pequeño sistema automatizado que organiza documentos en una empresa.  Todo el trabajo se hará en:

`C:\Usuarios\<TuUsuario>\Documentos\AutomatizacionEmpresa`

#### **13. Instalación del entorno**

Crea un script llamado **setup.ps1** que haga lo siguiente:

- Cree esta estructura automáticamente:

```
AutomatizacionEmpresa
│
├── Entrada
│   ├── Textos
│   ├── Imagenes
│   └── Otros
│
├── Procesados
│   ├── Textos
│   ├── Imagenes
│   └── Otros
│
└── Logs
```

- Cree un archivo `readme.txt` dentro de `Entrada` con el siguiente contenido:  

  - Bienvenido al sistema automático de organización de la empresa.
    Coloca aquí tus archivos.

- Genere un archivo de log en `/Logs`

  - El log debe incluir:

    - Fecha de creación

    - Usuario actual

    - Número de carpetas creadas

#### **14. Archivos de prueba**

Crea un script llamado **generar_pruebas.ps1** que haga lo siguiente:

- Crear automáticamente **10 archivos de texto** con nombres:

```
doc1.txt, doc2.txt, … doc10.txt
```

- Crear **5 imágenes falsas** (archivos vacíos):

```
img1.jpg … img5.jpg
```

- Crear archivos aleatorios en “Otros”:

`a1.tmp, notes.log, report.csv, backup.bak`

#### **15. Clasificación automática**

Crea un script llamado **clasificar.ps1** que haga lo siguiente:

- Mover archivos desde **Entrada** a las carpetas de **Procesados** según su extensión.
  - Reglas:
    - `.txt` → Procesados/Textos
    - `.jpg`, `.png` → Procesados/Imagenes
    - Todas las demás extensiones → Procesados/Otros
  - Debe incluir:
    - Rutas **relativas**
    - Log automático (añadir líneas al log existente)

#### **16. Archivo**

Crea un script llamado **archivo.ps1** que haga lo siguiente:

- Comprimir la carpeta **Procesados** en un ZIP con fecha:

```
Procesados_2025-11-16.zip
```

- Mover ese ZIP a una nueva carpeta `ArchivoHistorico`.



#### **17. Script final integrado**

Crea un script llamado **automatizacion_total.ps1** que ejecute en  orden:

- setup.ps1

- generar_pruebas.ps1

- clasificar.ps1

- limpieza.ps1

  

### **Parte 6 – Cuestionario final**

#### **Preguntas teóricas**

1. ¿Qué ventajas ofrece NTFS frente a FAT32?
2. ¿Qué es un permiso “Modificar”? ¿En qué se diferencia de “Control total”?
3. ¿Qué son los atributos “Oculto” y “Sistema”?
4. ¿Qué es PowerShell y qué ventaja tiene frente al Explorador de archivos?
5. Explica qué es `Get-ChildItem` y menciona tres parámetros útiles.



### **Entrega**

Documento en formato PDF con:

- Las respuestas a las preguntas
- Las capturas de pantalla de los comandos y su ejecución 
- Los scripts y un pantallazo de su ejecución


## 8. Práctica 2

La práctica consiste en crear dos scripts de PowerShel que simulen la instalación de un programa.

### Objetivos de la actividad

- Usar PowerShell para automatizar tareas básicas de gestión de archivos.
- Utilizar comodines en PowerShell de forma segura.

### **Parte 1 – Script de Creacion de los ficheros de instalación**

Crea un Script llamado **Datos.ps1** que haga lo siguiente:

- Crear una carpeta temporal **temp** en la ruta donde se ejecute el Script
- En esa carpeta crear los siguientes ficheros
    - Instalacion.txt
    - Requisitos.txt
    - Manual.txt
    - Paso1.log
    - Paso2.log
    - Aplicacion.exe
    - Libreria1.dll
    - Libreria2.dll
   
### **Parte 2 – Script de instalación**

Crea un Script llamado **Datos.ps1** que hag lo siguiente:

- Crear una variable **$destino**
- Crear en la carpeta **$destino** las siguientes carpetas:
    -  Docs
    -  Bin
    -  Tmp
- En la carpeta **Docs** copia todos los ficheros con extensión **.txx** de la la carpeta **temp** 
- En la carpeta **Bin** copia todos los ficheros con extensión **.exe** y **dll** de la la carpeta **temp** 
- En la carpeta **Tmp** copia todos los ficheros con extensión **.log** de la la carpeta **temp** 
- Asginales el atributo de oculto a los ficheros con extensión **dll**
- Elimina la carpeta temp que creo el Scrip anterior
- Muestra mensajes informativos del proceso de instalación
  
Ayuda:  El comadno **Write-Host "Mensaje"** muestra el mensaje por pantalla
