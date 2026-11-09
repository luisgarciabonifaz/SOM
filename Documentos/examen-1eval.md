# Examen 1ª Evaluación — Sistemas Operativos Monopuesto

**UT1** Introducción a los SO y sistemas de archivo · **UT2** Hardware y requisitos de instalación · **UT3** Virtualización

**Alumno/a:** ______________________________  **Fecha:** ____________  **Grupo:** ________

## Instrucciones

- Duración recomendada: **90 minutos**.
- **Parte A (test):** 10 preguntas, una sola respuesta correcta. Acierto **+1,0**; error **−0,25**; en blanco **0**. Máximo 10 puntos.
- **Parte B (desarrollo breve):** 20 preguntas, **1 punto** cada una (máximo 20 puntos). Responde en un máximo de 4-5 líneas. Se valora el razonamiento, no solo el resultado.
- **Calificación final** = (Parte A + Parte B) / 3. Máximo 10.
- No se permite el uso de apuntes ni dispositivos.

---

## PARTE A — Test (10 puntos)

**1.** Un técnico inicializa un disco nuevo de 4 TB con esquema **MBR**, crea una única partición y comprueba que solo puede usar unos 2 TB. ¿Cuál es la explicación y la solución?

- A) El disco reserva automáticamente la mitad del espacio para sectores de repuesto; no tiene solución.
- B) MBR no puede direccionar discos de más de 2 TB; hay que usar GPT (que en un disco de arranque va asociado a UEFI).
- C) NTFS limita los volúmenes a 2 TB; basta con formatear en exFAT.
- D) Falta el driver del disco; instalándolo se verá el espacio completo.

**2.** Quieres copiar un vídeo de 6 GB a un pendrive de 64 GB con 40 GB libres y el sistema responde que no hay espacio suficiente. El pendrive debe poder usarse tanto en Windows como en Linux sin instalar software adicional. ¿Qué es lo más adecuado?

- A) Formatearlo en ext4, porque es el sistema con mejor rendimiento.
- B) Mantener FAT32 y reducir el tamaño de la partición para que el sistema "vea" más espacio libre.
- C) Formatearlo en exFAT.
- D) Formatearlo en FAT16, que es más antiguo y por tanto más compatible.

**3.** Se va la luz mientras dos equipos escriben datos en disco: uno usa **ext4** y el otro **FAT32**. Al reiniciar, ¿qué afirmación es la más correcta?

- A) ext4 puede consultar su registro (journal) para devolver la estructura del sistema de archivos a un estado consistente sin revisar todo el disco, aunque no garantiza que el archivo que se estaba escribiendo esté completo.
- B) ext4 garantiza que el archivo que se estaba escribiendo se habrá guardado entero.
- C) FAT32 usa journaling, pero ext4 no, por eso ext4 es más lento.
- D) Ninguno de los dos puede sufrir inconsistencias porque el SO siempre vacía los buffers antes de apagarse.

**4.** Un proceso que está **en ejecución** solicita leer un fichero grande del disco. ¿Cuál es la evolución de estados más razonable?

- A) En ejecución → Terminado → Listo → En ejecución.
- B) En ejecución → Listo → Bloqueado → Terminado.
- C) En ejecución → Bloqueado → En ejecución (en cuanto llegan los datos, sin pasar por ningún otro estado).
- D) En ejecución → Bloqueado (esperando la E/S) → Listo (cuando llegan los datos) → En ejecución (cuando el planificador le asigna CPU).

**5.** Un equipo con 4 GB de RAM va muy lento al abrir muchas pestañas y programas. El Administrador de tareas muestra la **CPU al 15 %**, la **RAM al 98 %** y el **disco al 100 %** de actividad. ¿Cuál es el diagnóstico más probable y la mejora más efectiva?

