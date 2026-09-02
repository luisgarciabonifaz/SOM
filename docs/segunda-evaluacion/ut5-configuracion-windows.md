# UT5. Configuración básica de Windows

!!! abstract "Resultado de aprendizaje"
    **RA3.** Realiza tareas básicas de configuración de sistemas operativos, interpretando requerimientos y describiendo los procedimientos seguidos.

## 5.1. Configuración regional y de idioma

### Región y formatos

Desde `Configuración → Hora e idioma → Región` se configura el país, que determina los formatos por defecto de fecha, hora, moneda y unidades de medida.

### Idiomas y teclado

- Es posible instalar varios **idiomas de sistema** y **distribuciones de teclado**, y alternar entre ellas
- El idioma "principal" determina en qué idioma aparecen los menús y textos del sistema
- Se puede añadir un teclado adicional (por ejemplo, inglés) sin cambiar el idioma general

### Zona horaria

Configurable manualmente o de forma automática (si el equipo tiene acceso a Internet y localización activada), en `Configuración → Hora e idioma → Fecha y hora`.

---

## 5.2. Introducción a PowerShell

A partir de este punto, **todas las tareas de línea de comandos en Windows se realizarán con PowerShell**, que sustituye al símbolo del sistema (CMD) como herramienta de referencia durante el resto del curso.

### ¿Qué es PowerShell?

**PowerShell** es un shell de línea de comandos y lenguaje de scripting de Microsoft, diseñado para la administración y automatización de sistemas. A diferencia de CMD, PowerShell es mucho más potente porque:

- Trabaja con **objetos**, no con texto plano
- Tiene una sintaxis coherente y predecible en todos sus comandos
- Permite administrar prácticamente cualquier aspecto de Windows (usuarios, red, discos, servicios, registro...) desde la propia consola

### El concepto de cmdlet

Los comandos de PowerShell se llaman **cmdlets** (se pronuncia "command-lets") y siguen siempre la estructura:

```
Verbo-Nombre
```

| Verbo | Significado | Ejemplo |
|---|---|---|
| `Get` | Obtener/consultar información | `Get-Process` |
| `Set` | Modificar una propiedad existente | `Set-LocalUser` |
| `New` | Crear algo nuevo | `New-LocalUser` |
| `Remove` | Eliminar | `Remove-LocalUser` |
| `Add` | Añadir a algo existente | `Add-LocalGroupMember` |
| `Start` / `Stop` | Iniciar/detener un proceso o servicio | `Stop-Process`, `Start-Service` |

Esta coherencia hace que, una vez se conoce el patrón, sea fácil intuir el nombre de un cmdlet aunque no se haya usado antes.

### Objetos, no texto

Cuando un cmdlet de PowerShell "consulta algo" (por ejemplo, la lista de procesos), no devuelve simplemente texto: devuelve **objetos** con propiedades. Esto permite filtrar, ordenar y seleccionar datos con precisión, en lugar de tener que "recortar" texto como se haría en CMD o en un shell tradicional.

```powershell
Get-Process | Sort-Object CPU -Descending | Select-Object -First 5
```

Este ejemplo obtiene todos los procesos, los ordena por consumo de CPU de mayor a menor, y muestra solo los 5 primeros.

### El pipeline (`|`)

El símbolo `|` (pipeline o "tubería") permite encadenar cmdlets, pasando el resultado de uno como entrada del siguiente. Es uno de los conceptos más potentes de PowerShell, y se usará constantemente a lo largo del curso.

```powershell
Get-Service | Where-Object {$_.Status -eq "Running"}
```

Este ejemplo obtiene todos los servicios y filtra solo los que están en estado "en ejecución".

### Ayuda integrada

PowerShell incluye un sistema de ayuda muy completo:

| Cmdlet | Para qué sirve |
|---|---|
| `Get-Help <cmdlet>` | Muestra la ayuda de un cmdlet concreto, con sintaxis y ejemplos |
| `Get-Command` | Lista los cmdlets disponibles; admite filtros como `Get-Command -Verb Get` |
| `Get-Member` | Muestra las propiedades y métodos de un objeto devuelto por un cmdlet |

```powershell
Get-Help Get-Process -Examples
Get-Command -Noun LocalUser
Get-Process | Get-Member
```

### Alias

Por comodidad (y compatibilidad con quienes vienen de CMD o de Linux), muchos cmdlets tienen **alias**: nombres cortos alternativos.

| Alias | Cmdlet real |
|---|---|
| `ls`, `dir` | `Get-ChildItem` |
| `cd` | `Set-Location` |
| `cls`, `clear` | `Clear-Host` |
| `cp` | `Copy-Item` |
| `rm`, `del` | `Remove-Item` |
| `ps` | `Get-Process` |

