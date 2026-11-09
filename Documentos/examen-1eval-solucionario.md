# Solucionario — Examen 1ª Evaluación (SOM)

*Documento solo para el profesor. No publicar en `docs/`.*

## Parte A — Test

| Pregunta | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Respuesta | B | C | A | D | B | A | C | D | B | C |

Puntuación: acierto +1, error −0,25, blanco 0 (rango −2,5 a 10). Si se quiere evitar que la Parte A reste, aplicar un mínimo de 0.

| Nº | Justificación | Error típico de los distractores |
|---|---|---|
| 1 | MBR limita a 2 TB; GPT (asociado a UEFI) supera ese límite. | C: confunde límite del esquema de particionado con el del sistema de archivos. |
| 2 | FAT32 limita archivos a 4 GB. exFAT elimina el límite y es compatible con Windows y Linux. | A: ext4 no es nativo en Windows. B: el límite es por archivo, no por espacio. |
| 3 | El journal restablece la consistencia de la estructura, no garantiza el contenido del archivo. FAT32 no tiene journaling. | B: sobrevalora el journaling. C: invierte el hecho. |
| 4 | Bloqueado por E/S → Listo al llegar los datos → En ejecución cuando el planificador lo decide. | C: un proceso nunca pasa de Bloqueado a En ejecución directamente. |
| 5 | CPU baja + RAM y disco al máximo = paginación excesiva (*thrashing*). | A: la CPU está casi ociosa. |
| 6 | Tipo 2 = aplicación sobre el SO anfitrión; si cae el host, caen las VMs. | B: confunde aislamiento entre VMs con independencia del host. |
| 7 | NAT Network: Internet sí, VMs entre sí sí, sin acceso directo desde fuera. NAT simple no comunica VMs; red interna no tiene Internet; puente las expone al aula. | |
| 8 | Un clon enlazado depende del disco base; si se pierde o corrompe, el clon no funciona. | A/B: confunden con clonación completa. |
| 9 | Sobreasignación (*overcommit*): VirtualBox no impide crear discos dinámicos cuya suma supera el espacio libre. | D: falso, VirtualBox lo permite. |
| 10 | Un checksum distinto indica descarga corrupta o archivo alterado. No se usa la ISO. | B: "si arranca" no demuestra integridad. |

## Parte B — Desarrollo breve

Criterio general: 1 punto = respuesta correcta y razonada; 0,5 = idea correcta pero incompleta o sin razonar; 0 = incorrecta o vacía. Los puntos clave son orientativos; se admite cualquier respuesta equivalente bien argumentada.

### UT1

**11.** Instrucciones y datos comparten memoria y bus, así que la CPU no puede leer ambos a la vez (**cuello de botella de Von Neumann**); una CPU rápida pasa mucho tiempo esperando a la RAM. La **caché** guarda datos e instrucciones usados con frecuencia más cerca de la CPU, reduciendo accesos a la RAM.

**12.** **Gestión de procesos y de memoria**: cada proceso tiene su espacio de memoria aislado (protección de memoria), por lo que el fallo de uno no afecta a los demás; el SO puede finalizarlo (`kill` / Finalizar tarea). Sin aislamiento, un proceso podría leer o corromper la memoria de otros o del propio SO, y un fallo podría tumbar todo el sistema.

**13.** **Memoria virtual**: se usa parte del disco como extensión de la RAM (pagefile en Windows, swap en Linux), moviendo páginas entre RAM y disco. Coste: el disco es mucho más lento que la RAM; si se abusa, el rendimiento cae drásticamente (*thrashing*).

**14.** Autenticación = comprobar quién eres (usuario/contraseña): **ha tenido éxito** (inició sesión). Autorización = qué puedes hacer con tus permisos: **ha fallado** (no tiene permiso sobre la carpeta de Dirección).

**15.** Disco = dispositivo físico; partición = división lógica del disco; volumen = unidad formateada y accesible (letra o punto de montaje). Ejemplo: un SSD de 500 GB con dos particiones, cada una formateada y montada como C: y D:. Sí, un volumen puede abarcar varios discos mediante RAID o gestores de volúmenes como LVM.

**16.** No, MBR admite como máximo 4 primarias. Opciones: (1) eliminar una primaria (o ya tener 3) y crear una **extendida** con particiones lógicas dentro; inconveniente: se pierde el contenido de la partición eliminada o hay que reorganizar. (2) **Convertir el disco a GPT** (hasta 128 particiones en Windows); inconveniente: requiere UEFI si es disco de arranque y hay que gestionar la conversión con cuidado. (Cualquier alternativa válida bien razonada.)

**17.** (a) **NTFS**: permisos avanzados (ACL), journaling, nativo de Windows. (b) **exFAT**: sin límite práctico de archivo (>4 GB), compatible con Windows, Linux (con paquete) y dispositivos modernos; FAT32 queda descartado por el límite de 4 GB. (c) **ext4**: estándar en Linux, journaling, permisos POSIX.