- A) CPU insuficiente; sustituirla por una con más núcleos.
- B) Uso intensivo de memoria virtual (paginación/*thrashing*) por falta de RAM; ampliar la RAM o reducir los programas abiertos.
- C) Disco con particionado MBR; convertirlo a GPT.
- D) Falta de drivers; reinstalar los controladores de la placa base.

**6.** En el portátil de un alumno hay tres VMs en VirtualBox con servicios en marcha. Windows (el host) se reinicia de forma inesperada por una actualización. ¿Qué ocurre con las VMs y por qué?

- A) Dejan de ejecutarse, porque VirtualBox es un hipervisor de tipo 2 y depende del SO anfitrión.
- B) Siguen funcionando, porque las VMs están aisladas del host.
- C) Se migran automáticamente a otro equipo de la red.
- D) Solo se detienen las VMs configuradas en modo puente.

**7.** Necesitas tres VMs que se comuniquen entre sí y tengan salida a Internet, pero que **no sean accesibles desde otros equipos de la red física del aula**. ¿Qué tipo de red virtual de VirtualBox usas?

- A) NAT (uno por cada VM).
- B) Red interna.
- C) NAT Network.
- D) Adaptador puente.

**8.** Has creado cinco VMs mediante **clonación enlazada** a partir de una VM base. Por un fallo, se corrompe el disco virtual de la VM base. ¿Qué ocurre?

- A) Solo se ve afectada la VM base; los clones son independientes.
- B) Los clones conservan todo lo que hicieron desde que se crearon y se pueden reparar solos.
- C) Solo se pierden los cambios hechos después del clonado.
- D) Los clones también dejan de funcionar, porque solo guardan las diferencias respecto al disco base.

**9.** Tu equipo tiene 250 GB libres. Creas 4 VMs, cada una con un disco virtual de **tamaño dinámico y 100 GB máximos**. Al principio todo va bien. ¿Cuál es el riesgo principal?

- A) Los discos dinámicos no se pueden usar con más de una VM a la vez.
- B) Se ha comprometido más espacio del que existe: si las VMs crecen, el disco del host puede llenarse y las VMs pausarse o fallar.
- C) Un disco dinámico es siempre más lento que uno fijo en el primer arranque, pero nunca crece más de la cuenta.
- D) El riesgo es nulo: el sistema impide crear discos cuya suma supere el espacio libre.

**10.** Descargas la ISO de una distribución Linux y, al calcular su SHA256, el resultado **no coincide** con el publicado en la web oficial. ¿Cuál es la actuación más sensata?

- A) Usarla igualmente; los checksums suelen diferir según el sistema operativo desde el que se calculen.
- B) Grabarla en el USB y probarla; si arranca, es válida.
- C) No usarla, volver a descargarla y, si el problema persiste, sospechar de un origen manipulado.
- D) Renombrar la ISO para que el sistema recalcule el checksum.

---

## PARTE B — Desarrollo breve (20 puntos, 1 punto cada una)

### Bloque UT1

**11.** En la arquitectura Von Neumann, ¿por qué instalar una CPU mucho más rápida no mejora proporcionalmente el rendimiento si la memoria y el bus siguen igual? Explica qué problema se produce y qué papel tiene la memoria caché.

**12.** Un programa se "cuelga" y deja de responder, pero el resto del sistema sigue funcionando con normalidad. ¿Qué función del SO lo hace posible? ¿Qué ocurriría si el SO no aislara la memoria de los procesos?

**13.** Un equipo con 8 GB de RAM ejecuta programas que, en conjunto, necesitan 12 GB. ¿Cómo es posible? Explica el mecanismo y cuál es el coste de depender de él.

**14.** Un empleado de Contabilidad puede iniciar sesión en el servidor, pero recibe "Acceso denegado" al abrir la carpeta de Dirección. Distingue autenticación y autorización e indica cuál de las dos ha tenido éxito y cuál ha fallado.

**15.** Explica con un ejemplo la diferencia entre **disco, partición y volumen**. ¿Puede un volumen ocupar más de un disco físico? ¿Cómo?

**16.** Un disco MBR ya tiene 4 particiones primarias y se necesita una quinta. ¿Es posible crearla tal cual? Propón dos formas de resolverlo y menciona un inconveniente de cada una.

**17.** Elige y justifica el sistema de archivos más adecuado en cada caso: (a) disco de un servidor Windows que gestiona permisos por departamento; (b) tarjeta SD de 128 GB para intercambiar vídeos de 8 GB entre Windows, Linux y una cámara moderna; (c) disco de datos de un servidor Linux.

### Bloque UT2

**18.** Un equipo con UEFI no arranca desde un USB creado con Rufus usando esquema MBR para BIOS. Explica por qué puede ocurrir y cómo lo corregirías.

**19.** Un equipo tiene 8 GB de RAM y se instala un SO de 32 bits. ¿Qué ocurrirá con la memoria? ¿Se podría instalar un SO de 64 bits en cualquier CPU? Razona la respuesta.

**20.** Una empresa debe instalar el mismo SO en 80 equipos nuevos. Compara instalar con USB booteable frente a instalación por red (PXE) y recomienda una opción justificando.

**21.** El checksum de una ISO coincide con el publicado en la misma web desde la que la descargaste. ¿Qué garantiza esto y qué **no** garantiza? Piensa en un escenario en el que la verificación no te protegería.

**22.** Un cliente quiere pasar su equipo a una versión más reciente del SO conservando sus datos y programas. ¿Qué tipo de instalación sería? Indica una ventaja y un inconveniente frente a una instalación limpia, y una tarea previa imprescindible.

### Bloque UT3

**23.** Una empresa quiere consolidar 20 servidores en un único equipo físico potente, priorizando el rendimiento y la estabilidad. ¿Qué tipo de hipervisor recomendarías? ¿Por qué VirtualBox no sería la mejor opción en ese caso?

**24.** Tu equipo tiene 16 GB de RAM y 4 núcleos. Quieres ejecutar a la vez 4 VMs con 6 GB de RAM y 2 núcleos cada una. Analiza si es viable y propón un reparto de recursos razonable.

**25.** VirtualBox solo te permite crear VMs de 32 bits aunque tu equipo es de 64 bits, o no arranca una VM con un error de virtualización por hardware. ¿Cuál es la causa más probable y cómo la comprobarías y resolverías?

**26.** Un compañero afirma: "No necesito hacer copias de seguridad de mi VM porque tengo snapshots". Razona por qué se equivoca.

**27.** Necesitas 10 VMs idénticas para una práctica en el aula, con poco espacio en disco. Compara clonación completa y enlazada y decide cuál usarías, indicando el riesgo que aceptas.

**28.** Para cada escenario indica el tipo de red de VirtualBox más adecuado y justifícalo: (a) una VM que solo necesita navegar por Internet; (b) un laboratorio de VMs totalmente aislado, sin salida a Internet; (c) una VM que debe ser visible en la red del aula como un equipo más.

**29.** Quieres intercambiar archivos entre el host y una VM sin usar red ni USB. ¿Qué funcionalidad usarías? ¿Qué requisito debe cumplir la VM y qué pasaría si no lo cumple?

**30.** Con la infraestructura de TechPyme (VM-WIN y VM-LINUX en modo puente), un alumno no consigue hacer *ping* desde su equipo físico a su VM. Enumera, ordenadas de más a menos probables, tres posibles causas y cómo comprobarías cada una.

---

*Fin del examen.*
