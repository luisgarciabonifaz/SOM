Este curso está diseñado para proporcionar a los estudiantes de grado medio en informática los conocimientos y habilidades esenciales para comprender, instalar, configurar y administrar sistemas operativos monopuesto, tanto en entornos Windows como Linux, así como la gestión de máquinas virtuales.

## Tabla contenidos
| Tema | RA            | Contenido                                | Horas |
|------|---------------|------------------------------------------|-------|
| 1    | RA1 Genérico  | Características SO                       | 10    |
| 2    | RA5           | Virtualización                           | 10    |
| 3    | RA2           | Instalación SO                           | 10    |
| 4    | RA3 Windows   | Configuración básica de Windows          | 15    |
| 5    | RA1 Windows   | Archivos y permisos en Windows           | 15    |
| 6    | RA4 Windows   | Administración y optimización Windows    | 15    |
| 7    | RA3 Linux     | Configuración básica de Linux            | 15    |
| 8    | RA1 Linux     | Archivos y permisos en Linux             | 15    |
| 9    | RA4 Linux     | Administración y optimización Linux      | 15    |
|      | **Total**     |                                          | **120** |



## Plantilla
Hola, me podrías preparar unos apuntes de un tema sobre sistemas operativos monopuesto, para mis alumnos de grado medio de informática, para utilizarlos como  material de clase en formato markdown para mkdocs. 

La duración del tema es de 10 horas y el contenido el siguiente:
--------------
Y me lo puedes poner en formato markdown para mkdocs de forma que pueda copiar el contenido que me des en un fichero md.
----------------
Ahora me puedes preparar un documento único con html,css y javascript con actividades para repasar los contenidos de este tema.
Al documento de html, css y javascript le puedes añadir en la cabecera un logo y el texto " SMR - Sistemas Operativos Monopuesto "
--------------------
Hola,  estoy preparando unos apuntes para mis alumnos de grado medio de informática sobre los sistemas informáticos. De momento tengo esta propuesta en formato mkdocs, me la podrias ampliar para incluir información sobre la arquitectura Von Neuman y sus componentes.



## RA1: Genérico a todos los S.O. (10 horas)
Este módulo sienta las bases de los sistemas operativos, cubriendo conceptos fundamentales aplicables a cualquier entorno.

1.1. Elementos funcionales de un sistema informático

Hardware (CPU, memoria, almacenamiento, periféricos).

Software (sistema operativo, aplicaciones, drivers).

Interacción hardware-software.

1.2. Sistemas de representación de la información

Sistemas de numeración (binario, octal, decimal, hexadecimal).

Codificación de caracteres (ASCII, Unicode).

Representación de datos.

1.3. Procesos y sus estados

Concepto de proceso y programa.

Estados de un proceso (nuevo, listo, ejecución, bloqueado, terminado).

Gestión de procesos.

1.4. Estructura y organización del sistema de archivos

Concepto de sistema de archivos.

Tipos de sistemas de archivos (FAT, NTFS, ext4, etc.).

Jerarquía de directorios y archivos.

Rutas absolutas y relativas.

1.5. Atributos de archivos y directorios

Propiedades básicas (tamaño, fecha de creación/modificación).

Atributos especiales (oculto, solo lectura, archivo).

1.6. Permisos de archivos y directorios

Concepto de permisos de acceso.

Modelos de permisos (propietario, grupo, otros).

Aplicación y modificación de permisos.

1.7. Sistemas transaccionales y selección de sistemas de archivos

Introducción a los sistemas transaccionales.

Impacto en la integridad y fiabilidad de los datos.

Consideraciones al seleccionar un sistema de archivos.

## RA2: Instalación de Sistemas Operativos (10 horas)  Pendiente ampliar primeros apartados quiza relanzar otra vez con
Este módulo se centra en el proceso de instalación de sistemas operativos, desde la planificación hasta la actualización.

2.1. Funciones del sistema operativo

Gestión de recursos (CPU, memoria, E/S).

Gestión de procesos.

Gestión de archivos.

Interfaz de usuario.

2.2. Arquitectura del sistema operativo

Núcleo (kernel), shell y utilidades.

Modo usuario y modo núcleo.

2.3. Verificación de la idoneidad del hardware

Requisitos mínimos del sistema (RAM, CPU, espacio en disco).

Compatibilidad de componentes.

2.4. Selección del sistema operativo

Criterios de selección (licencia, requisitos, compatibilidad de software, preferencias del usuario).

Sistemas operativos libres y propietarios.

2.5. Elaboración de un plan de instalación

Particionado del disco.

Creación de medios de instalación (USB booteable, DVD).

Copia de seguridad de datos.

2.6. Configuración de parámetros básicos de la instalación

Idioma, zona horaria, teclado.

Creación de usuarios y contraseñas.

Configuración de red básica.

2.7. Configuración de un gestor de arranque

Concepto de gestor de arranque (GRUB, Windows Boot Manager).

Instalación y configuración para sistemas multiarranque.

2.8. Incidencias de la instalación

Errores comunes y su resolución.

Herramientas de diagnóstico.

2.9. Normas de utilización del software (licencias)

