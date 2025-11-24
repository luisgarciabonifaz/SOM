---
title: "Tema 2: Instalación de Sistemas Operativos"
---

# Tema 2: Instalación de Sistemas Operativos (10 horas)

## Introducción

¡Bienvenidos al fascinante mundo de los sistemas operativos! En este tema, aprenderemos todo lo necesario para instalar un sistema operativo desde cero en un ordenador. Este es un conocimiento fundamental para cualquier técnico informático, ya que es la base sobre la que funcionará todo el software de un equipo. A lo largo de estas 10 horas, no solo veremos los pasos técnicos, sino que también entenderemos el porqué de cada decisión que tomemos.

---

## 2.1. Funciones del sistema operativo

Un sistema operativo (SO) es el software más importante de un ordenador. Actúa como un intermediario entre el hardware (los componentes físicos) y nosotros, los usuarios. Sin un SO, un ordenador sería una caja inútil. Sus funciones principales son:

* **Gestión de recursos**: El SO es como el director de una orquesta. Se encarga de que todos los componentes del hardware trabajen en armonía.
    * **CPU (Unidad Central de Procesamiento)**: Decide qué programa utiliza el procesador y durante cuánto tiempo.
    * **Memoria RAM**: Asigna porciones de memoria a los programas que se están ejecutando y se asegura de que no interfieran entre sí.
    * **Entrada/Salida (E/S)**: Gestiona la comunicación con los periféricos como el teclado, el ratón, la impresora o el monitor.

* **Gestión de procesos**: Un proceso es, básicamente, un programa en ejecución. El SO se encarga de iniciar, pausar, reanudar y detener estos procesos, permitiendo que varios programas se ejecuten a la vez (multitarea).

* **Gestión de archivos**: Organiza la información en unidades de almacenamiento (discos duros, SSD, USB) a través de un sistema de archivos. Nos permite crear, borrar, copiar y mover archivos y carpetas.

* **Interfaz de usuario**: Es la forma en que interactuamos con el ordenador. Puede ser:
    * **Gráfica (GUI - Graphical User Interface)**: La que todos conocemos, con ventanas, iconos y menús que manejamos con el ratón (Ej: Windows, macOS, Ubuntu Desktop).
    * **De línea de comandos (CLI - Command-Line Interface)**: Basada en texto, donde damos órdenes escribiendo comandos (Ej: Símbolo del sistema en Windows, Terminal en Linux).

---

## 2.2. Arquitectura del sistema operativo

Para entender cómo funciona un SO, podemos dividirlo en capas. Las dos más importantes son el núcleo y el shell.

* **Núcleo (Kernel)**: Es el corazón del sistema operativo. Tiene control total sobre todo el hardware. Se encarga de las funciones más críticas como la gestión de la memoria y los procesos. Es la primera parte del SO que se carga al arrancar el ordenador.

* **Shell (Intérprete de comandos o Interfaz de usuario)**: Es la capa más externa, la que nos permite comunicarnos con el núcleo. El shell traduce nuestros comandos (ya sean clics en un icono o texto en una terminal) en instrucciones que el núcleo puede entender.

* **Utilidades**: Son programas que vienen con el sistema operativo y que realizan tareas específicas, como un editor de texto, una calculadora, herramientas de red o el administrador de archivos.

### Modo Usuario y Modo Núcleo

Para proteger el sistema, el procesador funciona en dos modos distintos:

* **Modo Núcleo (Kernel Mode)**: Es un modo privilegiado. El código que se ejecuta en este modo tiene acceso directo y sin restricciones a todo el hardware. El propio núcleo del SO se ejecuta en este modo.

* **Modo Usuario (User Mode)**: Es un modo restringido. Las aplicaciones que usamos (navegador web, videojuegos, etc.) se ejecutan en este modo. Si una aplicación necesita acceder al hardware (por ejemplo, para guardar un archivo), debe pedírselo al núcleo a través de una "llamada al sistema". Esto evita que un programa con errores pueda bloquear todo el ordenador.

