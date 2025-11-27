# 🌸 Requerimientos del Proyecto Web - Flores Daniel Angarita

**Cliente:** Daniel Eduardo Angarita Sánchez  
**Empresa:** Cultivo y Comercio de Flores al Por Mayor  
**Fecha:** 23 de Noviembre de 2025  
**Tipo de Proyecto:** Sitio Web Corporativo B2B con E-commerce

---

## 📋 Resumen Ejecutivo

Desarrollo de una plataforma web corporativa para la comercialización mayorista de flores, plantas ornamentales y semillas para cultivo. El sitio debe transmitir profesionalismo, calidad y la esencia natural del negocio, dirigido principalmente a florerías, distribuidores y organizadores de eventos grandes.

---

## 🎯 Objetivos del Proyecto

### Objetivo Principal
Crear una vitrina digital profesional que permita a compradores mayoristas conocer, cotizar y solicitar productos a través de un sistema integrado con WhatsApp.

### Objetivos Específicos
- Mostrar catálogo completo de productos con fotografías de alta calidad
- Generar confianza y profesionalismo en clientes potenciales
- Facilitar el proceso de cotización y pedidos mayoristas
- Contar la historia y valores de la empresa
- Expandir el alcance comercial a nivel nacional e internacional

---

## 👥 Audiencia Objetivo

### Usuarios Primarios (B2B)
- **Florerías y viveros** que requieren suministro regular
- **Distribuidores mayoristas** de flores y plantas
- **Organizadores de eventos** (bodas, corporativos, funerales)
- **Empresas de decoración** y paisajismo

### Características del Usuario
- Decisores de compra con presupuestos medianos-altos
- Buscan calidad, consistencia y confiabilidad
- Prefieren procesos de compra eficientes y directos
- Valoran la relación comercial a largo plazo

---

## 📦 Catálogo de Productos

### 1. Flores al por mayor, cultivos
- Variedades de temporada y perennes
- Flores para eventos especiales
- Flores de exportación


### 2. Semillas para Cultivo
- Semillas certificadas
- Variedades comerciales
- Semillas especializadas para diferentes climas

---

## 🛠️ Especificaciones Técnicas

### Tecnologías Requeridas
- **Frontend:** HTML5, CSS3, JavaScript Vanilla (ES6+)
- **Sin dependencias externas:** No frameworks ni librerías
- **Responsive Design:** Mobile-first approach
- **Performance:** Optimización para carga rápida
- **SEO:** Estructura semántica y optimización

### Arquitectura
```
FloresDaniEsteSi/
├── index.html              # Página principal
├── catalogo.html           # Catálogo de productos
├── nosotros.html           # Historia de la empresa
├── contacto.html           # Información de contacto
├── css/
│   ├── main.css            # Estilos principales
│   ├── animations.css      # Animaciones y motion
│   └── responsive.css      # Media queries
├── js/
│   ├── main.js            # Funcionalidad principal
│   ├── catalog.js         # Gestión del catálogo
│   ├── cart.js            # Carrito de compras
│   └── animations.js      # Animaciones JavaScript
├── images/
│   ├── flores/            # Fotografías de productos
│   ├── empresa/           # Imágenes corporativas
│   └── icons/             # Iconografía
└── assets/
    └── data/
        └── productos.json # Base de datos de productos
```

---

## 🎨 Especificaciones de Diseño

### Paleta de Colores
```css
:root {
  --primary-purple: #5A4EA6;    /* Púrpura elegante principal */
  --secondary-teal: #689BA6;     /* Azul verdoso suave */
  --accent-mint: #9BBFBF;        /* Verde menta complementario */
  --accent-gold: #F2BB13;        /* Dorado vibrante */
  --accent-bronze: #BF8211;      /* Bronce cálido */
  --white: #FFFFFF;
  --light-gray: #F8F9FA;
  --dark-gray: #2C2C2C;
}
```

### Tipografía
- **Fuentes del sistema** para evitar apariencia "IA"
- **Primary:** System font stack (San Francisco, Segoe UI, Roboto)
- **Secondary:** Georgia, Times para textos largos
- **Jerarquía clara:** H1-H6 bien definida

### Principios de Diseño
- **Limpio y elegante:** Espacios en blanco generosos
- **Natural y orgánico:** Formas suaves, no geométricas estrictas
- **Profesional:** Sin elementos infantiles o demasiado decorativos
- **Accesible:** Contraste WCAG AA mínimo

---

## ⚡ Motion Design y Animaciones

### Animaciones CSS Puras
- **Hover effects:** Transiciones suaves (0.3s ease)
- **Fade-in animations:** Para carga progresiva de contenido
- **Smooth scrolling:** Comportamiento nativo optimizado
- **Loading states:** Spinners y skeletons elegantes