!!! tip
    Los alias son útiles para trabajar rápido, pero conviene conocer el nombre real del cmdlet (`Verbo-Nombre`), especialmente a la hora de escribir scripts que otras personas deban entender.

### Política de ejecución (Execution Policy)

Por motivos de seguridad, PowerShell restringe por defecto la ejecución de scripts (`.ps1`), para evitar que se ejecute código malicioso sin que el usuario sea consciente. Esto se controla con la **política de ejecución**:

```powershell
Get-ExecutionPolicy
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

| Política | Comportamiento |
|---|---|
| `Restricted` | No se puede ejecutar ningún script (valor por defecto en muchos Windows) |
| `RemoteSigned` | Los scripts locales se ejecutan libremente; los descargados de Internet requieren firma digital |
| `Unrestricted` | Se ejecuta cualquier script (no recomendado salvo entornos controlados) |

### Dónde se ejecuta PowerShell

- **Consola de PowerShell**: la clásica, ventana azul
- **PowerShell ISE**: entorno con editor de scripts integrado
- **Windows Terminal**: aplicación moderna que permite tener PowerShell, CMD y otras consolas en pestañas dentro de la misma ventana

### Primeros cmdlets de prueba

```powershell
Get-Process        # Lista los procesos en ejecución
Get-Service         # Lista los servicios del sistema
Get-Date            # Muestra la fecha y hora actual
Get-ComputerInfo    # Información general del sistema
```

---

## 5.3. Configuración de red con PowerShell

### Repaso: redes privada vs pública

Windows distingue entre:

- **Red privada**: para entornos de confianza (casa, oficina), permite descubrimiento de red y recursos compartidos
- **Red pública**: para entornos no confiables (cafeterías, aeropuertos), oculta el equipo en la red

Para TechPyme, la red del aula se configurará como **red privada**, ya que necesitamos compartir recursos entre equipos.

### Consultar la configuración de red

```powershell
Get-NetIPConfiguration
Get-NetAdapter
```

`Get-NetIPConfiguration` muestra un resumen de la IP, puerta de enlace y DNS del adaptador activo; `Get-NetAdapter` lista los adaptadores de red disponibles y su estado.

### Configuración de IP

=== "IP automática (DHCP)"

    Es la configuración por defecto: el adaptador solicita una IP automáticamente al router/servidor DHCP de la red.

=== "IP manual (estática)"

    ```powershell
    New-NetIPAddress -InterfaceAlias "Ethernet" `
        -IPAddress 192.168.1.101 `
        -PrefixLength 24 `
        -DefaultGateway 192.168.1.1
    ```

    Si ya existe una IP asignada y se quiere cambiar:

    ```powershell
    Set-NetIPAddress -InterfaceAlias "Ethernet" -IPAddress 192.168.1.101
    ```

### Configuración de DNS

```powershell
Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ServerAddresses ("8.8.8.8","8.8.4.4")
```

### Nombre del equipo y grupo de trabajo

```powershell
Rename-Computer -NewName "PC-TECHPYME-WIN" -Restart
Add-Computer -WorkgroupName "TECHPYME"
```

### Comprobación de conectividad

```powershell
Test-Connection -ComputerName 192.168.1.1 -Count 4
```

`Test-Connection` es el equivalente moderno de `ping` en PowerShell, pero devuelve objetos (por lo que se puede filtrar, guardar en variables, etc.) en lugar de solo texto.

---

## 5.4. Cuentas de usuario y personalización básica

### Administrador vs usuario estándar

| Tipo de cuenta | Puede... |
|---|---|
| **Administrador** | Instalar software, cambiar configuración del sistema, gestionar otros usuarios |
| **Estándar** | Usar el equipo y sus programas, pero no cambiar configuración crítica del sistema |

!!! note "Buenas prácticas"
    Se recomienda usar una cuenta estándar para el trabajo diario y reservar la cuenta de administrador solo para tareas de gestión, minimizando el riesgo de cambios accidentales o de software malicioso con permisos elevados.

### Personalización

- Fondo de escritorio, colores, tema claro/oscuro: `Configuración → Personalización`
- Configuración de energía y suspensión: `Configuración → Sistema → Energía y batería`, especialmente relevante en portátiles para equilibrar autonomía y rendimiento
- Accesibilidad: opciones de contraste, tamaño de texto, narrador (mención)

---

## 5.5. Herramientas de configuración del sistema

### Panel de control vs Configuración

Windows mantiene actualmente dos interfaces de configuración:

