# UT4. Instalación de Windows

!!! abstract "Resultado de aprendizaje"
    **RA2.** Instala sistemas operativos, relacionando sus características con el hardware del equipo y el software de aplicación.

## 4.1. Preparativos previos a la instalación

Antes de empezar la instalación conviene repasar lo trabajado en la **UT2**: requisitos de hardware, medios de instalación y planificación previa. Para VM-WIN concretamente:

- **Edición de Windows**: se recomienda una edición de escritorio estándar, suficiente para las necesidades de un cliente de oficina
- **Medio de instalación**: la ISO descargada y verificada, y el USB booteable creado (o, en nuestro caso, la propia ISO montada directamente en la unidad óptica virtual de la VM, sin necesidad de USB físico)
- **Checklist de planificación** ya completada en la UT2 para VM-WIN

### Configuración previa de la VM en VirtualBox

Antes de arrancar la instalación, hay que preparar la máquina virtual creada en la UT3:

1. Abrir la configuración de VM-WIN en VirtualBox
2. En **Almacenamiento**, montar la ISO de Windows en la unidad óptica virtual
3. Comprobar el **orden de arranque**: la unidad óptica debe ir antes que el disco duro para que arranque desde la ISO
4. Confirmar los recursos asignados (RAM, CPU) según lo decidido en la UT3
5. Confirmar que el adaptador de red está en modo **puente**, tal como se diseñó en el proyecto TechPyme

---

## 4.2. Proceso de instalación

### Arranque del instalador

Al iniciar la VM con la ISO montada, aparece la pantalla inicial del instalador de Windows, donde se elige idioma, formato de hora/moneda y distribución de teclado.

### Tipo de instalación

- **Instalación limpia**: se instala Windows desde cero, sobre un disco vacío o formateado. Es la que usaremos en VM-WIN
- **Actualización**: mantiene los programas y datos de una instalación anterior (no aplica a nuestra VM, que parte de un disco vacío)

### Particionado durante la instalación

El propio instalador incluye una herramienta de particionado simplificada:

- Permite crear, eliminar y formatear particiones sobre el disco virtual
- Al instalar sobre un disco vacío en modo UEFI, Windows crea automáticamente varias particiones necesarias, además de la partición principal:
    - Partición del sistema EFI
    - Partición reservada de Microsoft (MSR)
    - Partición principal (donde irá `C:`, en NTFS)
    - Partición de recuperación

!!! note "Recordatorio de UT1"
    Estas particiones adicionales son la aplicación práctica de lo visto sobre **UEFI y GPT**: la partición EFI es imprescindible para que el firmware UEFI pueda arrancar el sistema.

### Selección de edición y licencia

- Si la ISO incluye varias ediciones, se elige la deseada
- Aceptación de los términos de licencia

### Progreso de la instalación

El instalador copia los archivos, instala características y reinicia el equipo una o varias veces de forma automática hasta completar el proceso.

---

## 4.3. Configuración inicial tras la instalación (OOBE)

Tras el primer reinicio, Windows lanza el asistente de configuración inicial (**OOBE**, *Out-Of-Box Experience*):

### Tipo de cuenta

| Tipo de cuenta | Características |
|---|---|
| **Cuenta local** | Solo existe en este equipo, no requiere conexión a Internet ni cuenta de Microsoft |
| **Cuenta Microsoft** | Vinculada a un correo, sincroniza configuración entre dispositivos, requiere conexión a Internet |

!!! tip "Elección para TechPyme"
    En un entorno de empresa como TechPyme, y especialmente en un contexto de prácticas, se utilizará una **cuenta local**, ya que ofrece control total del equipo sin depender de servicios externos de Microsoft.

### Privacidad y telemetría

El asistente pregunta por distintas opciones de privacidad (ubicación, diagnóstico, publicidad personalizada, etc.). Conviene revisarlas y desactivar las que no sean necesarias.

### Primeras comprobaciones

