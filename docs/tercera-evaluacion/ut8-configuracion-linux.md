# UT8. Configuración básica de Linux

!!! abstract "Resultado de aprendizaje"
    **RA3.** Realiza tareas básicas de configuración de sistemas operativos, interpretando requerimientos y describiendo los procedimientos seguidos.

## 8.1. Entorno gráfico vs línea de comandos

### Entornos de escritorio

Linux separa el núcleo del sistema del entorno gráfico, que es intercambiable:

| Entorno | Características |
|---|---|
| **GNOME** | Moderno, minimalista, usado por defecto en Ubuntu |
| **KDE Plasma** | Muy personalizable, similar en filosofía a Windows |
| **XFCE** | Ligero, bajo consumo de recursos, ideal para equipos limitados |

### Terminal vs interfaz gráfica

Al igual que se planteó con PowerShell frente a la interfaz gráfica de Windows en la UT5, en Linux la terminal permite tareas más rápidas, precisas y automatizables que la interfaz gráfica, especialmente en administración de sistemas. A partir de esta unidad, **la terminal (Bash) será la herramienta principal** para el resto del bloque de Linux.

---

## 8.2. Introducción a la terminal (Bash)

**Bash** (*Bourne Again SHell*) es el intérprete de comandos más habitual en distribuciones Linux. Es el equivalente conceptual a PowerShell en Windows: un shell que permite ejecutar comandos, encadenarlos y automatizar tareas.

### Estructura general de un comando

```
comando [opciones] [argumentos]
```

```bash
ls -l /home
```

Aquí `ls` es el comando, `-l` es una opción (formato detallado) y `/home` es el argumento (la ruta sobre la que actuar).

### Ayuda integrada

| Herramienta | Uso |
|---|---|
| `man comando` | Manual completo del comando (se navega con las flechas, se sale con `q`) |
| `comando --help` | Resumen rápido de opciones |

```bash
man ls
ls --help
```

### Sistema de rutas

- **Ruta absoluta**: empieza desde la raíz `/`, por ejemplo `/home/usuario/documentos`
- **Ruta relativa**: parte del directorio actual, por ejemplo `documentos/factura.pdf`
- Símbolos especiales:

| Símbolo | Significado |
|---|---|
| `~` | Carpeta personal del usuario actual (`/home/usuario`) |
| `.` | Directorio actual |
| `..` | Directorio padre (un nivel arriba) |
| `-` | Directorio anterior (con `cd -`) |

### Comandos básicos de navegación y gestión de archivos

| Comando | Función |
|---|---|
| `pwd` | Muestra el directorio actual (*print working directory*) |
| `ls` | Lista el contenido de un directorio |
| `cd` | Cambia de directorio |
| `cp origen destino` | Copia archivos/carpetas |
| `mv origen destino` | Mueve o renombra archivos/carpetas |
| `rm archivo` | Elimina un archivo (`rm -r` para carpetas) |
| `mkdir carpeta` | Crea una carpeta nueva |
| `touch archivo` | Crea un archivo vacío o actualiza su fecha de modificación |

```bash
pwd
ls -la
cd /home/usuario/documentos
mkdir facturas
touch facturas/enero.txt
cp facturas/enero.txt facturas/enero_copia.txt
mv facturas/enero_copia.txt facturas/enero_backup.txt
rm facturas/enero_backup.txt
```

### Visualización de contenido

| Comando | Función |
|---|---|
| `cat archivo` | Muestra todo el contenido de un archivo de golpe |
| `less archivo` | Muestra el contenido paginado, navegable (`q` para salir) |
| `nano archivo` | Editor de texto sencillo en modo terminal |

### Redirección y tuberías

Igual que se vio el concepto de **pipeline** en PowerShell (UT5), Bash tiene su propio mecanismo, más orientado a texto plano:

| Operador | Función |
|---|---|
| `>` | Redirige la salida a un archivo, sobrescribiéndolo |
| `>>` | Redirige la salida a un archivo, añadiendo al final |
| `<` | Usa un archivo como entrada de un comando |
| `\|` | Tubería: pasa la salida de un comando como entrada del siguiente |

```bash
ls -l > listado.txt
echo "nueva línea" >> listado.txt
cat listado.txt | grep "documentos"
```

!!! note "Diferencia con PowerShell"
    En PowerShell el pipeline (`|`) mueve **objetos** con propiedades; en Bash mueve **texto plano**. Por eso en Bash se combinan tanto los comandos con herramientas de procesamiento de texto como `grep`, `sort`, `cut` o `awk` (algunas se verán según necesidad a lo largo del curso).

### Variables de entorno

```bash
echo $PATH
export MI_VARIABLE="valor"
echo $MI_VARIABLE
```

`$PATH` es la variable que indica en qué carpetas busca el sistema los programas ejecutables cuando se escribe un comando.

### Privilegios: sudo y root

- **root** es el superusuario de Linux, equivalente conceptual al Administrador de Windows visto en la UT5, con permisos totales sobre el sistema
- En lugar de iniciar sesión directamente como root (poco recomendable), se usa **`sudo`** delante de un comando puntual para ejecutarlo con privilegios elevados

```bash
sudo apt update
```

