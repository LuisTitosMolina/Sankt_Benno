# AWO SANO - Código Aproximado de la Página Web

Este paquete contiene el código HTML, CSS y JavaScript para la página web de Sankt Beno.
## Archivos Incluidos

### 1. index.html
- Estructura completa de la página principal
- Navegación con menú responsive
- Secciones principales:
  - Hero slider con imágenes rotativas
  - Formulario de búsqueda
  - Sección de destinos turísticos
  - Ofertas especiales
  - Información sobre accesibilidad
  - Footer con enlaces y contacto

### 2. styles.css
- Diseño moderno y responsive
- Variables CSS para fácil personalización
- Colores principales:
  - Verde primario: #00A651
  - Rojo secundario: #E30613
- Sistema de grid para layouts
- Animaciones y transiciones suaves
- Media queries para móviles y tablets
- Estilos para todos los componentes de la página

### 3. script.js
- Menú móvil interactivo
- Slider automático de imágenes (Hero Slider)
- Botón "volver arriba" con scroll suave
- Validación de formulario de búsqueda
- Lazy loading de imágenes
- Animaciones al hacer scroll
- Mejoras de accesibilidad
- Navegación con teclado

## Características Principales

### Diseño Responsive
- Adaptable a móviles, tablets y escritorio
- Menú hamburguesa en dispositivos móviles
- Grid flexible para tarjetas y contenido

### Accesibilidad
- Navegación con teclado
- Contraste de colores adecuado
- Foco visible en elementos interactivos
- Mensajes de error en formularios

### Interactividad
- Slider automático con controles
- Animaciones al hacer scroll
- Hover effects en tarjetas y botones
- Scroll suave entre secciones

### Performance
- Lazy loading de imágenes
- Debounce en eventos de resize
- Optimización de animaciones
- CSS minimalista y eficiente

## Notas Importantes

1. **Imágenes**: Las rutas de las imágenes están copiadas del sitio original. Para usar este código en producción, necesitarás:
   - Descargar las imágenes del sitio original
   - Actualizar las rutas en el HTML
   - O usar tus propias imágenes

2. **Contenido**: El contenido está en alemán, tal como aparece en el sitio original.

3. **Funcionalidad**: Algunas funcionalidades que requieren backend no están implementadas:
   - Sistema de reservas
   - Base de datos de destinos
   - Procesamiento de formularios
   - Sistema de autenticación

4. **Optimizaciones Posibles**:
   - Minificar CSS y JavaScript para producción
   - Implementar un sistema de caché
   - Añadir Service Workers para PWA
   - Comprimir imágenes
   - Añadir un sistema de gestión de contenido (CMS)

## Estructura de Colores

```css
/* Colores principales */
--primary-color: #00A651;    /* Verde AWO SANO */
--secondary-color: #E30613;  /* Rojo */
--dark-color: #333;          /* Texto oscuro */
--light-gray: #f5f5f5;       /* Fondo gris claro */
--white: #ffffff;            /* Blanco */
```

## Uso

1. Abre `index.html` en un navegador web
2. Asegúrate de que los archivos CSS y JS estén en la misma carpeta
3. Para desarrollo, usa un servidor local (por ejemplo, Live Server de VS Code)

## Compatibilidad

- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- Opera: ✅
- IE11: ⚠️ (Funcionalidad limitada)

## Tecnologías Utilizadas

- HTML5 semántico
- CSS3 con Grid y Flexbox
- JavaScript ES6+
- Intersection Observer API
- CSS Variables
- CSS Transitions y Animations

## Mejoras Sugeridas

1. **SEO**: Añadir meta tags, structured data
2. **Performance**: Implementar critical CSS
3. **Accesibilidad**: Añadir más ARIA labels
4. **PWA**: Convertir en Progressive Web App
5. **Internacionalización**: Sistema multi-idioma
6. **Analytics**: Integrar Google Analytics o similar

---

**Nota**: Este es un código aproximado basado en el análisis del sitio web. Para obtener el código exacto del sitio original, necesitarías acceso directo a su repositorio o servidor.