- Verificar que hay conexión de red (necesaria para actualizaciones y activación)
- Comprobar el estado de activación de Windows en `Configuración → Sistema → Activación`

---

## 4.4. Instalación y actualización de drivers

### Windows Update como fuente principal

En la mayoría de los casos, Windows detecta el hardware automáticamente e instala los drivers correspondientes a través de **Windows Update**, sin intervención del usuario.

### Administrador de dispositivos

Permite revisar el estado de todo el hardware detectado:

- Un icono de aviso (⚠️) indica un dispositivo con problemas o sin driver instalado
- Se puede intentar actualizar el driver desde ahí mismo (clic derecho → Actualizar controlador)

### Instalación manual de drivers

Cuando Windows Update no encuentra el driver adecuado (frecuente con hardware muy nuevo o muy específico), se descarga el driver directamente desde la web del fabricante y se instala manualmente.

### Guest Additions de VirtualBox

En una máquina virtual, además de los drivers habituales, es imprescindible instalar las **Guest Additions**: un paquete de controladores y utilidades específico de VirtualBox que mejora considerablemente la experiencia dentro de la VM.

Ventajas de instalarlas:

- Resolución de pantalla ajustable y adaptable al tamaño de la ventana
- Portapapeles compartido entre el host y la VM
- Arrastrar y soltar archivos entre host y VM
- Mejor rendimiento gráfico
- Soporte para carpetas compartidas host-VM (vistas en UT3)

Se instalan desde el menú de VirtualBox: **Dispositivos → Insertar imagen de CD de las Guest Additions**, que monta un CD virtual con el instalador dentro de la VM.

---

## 4.5. Actualizaciones del sistema

### Windows Update

Ubicado en `Configuración → Windows Update`, permite:

- Comprobar actualizaciones disponibles
- Descargarlas e instalarlas
- Ver el historial de actualizaciones instaladas

### Tipos de actualizaciones

| Tipo | Descripción |
|---|---|
| **De seguridad** | Corrigen vulnerabilidades, se instalan automáticamente por defecto |
| **De funciones** | Añaden nuevas características, cambian de versión el sistema |
| **Opcionales** | Drivers o mejoras menores, no se instalan automáticamente |

### Horarios activos y reinicios

Windows permite configurar un rango de **horas activas** durante las cuales no se reiniciará automáticamente el equipo tras instalar actualizaciones, evitando interrupciones en mitad de una sesión de trabajo.

---

## 4.6. Prácticas de la unidad — Instalación de VM-WIN

!!! example "Práctica 1 — Preparación de la VM"
    Sobre la VM-WIN creada en la UT3 (aún vacía):

    1. Monta la ISO de Windows en la unidad óptica virtual
    2. Comprueba el orden de arranque
    3. Confirma los recursos asignados y el modo de red (puente)

!!! example "Práctica 2 — Instalación completa"
    Instala Windows en VM-WIN:

    1. Realiza una instalación limpia sobre el disco virtual vacío
    2. Utiliza el esquema de particionado que se genera automáticamente en UEFI/GPT y documenta qué particiones se han creado
    3. Completa el asistente OOBE con una **cuenta local** (no de Microsoft)
    4. Revisa y ajusta las opciones de privacidad propuestas durante el asistente

!!! example "Práctica 3 — Drivers y Guest Additions"
    1. Revisa el Administrador de dispositivos en busca de avisos
    2. Instala las Guest Additions de VirtualBox
    3. Comprueba que la resolución de pantalla se adapta al redimensionar la ventana de la VM

!!! example "Práctica 4 — Actualizaciones"
    1. Comprueba si hay actualizaciones pendientes en Windows Update
    2. Instala las actualizaciones disponibles
    3. Configura un horario activo razonable

!!! example "Práctica 5 — Snapshot de partida"
    Una vez completada la instalación, actualizaciones y Guest Additions, toma una snapshot llamada `Windows recién instalado`, que servirá como punto de partida limpio para el resto de la evaluación.