!!! note "Comparación con Windows"
    El patrón `sudo comando` en Linux es conceptualmente equivalente a "Ejecutar como administrador" en Windows, o al salto de privilegios que se produce al usar `Set-LocalUser` sobre una cuenta administrativa: una elevación puntual, no una sesión completa con privilegios totales.

### Historial y autocompletado

- Flechas ↑ / ↓: navegan por el historial de comandos ya ejecutados
- **Tab**: autocompleta nombres de comandos, archivos y carpetas
- `history`: muestra el historial completo de comandos

---

## 8.3. Configuración regional y de teclado

### Herramientas gráficas

Disponibles en la configuración del entorno de escritorio, similares en concepto a lo visto para Windows en la UT5: idioma, formato de fecha/hora, distribución de teclado.

### Herramientas por terminal

| Comando | Función |
|---|---|
| `timedatectl` | Consulta y configura fecha, hora y zona horaria |
| `localectl` | Consulta y configura idioma del sistema y distribución de teclado |

```bash
timedatectl
sudo timedatectl set-timezone Europe/Madrid

localectl
sudo localectl set-keymap es
```

---

## 8.4. Configuración de red

### Herramientas de consulta

| Comando | Función |
|---|---|
| `ip a` | Muestra las interfaces de red y sus direcciones IP (sustituye al antiguo `ifconfig`) |
| `ping equipo` | Comprueba la conectividad con otro equipo |
| `nmcli` | Herramienta de línea de comandos de NetworkManager, permite consultar y configurar la red |

```bash
ip a
ping -c 4 192.168.1.1
```

### IP por DHCP vs IP estática

Al igual que en Windows (UT5), la IP puede asignarse automáticamente (DHCP) o manualmente (estática). La forma de configurarla depende del gestor de red de la distribución:

=== "Con NetworkManager (nmcli)"

    ```bash
    nmcli con show
    nmcli con mod "Wired connection 1" ipv4.addresses 192.168.1.102/24
    nmcli con mod "Wired connection 1" ipv4.gateway 192.168.1.1
    nmcli con mod "Wired connection 1" ipv4.dns "8.8.8.8"
    nmcli con mod "Wired connection 1" ipv4.method manual
    nmcli con up "Wired connection 1"
    ```

=== "Con netplan (Ubuntu Server)"

    Se edita un archivo YAML en `/etc/netplan/`, indicando la IP, máscara, puerta de enlace y DNS, y se aplica con:

    ```bash
    sudo netplan apply
    ```

### Nombre del equipo

```bash
hostnamectl
sudo hostnamectl set-hostname techpyme-linux
```

---

## 8.5. Repositorios y actualizaciones

### Concepto de repositorio

Un **repositorio** es un servidor remoto donde se almacenan paquetes de software listos para instalar. El **gestor de paquetes** (`apt` en distribuciones basadas en Debian/Ubuntu) se encarga de descargarlos e instalarlos, resolviendo automáticamente las dependencias necesarias.

### Actualizar el índice vs actualizar los paquetes

| Comando | Función |
|---|---|
| `sudo apt update` | Actualiza el **índice local** de paquetes disponibles (consulta qué versiones hay en los repositorios, no instala nada) |
| `sudo apt upgrade` | Instala las actualizaciones de los paquetes ya instalados, según el índice descargado |

!!! warning "Orden importante"
    Siempre se ejecuta primero `apt update` y después `apt upgrade`. Si no se actualiza el índice, `apt upgrade` puede no detectar actualizaciones recientes.

### Instalación y eliminación de paquetes

```bash
sudo apt install nombre-paquete
sudo apt remove nombre-paquete
sudo apt autoremove    # elimina dependencias que ya no usa ningún paquete
```

### Repositorios adicionales (PPA)

Algunas distribuciones basadas en Ubuntu permiten añadir repositorios adicionales llamados **PPA** (*Personal Package Archive*) para instalar software que no está en los repositorios oficiales. Se menciona aquí como concepto, sin entrar en el detalle de cómo añadir uno.

---

## 8.6. Prácticas de la unidad — Configuración de VM-LINUX

!!! example "Práctica 1 — Primeros pasos con la terminal"
    Sobre VM-LINUX:

    1. Navega por el sistema de archivos con `pwd`, `ls` y `cd`
    2. Crea una estructura de carpetas de prueba con `mkdir` y archivos con `touch`
    3. Practica `cp`, `mv` y `rm` sobre esos archivos de prueba
    4. Usa `cat` y `less` para ver el contenido de un archivo de texto
    5. Combina `ls -l` con redirección (`>`) para guardar un listado en un archivo, y con una tubería (`|`) hacia `grep` para filtrar resultados

!!! example "Práctica 2 — Región, teclado y hora"
    Configura idioma, distribución de teclado y zona horaria de VM-LINUX con `localectl` y `timedatectl`.

!!! example "Práctica 3 — Red"
    1. Consulta la configuración de red actual con `ip a`
    2. Asigna una IP fija dentro del rango de red de TechPyme
    3. Comprueba conectividad con `ping` hacia el host físico del alumno y hacia el servidor del profesor
    4. Cambia el nombre del equipo a `techpyme-linux` con `hostnamectl`

!!! example "Práctica 4 — Actualización del sistema"
    Actualiza el índice de paquetes y el sistema completo con `sudo apt update && sudo apt upgrade`.
