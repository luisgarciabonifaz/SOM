<p style="text-align: center; font-size: 32px;">CIPFP Mislata</p>

<p style="text-align: center; font-size: 18px;">Luis García Bonifaz - l.garciabonifaz@edu.gva.es</p>
<p style="text-align: center; font-size: 24px;">SOM  EXAMEn Ev 2 RA 1</p>


---

##  Examen Práctico

### Contexto (Factoria)
Vas a preparar un PC para una Factoria con dos departamentos: **Ventas** y **RRHH**. 
Debes crear estructura, usuarios, permisos y una automatizació y una evidencia del sistema.

---

### P1. Estructura de carpetas y atributos (2 puntos) -->  RA1

Crea un script de PowerShell para:

1) En `C:\Factoria\` crea estas carpetas: 
- `C:\Factoria\Ventas` 
- `C:\Factoria\RRHH` 
- `C:\Factoria\Publico`

2) Crea dentro de `C:\Factoria\Publico` un archivo `Avisos.txt` con el texto "Normas de uso”. 
3) Establece el atributo **Solo lectura** a `Avisos.txt`. 
4) Haz **oculta** la carpeta `RRHH`.

**Capturas obligatorias:**

- P1_01: Vista del Explorador mostrando la estructura de carpetas.
- P1_02: Propiedades de `Avisos.txt`
- P1_03: Captura del script

---

### P2. Estructura adicional y atributos (2 puntos) -->  RA1

Crea un script de PowerShell para:

1) En `C:\Factoria\` crea estas carpetas:
- `C:\Factoria\Plantillas`
- `C:\Factoria\Ventas\Informes`
- `C:\Factoria\RRHH\Nominas`

2. Crea dentro de `C:\Factoria\Plantillas` un archivo `Plantilla_Solicitud.txt` con el texto **"Plantilla de solicitud"**.  

3. Establece el atributo **Oculto** a `Plantilla_Solicitud.txt`.  

   

**Capturas obligatorias:**

- P2_01: Vista del Explorador mostrando las nuevas carpetas.
- P2_02: Propiedades de `Plantilla_Solicitud.txt`
- P2_03: Propiedades del archivo Plantilla_Solicitud
- P2_04: Captura del script


---

### P3. Permisos NTFS (2 puntos)  -->  RA1

Configura permisos en `C:\Factoria\`:

1) En `Ventas`:
- `GRP_VENTAS`: **Modificar**
- `GRP_RRHH`: **Lectura**

2) En `RRHH`:
- `GRP_RRHH`: **Modificar**
- `GRP_VENTAS`: **Sin acceso** (denegado o no asignado; debe quedar claro que no puede entrar)

3) En `Publico`:
- Ambos grupos: **Lectura y ejecución**
- Verifica que `Avisos.txt` quede **Solo lectura**.

**Requisito (dificultad media):**

- En las tres carpetas, deja solo los permisos necesarios.

**Capturas obligatorias:**

- P3_01: Pestaña “Seguridad” y “Opciones avanzadas” de `Ventas`
- P3_02: Pestaña “Seguridad” y “Opciones avanzadas” de `RRHH`
- P3_03: Pestaña “Seguridad” y “Opciones avanzadas” de `Publico`

---

### P4. Permisos NTFS avanzados (2 puntos)  -->  RA1

Configura permisos en las nuevas rutas:

1) En `Plantillas`:
- `GRP_VENTAS`: **Lectura y ejecución**
- `GRP_RRHH`: **Lectura**

2) En `RRHH\Nominas`:
- `GRP_RRHH`: **Modificar**
- `GRP_VENTAS`: **Sin acceso** (denegado o no asignado; debe quedar claro que no puede entrar)

3) En `Ventas\Informes`:
- `GRP_VENTAS`: **Lectura**
- `GRP_RRHH`: **Modificar**

**Requisito (dificultad media):**

- En las tres carpetas,  deja solo los permisos necesarios.

**Capturas obligatorias:**
- P4_01: Pestaña “Seguridad” y “Opciones avanzadas” de `Plantillas`
- P4_02: Pestaña “Seguridad” y “Opciones avanzadas” de `RRHH\Nominas`
- P4_03: Pestaña “Seguridad” y “Opciones avanzadas” de `Ventas\Informes`


---

### P5. PowerShell (2 punto)  -->  RA1

Abre PowerShell y realiza:

1) En `C:\Factoria\Publico`, crea **3 archivos**: `info1.txt`, `info2.txt`, `info3.txt`
2) Lista solo los `.txt` y redirige la salida a `listado.txt` dentro de `Publico`.
3) Muestra por pantalla el contenido de `listado.txt`.

**Captura obligatoria:**
- P5_01: Consola con los comandos ejecutados y el resultado final.

---

## Entrega 

1. Guarda **capturas** que demuestren la ejecución de cada apartado.
2. Nombra las capturas así: `P1_01`,`P2_01`, `P2_02`, `P3_...`, etc.

