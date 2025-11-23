<p style="text-align: center; font-size: 32px;">CIPFP Mislata</p>

<p style="text-align: center; font-size: 18px;">Luis García Bonifaz - l.garciabonifaz@edu.gva.es</p>
<p style="text-align: center; font-size: 24px;">SOM  T05 - Gestión de Archivos, Directorios</p>

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

------

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

Abre PowerShell en la carpeta `GestionArchivos(Nombrte de Pila)`.

#### **6. Listar contenido**

Ejecuta:



------

### **Parte 4 – Comodines**

------

### **Parte 5 – Cuestionario final**

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