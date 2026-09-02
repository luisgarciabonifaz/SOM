---
title: "Guía didáctica — UT9"
---

# UT9 — Administración de Linux: permisos y ACL

!!! info "Duración"
    **Desde:** 26 de abril de 2027
    **Hasta:** 16 de mayo de 2027
    **Duración estimada:** 3 semanas (12h)

## Contenido

Esta unidad es el equivalente en Linux de la UT6 y cierra el bloque de administración de sistemas de archivo del módulo. Se estudia en profundidad el modelo de permisos de Linux: permisos básicos (lectura, escritura, ejecución) para propietario, grupo y otros, y los permisos especiales **SUID**, **SGID** y **sticky bit**, con ejemplos reales de uso en el sistema.

Se trabaja también el concepto de **umask** y su efecto sobre los permisos por defecto de archivos y carpetas nuevas, y se completa la unidad con las **listas de control de acceso (ACL)**, que permiten definir permisos más granulares que el modelo tradicional mediante los comandos `setfacl` y `getfacl`. Todo el trabajo práctico se realiza en Bash sobre VM-LINUX, aplicado a los usuarios Contabilidad y Técnico de TechPyme S.L.

## Acciones

En casa, realiza los supuestos de permisos propuestos sobre tu VM-LINUX, documentando los comandos utilizados y el resultado de cada operación. Presta especial atención a los ejemplos con SUID/SGID/sticky bit, ya que su mal uso tiene implicaciones de seguridad; coméntalas en la sesión presencial semanal si tienes dudas.


## Entrega

!!! warning "Entrega"
    Recuerda entregar las actividades y el cuaderno de comandos en formato PDF a través del aula virtual.
    **El plazo de entrega finaliza el 16 de mayo de 2027 a las 23:59.**

## Sesión presencial semanal (1h)

1. **Semana 1** — Resumen del modelo de permisos en Linux y de los permisos especiales SUID, SGID y sticky bit, con ejemplos reales. *(Trabajo en casa: ejercicios de permisos básicos y especiales).*
2. **Semana 2** — Resumen de umask y de las listas de control de acceso (ACL, `getfacl`/`setfacl`). *(Trabajo en casa: ejercicios de umask y ACL).*
3. **Semana 3** — Repaso general de la unidad y resolución de dudas sobre los supuestos de permisos antes de la entrega. *(Trabajo en casa: finalización y repaso de todas las actividades).*