![Diagrama Modo Usuario y Modo Núcleo](https://i.imgur.com/gK2xZ6c.png)

---

## 2.3. Verificación de la idoneidad del hardware

Antes de instalar un sistema operativo, es crucial asegurarse de que el ordenador cumple con los requisitos necesarios.

* **Requisitos mínimos del sistema**: Son las especificaciones mínimas de hardware que el SO necesita para poder funcionar. Si el hardware está por debajo de estos requisitos, la instalación podría fallar o el sistema funcionará de manera muy lenta e inestable.
    * **RAM (Memoria de Acceso Aleatorio)**: Cantidad de memoria necesaria para ejecutar el SO y las aplicaciones básicas.
    * **CPU (Procesador)**: Velocidad y arquitectura del procesador (ej: 1 GHz, 64 bits).
    * **Espacio en disco**: Cantidad de espacio libre que ocupará la instalación del SO.

| Sistema Operativo (versión reciente) | RAM (Mínima) | CPU (Mínima)              | Espacio en disco (Mínimo) |
| ------------------------------------ | ------------ | ------------------------- | ------------------------- |
| **Windows 11** | 4 GB         | 1 GHz, 2 núcleos, 64 bits | 64 GB                     |
| **Ubuntu 24.04 LTS** | 4 GB         | 2 GHz, 2 núcleos, 64 bits | 25 GB                     |
| **macOS (Sonoma)** | 8 GB         | Chip de Apple o Intel Core i5 | 70 GB (aprox.)            |

* **Compatibilidad de componentes**: No basta con cumplir los mínimos. Hay que asegurarse de que los componentes específicos (tarjeta gráfica, tarjeta de red, etc.) son compatibles con el SO que queremos instalar. La mejor forma de comprobarlo es visitar la web del fabricante del sistema operativo y la de los fabricantes de nuestro hardware.

---

## 2.4. Selección del sistema operativo

Elegir un SO depende de varios factores. No hay un "mejor" sistema operativo, sino uno más adecuado para cada necesidad.

* **Criterios de selección**:
    * **Licencia**: ¿Es de pago o gratuito? Veremos más sobre esto en el punto 2.9.
    * **Requisitos**: ¿Nuestro hardware es compatible?
    * **Compatibilidad de software**: ¿El software que necesitamos (programas de ofimática, diseño, juegos) funciona en este SO?
    * **Preferencias del usuario**: ¿Con qué interfaz se siente más cómodo el usuario final? ¿Busca facilidad de uso, personalización, seguridad?

* **Sistemas operativos libres y propietarios**:
    * **Propietarios (o de código cerrado)**: El código fuente no está disponible. No se puede modificar ni distribuir libremente. Suelen ser de pago (aunque hay excepciones). El ejemplo más claro es **Microsoft Windows** y **Apple macOS**.
    * **Libres (o de código abierto)**: El código fuente es público. Cualquiera puede verlo, modificarlo y distribuirlo. La mayoría son gratuitos. El ejemplo más famoso es **GNU/Linux** y sus múltiples distribuciones (Ubuntu, Debian, Fedora, Arch Linux).

---

## 2.5. Elaboración de un plan de instalación

Una instalación exitosa requiere una buena planificación. ¡No podemos lanzarnos a instalar sin más!

1.  **Copia de seguridad de datos (Backup)**: **¡Este es el paso más importante!** El proceso de instalación borrará todos los datos del disco duro. Antes de empezar, debemos copiar todos los archivos importantes (documentos, fotos, etc.) del usuario en un disco duro externo o en un servicio en la nube.

2.  **Particionado del disco**: Un disco duro se puede dividir en varias secciones lógicas llamadas particiones. Cada partición se comporta como si fuera un disco independiente. Esto es útil para:
    * Instalar varios sistemas operativos en el mismo disco (arranque dual).
    * Separar el SO de los datos del usuario. Así, si necesitamos reinstalar el SO, nuestros datos personales están a salvo en otra partición.
    * Planificaremos qué particiones crear y de qué tamaño. Por ejemplo: una para Windows, una para Linux y una para datos.

3.  **Creación de medios de instalación**: Hoy en día, los SO se instalan principalmente desde una memoria USB.
    * **USB Booteable (o de arranque)**: Necesitaremos una imagen ISO del sistema operativo (un archivo que es una copia exacta de un DVD de instalación) y una herramienta como **Rufus** o **BelenasEtcher** para "grabar" esa ISO en un USB. Esto prepara el USB para que el ordenador pueda arrancar desde él e iniciar el instalador.

---

## 2.6. Configuración de parámetros básicos de la instalación

Una vez que arrancamos desde el medio de instalación, el asistente nos guiará a través de una serie de pasos de configuración:

* **Idioma, zona horaria y teclado**:
    * **Idioma**: El idioma en que se mostrará toda la interfaz del SO.
    * **Zona horaria**: Importante para que el reloj del sistema se muestre correctamente.
    * **Distribución del teclado**: Es crucial seleccionar la correcta (ej: Español - España) para que las teclas coincidan con los caracteres que escribimos (la `ñ`, los acentos, etc.).

* **Creación de usuarios y contraseñas**:
    * Se creará una cuenta de usuario principal (administrador).
    * **Nombre de usuario**: Identificador para iniciar sesión.
    * **Contraseña**: Debe ser segura (combinar mayúsculas, minúsculas, números y símbolos) para proteger el acceso al equipo.
    * **Nombre del equipo (Hostname)**: Cómo se identificará el ordenador en una red.

* **Configuración de red básica**:
    * **Red cableada (Ethernet)**: Generalmente se configura de forma automática si el cable está conectado (DHCP).
    * **Red inalámbrica (Wi-Fi)**: El instalador buscará redes disponibles y nos pedirá que seleccionemos la nuestra e introduzcamos la contraseña.

---

## 2.7. Configuración de un gestor de arranque

* **Concepto de gestor de arranque (Bootloader)**: Es un pequeño programa que se carga al encender el ordenador. Su trabajo es encontrar el sistema operativo en el disco duro y cargarlo en la memoria para que empiece a funcionar.
    * **GRUB (GRand Unified Bootloader)**: Es el gestor de arranque más común en las distribuciones de Linux. Es muy potente y permite arrancar múltiples sistemas operativos.
    * **Windows Boot Manager**: Es el gestor de arranque que utiliza Microsoft Windows.

* **Instalación y configuración para sistemas multiarranque (Dual Boot)**:
    * Si instalamos un segundo sistema operativo (por ejemplo, Linux después de Windows), el instalador de Linux detectará la instalación de Windows y configurará GRUB automáticamente.
    * Al encender el ordenador, GRUB nos mostrará un menú donde podremos elegir qué sistema operativo queremos iniciar.
    * **Importante**: Generalmente, se recomienda instalar primero Windows y luego Linux. El gestor de arranque de Windows es menos "amigable" y tiende a sobrescribir otros gestores si se instala después.

---

## 2.8. Incidencias de la instalación

No siempre todo sale a la primera. Es importante saber cómo reaccionar ante los problemas.

* **Errores comunes y su resolución**:
    * **"No se encuentra un medio de arranque"**: El ordenador no detecta el USB booteable.
        * **Solución**: Verificar que el USB está bien creado, que está conectado correctamente y que la BIOS/UEFI del ordenador está configurada para arrancar desde USB.
    * **El instalador no detecta el disco duro**:
        * **Solución**: Puede ser un problema de drivers del controlador de almacenamiento (SATA/NVMe). A veces es necesario cargarlos manualmente durante la instalación (común en configuraciones RAID). También verificar las conexiones físicas del disco.
    * **La instalación se congela**:
        * **Solución**: Puede ser un problema de hardware (memoria RAM defectuosa, sobrecalentamiento) o una imagen ISO corrupta. Probar a descargar y crear el medio de instalación de nuevo.

* **Herramientas de diagnóstico**:
    * **MemTest86+**: Herramienta para comprobar si la memoria RAM tiene errores.
    * **Visor de eventos (Windows) / Logs del sistema (Linux)**: Registros donde el sistema anota todo lo que sucede, incluyendo errores. Son muy útiles para diagnosticar problemas una vez el sistema está instalado.

---

## 2.9. Normas de utilización del software (licencias)

Usar software implica aceptar un contrato legal llamado licencia. Como técnicos, debemos conocer los tipos más comunes.

* **Tipos de licencias**:
    * **EULA (End-User License Agreement)**: Es el contrato típico del software propietario (Windows, Office). Nos da derecho a usar el software, pero no a copiarlo, modificarlo o distribuirlo.
    * **GPL (General Public License)**: Una de las licencias de software libre más famosas. Garantiza la libertad de usar, estudiar, compartir y modificar el software. Si modificas y distribuyes el software, tu versión también debe ser GPL.
    * **Freeware**: El software es gratuito, pero sigue siendo propietario. No tenemos acceso al código fuente. Ejemplos: Google Chrome, Adobe Acrobat Reader.
    * **Shareware**: Podemos probar el software de forma gratuita durante un tiempo limitado o con funciones restringidas. Para usarlo plenamente, hay que pagar. Ejemplo: WinRAR.

* **Importancia del cumplimiento de las licencias**: Usar software sin la licencia adecuada ("software pirata") es ilegal y puede acarrear consecuencias legales para el usuario o la empresa. Además, el software no licenciado a menudo es una fuente de virus y malware. Como profesionales, es nuestra responsabilidad instalar siempre software legal y aconsejar a los clientes que hagan lo mismo.

---

## 2.10. Actualización del sistema operativo

La instalación es solo el principio. Mantener el sistema actualizado es vital para su buen funcionamiento y seguridad.

* **Importancia de las actualizaciones**:
    * **Actualizaciones de seguridad**: Corrigen vulnerabilidades (agujeros de seguridad) que podrían ser explotadas por ciberdelincuentes para infectar el equipo o robar información. ¡Son las más importantes!
    * **Actualizaciones funcionales**: Añaden nuevas características, mejoran el rendimiento o corrigen errores (bugs) del sistema.

* **Procedimientos de actualización**:
    * **Windows**: A través de **Windows Update**. Busca, descarga e instala las actualizaciones automáticamente o de forma manual.
    * **Linux (Ubuntu)**: A través del **Actualizador de software** (herramienta gráfica) o usando los comandos `sudo apt update` y `sudo apt upgrade` en la terminal.
    * **macOS**: A través de la **App Store** en la sección de "Actualizaciones".

Es una buena práctica configurar las actualizaciones de seguridad para que se instalen automáticamente y revisar periódicamente si hay actualizaciones funcionales disponibles.