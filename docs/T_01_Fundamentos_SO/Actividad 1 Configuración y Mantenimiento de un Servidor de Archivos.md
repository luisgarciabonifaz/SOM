<p style="text-align: center; font-size: 32px;">CIPFP Mislata</p>

<p style="text-align: center; font-size: 18px;">Luis García Bonifaz - l.garciabonifaz@edu.gva.es</p>
<p style="text-align: center; font-size: 24px;">SOM  Fundamentos de los Sistemas Operativos</p>

---

<p style="text-align: left; font-size: 24px;">Actividad 1</p>

---



### Actividad 1: Configuración y Mantenimiento de un Servidor de Archivos

**Objetivo:**
Repasar y aplicar conceptos avanzados de sistemas operativos relacionados con la arquitectura, la gestión de procesos, la codificación de información y, especialmente, la administración de sistemas de archivos y permisos en un entorno de servidor.

**Escenario:**
Eres el nuevo administrador de sistemas en una pequeña startup. Tu primera tarea es configurar un servidor de archivos para la oficina, que será utilizado por todos los empleados, y asegurar que la información esté organizada, sea accesible para los usuarios correctos y protegida contra fallos.

#### Parte 1: Fundamentos del Hardware y la Arquitectura del Servidor

El servidor que te han asignado es una máquina robusta con múltiples procesadores y mucha memoria.

1. Un procesador moderno tiene varios "núcleos", y cada núcleo es como una pequeña CPU. Pensando en la arquitectura Von Neumann, ¿qué dos componentes principales se repiten dentro de cada uno de esos núcleos?
2. La CPU necesita constantemente buscar instrucciones y datos en la memoria RAM para poder trabajar. ¿Por qué es fundamental que la RAM sea muy rápida para que el servidor funcione de forma ágil, especialmente cuando usa programas o archivos muy pesados?
3. Los códigos de error de un servidor suelen ser números binarios muy largos, pero se nos muestran en formato hexadecimal. Para un técnico, ¿por qué es mucho más cómodo y práctico leer estos códigos en hexadecimal en lugar de en binario?

#### Parte 2: Gestión de Procesos y Codificación de Datos en el Servidor

El servidor ejecutará varios servicios críticos, como un servidor web y un servicio de sincronización de archivos.

1. Cuando inicias el servicio de sincronización de archivos en el servidor, ¿cuáles son los dos estados iniciales por los que pasa su proceso antes de que comience a funcionar activamente? Si el servicio necesita esperar a que un archivo grande se transfiera por la red antes de poder procesarlo, ¿en qué estado se encontraría el proceso?
2. Define la diferencia clave entre un "programa" y un "proceso", usando como ejemplo el software del servidor web que está instalado pero no siempre activo en el servidor, en contraste con cuando recibe una solicitud y genera una instancia de ejecución.
3. Algunos usuarios de la empresa utilizan software heredado y están reportando que los nombres de los archivos en el servidor con caracteres especiales (como "año" o "información") aparecen corruptos. ¿Qué estándar de codificación de caracteres es probable que esté causando este problema (el antiguo), y cuál estándar moderno deberías asegurar que se use en el servidor para garantizar la compatibilidad global y evitar estos problemas?

#### Parte 3: Configuración Avanzada del Sistema de Archivos y Seguridad

Debes formatear los discos del servidor y configurar las carpetas compartidas con la seguridad adecuada.

1. El sistema operativo del servidor será Linux. Para la partición principal donde se almacenarán los datos críticos, ¿qué tipo de sistema de archivos recomendarías utilizar (de los mencionados en las fuentes para Linux)? Explica dos razones clave por las que este sistema de archivos es una elección robusta para un servidor, haciendo énfasis en la fiabilidad.
2. Explica en detalle cómo la técnica de **Journaling** en el sistema de archivos que elegiste en la pregunta anterior contribuye a la consistencia y seguridad del sistema de archivos del servidor, incluso si hay un apagón inesperado. Relaciona esta explicación con la propiedad **Atómica** de las transacciones.
3. La carpeta compartida para el departamento de Marketing se encuentra en `/srv/shares/Marketing`.
   - Si tu "directorio de trabajo" actual es `/srv`, proporciona la ruta **relativa** para acceder a un subdirectorio llamado `Campañas` dentro de `Marketing`.
   - Si tu directorio de trabajo fuera `/`, proporciona la ruta **absoluta** al mismo subdirectorio `Campañas`.
4. La carpeta `/srv/shares/Marketing` debe tener permisos para que:
   - Solo el **Propietario** (el administrador) pueda leer, escribir y ejecutar (entrar en el directorio).
   - Los miembros del **Grupo** `marketing_group` puedan leer y escribir archivos, pero no borrar la carpeta en sí (es decir, puedan leer y escribir, y ejecutar para entrar).
   - **Otros** usuarios no puedan acceder a la carpeta ni a su contenido de ninguna manera.
   - Si el sistema operativo es Linux, especifica los tipos de permisos (Lectura, Escritura, Ejecución) que asignarías a cada categoría (Propietario, Grupo, Otros) para este directorio.
5. Un archivo de configuración crucial del sistema operativo del servidor debe ser visible solo por administradores y no por usuarios normales que exploren los directorios del sistema.
   - ¿Qué atributo especial de archivo (común en varios SO) podrías usar para lograr que este archivo **no se muestre por defecto** en el explorador de archivos?
   - ¿Qué otro atributo indica que un archivo ha sido **modificado desde la última vez que se hizo una copia de seguridad**, siendo útil para los programas de respaldo?