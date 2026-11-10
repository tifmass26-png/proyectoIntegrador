# 📝 Bitácora de Actualizaciones Frontend - Proyecto Oasis Spa

**Fecha:** 10 de noviembre de 2026
**Rol:** Desarrollador Frontend (Nivel 2)

## 🎯 Objetivos de la Refactorización
*   Mejorar la semántica del HTML5 (eliminación de excesos de `<div>` y uso de `<section>`, `<article>`, `<header>`, `<main>`).
*   Eliminar enlaces vacíos (`href="#"`) y mejorar la navegación con submenús.
*   Implementar animaciones CSS fluidas sin depender de librerías externas de JavaScript.
*   Lograr un diseño "premium" y elegante para el spa, adaptativo a dispositivos móviles (Responsive Web Design).

---

## 🛠️ Cambios Realizados por Página

### 1. Navegación Global (Header)
*   **Refactorización Semántica:** Se reemplazaron los enlaces sueltos por una lista estructurada (`<ul>` y `<li>`) dentro de la etiqueta `<nav>`.
*   **Submenú Desplegable:** Se implementó un submenú en el ítem "Servicio" que se activa mediante CSS (`:hover`), enlazando directamente a las páginas individuales (Aromaterapia, Limpieza Facial, etc.).

### 2. Página de Inicio (`index.html`)
*   **Limpieza:** Se eliminaron las 6 tarjetas de imágenes estáticas de servicios y el banner antiguo de "Ponte en Contacto" para descongestionar la vista.
*   **Carrusel de Texto Promocional:** Se agregó una barra superior horizontal con movimiento infinito continuo (`@keyframes`) mostrando múltiples ofertas (30% descuento, 10% pago anticipado, etc.) con una fuente de gran tamaño.
*   **Cronómetro de Urgencia (Efecto Neón):** Se construyó un reloj digital destacado con un fondo degradado (morado) y una animación de latido visual (`latidoReloj`) para fomentar la reserva inmediata. El JavaScript del cronómetro se mejoró para que se reinicie automáticamente de forma fluida al llegar a cero.

### 3. Página de Servicios (`servicio.html`)
*   **Solución de Página en Blanco:** Se eliminó el vacío de la página principal de servicios.
*   **Slider Automático CSS:** Se construyó un carrusel de imágenes elegante usando Flexbox y animaciones `@keyframes`. Las imágenes de las experiencias de relajación se desplazan automáticamente de izquierda a derecha y viceversa (`alternate`), creando impacto visual inmediato.

### 4. Página de Contacto (`contacto.html`)
*   **Corrección Estructural:** Se limpiaron textos sobrantes y mal posicionados generados por herencia de códigos viejos.
*   **Cintillo de Ofertas Sutil:** Se implementó un carrusel de texto horizontal más pequeño y de color púrpura oscuro, que funciona como un "ticker" de noticias para mostrar promociones sin robarle protagonismo al formulario.
*   **Tarjetas Premium:** Las secciones de "¿Dudas Rápidas?" y "Tu Experiencia", que antes ocupaban todo el ancho de la pantalla con franjas desproporcionadas, se encapsularon en tarjetas elegantes. Se retiró el exceso de color rosado y se aplicó un fondo blanco puro con sombras difuminadas y un borde superior oscuro, dando un aspecto corporativo y fino.

### 5. Hoja de Estilos (`style.css`)
*   **Limpieza de Código:** Se borraron todas las clases en desuso (`.card`, `.banner-hero`, clases repetidas, etc.) para aligerar el archivo.
*   **Diseño Adaptativo (Responsive):** Se actualizó el bloque de `@media (max-width: 768px)` para garantizar que el nuevo diseño se vea impecable en celulares:
    *   Reducción proporcional del cronómetro gigante (`font-size`).
    *   Ajuste de altura del carrusel de imágenes para que no se deforme.
    *   Adaptación de los textos animados al ancho del móvil.
    *   Apilamiento vertical perfecto de las nuevas tarjetas de información.

---
**Estado del Código:** Limpio, semántico, optimizado y sin errores visuales. ¡Listo para seguir sumando funcionalidades backend!