- **Panel de control**: interfaz clásica, más completa en algunos aspectos avanzados
- **Configuración** (app moderna): interfaz rediseñada, donde Microsoft va migrando progresivamente todas las opciones

Muchas opciones existen en ambos sitios; otras solo en uno de los dos, por lo que conviene saber moverse en ambas.

### El registro de Windows

El **registro** es una base de datos jerárquica donde Windows almacena la configuración del sistema y de las aplicaciones.

- Estructura en **colmenas** (*hives*), las principales:
    - `HKEY_LOCAL_MACHINE` (`HKLM:`): configuración del equipo, aplicable a todos los usuarios
    - `HKEY_CURRENT_USER` (`HKCU:`): configuración del usuario actual
- Acceso gráfico mediante `regedit`
- Acceso desde PowerShell, tratando las rutas del registro como si fueran unidades:

```powershell
Get-ItemProperty -Path "HKCU:\Control Panel\Desktop"
Set-ItemProperty -Path "HKCU:\Control Panel\Desktop" -Name "Wallpaper" -Value "C:\ruta\imagen.jpg"
```

!!! danger "Precaución con el registro"
    Modificar el registro incorrectamente puede provocar que Windows deje de funcionar correctamente. Antes de hacer cambios, especialmente en `HKLM:`, es recomendable exportar una copia de la clave que se va a modificar.

### Editor de políticas locales (gpedit.msc)

Permite configurar políticas de seguridad y comportamiento del sistema a nivel local (por ejemplo, restricciones de contraseña, qué pueden hacer los usuarios estándar). Se amplía en la UT6 al hablar de administración de usuarios.

### Administrador de tareas desde PowerShell

Recuperando lo visto en la **UT1** sobre gestión de procesos:

```powershell
Get-Process | Sort-Object CPU -Descending | Select-Object -First 10
Stop-Process -Name "notepad" -Force
```

---

## 5.6. Actualizaciones y mantenimiento básico

### Windows Update avanzado

- Pausar actualizaciones temporalmente: `Configuración → Windows Update → Opciones avanzadas`
- Consultar el historial de actualizaciones instaladas

### Gestión desde PowerShell

Existe un módulo específico, `PSWindowsUpdate` (no incluido por defecto, se instala aparte), que permite consultar e instalar actualizaciones desde PowerShell. Se menciona aquí como referencia para quien quiera automatizar esta tarea, sin entrar en detalle de instalación del módulo.

### Liberador de espacio en disco

Herramienta gráfica clásica (`cleanmgr`) que elimina archivos temporales, papelera, versiones antiguas de Windows tras una actualización, etc.

### Optimización de unidades

```powershell
Optimize-Volume -DriveLetter C -Defrag    # Para HDD
Optimize-Volume -DriveLetter C -ReTrim    # Para SSD
```

!!! warning
    Desfragmentar un SSD no solo es innecesario, sino contraproducente (reduce su vida útil sin mejorar el rendimiento). Windows detecta automáticamente el tipo de unidad y aplica la operación de mantenimiento adecuada (TRIM en SSD, desfragmentación en HDD).

---

## 5.7. Prácticas de la unidad — Configuración de VM-WIN

!!! example "Práctica 1 — Primeros pasos con PowerShell"
    Sobre VM-WIN:

    1. Abre PowerShell y ejecuta `Get-Help Get-Process -Examples`
    2. Ejecuta `Get-Command -Noun Service` y observa los cmdlets disponibles relacionados con servicios
    3. Combina `Get-Process` con `Sort-Object` y `Select-Object` para mostrar los 5 procesos que más memoria consumen

!!! example "Práctica 2 — Región e idioma"
    Configura región, idioma y zona horaria de VM-WIN adecuados a España.

!!! example "Práctica 3 — Red con PowerShell"
    1. Consulta la configuración de red actual con `Get-NetIPConfiguration`
    2. Asigna una IP fija dentro del rango de red de TechPyme con `New-NetIPAddress`
    3. Configura el DNS con `Set-DnsClientServerAddress`
    4. Comprueba la conectividad con `Test-Connection` hacia el host físico del alumno y hacia el servidor del profesor
    5. Cambia el nombre del equipo a `PC-TECHPYME-WIN` con `Rename-Computer`

!!! example "Práctica 4 — Personalización y energía"
    Personaliza el escritorio de VM-WIN y ajusta el plan de energía a uno adecuado para un equipo de oficina.

!!! example "Práctica 5 — Registro desde PowerShell"
    Consulta una clave del registro relacionada con el fondo de escritorio (`HKCU:\Control Panel\Desktop`) usando `Get-ItemProperty`, y documenta qué información obtienes.