Tipos de licencias (GPL, EULA, freeware, shareware).

Importancia del cumplimiento de las licencias.

2.10. Actualización del sistema operativo

Importancia de las actualizaciones de seguridad y funcionales.

Procedimientos de actualización.

## RA5: Creación de Máquinas Virtuales (10 horas)
Este módulo introduce a los estudiantes en el mundo de la virtualización, un concepto clave en la informática moderna.

5.1. Diferencia entre máquina real y máquina virtual

Concepto de virtualización.

Hardware físico vs. hardware virtualizado.

5.2. Ventajas e inconvenientes de la utilización de máquinas virtuales

Aislamiento, portabilidad, ahorro de hardware, pruebas de software.

Rendimiento, requisitos de recursos.

5.3. Instalación de software para la creación de máquinas virtuales

Hipervisores tipo 1 (ej. VMware ESXi, Hyper-V - conceptual).

Hipervisores tipo 2 (ej. VirtualBox, VMware Workstation Player).

Instalación y configuración básica de VirtualBox.

5.4. Creación de máquinas virtuales a partir de sistemas operativos libres y propietarios

Creación de MV para Windows.

Creación de MV para Linux.

Consideraciones de recursos (RAM, CPU, disco).

5.5. Configuración de máquinas virtuales

Configuración de red (NAT, Puente, Red Interna).

Dispositivos virtuales (CD/DVD, USB, tarjetas de red).

Carpetas compartidas.

5.6. Relación de la máquina virtual con el sistema operativo anfitrión

Comunicación entre anfitrión y huésped.

Herramientas de integración (Guest Additions en VirtualBox).

5.7. Pruebas de rendimiento del sistema

Monitorización del uso de recursos.

Comparación de rendimiento entre MV y sistema real (conceptual).

## RA1 Windows: Sistemas de Archivos y Fundamentos (15 horas)
Profundización en los conceptos del RA1 aplicados específicamente a entornos Windows.

1.1. Estructura y organización del sistema de archivos en Windows

Unidades, carpetas y archivos.

Sistema de archivos NTFS: características y ventajas.

Sistema de archivos FAT32: diferencias y limitaciones.

1.2. Atributos de archivos y directorios en Windows

Atributos comunes (solo lectura, oculto, sistema, comprimido, cifrado).

Gestión de atributos desde el explorador de archivos.

1.3. Permisos NTFS

Concepto de permisos a nivel de archivo y carpeta.

Tipos de permisos (lectura, escritura, ejecución, modificación, control total).

Herencia de permisos.

Modificación de permisos y propiedad.

1.4. Identificación y descripción de los elementos funcionales de un sistema informático en el entorno Windows

Administrador de tareas: procesos, rendimiento, historial de aplicaciones.

Visor de eventos: tipos de eventos y su interpretación.

Información del sistema.

## RA3 Windows: Configuración Básica (15 horas)
Tareas de configuración y personalización del sistema operativo Windows.

3.1. Interfaces de usuario de Windows

Escritorio, menú Inicio, barra de tareas.

Explorador de archivos.

Panel de control y Configuración.

3.2. Preferencias de configuración del entorno personal

Fondos de pantalla, temas, sonidos, salvapantallas.

Configuración regional e idioma.

Cuentas de usuario y opciones de inicio de sesión.

3.3. Gestión de sistemas de archivos específicos en Windows

Formateo de unidades (NTFS, FAT32).

Comprobación de errores de disco (chkdsk).

Desfragmentación y optimización de unidades.

3.4. Métodos para la recuperación del sistema operativo

Puntos de restauración del sistema.

Restauración del sistema.

Copia de seguridad y restauración (archivos y sistema).

Modo seguro.

3.5. Configuración para la actualización del sistema operativo

Windows Update: configuración y gestión de actualizaciones.

Actualizaciones de drivers.

3.6. Operaciones de instalación/desinstalación de utilidades

Instalación de programas (setup.exe, tienda de aplicaciones).

Desinstalación de programas.

Gestión de programas de inicio.

3.7. Asistentes de configuración del sistema

Configuración de red (adaptadores, IP, DNS).

Añadir dispositivos e impresoras.

3.8. Automatización de tareas del sistema

Programador de tareas: creación y gestión de tareas programadas.

Scripts básicos (batch).

## RA4 Windows: Administración y Optimización (15 horas)
Operaciones avanzadas de administración y optimización del rendimiento en Windows.

4.1. Configuración de perfiles de usuario y grupo en Windows

Cuentas de usuario locales.

Grupos locales (Administradores, Usuarios, Invitados).

Gestión de usuarios y grupos.

4.2. Herramientas gráficas para la organización de archivos del sistema

Explorador de archivos avanzado.

Administrador de discos: particionado, asignación de letras de unidad.

4.3. Actuación sobre los procesos del usuario

Administrador de tareas: finalizar tareas, establecer prioridad.

Monitor de recursos.

4.4. Actuación sobre los servicios del sistema

Servicios de Windows: inicio, detención, tipo de inicio.

Dependencias de servicios.

4.5. Optimización de la memoria disponible

Gestión de la memoria virtual (archivo de paginación).

