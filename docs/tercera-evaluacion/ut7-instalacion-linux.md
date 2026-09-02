# UT7. Instalación de Linux

!!! abstract "Resultado de aprendizaje"
    **RA2.** Instala sistemas operativos, relacionando sus características con el hardware del equipo y el software de aplicación.

## 7.1. Elección de distribución para VM-LINUX

### Criterios de elección

A la hora de elegir una distribución Linux para un puesto de trabajo conviene valorar:

- **Soporte y ciclo de vida**: durante cuánto tiempo recibe actualizaciones de seguridad
- **Comunidad y documentación**: cuanta más gente la usa, más fácil es encontrar ayuda
- **Ligereza**: consumo de RAM y disco del entorno de escritorio
- **Orientación**: pensada para escritorio, servidor, o ambas

### Versiones LTS vs ciclo corto

| Tipo | Características |
|---|---|
| **LTS** (*Long Term Support*) | Varios años de soporte y actualizaciones de seguridad, prioriza estabilidad sobre novedad |
| **Ciclo corto** | Nuevas versiones cada pocos meses, incorpora software más reciente, menos tiempo de soporte por versión |

!!! tip "Distribución para este curso"
    Para VM-LINUX se recomienda una distribución basada en Debian/Ubuntu **LTS**, con un entorno de escritorio ligero (XFCE) si el equipo tiene recursos limitados. La elección concreta la indicará el profesor, pero todos los comandos de este bloque son válidos para cualquier distribución basada en Debian/Ubuntu.

---

## 7.2. Preparativos previos a la instalación

Al igual que en UT4 para Windows, se reutiliza lo ya preparado en la UT2: ISO descargada y verificada.

### Configuración previa de la VM en VirtualBox

1. Montar la ISO de la distribución elegida en la unidad óptica virtual de VM-LINUX
2. Comprobar el orden de arranque (óptica antes que disco duro)
3. Confirmar recursos asignados (RAM, CPU) según lo decidido en la UT3
4. Confirmar el adaptador de red en modo **puente**

---

## 7.3. Proceso de instalación

### Arranque del instalador

Muchas distribuciones ofrecen, al arrancar desde el medio de instalación, un modo **"Probar" (Live)** que permite usar el sistema sin instalarlo, y un modo **"Instalar"** que lanza el asistente de instalación.

### Particionado

=== "Instalación guiada"

    El instalador propone automáticamente un esquema de particiones sobre todo el disco, sin intervención del usuario. Es la opción más rápida, adecuada para quien no necesita un control fino sobre las particiones.

=== "Particionado manual"

    Permite decidir exactamente qué particiones crear. Es la que usaremos en VM-LINUX, creando al menos:

    | Partición | Punto de montaje | Sistema de archivos | Función |
    |---|---|---|---|
    | Partición raíz | `/` | ext4 | Contiene el sistema operativo completo |
    | Partición de intercambio | `swap` | swap | Memoria virtual (equivalente al pagefile de Windows, visto en UT1) |
    | Partición de usuario *(opcional)* | `/home` | ext4 | Datos y configuración de los usuarios, separada del sistema |

!!! tip "Ventaja de separar /home"
    Si `/home` está en una partición distinta a `/`, se puede reinstalar o cambiar de distribución sin perder los archivos y la configuración personal de los usuarios, ya que esa partición no se toca durante la reinstalación del sistema.

### Sistema de archivos

Se utilizará **ext4**, tal como se estudió en la UT1, por ser el estándar actual en la mayoría de distribuciones de escritorio y servidor.

### Selección de software adicional

Durante la instalación se puede elegir el entorno de escritorio (si el instalador lo permite) y utilidades adicionales (navegador, ofimática básica, herramientas del sistema).

### Usuario inicial y nombre del equipo

El instalador solicita crear el primer usuario (con privilegios de administración vía `sudo`, como se verá en la UT8) y definir el nombre del equipo.

---

## 7.4. Primer arranque y comprobaciones iniciales

- Arranque del sistema recién instalado y comprobación de que todo funciona correctamente
- Verificación de acceso a Internet (necesaria para poder actualizar el sistema)
- La actualización completa del sistema se detalla en la **UT8**, pero conviene lanzar una primera actualización básica nada más instalar

---

## 7.5. Guest Additions en Linux

A diferencia de Windows, en Linux instalar las Guest Additions requiere algunos pasos previos:

### Dependencias necesarias

Las Guest Additions se compilan para el kernel concreto instalado, por lo que hacen falta herramientas de compilación y las cabeceras del kernel:

```bash
sudo apt update
sudo apt install build-essential dkms linux-headers-$(uname -r)
```

### Montaje e instalación

1. Desde el menú de VirtualBox: **Dispositivos → Insertar imagen de CD de las Guest Additions**
2. Montar la imagen dentro de la VM (o hacerlo manualmente con `mount`)
3. Ejecutar el instalador:

```bash
sudo ./VBoxLinuxAdditions.run
```

4. Reiniciar la VM para que los cambios surtan efecto

### Comprobación de mejoras

Tras instalar las Guest Additions y reiniciar, deberían funcionar:

- Resolución de pantalla adaptable al tamaño de la ventana
- Portapapeles compartido entre host y VM
- Carpetas compartidas host-VM (vistas en UT3)

---

## 7.6. Prácticas de la unidad — Instalación de VM-LINUX

!!! example "Práctica 1 — Preparación de la VM"
    Sobre la VM-LINUX creada en la UT3 (aún vacía): monta la ISO, comprueba el orden de arranque y confirma el modo de red puente.

!!! example "Práctica 2 — Instalación con particionado manual"
    Instala Linux en VM-LINUX:

    1. Elige particionado manual
    2. Crea una partición `/` en ext4, una partición `swap`, y una partición `/home` separada en ext4
    3. Crea el usuario inicial de administración
    4. Define el nombre del equipo como `techpyme-linux`

!!! example "Práctica 3 — Primer arranque"
    1. Arranca el sistema instalado y comprueba el acceso a Internet
    2. Lanza una primera actualización básica del sistema

!!! example "Práctica 4 — Guest Additions"
    1. Instala las dependencias necesarias (`build-essential`, `dkms`, cabeceras del kernel)
    2. Instala las Guest Additions desde la imagen de VirtualBox
    3. Reinicia y comprueba que la resolución de pantalla se adapta al redimensionar la ventana

!!! example "Práctica 5 — Snapshot de partida"
    Toma una snapshot llamada `Linux recién instalado`, que servirá como punto de partida limpio para el resto de la evaluación.
