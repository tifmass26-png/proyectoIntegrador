# Reporte de Integración Manual de Cambios

**Proyecto:** OasisSpa  
**Rama destino:** `master`  
**Rama origen descartada para merge automático:** `mi-rama-formulario-pago`  

---

## 1. Contexto del Problema
Durante el desarrollo del módulo de carrito de compras y formulario de pago en la rama `mi-rama-formulario-pago`, se realizaron cambios en la estructura HTML y en las hojas de estilo CSS.

Al intentar realizar una unificación de ramas vía `git merge`, Git detectó conflictos severos de sobreescritura estructural en los archivos `index.html` y `style.css`.

---

## 2. ¿Por qué NO se pudo realizar el `git merge` automático?

1. **Pérdida de Maquetación y Fondos Visuales:**  
   La rama `master` contenía la versión final aprobada de la maquetación (imagen de fondo general `body-foto`, héroe del sitio, franja del párrafo descriptivo con fondo rosado translúcido y contenedores flexbox). Un `git merge` directo reemplazaba o alteraba los selectores de `style.css` y las clases del `index.html`, haciendo que el diseño visual se rompiera.

2. **Rutas e Imágenes Desalineadas:**  
   En la rama del formulario se modificaron nodos del DOM que afectaban la referencia a imágenes locales (`imagines/`), lo que provocaba la pérdida de recursos gráficos en la portada al fusionar automáticamente.

3. **Estructura del Formulario vs. Maquetación:**  
   El motor de merge de Git trabaja a nivel de líneas de texto, no de jerarquía visual HTML/CSS. Por tanto, no podía discernir entre los nuevos elementos interactivos (carrito/pasarela) y la tarjeta contenedora que mantenía el estilo estético de la aplicación.

---

## 3. Solución Implementada: Integración Manual (Cherry-picking conceptual)

Para garantizar la estabilidad del proyecto y no perder el trabajo de diseño de `master`, se procedió de la siguiente manera:

1. **Preservación de la Rama Principal (`master`):**  
   Se conservó la estructura base de `index.html` e `style.css` de `master` como la única fuente de verdad para los estilos visuales.

2. **Inyección Manual de Nodos del Formulario:**  
   Se adaptaron manualmente los campos del formulario de la rama `mi-rama-formulario-pago` dentro del contenedor `<section class="formulario">` existente en `master`, reutilizando los estilos y clases CSS de `master` (`.boton1`, `.datos`, etc.).

3. **Vinculación de la Capa Lógica (`java.js`):**  
   Se actualizó el script JavaScript para controlar el carrito, la selección dinámica de servicios, el cálculo de totales y la persistencia en `localStorage` sin necesidad de alterar hojas de estilo.

---

## 4. Conclusión
La decisión de **no hacer merge automático** previno la corrupción del maquetado visual y garantizó que la funcionalidad del carrito/pago opere perfectamente sobre el diseño estético definitivo.