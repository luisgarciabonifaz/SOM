<p style="text-align: center; font-size: 32px;">CIPFP Mislata</p>

<p style="text-align: center; font-size: 18px;">Luis García Bonifaz - l.garciabonifaz@edu.gva.es</p>
<p style="text-align: center; font-size: 24px;">SOM  T02 - Instalación de los Sistemas Operativos</p>

---

<p style="text-align: left; font-size: 24px;">Actividad 1. Instalación DUAL</p>

---

### Objetivo:
Aplicar los conocimientos sobre la instalación y gestión básica de sistemas operativos para **planificar, simular y reflexionar** sobre un proceso de instalación de un sistema multiarranque (dual-boot), incluyendo la selección del SO, la preparación del hardware, el particionado del disco y la configuración inicial.

### Escenario:
Imagina que un amigo te pide ayuda para instalar un nuevo sistema operativo en su ordenador. Actualmente tiene **Windows 10** instalado en un disco duro y quiere **conservarlo**, pero también le gustaría probar un nuevo sistema operativo para aprender sobre él. Te da la siguiente información sobre su equipo:

* **Sistema Operativo Actual:** Windows 10 (instalado y funcionando)
* **Procesador:** Intel Core i5 de 7ª generación (64 bits)
* **RAM:** 8 GB
* **Disco Duro:** 500 GB (100 GB usados por Windows 10 y sus programas, **400 GB libres**)
* **Tarjeta Gráfica:** Integrada Intel HD Graphics
* **Conexión a Internet:** Wi-Fi y Ethernet disponibles
* **Periféricos:** Teclado, ratón, impresora

---

### Parte 1: Planificación (Pre-instalación)

**1. Verificación de Hardware y Selección del SO:**

- Tu amigo quiere instalar una **distribución de GNU/Linux** para tener un **sistema multiarranque (dual-boot)** junto a Windows 10.

    - **Tarea 1.1:** Basándote en los **requisitos de hardware** del equipo de tu amigo y en la información sobre **sistemas operativos libres**, propón tres distribuciones de GNU/Linux diferentes que sean adecuadas para su equipo y sus intereses (dual-boot). Justifica brevemente tu elección para cada una, considerando aspectos como la **compatibilidad de hardware** y las **preferencias del usuario** (ej. facilidad de uso, interfaz gráfica, soporte comunitario).

    - **Tarea 1.2:** Si tu amigo te preguntara qué tipo de licencia tienen las distribuciones Linux que le propones en comparación con Windows, ¿cómo se lo explicarías usando los conceptos de **Licencia Pública General (GPL)** y **Licencia de Software Propietario (EULA)**? Menciona al menos dos **ventajas y desventajas** de cada tipo de licencia.

**2. Preparación del Disco y Medios de Instalación:**

- **Tarea 2.1:** Explica detalladamente cómo harías el **particionado del disco** de 500GB para permitir la coexistencia de Windows 10 y la nueva distribución Linux. Indica qué **tipos de particiones** crearías para Linux (ej. partición principal, de intercambio si aplica) y qué tamaño aproximado les asignarías, explicando la **finalidad de cada una**. Recuerda que Windows ya ocupa 100GB.

- **Tarea 2.2:** Antes de cualquier manipulación de discos o instalación, ¿cuál es el **paso MÁS IMPORTANTE** a realizar? Explica por qué es tan crucial y dónde recomendarías guardar esos datos.

- **Tarea 2.3:** Describe el proceso general para crear el **medio de instalación** (USB booteable) para la distribución Linux que elijas. Menciona los elementos necesarios (imagen ISO, software).

### Parte 2: Simulación de la Instalación y Configuración

**1. Configuración Inicial y Gestor de Arranque:**

- **Tarea 3.1:** Durante la instalación de Linux, el sistema pedirá configurar algunos **parámetros básicos**. ¿Cuáles son los **tres parámetros esenciales** que se configuran al inicio de una instalación? Explica brevemente la importancia de cada uno.

- **Tarea 3.2:** Tu amigo te pregunta sobre el **gestor de arranque**. Explica qué es un gestor de arranque y cómo se configura para que pueda elegir entre Windows y Linux al iniciar el equipo, haciendo referencia a **GRUB** y al **orden de instalación recomendado** para sistemas multiarranque (Windows primero, luego Linux).

### Parte 3: Post-instalación y Mantenimiento

**1. Actualizaciones y Mantenimiento:**

- **Tarea 5.1:** Una vez que Linux esté instalado y funcionando, ¿por qué es **crucial mantener el sistema operativo actualizado**? Menciona las dos razones principales (seguridad y funcionalidades) y explica brevemente cada una.

- **Tarea 5.2:** Describe los **procedimientos generales para actualizar** un sistema GNU/Linux, mencionando un ejemplo de comando si fuera posible.
