---
title: "Guía didáctica — UT6"
---

# UT6 — Administración de Windows: usuarios, grupos y permisos NTFS

!!! info "Duración"
    **Desde:** 1 de febrero de 2027
    **Hasta:** 7 de marzo de 2027
    **Duración estimada:** 5 semanas (16h)

## Contenido

Esta es la unidad de mayor peso de la segunda evaluación y cierra el bloque de administración de Windows. En la primera parte se trabaja la gestión de usuarios y grupos locales, aplicada a los usuarios de TechPyme S.L. alojados en VM-WIN (Dirección, Compras, Ventas), incluyendo la creación de cuentas mediante el Panel de Control/Configuración y mediante PowerShell.

En la segunda parte, el núcleo de la unidad, se estudian en profundidad los **permisos NTFS**: permisos estándar y especiales, herencia de permisos, cálculo de permisos efectivos, propiedad de archivos y carpetas (ownership) y toma de posesión (take ownership). Se practica la consulta y modificación de permisos tanto desde el explorador de archivos como mediante los cmdlets `Get-Acl` y `Set-Acl` de PowerShell, enlazando así con la introducción de la unidad anterior.

## Acciones

En casa, configura los usuarios y grupos de TechPyme S.L. en VM-WIN y realiza los supuestos de permisos NTFS propuestos, calculando permisos efectivos y documentando el resultado tanto por interfaz gráfica como por PowerShell. Dada la extensión de la unidad (5 semanas), es especialmente importante no acumular trabajo y llegar a cada sesión presencial con la parte de esa semana ya avanzada.

!!! tip "Modalidad semipresencial"
    Cada semana hay **una única sesión presencial obligatoria de 1 hora**, dedicada a resumir los contenidos clave y resolver dudas sobre lo trabajado previamente en casa.

## Entrega

!!! warning "Entrega"
    Recuerda entregar las actividades y las evidencias de configuración en formato PDF a través del aula virtual.
    **El plazo de entrega finaliza el 7 de marzo de 2027 a las 23:59.**

## Sesión presencial semanal (1h)

1. **Semana 1** — Resumen de usuarios y grupos locales en Windows (interfaz gráfica y PowerShell). *(Trabajo en casa: configuración de usuarios TechPyme en VM-WIN).*
2. **Semana 2** — Resumen de permisos NTFS estándar y especiales. *(Trabajo en casa: primeros supuestos de permisos NTFS).*
3. **Semana 3** — Resumen de herencia de permisos y cálculo de permisos efectivos. *(Trabajo en casa: supuestos de herencia y permisos efectivos).*
4. **Semana 4** — Resumen de propiedad (ownership), toma de posesión y gestión de permisos con `Get-Acl`/`Set-Acl`. *(Trabajo en casa: ejercicios de ownership y PowerShell).*
5. **Semana 5** — Repaso general de la unidad y resolución de dudas sobre los supuestos de permisos antes de la entrega. *(Trabajo en casa: finalización y repaso de todas las actividades).*
