<p style="text-align: center; font-size: 32px;">CIPFP Mislata</p>

<p style="text-align: center; font-size: 18px;">Luis García Bonifaz - l.garciabonifaz@edu.gva.es</p>
<p style="text-align: center; font-size: 24px;">SOM  EXAMEn Ev 2 RA 4</p>

---

##  Examen Práctico

### Contexto (Factoria)
Vas a preparar un PC para una Factoria con dos departamentos: **Ventas** y **RRHH**. 
Debes crear estructura, usuarios, permisos y una automatizació y una evidencia del sistema.

> **Evidencias:** realiza **capturas** donde se indique claramente lo solicitado.

---

### P1. Usuarios y grupos locales (2 puntos)  -->  RA4

Crea un script de PowerShell para:

1) Crea usuarios locales:
- `venta1` (cuenta estándar)
- `rrhh1` (cuenta estándar)

2) Crea grupos locales:
- `GRP_VENTAS`
- `GRP_RRHH`

3) Añade:
- `venta1` a `GRP_VENTAS` y a "Usuarios"
- `rrhh1` a `GRP_RRHH` y a "Usuarios"

**Capturas obligatorias:**

- P1_01: Captura del script


---

### P2. Usuarios y grupos locales (ampliación) (2 puntos)  -->  RA4

Crea un **segundo script** de PowerShell para:

1) Crear **dos usuarios locales adicionales**:
- `venta2` (cuenta estándar)
- `rrhh2` (cuenta estándar)

2) Añadirlos a los grupos ya creados:
- `venta2` a `GRP_VENTAS` y a **"Usuarios"**
- `rrhh2` a `GRP_RRHH` y a **"Usuarios"**

3) Verificar por script que la pertenencia a grupos es correcta (muestra en pantalla los miembros de `GRP_VENTAS` y `GRP_RRHH`).

**Capturas obligatorias:**

- P2_01: Captura del script
- P2_02: Salida de PowerShell mostrando los miembros de ambos grupos


---

### P3. Compartición en red (2 punto)   -->  RA4

Comparte `C:\Factoria\Publico` como recurso: **`Publico_Factoria`** 
- Permisos de compartición: `Todos` **Lectura** 

**Capturas obligatorias:**

- P3-01: Pantalla donde se vea el recurso compartido 
- P4-02,03,04,...: Pantallas donde se vean todos los permisos del recurso compartido 

---

### P4. Mantenimiento  (2 punto)  -->  RA4

**Eventos:**

- Abre el **Visor de eventos** y filtra el registro **Sistema** para mostrar solo **Errores** o **Advertencias**.

**Captura obligatoria:**

- P4_01: Captura de pantalla con la evidencia.

### P5. Mantenimiento  (2 punto)  -->  RA4

- Haz que el bloc de notas se abra todos los días al iniciar la sesión

**Captura obligatoria:**

- P5_01,02,...: Capturas de pantalla con la evidencia.

---

## Entrega 

1. Guarda **capturas** que demuestren la ejecución de cada apartado.
2. Nombra las capturas así: `P1_01`,`P2_01`, `P2_02`, `P3_...`, etc.