### JavaScript Vanilla Animations
- **Scroll-triggered:** Intersection Observer API
- **Parallax ligero:** Para hero sections
- **Image carousels:** Transiciones fluidas entre fotos
- **Cart animations:** Feedback visual al agregar productos

### Efectos Temáticos
```css
/* Floating animation para elementos florales */
@keyframes floatingPetal {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-10px) rotate(1deg); }
  75% { transform: translateY(-5px) rotate(-1deg); }
}

/* Reveal animation como pétalos que se abren */
@keyframes petalReveal {
  0% { opacity: 0; transform: scale(0.8) rotate(-5deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
}
```

### Performance
- **CSS-only** donde sea posible
- **RequestAnimationFrame** para JS animations
- **Will-change properties** para optimización GPU
- **Reduced motion** respetando `prefers-reduced-motion`

---

## 🛒 Funcionalidades del Sistema

### 1. Catálogo Interactivo
- **Grid responsivo** de productos con filtros
- **Búsqueda avanzada** por tipo, color, temporada
- **Galería de imágenes** con zoom y navegación
- **Información detallada** de cada variedad

### 2. Sistema de Carrito
- **Agregar productos** con cantidades mayoristas
- **Persistencia** en localStorage
- **Resumen visual** del pedido
- **Cálculo automático** de totales

### 3. Integración WhatsApp
```javascript
// Función para generar mensaje de WhatsApp
function generateWhatsAppOrder(cartItems) {
    const phoneNumber = "+57XXXXXXXXX";
    const message = `Hola, me interesa cotizar los siguientes productos:\n\n${formatCartItems(cartItems)}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}
```

### 4. Formularios de Contacto
- **Cotización rápida** con campos específicos
- **Validación client-side** JavaScript
- **Feedback visual** de envío
- **Captcha simple** anti-spam

---

## 📱 Estructura del Sitio

### Página Principal (index.html)
```html
<!-- Estructura semántica -->
<header>
  <nav> <!-- Navegación principal --> </nav>
</header>

<main>
  <section class="hero">
    <!-- Hero con call-to-action principal -->
  </section>
  
  <section class="productos-destacados">
    <!-- Muestra de productos principales -->
  </section>
  
  <section class="sobre-nosotros">
    <!-- Historia y valores resumidos -->
  </section>
  
  <section class="contacto-rapido">
    <!-- CTA de contacto y WhatsApp -->
  </section>
</main>

<footer>
  <!-- Información de contacto y enlaces -->
</footer>
```

### Navegación Principal
- **Inicio** - Página principal
- **Catálogo** - Productos completos con filtros
- **Nosotros** - Historia, misión, valores
- **Contacto** - Información y formularios

### Secciones Específicas

#### Hero Section
- **Imagen principal** de campos de flores
- **Mensaje clave:** "Cultivamos belleza, distribuimos calidad"
- **CTA principal:** "Ver Catálogo" y "Solicitar Cotización"

#### Catálogo de Productos
- **Filtros por categoría:** Flores cortadas, plantas, semillas
- **Grid adaptativo:** 4-3-2-1 columnas según dispositivo
- **Modal de producto** con galería completa
- **Botón "Agregar al pedido"** prominente

#### Sobre Nosotros
- **Timeline** de la historia de la empresa
- **Proceso de cultivo** con imágenes del campo
- **Certificaciones** y compromisos de calidad
- **Equipo** y filosofía empresarial

#### Zona de Contacto
- **Información completa:** dirección, teléfonos, email
- **Formulario de cotización** integrado
- **Mapa** de ubicación (Google Maps embed)
- **Botón WhatsApp flotante** siempre visible

---

## 📊 Base de Datos de Productos

### Estructura JSON
```json
{
  "productos": [
    {
      "id": "FL001",
      "categoria": "flores-cortadas",
      "nombre": "Rosas Rojas Premium",
      "descripcion": "Rosas de tallo largo, ideales para eventos especiales",
      "temporada": "todo-el-año",
      "colores": ["rojo", "rosado", "blanco"],
      "precio_referencia": "Consultar",
      "unidad_minima": 50,
      "imagenes": [
        "images/flores/rosas-rojas-1.jpg",
        "images/flores/rosas-rojas-2.jpg"
      ],
      "disponibilidad": true,
      "destacado": true
    }
  ]
}
```

### Categorías de Productos
1. **flores-cortadas**
2. **plantas-ornamentales**
3. **semillas-cultivo**

---

## 🔧 Funcionalidades JavaScript

### 1. Gestión del Catálogo
```javascript
class ProductCatalog {
    constructor() {
        this.products = [];
        this.filters = {
            category: 'all',
            search: '',
            availability: true
        };
    }
    
