# Sesiones de 4 horas

El módulo (120 h) se divide en **33 sesiones**: 27 de 4 horas y 6 de 2 horas. Las seis de 2 horas son la última sesión de las unidades cuya duración (10 o 14 h) no es múltiplo de 4: UT2, UT3, UT5, UT7, UT8 y UT10. Así cada sesión pertenece a una sola unidad. Los exámenes de evaluación no están incluidos. La versión en sesiones de 2 horas está en [Sesiones de 2 horas](sesiones.md).

## 1ª Evaluación (36 h)

| Unidad | Sesión | Duración | Contenido |
|---|---|---|---|
| UT1. Introducción a los SO y sistemas de archivo | 1 | 4 h | 1.1 Conceptos generales: arquitectura Von Neumann, qué es un SO, funciones, clasificación, componentes y panorama de SO actuales |
| UT1 | 2 | 4 h | 1.2 Estructura física y lógica del almacenamiento: dispositivos, HDD, particiones, MBR vs GPT, BIOS/Legacy vs UEFI |
| UT1 | 3 | 4 h | 1.3 Sistemas de archivos (Windows, Linux, journaling, comparativa), 1.4 Gestión de particiones y discos y 1.5 Prácticas |
| UT2. Hardware y requisitos de instalación | 1 | 4 h | 2.1 Hardware desde el punto de vista del SO (componentes, 32 vs 64 bits, drivers) y 2.2 Requisitos de instalación (mínimos, compatibilidad, VT-x / AMD-V) |
| UT2 | 2 | 4 h | 2.3 Medios de instalación (tipos, ISO, booteables, verificación) y 2.4 Planificación de una instalación |
| UT2 | 3 | 2 h | 2.5 Prácticas de la unidad |
| UT3. Virtualización | 1 | 4 h | 3.1 Conceptos de virtualización (host vs guest, hipervisores, ventajas e inconvenientes) y 3.2 Instalación de VirtualBox |
| UT3 | 2 | 4 h | 3.3 Creación y configuración de VM (asistente, recursos, discos virtuales, arranque) y 3.4 Redes en entornos virtualizados |
| UT3 | 3 | 4 h | 3.5 Gestión avanzada: snapshots, clonación, exportación/importación (OVA/OVF) y carpetas compartidas |
| UT3 | 4 | 2 h | 3.6 Prácticas: arranque del proyecto TechPyme |

## 2ª Evaluación (42 h)

| Unidad | Sesión | Duración | Contenido |
|---|---|---|---|
| UT4. Instalación de Windows | 1 | 4 h | 4.1 Preparativos previos y 4.2 Proceso de instalación (arranque, tipo, particionado) |
| UT4 | 2 | 4 h | 4.2 Edición, licencia y progreso, y 4.3 Configuración inicial (OOBE) |
| UT4 | 3 | 4 h | 4.4 Drivers y Guest Additions, 4.5 Actualizaciones y 4.6 Prácticas: instalación de VM-WIN |
| UT5. Configuración básica de Windows + PowerShell | 1 | 4 h | 5.1 Configuración regional y de idioma, y 5.2 Introducción a PowerShell (cmdlets, objetos, pipeline, ayuda, alias, execution policy) |
| UT5 | 2 | 4 h | 5.3 Configuración de red con PowerShell (IP, DNS, nombre del equipo, grupo de trabajo, conectividad) y 5.4 Cuentas y personalización |
| UT5 | 3 | 4 h | 5.5 Herramientas del sistema (Panel de control vs Configuración, registro, gpedit.msc, tareas) y 5.6 Actualizaciones y mantenimiento |
| UT5 | 4 | 2 h | 5.7 Prácticas: configuración de VM-WIN |
| UT6. Administración de Windows | 1 | 4 h | 6.1 Usuarios y grupos locales con PowerShell, estructura de TechPyme y políticas de contraseña |
| UT6 | 2 | 4 h | 6.2 Permisos NTFS: básicos, especiales, permitir vs denegar, herencia, permisos efectivos |
| UT6 | 3 | 4 h | 6.2 Propietario, NTFS vs recurso compartido, permisos con PowerShell y auditoría, y 6.3 Recursos compartidos en red |
| UT6 | 4 | 4 h | 6.4 Discos y almacenamiento, 6.5 Tareas programadas, rendimiento y servicios, 6.6 Copias de seguridad y 6.7 Prácticas: administración de VM-WIN |

## 3ª Evaluación (42 h)

| Unidad | Sesión | Duración | Contenido |
|---|---|---|---|
| UT7. Instalación de Linux | 1 | 4 h | 7.1 Elección de distribución, 7.2 Preparativos de la VM y 7.3 Proceso de instalación (arranque, particionado, sistema de archivos) |
| UT7 | 2 | 4 h | 7.3 Software adicional, usuario y nombre del equipo, 7.4 Primer arranque y 7.5 Guest Additions en Linux |
| UT7 | 3 | 2 h | 7.6 Prácticas: instalación de VM-LINUX |
| UT8. Configuración básica de Linux + Bash | 1 | 4 h | 8.1 Entorno gráfico vs línea de comandos, y 8.2 Terminal: estructura de comandos, ayuda, rutas, navegación y gestión de archivos |
| UT8 | 2 | 4 h | 8.2 Redirección, tuberías, variables de entorno, sudo/root, historial, 8.3 Configuración regional y de teclado, 8.4 Configuración de red y 8.5 Repositorios y actualizaciones |
| UT8 | 3 | 2 h | 8.6 Prácticas: configuración de VM-LINUX |
| UT9. Administración de Linux | 1 | 4 h | 9.1 Usuarios y grupos (comandos, ficheros clave, estructura de TechPyme) y 9.2 Permisos: simbólica y octal, chmod, chown, chgrp |
| UT9 | 2 | 4 h | 9.2 Permisos especiales (SUID, SGID, sticky), umask y ACL, y 9.3 Gestión de paquetes |
| UT9 | 3 | 4 h | 9.4 Procesos y servicios (señales, systemd, journalctl), 9.5 Discos, montaje y fstab, y 9.6 Prácticas: administración de VM-LINUX |
| UT10. Compartición de archivos y cierre del proyecto | 1 | 4 h | 10.1 Compartir archivos entre sistemas, 10.2 Conceptos de Samba y 10.3 VM-LINUX como cliente Samba |
| UT10 | 2 | 4 h | 10.4 Cómo se instalaría un servidor Samba, 10.5 NFS y 10.6 Integración final del proyecto (comprobaciones, matriz de permisos y accesos) |
| UT10 | 3 | 2 h | 10.7 Prácticas: cierre del proyecto TechPyme |
