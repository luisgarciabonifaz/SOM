<p style="text-align: center; font-size: 32px;">CIPFP Mislata</p>

<p style="text-align: center; font-size: 18px;">Luis García Bonifaz - l.garciabonifaz@edu.gva.es</p>
<p style="text-align: center; font-size: 24px;">SOM  T05 - Gestión de Archivos y Directorios</p>

---

<p style="text-align: left; font-size: 24px;">Actividad 2</p>

---

La práctica consiste en crear dos scripts de PowerShell que simulen la instalación de un programa.

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

### **Entrega**

- Los scripts y un pantallazo de su ejecución