    async loadProducts() {
        // Cargar desde productos.json
    }
    
    filterProducts() {
        // Aplicar filtros activos
    }
    
    renderProducts() {
        // Mostrar productos filtrados
    }
}
```

### 2. Carrito de Compras
```javascript
class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
    }
    
    addItem(productId, quantity) {
        // Agregar producto al carrito
    }
    
    removeItem(productId) {
        // Quitar producto del carrito
    }
    
    getTotal() {
        // Calcular total de productos
    }
    
    generateWhatsAppMessage() {
        // Crear mensaje para WhatsApp
    }
}
```

### 3. Animaciones Scroll
```javascript
class ScrollAnimations {
    constructor() {
        this.observer = new IntersectionObserver(this.handleIntersection.bind(this));
        this.init();
    }
    
    init() {
        document.querySelectorAll('[data-animate]').forEach(el => {
            this.observer.observe(el);
        });
    }
    
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }
}
```

---

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
/* Mobile: 320px - 767px (base) */

/* Tablet */
@media (min-width: 768px) {
    /* Estilos para tablet */
}

/* Desktop */
@media (min-width: 1024px) {
    /* Estilos para desktop */
}

/* Large Desktop */
@media (min-width: 1440px) {
    /* Estilos para pantallas grandes */
}
```

### Grid System
```css
.product-grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr; /* Mobile */
}

@media (min-width: 768px) {
    .product-grid {
        grid-template-columns: repeat(2, 1fr); /* Tablet */
    }
}

@media (min-width: 1024px) {
    .product-grid {
        grid-template-columns: repeat(3, 1fr); /* Desktop */
    }
}

@media (min-width: 1440px) {
    .product-grid {
        grid-template-columns: repeat(4, 1fr); /* Large Desktop */
    }
}
```

---

## 🚀 Criterios de Performance

### Optimización de Carga
- **Lazy loading** para imágenes del catálogo
- **Compresión** WebP con fallback JPEG
- **Minificación** de CSS y JavaScript
- **Critical CSS** inline para above-the-fold

### Métricas Objetivo
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1
- **Time to Interactive:** < 3s

### Técnicas de Optimización
```css
/* Critical CSS inline */
.hero { /* Estilos críticos */ }

/* Lazy loading images */
img[data-src] {
    opacity: 0;
    transition: opacity 0.3s;
}

img[data-src].loaded {
    opacity: 1;
}
```

```javascript
// Lazy loading implementation
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
});
```

---

## 🔍 SEO y Accesibilidad

### Estructura Semántica HTML5
```html
<main>
    <article>
        <header>
            <h1>Título Principal</h1>
            <time datetime="2025-11-23">23 de Noviembre, 2025</time>
        </header>
        <section>
            <h2>Subsección</h2>
            <p>Contenido...</p>
        </section>
    </article>
</main>
```

### Meta Tags Esenciales
```html
<meta name="description" content="Cultivo y venta mayorista de flores, plantas ornamentales y semillas. Calidad premium para florerías y distribuidores.">
<meta name="keywords" content="flores mayorista, plantas ornamentales, semillas cultivo, distribuidor flores Colombia">
<meta property="og:title" content="Flores Daniel Angarita - Mayorista de Flores">
<meta property="og:description" content="Cultivamos y distribuimos flores de alta calidad para el mercado mayorista">
<meta property="og:image" content="/images/og-image.jpg">
```

### Accesibilidad (WCAG 2.1 AA)
- **Contraste mínimo:** 4.5:1 para texto normal
- **Navegación por teclado** completa
- **Alt text** descriptivo para todas las imágenes
- **ARIA labels** para elementos interactivos
- **Focus indicators** visibles

---

## 📞 Integración WhatsApp

### Configuración del Botón Flotante
```html
<div class="whatsapp-float" id="whatsapp-btn">
    <svg class="whatsapp-icon" viewBox="0 0 24 24">
        <!-- Icono WhatsApp SVG -->
    </svg>
    <span class="whatsapp-text">¡Cotiza ahora!</span>
</div>
```

```css
.whatsapp-float {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #25D366;
    color: white;
    border-radius: 50px;
    padding: 15px 20px;
    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
    z-index: 1000;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4); }
    50% { box-shadow: 0 4px 20px rgba(37, 211, 102, 0.8); }
    100% { box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4); }
}
```

