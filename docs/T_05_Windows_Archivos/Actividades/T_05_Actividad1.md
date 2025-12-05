<p style="text-align: center; font-size: 32px;">CIPFP Mislata</p>

<p style="text-align: center; font-size: 18px;">Luis García Bonifaz - l.garciabonifaz@edu.gva.es</p>
<p style="text-align: center; font-size: 24px;">SOM  T05 - Gestión de Archivos y Directorios</p>

---

<p style="text-align: left; font-size: 24px;">Actividad 1</p>

---

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
- Muestra **solo archivos**  de Recursos usando ruta relativa
- Muestra **solo carpetas**  de Proyectos (ruta absoluta)
- Muestra con elementos **ocultos**

#### **8. Crear directorios y  archivos**

- Situate en el directorio **GestionArchivos**
- Crear carpeta **Logs** con ruta relativa
- Crear carpeta **Exportaciones** usando ruta absoluta
- Crear un archivo **Nombre.txt** dentro de Logs con tu nombre completo como contenido
- Crear un archivo **Datos.txt** dentro de Logs usando ruta absoluta

#### **9. Copiar, mover y renombrar**

- Situate en el directorio **GestionArchivos**
- Crea carpeta **Backup** con ruta relativa
- Copia todo el contenido de **Textos** a **Backup** 
    - usando Ruta relativa
    - usando Ruta absoluta
- Lista los archivos `.txt` dentro de **Backup**, tanto con ruta relativa como absoluta
- Mueve `informeB.txt` a Backup usando ruta relativa
- Mueve `foto1.jpg` (oculto) usando ruta absoluta al directorio Backup
- Renombra el archivo movido a `foto2.jpg`

#### **10. Eliminar elementos**

- Situate en el directorio **Backup**
- Elimina todos los `.txt` mediante ruta absoluta
- Elimina la carpeta **Logs** (solo si está vacía)
- Elimina la carpeta **Exportaciones** con todo su contenido

### **Parte 4 – Comodines**

#### **11. Trabajar con comodines**

- Crea en **Logs** los archivos: log1.txt,log2.txt,log3.txt,log4.txt,img01.jpg,img02.jpg,img03.jpg,img04.jpg,a1.jpg,a2.jpg,c1.jpg
- Lista todos los archivos que comiencen por `info` y terminen en `.txt`  de la carpeta **Backup**
- Lista archivos tipo `log1.txt`, `log2.txt`, `log3.txt`… en **Logs** con us solo comando
- Listar archivos tipo `img01.jpg`, `img02.jpg`, etc … en **Logs** con un solo comando
- Listar archivos que empiezan por **a**, **b** o **c** dentro de **Textos**
- Seleccionar archivos cuyo segundo carácter sea un número entre 1 y 5

#### **12. Rutas + Comodines + Operaciones**

- Copia **todos los archivos .txt** de cualquier subcarpeta dentro de Recursos a Backup:
- Mueve todos los archivos cuya extensión tenga **tres caracteres exactos**
- Copia todos los archivos `.jpg` desde **cualquier subcarpeta** a **ProyectoA**

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

- Cree un archivo `readme.txt` dentro de `Entrada` con el siguiente contenido:  Bienvenido al sistema automático de organización de la empresa. Coloca aquí tus archivos.
- Genere un archivo de log en `/Logs`.  El log debe incluir:
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