Programas de optimización de memoria (conceptual).

4.6. Análisis de la actividad del sistema (trazas)

Visor de eventos: análisis de registros de seguridad, sistema, aplicación.

Monitor de rendimiento.

4.7. Optimización del funcionamiento de los dispositivos de almacenamiento

Desfragmentación (HDD).

Optimización de unidades (SSD).

Limpieza de disco.

4.8. Reconocimiento y configuración de recursos compartibles

Compartir carpetas y archivos en red.

Permisos de compartición vs. permisos NTFS.

Acceso a recursos compartidos.

4.9. Interpretación de la información de configuración del sistema operativo

Comandos de línea de comandos (ipconfig, systeminfo, tasklist).

Registro de Windows (regedit - conceptual, con precauciones).

## RA1 Linux: Sistemas de Archivos y Fundamentos (15 horas)
Profundización en los conceptos del RA1 aplicados específicamente a entornos Linux.

1.1. Estructura y organización del sistema de archivos en Linux

Sistema de directorios (/, /home, /etc, /var, /bin, /usr, /opt, /dev, /proc, /mnt, /media).

Tipos de sistemas de archivos (ext2, ext3, ext4, XFS, Btrfs).

Inodos y bloques.

1.2. Atributos de archivos y directorios en Linux

Atributos extendidos (chattr).

Enlaces duros y blandos (ln).

1.3. Permisos en Linux

Modelo de permisos (rwx para propietario, grupo, otros).

Permisos numéricos (octal).

Comandos chmod, chown, chgrp.

Sticky bit, SGID, SUID.

1.4. Identificación y descripción de los elementos funcionales de un sistema informático en el entorno Linux

Comandos básicos de sistema (df, du, free, top, ps).

Archivos de log (/var/log).

## RA3 Linux: Configuración Básica (15 horas)
Tareas de configuración y personalización del sistema operativo Linux.

3.1. Interfaces de usuario de Linux

Entornos de escritorio (GNOME, KDE, XFCE, MATE).

Terminal de comandos (CLI).

3.2. Preferencias de configuración del entorno personal

Temas, fondos, iconos.

Configuración regional e idioma.

Gestión de usuarios y grupos (useradd, usermod, groupadd).

3.3. Gestión de sistemas de archivos específicos en Linux

Montaje y desmontaje de unidades (mount, umount).

Formateo de particiones (mkfs).

Comprobación y reparación de sistemas de archivos (fsck).

3.4. Métodos para la recuperación del sistema operativo

Modo de recuperación (recovery mode).

Uso de Live USB para reparación.

Copia de seguridad (tar, rsync).

3.5. Configuración para la actualización del sistema operativo

Gestores de paquetes (apt, yum, dnf, pacman).

Actualización del sistema y paquetes.

3.6. Operaciones de instalación/desinstalación de utilidades

Instalación de paquetes (apt install, dnf install).

Desinstalación de paquetes (apt remove, dnf remove).

Compilación de software desde código fuente (conceptual).

3.7. Asistentes de configuración del sistema

Configuración de red (NetworkManager, netplan, ifconfig).

Gestión de impresoras y dispositivos.

3.8. Automatización de tareas del sistema

Cron: creación y gestión de tareas programadas.

Scripts de shell (bash scripting básico).

## RA4 Linux: Administración y Optimización (15 horas)
Operaciones avanzadas de administración y optimización del rendimiento en Linux.

4.1. Configuración de perfiles de usuario y grupo en Linux

Administración avanzada de usuarios y grupos.

Permisos sudo.

4.2. Herramientas de línea de comandos para la organización de archivos del sistema

Comandos ls, cd, cp, mv, rm, mkdir, rmdir.

Comandos find, locate, grep.

Editor de texto (nano, vi/vim básico).

4.3. Actuación sobre los procesos del usuario

Comandos ps, top, htop.

kill, killall.

Gestión de trabajos en segundo plano (bg, fg, jobs).

4.4. Actuación sobre los servicios del sistema

systemd (systemctl): inicio, detención, habilitación de servicios.

SysVinit (service): conceptual.

4.5. Optimización de la memoria disponible

Configuración de la partición swap.

Liberar caché.

4.6. Análisis de la actividad del sistema (trazas)

Archivos de log (/var/log/syslog, /var/log/auth.log, etc.).

Comando journalctl.

4.7. Optimización del funcionamiento de los dispositivos de almacenamiento

Uso de du, df para analizar espacio.

Monitorización de I/O.

4.8. Reconocimiento y configuración de recursos compartibles

Compartir directorios con Samba (conceptual).

Montaje de unidades de red (NFS, SMB).

4.9. Interpretación de la información de configuración del sistema operativo

Archivos de configuración comunes (/etc/fstab, /etc/network/interfaces, etc.).

Comandos de diagnóstico de red (ping, ip a, route).

Este temario proporciona una base sólida para que los alumnos de grado medio comprendan y trabajen con sistemas operativos monopuesto, tanto en entornos Windows como Linux, además de familiarizarse con la virtualización. Cada módulo está diseñado para cubrir los criterios de evaluación de los Resultados de Aprendizaje correspondientes.