### Generación de Mensajes
```javascript
function createWhatsAppMessage(cartItems) {
    const companyInfo = "Flores Daniel Angarita";
    const greeting = `¡Hola! Soy de ${companyInfo} y me interesa una cotización para:`;
    
    let message = `${greeting}\n\n`;
    
    cartItems.forEach((item, index) => {
        message += `${index + 1}. ${item.name}\n`;
        message += `   Cantidad: ${item.quantity} unidades\n`;
        message += `   Categoría: ${item.category}\n\n`;
    });
    
    message += "Por favor, envíenme información sobre:\n";
    message += "• Precios mayoristas\n";
    message += "• Disponibilidad actual\n";
    message += "• Tiempos de entrega\n";
    message += "• Condiciones de pago\n\n";
    message += "¡Gracias!";
    
    return message;
}
```

---

## 🎯 Plan de Implementación

### Fase 1: Estructura Base (Semana 1)
- [ ] Configuración del proyecto y estructura de archivos
- [ ] HTML semántico de todas las páginas
- [ ] Sistema de navegación básico
- [ ] CSS base con variables y reset

### Fase 2: Diseño Visual (Semana 2)
- [ ] Implementación de la paleta de colores
- [ ] Tipografía y jerarquía visual
- [ ] Layout responsive para todas las páginas
- [ ] Componentes reutilizables (botones, tarjetas, formularios)

### Fase 3: Funcionalidades Core (Semana 3)
- [ ] Sistema de catálogo con JSON
- [ ] Filtros y búsqueda de productos
- [ ] Carrito de compras funcional
- [ ] Integración básica con WhatsApp

### Fase 4: Motion y Animaciones (Semana 4)
- [ ] Animaciones CSS para elementos estáticos
- [ ] JavaScript para scroll-triggered animations
- [ ] Micro-interacciones en botones y forms
- [ ] Optimización de performance de animaciones

### Fase 5: Optimización y Testing (Semana 5)
- [ ] Lazy loading de imágenes
- [ ] Minificación y compresión
- [ ] Testing cross-browser y dispositivos
- [ ] Optimización SEO y accesibilidad

### Fase 6: Refinamiento y Deploy (Semana 6)
- [ ] Ajustes finales de diseño
- [ ] Pruebas de usabilidad
- [ ] Configuración de hosting
- [ ] Documentación de mantenimiento

---

## 📋 Criterios de Aceptación

### Funcionalidad
- [ ] El catálogo muestra todos los productos correctamente
- [ ] Los filtros funcionan sin errores
- [ ] El carrito mantiene los productos seleccionados
- [ ] La integración WhatsApp genera mensajes válidos
- [ ] Todos los formularios validan correctamente

### Diseño
- [ ] La paleta de colores se aplica consistentemente
- [ ] El diseño es responsive en todos los dispositivos
- [ ] Las animaciones son suaves y no afectan el performance
- [ ] No hay elementos que sugieran diseño generado por IA

### Performance
- [ ] La página carga en menos de 3 segundos
- [ ] Las imágenes tienen lazy loading implementado
- [ ] El sitio funciona correctamente en navegadores modernos
- [ ] No hay errores en la consola del navegador

### SEO y Accesibilidad
- [ ] Todos los elementos tienen etiquetas semánticas
- [ ] Las imágenes tienen alt text descriptivo
- [ ] La navegación funciona con teclado
- [ ] El contraste cumple estándares WCAG AA

---

## 📝 Notas Adicionales

### Contenido Requerido del Cliente
- **Fotografías profesionales** de productos (alta resolución)
- **Logo corporativo** en formatos vectoriales
- **Información detallada** de cada variedad de flor/planta
- **Texto corporativo** para sección "Nosotros"
- **Datos de contacto** completos y actualizados

### Hosting y Dominio
- **Dominio sugerido:** floresangarita.com o similar
- **Hosting:** Servicio con soporte PHP/Node.js (futuras expansiones)
- **SSL certificado** incluido
- **Backup automático** recomendado

### Mantenimiento Futuro
- **Actualización de catálogo:** Sistema simple para agregar productos
- **Gestión de contenido:** Documentación para el cliente
- **Monitoreo:** Google Analytics y Search Console
- **Soporte técnico:** Plan de mantenimiento trimestral

---

## ✅ Entregables del Proyecto

1. **Código fuente completo** con documentación
2. **Sitio web funcional** en servidor de producción
3. **Manual de administración** para actualizar contenido
4. **Guía de SEO** básica para el cliente
5. **Archivos de diseño** y assets organizados
6. **Documentación técnica** para futuro mantenimiento

---

**Documento creado por:** Equipo de Desarrollo  
**Revisado por:** Cliente Daniel Eduardo Angarita Sánchez  
**Aprobación final:** Pendiente  
**Fecha de inicio estimada:** 25 de Noviembre de 2025