# Actividad Práctica de Repaso: Administración y Optimización de Linux

Esta actividad práctica te guiará a través de tareas reales en un sistema Linux para repasar los conceptos del Tema 9. Ejecuta cada tarea en orden y documenta los comandos utilizados, salidas y observaciones. Asegúrate de tener permisos de administrador (sudo) donde sea necesario.

## Preparación

- Abre una terminal en tu sistema Linux (o máquina virtual).
- Crea un directorio para la actividad: `mkdir ~/actividad_linux && cd ~/actividad_linux`
- Crea algunos archivos de prueba: `touch archivo1.txt archivo2.log script.sh`

## 1. Gestión de Usuarios y Grupos

1.1. Crea un nuevo usuario llamado `testuser` con directorio home y shell bash.
   
1.2. Crea un grupo llamado `testgroup` y añade `testuser` a él como grupo secundario.

1.3. Cambia la contraseña de `testuser` usando `passwd`.

1.4. Verifica la información del usuario en `/etc/passwd` y los grupos en `/etc/group`.

1.5. Elimina el usuario `testuser` y el grupo `testgroup`.

## 2. Búsqueda de Archivos

2.1. Usa `find` para buscar todos los archivos `.txt` en tu directorio home.

2.2. Busca archivos modificados en las últimas 24 horas en `/var/log`.

2.3. Usa `locate` para encontrar el archivo `passwd`.

2.4. Actualiza la base de datos de `locate` con `updatedb` (puede requerir sudo).

2.5. Usa `grep` para buscar la palabra "error" en `/var/log/syslog` (o el log equivalente en tu distribución).

## 3. Gestión de Procesos

3.1. Ejecuta `ps aux` y explica qué significa cada columna.

3.2. Abre `top` y observa los procesos. Ordena por uso de CPU y memoria. Mata un proceso no esencial (como un navegador) usando `k`.

3.3. Instala `htop` si no está instalado (`sudo apt install htop` o equivalente) y compáralo con `top`.

3.4. Ejecuta un comando largo en segundo plano: `sleep 300 &`

3.5. Usa `jobs` para ver trabajos en segundo plano, `bg` para reanudar si está detenido, y `fg` para traerlo al frente.

3.6. Usa `kill` para terminar el proceso `sleep`.

## 4. Gestión de Servicios

4.1. Lista todos los servicios con `systemctl list-units --type=service`.

4.2. Verifica el estado de un servicio común como `ssh` o `apache2` (instálalo si no está).

4.3. Detén, reinicia y vuelve a iniciar el servicio.

4.4. Habilita el servicio para que inicie automáticamente en el arranque.

## 5. Optimización de Memoria

5.1. Verifica el uso de swap con `swapon --show` y `free -h`.

5.2. Crea un archivo swap de 512MB (sigue los pasos del documento).

5.3. Activa el swap y verifica que aparezca en `free -h`.

5.4. Desactiva y elimina el archivo swap.

5.5. Verifica el valor de `swappiness` y cámbialo temporalmente a 10.

5.6. Libera la caché de memoria con el comando del documento.

## 6. Análisis de Logs

6.1. Explora el directorio `/var/log` y lista los archivos principales.

6.2. Usa `tail -f /var/log/syslog` para ver logs en tiempo real (presiona Ctrl+C para salir).

6.3. Usa `journalctl` para ver logs desde el último arranque.

6.4. Filtra logs de un servicio específico con `journalctl -u nombre_servicio`.

## 7. Análisis de Almacenamiento

7.1. Usa `df -h` para ver el uso de disco.

7.2. Usa `du -sh` en varios directorios para ver su tamaño.

7.3. Instala `iotop` si no está y ejecútalo para ver I/O de procesos.

## 8. Configuración de Red

8.1. Usa `ip a` para ver interfaces de red.

8.2. Usa `ping` para probar conectividad a un sitio web.

8.3. Usa `ss -tunl` para ver puertos abiertos.

8.4. Usa `dig` para resolver un dominio.

## 9. Tarea Final

Crea un script llamado `check_system.sh` que haga lo siguiente:
- Muestre la fecha y hora actuales.
- Liste los usuarios conectados.
- Muestre el uso de CPU y memoria con `top` (solo una captura, no interactivo).
- Verifique si un servicio está activo.
- Muestre los últimos 10 logs del sistema.

Ejecuta el script y verifica que funcione.

## Entrega

Documenta todos los comandos ejecutados, las salidas importantes y cualquier problema encontrado. Explica brevemente qué aprendiste en cada sección. ¡Practica hace al maestro!