### UT2

**18.** Un USB con esquema MBR está preparado para arrancar en modo BIOS/Legacy; un equipo UEFI espera una partición EFI en un disco GPT. Solución: recrear el USB con Rufus eligiendo **GPT para UEFI** (o activar el modo CSM/Legacy en el firmware, solución menos recomendable).

**19.** Un SO de 32 bits solo direcciona unos 4 GB, de modo que parte de los 8 GB quedaría sin usar. Un SO de 64 bits solo se puede instalar si la **CPU es de 64 bits**; la versión del SO debe coincidir con la arquitectura soportada por la CPU.

**20.** PXE es más adecuado para 80 equipos: instalación centralizada por red, sin preparar y grabar USBs uno por uno y sin depender de medios físicos. Requiere infraestructura (servidor PXE/DHCP, red). El USB es válido para pocos equipos o sin infraestructura. Se acepta otra elección si está bien justificada.

**21.** Garantiza que el archivo descargado es **idéntico al que publica esa web** (sin corrupción en la descarga). **No** garantiza que sea legítimo: si la web, o el checksum publicado, estuviesen comprometidos, el atacante habría cambiado ambos. Mitigación: obtener el checksum por un canal independiente o de una fuente oficial distinta.

**22.** **Actualización**. Ventaja: conserva datos, programas y configuración. Inconveniente: arrastra problemas y residuos del sistema anterior y puede fallar con incompatibilidades. Tarea previa imprescindible: **copia de seguridad** de los datos (y comprobar requisitos y compatibilidad).

### UT3

**23.** **Tipo 1 (bare-metal)**, como VMware ESXi, Hyper-V o KVM: se instala directamente sobre el hardware, sin SO intermedio, con menor sobrecarga y menos puntos de fallo. VirtualBox es de tipo 2: depende de un SO anfitrión, que consume recursos y es un punto de fallo adicional.

**24.** No es viable tal cual: 4×6 = 24 GB de RAM > 16 GB, y además el host necesita RAM para su propio SO. 8 núcleos virtuales sobre 4 físicos es posible (se comparten) pero degrada el rendimiento. Reparto razonable: dejar 3-4 GB para el host y asignar unos 3 GB por VM (o ejecutar menos VMs a la vez), con 1-2 núcleos cada una.

**25.** Virtualización por hardware (**VT-x / AMD-V**) desactivada en la BIOS/UEFI. Comprobación en Windows: Administrador de tareas → Rendimiento → CPU → "Virtualización: Habilitada". Solución: entrar en la BIOS/UEFI y activarla.

**26.** Una snapshot **no es una copia independiente**: se almacena junto al disco de la VM y depende del disco base. Si el disco se corrompe, el equipo falla o se borra la VM, se pierde todo, incluidas las snapshots. Para respaldar hay que exportar la VM (OVA) o copiar los ficheros a otro soporte.

**27.** **Clonación enlazada**: cada clon solo guarda las diferencias respecto a un disco base, por lo que ocupa poco espacio. Riesgo: todos dependen de la VM/disco base; si se pierde o corrompe, fallan todos los clones. La clonación completa es independiente pero ocupa 10 veces el espacio.

**28.** (a) **NAT**: sale a Internet a través del host y no queda expuesta. (b) **Red interna**: aislada, solo comunica las VMs conectadas a ella. (c) **Adaptador puente**: la VM obtiene IP en la red física y se ve como un equipo más.

**29.** **Carpetas compartidas** host-VM. Requisito: tener instaladas las **Guest Additions** en la VM. Sin ellas la carpeta compartida no se monta/no es visible desde el invitado.

**30.** Causas orientativas (se acepta otro orden bien razonado): (1) **Firewall** del SO invitado (p. ej. Windows bloquea ICMP): comprobar reglas o desactivarlo temporalmente. (2) **Configuración de red** de la VM (no está en puente, interfaz de puente equivocada, sin IP o en otro rango): revisar los ajustes de VirtualBox y `ip a` / `ipconfig`. (3) **Políticas de red del aula** que impiden el modo puente (por ejemplo, filtrado por MAC o por puerto); comprobar con el profesor y usar *Solo anfitrión* como alternativa.

---

## Cobertura y dificultad

| Unidad | Test | Desarrollo | Total preguntas |
|---|---|---|---|
| UT1 (12 h) | 1, 2, 3, 4, 5 | 11-17 | 12 |
| UT2 (10 h) | 10 | 18-22 | 6 |
| UT3 (14 h) | 6, 7, 8, 9 | 23-30 | 12 |

Las preguntas plantean casos, diagnósticos o decisiones, y no piden recitar definiciones. Si el examen resulta demasiado largo para el tiempo disponible, las preguntas 17, 21, 24 y 28 se pueden convertir en test o eliminar.
