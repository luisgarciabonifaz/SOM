<p style="text-align: center; font-size: 32px;">CIPFP Mislata</p>

<p style="text-align: center; font-size: 18px;">Luis García Bonifaz - l.garciabonifaz@edu.gva.es</p>
<p style="text-align: center; font-size: 24px;">SOM  T01 - Fundamentos de los Sistemas Operativos</p>

---

<p style="text-align: left; font-size: 24px;">Actividad 2</p>

---

### Actividad 2: Administrando el Sistema de Oficina

**Objetivo:**  
Repasar y aplicar los conceptos fundamentales de los sistemas operativos (SO) a través de un escenario práctico de configuración y resolución de problemas.

**Escenario:**  
Eres el nuevo técnico informático en una pequeña empresa. Te han asignado la tarea de configurar un nuevo equipo para un empleado y resolver algunos problemas existentes en la infraestructura de TI.


#### Parte 1: El Nuevo Equipo y su Funcionamiento Interno

Te entregan un ordenador nuevo para un empleado y te piden que expliques brevemente sus componentes principales y cómo funcionan juntos.

1. Describe al menos tres componentes **Hardware** esenciales del nuevo equipo y explica brevemente su función principal. Además, especifica por qué una mayor cantidad de **Memoria RAM** es crucial para manejar múltiples tareas simultáneamente y con fluidez.

2. Menciona el tipo de **Software** principal sin el cual la mayoría de los ordenadores modernos no podrían funcionar, y explica su rol como intermediario entre el usuario/aplicaciones y el hardware. Luego, nombra un ejemplo de **Software de Aplicación** y su propósito.

3. Considerando la **Arquitectura Von Neumann**, ¿en qué componente se almacenan tanto las instrucciones de los programas como los datos que estos necesitan para funcionar? Dentro de la **CPU**, ¿qué subcomponente es el responsable de realizar las operaciones matemáticas y lógicas, y cuál actúa como el "director de orquesta" interpretando instrucciones y coordinando el flujo de datos?

4. Si el usuario del nuevo equipo abre un programa y luego guarda un archivo, describe brevemente las dos fases principales del **Ciclo de Instrucción** que la CPU seguiría para procesar estas acciones (**Fase de Búsqueda** y **Fase de Ejecución**).


#### Parte 2: Manejo de Información y Procesos

El empleado se queja de que una aplicación específica a veces se "congela" o funciona muy lento. Además, tiene problemas con la visualización de caracteres especiales en documentos.

1. Cuando una aplicación se "congela" o no responde, ¿en qué **estado de proceso** es más probable que se encuentre, y por qué? Si el sistema operativo decide terminar ese proceso debido a un error o tú lo cierras manualmente, ¿a qué **estado final** pasaría?

2. Explica la **diferencia fundamental entre un "programa" y un "proceso"** utilizando el ejemplo de la aplicación que se "congela".

3. El empleado recibe un documento donde los acentos y la "ñ" aparecen como símbolos extraños. Para evitar este problema en el futuro y asegurar la compatibilidad con caracteres de todos los idiomas, ¿qué **estándar de codificación de caracteres** recomendarías utilizar, en contraste con uno más antiguo y limitado como **ASCII**?


#### Parte 3: Organización y Seguridad de Archivos

Necesitas configurar una unidad de almacenamiento externa para copias de seguridad y asegurar algunos documentos sensibles.

1. Un empleado necesita un pendrive para transferir archivos entre su equipo de **Windows**, un ordenador antiguo con **Linux** y una **Mac**. ¿Qué tipo de **sistema de archivos** le recomendarías para el pendrive que garantice la mayor compatibilidad entre estos sistemas operativos, especialmente si puede haber archivos muy grandes (más de 4 GB)?

2. Para el disco principal del ordenador del empleado, que usa **Windows** (y, por lo tanto, **NTFS**), explica la importancia de que este sistema de archivos utilice la técnica de **Journaling**. ¿Cómo ayuda el Journaling a asegurar que el sistema de archivos siempre esté en un estado consistente y seguro incluso después de un apagón inesperado? Relaciona esto con el concepto de **transacción** y la propiedad **Atómica**.

3. El empleado guarda sus documentos importantes en la siguiente ubicación:  
   `C:\Users\Empleado\Documentos`  
    - Si tu "directorio de trabajo" actual en la consola es `C:\Users\Empleado`, proporciona un ejemplo de **ruta absoluta** y un ejemplo de **ruta relativa** para acceder a un archivo llamado `informe_ventas.xlsx` que se encuentra dentro de la carpeta `Documentos`.

4. Un archivo confidencial ha sido creado por el empleado. Quiere asegurarse de que solo él (el **Propietario**) pueda ver y modificar el contenido del archivo, y que nadie más en el sistema pueda acceder a él.  
    - Si el sistema operativo es **Linux**, ¿qué tipos de **permisos** (Lectura, Escritura, Ejecución) asignarías específicamente al "Propietario" y qué permisos asignarías a "Otros" para este archivo?

5. Menciona **dos atributos especiales de archivo** (distintos del tamaño o las fechas de modificación/creación) que podrías usar en un sistema **Windows** para:  
    - Hacer que un archivo **no sea visible por defecto** en el explorador de archivos.  
    - Indicar que un archivo ha sido **modificado desde la última copia de seguridad**, lo cual es útil para programas de respaldo.

