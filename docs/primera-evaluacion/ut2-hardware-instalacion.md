# UT2. Hardware y Requisitos para la Instalación de Sistemas Operativos

!!! abstract "Resultado de aprendizaje"
    **RA2** (introducción). Instala sistemas operativos, relacionando sus características con el hardware del equipo y el software de aplicación.

## 2.1. El hardware desde el punto de vista del SO

Antes de instalar cualquier sistema operativo es necesario conocer y evaluar el hardware sobre el que se va a instalar.

### Componentes principales

| Componente | Relevancia para el SO |
|---|---|
| **CPU** | Determina la arquitectura (x86, x64, ARM) y el rendimiento general |
| **RAM** | Condiciona la cantidad de aplicaciones y procesos simultáneos |
| **Almacenamiento** | Espacio disponible, tipo (HDD/SSD) y sistema de archivos a usar |
| **Placa base** | Determina el tipo de arranque disponible (BIOS/UEFI) y la compatibilidad de componentes |
| **Tarjeta gráfica** | Relevante para entornos gráficos y requisitos de aceleración |
| **Red** | Necesaria para actualizaciones, dominio, recursos compartidos |

### Arquitecturas: 32 bits vs 64 bits

- Un sistema **32 bits (x86)** puede direccionar como máximo ~4 GB de RAM
- Un sistema **64 bits (x64)** puede direccionar muchísima más memoria y es el estándar actual
- La versión del SO instalado debe coincidir con la arquitectura soportada por la CPU

!!! note
    Prácticamente todo el hardware actual es de 64 bits. La elección de 32 bits hoy en día solo tiene sentido en equipos muy antiguos o casos muy concretos.

### Drivers o controladores

Un **driver** es un programa que permite al sistema operativo comunicarse con un dispositivo hardware concreto (tarjeta gráfica, red, sonido, impresora...). Sin el driver adecuado, el SO puede no reconocer el dispositivo o no aprovechar todas sus capacidades.

- Windows: gestión centralizada a través del **Administrador de dispositivos**
- Linux: muchos drivers están integrados en el propio kernel; otros se instalan como módulos o paquetes adicionales

---

## 2.2. Requisitos de instalación

### Requisitos mínimos y recomendados

| Sistema | RAM mínima (orientativa) | Almacenamiento | Arquitectura |
|---|---|---|---|
| Windows (versión de escritorio actual) | 4 GB | 64 GB | 64 bits, UEFI con Secure Boot |
| Distribución Linux ligera | 1-2 GB | 15-20 GB | 32/64 bits |
| Distribución Linux de escritorio completa | 4 GB | 20-25 GB | 64 bits |

!!! tip
    Los requisitos concretos varían según la versión del sistema operativo. Antes de cualquier instalación real, consulta siempre los requisitos oficiales actualizados del fabricante o de la distribución.

### Comprobación de compatibilidad de hardware

- Revisar listas de compatibilidad (HCL) del fabricante del SO
- Comprobar disponibilidad de drivers para los componentes más críticos (red, gráfica)
- Verificar espacio en disco disponible y estado del hardware (test de disco, memoria)

### Virtualización de hardware (VT-x / AMD-V)

Es una función de la CPU, activable desde la BIOS/UEFI, que permite ejecutar máquinas virtuales de forma eficiente. Será imprescindible para el trabajo con VirtualBox que veremos en la **UT3**.

---

## 2.3. Medios de instalación

### Tipos de medios

- **DVD**: medio tradicional, cada vez menos usado
- **USB booteable**: medio más habitual hoy en día, rápido y reutilizable
- **Red (PXE)**: arranque e instalación a través de la red, típico en entornos corporativos con muchos equipos (mención introductoria, se ampliará en cursos posteriores)

### Imágenes ISO

Una **imagen ISO** es un archivo que contiene una copia exacta del contenido de un disco óptico, usada habitualmente para distribuir sistemas operativos.

- Windows: se descarga desde el sitio oficial de Microsoft (Media Creation Tool o descarga directa de ISO)
- Linux: cada distribución publica sus propias ISO en su web oficial (Ubuntu, Debian, Fedora...)

### Creación de medios de instalación booteables

=== "Windows (Rufus)"

    1. Descargar [Rufus](https://rufus.ie)
    2. Insertar el USB (se borrará todo su contenido)
    3. Seleccionar la ISO descargada
    4. Elegir esquema de partición según el destino (GPT para UEFI, MBR para BIOS Legacy)
    5. Iniciar el proceso de grabación

=== "Multiplataforma (balenaEtcher)"

    1. Descargar [balenaEtcher](https://etcher.balena.io)
    2. Seleccionar la imagen ISO
    3. Seleccionar el USB destino
    4. Grabar y verificar

=== "Linux (dd)"

    ```bash
    sudo dd if=ubuntu.iso of=/dev/sdX bs=4M status=progress
    sync
    ```

    !!! danger
        Comprobar cuidadosamente el dispositivo destino (`/dev/sdX`) antes de ejecutar `dd`: un error puede borrar el disco equivocado.

### Verificación de integridad de las imágenes

Antes de usar una ISO descargada, conviene comprobar su integridad comparando su **checksum** (SHA256, por ejemplo) con el publicado en la web oficial, para asegurarse de que la descarga no está corrupta o manipulada.

```bash
sha256sum ubuntu-24.04-desktop-amd64.iso
```

---

## 2.4. Planificación de una instalación

### Tipos de instalación

- **Instalación nueva/limpia**: se instala el SO desde cero, formateando el disco
- **Actualización**: se instala una versión nueva manteniendo datos y programas
- **Arranque dual (dual boot)**: coexistencia de dos SO distintos en el mismo equipo (mención, se retomará si es necesario)

### Decisiones previas a instalar

Antes de instalar un sistema operativo conviene responder a preguntas como:

- ¿Qué SO es el más adecuado para el propósito de este equipo?
- ¿Qué esquema de particionado usaremos (MBR/GPT)?
- ¿Qué sistema de archivos usaremos?
- ¿Qué nombre de equipo, usuario y configuración de red tendrá?

### Checklist de planificación

- [ ] SO y versión a instalar
- [ ] Requisitos comprobados (RAM, disco, arquitectura)
- [ ] Medio de instalación preparado y verificado
- [ ] Esquema de particionado decidido
- [ ] Sistema de archivos decidido
- [ ] Datos de red previstos (IP, nombre de equipo)
- [ ] Copia de seguridad de datos previos (si aplica)

---

## 2.5. Prácticas de la unidad

!!! example "Práctica 1 — Comprobación de requisitos"
    Para una VM (o equipo real) con unas características dadas, comprueba si cumple los requisitos mínimos de una versión de Windows y de una distribución Linux a elegir. Documenta la comparación.

!!! example "Práctica 2 — Descarga y verificación de ISOs"
    Descarga la imagen ISO de una distribución Linux y verifica su integridad mediante checksum. Repite el proceso localizando (sin necesidad de descargar) la vía oficial de obtención de una ISO de Windows.

!!! example "Práctica 3 — Creación de un USB booteable"
    Utilizando Rufus o balenaEtcher, crea un medio de instalación USB booteable a partir de una de las ISOs descargadas.

!!! example "Práctica 4 — Checklist de TechPyme"
    Elabora la checklist de planificación de instalación para **cada uno** de los equipos previstos en el proyecto TechPyme (servidor y clientes), indicando SO, esquema de particionado y sistema de archivos que se usará en cada uno.
