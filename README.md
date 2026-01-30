# 📚 Biblioteca Digital

Una biblioteca digital interactiva con diseño arquitectónico clásico, construida con Next.js 16 y Tailwind CSS.

## 🎨 Características

- **Diseño arquitectónico**: Estilo biblioteca clásica con maderas oscuras y estantes detallados
- **200 libros**: Cada libro es un botón interactivo con diseño de libro real
- **Sistema de disponibilidad**: Los libros pueden estar disponibles o no disponibles
- **Múltiples formatos**: Soporte para PDF, EPUB, MOBI y AZW3
- **Buscador**: Busca libros por título o autor
- **Filtro de disponibilidad**: Muestra solo los libros disponibles
- **Responsive**: Diseño adaptable a diferentes tamaños de pantalla

## 🚀 Cómo usar

### Ver la biblioteca

1. Abre el **Preview Panel** en el lado derecho de la interfaz
2. O haz clic en el botón **"Open in New Tab"** para abrir en una nueva pestaña

### Activar libros (cambiar estado)

Los libros tienen dos estados:
- **`available`**: El libro está disponible y muestra los formatos de descarga
- **`unavailable`**: El libro aparece en gris y no se puede interactuar

Para cambiar el estado de un libro, edita el archivo `src/app/page.tsx`:

```typescript
// En la función generateBooks(), cambia el status:
status: 'available'  // Para activar el libro
// o
status: 'unavailable'  // Para desactivar el libro
```

**Ejemplo de cómo cambiar un libro específico:**

```typescript
// En el array 'books' que se genera, busca el libro que quieres modificar
books[i].status = 'available'  // Cambiar a disponible
books[i].formats = ['pdf', 'epub', 'mobi']  // Agregar formatos disponibles
```

### Cargar archivos de libros

Para que los enlaces de descarga funcionen, debes cargar los archivos en la carpeta correcta:

```
/public/
  books/
    1/
      libro.pdf
      libro.epub
      libro.mobi
    2/
      libro.pdf
      libro.epub
    ... (una carpeta por cada libro, numerada del 1 al 200)
```

**Instrucciones:**

1. Crea la carpeta `public/books/` si no existe
2. Crea una carpeta para cada libro (1, 2, 3, ..., 200)
3. Coloca los archivos del libro en la carpeta correspondiente
4. Los formatos soportados son: PDF, EPUB, MOBI, AZW3

### Modificar la información de los libros

Puedes personalizar la información de cada libro editando los arrays en `src/app/page.tsx`:

```typescript
// Títulos de libros
const titles = [
  'Título del Libro 1',
  'Título del Libro 2',
  // ... añade o modifica los títulos
]

// Autores
const authors = [
  'Nombre del Autor 1',
  'Nombre del Autor 2',
  // ... añade o modifica los autores
]
```

## 📦 Estructura del proyecto

```
my-project/
├── src/
│   └── app/
│       └── page.tsx          # Página principal de la biblioteca
├── public/
│   └── books/                # Carpeta para los archivos de libros
│       ├── 1/
│       ├── 2/
│       └── ...
├── package.json
└── README.md
```

## 🎯 Cómo funciona el sistema de "comentados"

El sistema de libros comentados/descomentados funciona así:

1. **Libros desactivados (comentados)**:
   - Aparecen en gris y en escala de grises
   - No se puede hacer clic en ellos
   - Muestran un tooltip "No disponible"
   - Al pasar el mouse, el cursor cambia a "no permitido"

2. **Libros activados (descomentados)**:
   - Aparecen con su color original
   - Se puede hacer clic para ver los detalles
   - Muestran el título y autor en el lomo del libro
   - Al pasar el mouse, el libro se agranda y muestra sombra

3. **Cómo cambiar el estado**:
   ```typescript
   // En generateBooks(), cambia esto:
   const status: BookStatus = Math.random() > 0.7 ? 'available' : 'unavailable'
   
   // A esto (todos disponibles):
   const status: BookStatus = 'available'
   
   // O a esto (todos no disponibles):
   const status: BookStatus = 'unavailable'
   
   // O establece específicamente para cada libro en el loop:
   books.push({
     id: i + 1,
     // ... otras propiedades
     status: i < 50 ? 'available' : 'unavailable',  // Solo los primeros 50 disponibles
     // ...
   })
   ```

## 🌐 Cómo alojar en GitHub Pages

### Opción 1: Usar Next.js en GitHub Pages (recomendada)

1. **Preparar el proyecto para producción**:
   ```bash
   bun run build
   ```

2. **Instalar gh-pages**:
   ```bash
   bun add -D gh-pages
   ```

3. **Crear un script en package.json**:
   ```json
   {
     "scripts": {
       "export": "next build && next export",
       "deploy": "gh-pages -d out"
     }
   }
   ```

4. **Configurar next.config.js** (crea este archivo si no existe):
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true
     }
   }
   
   module.exports = nextConfig
   ```

5. **Hacer deploy**:
   ```bash
   bun run deploy
   ```

### Opción 2: Exportar como HTML estático

Si prefieres una versión más simple (solo HTML, CSS y JS):

1. **Construir el proyecto**:
   ```bash
   bun run build
   ```

2. **Los archivos estáticos estarán en la carpeta `out/`**

3. **Sube el contenido de `out/` a tu repositorio de GitHub**

4. **Activa GitHub Pages en la configuración del repositorio**

### Opción 3: Usar Vercel (más simple)

Vercel es la forma más fácil de desplegar proyectos Next.js:

1. **Sube tu código a GitHub**

2. **Ve a [vercel.com](https://vercel.com) e inicia sesión con GitHub**

3. **Importa tu repositorio**

4. **Vercel detectará automáticamente que es un proyecto Next.js y lo desplegará**

5. **¡Listo! Tu biblioteca estará en línea en minutos**

## 🎨 Personalización

### Cambiar colores de los libros

Edita el array `bookColors` en `src/app/page.tsx`:

```typescript
const bookColors = [
  '#8B4513', // Marrón
  '#A0522D', // Marrón claro
  '#CD853F', // Perú
  // ... añade tus colores hexadecimales
]
```

### Cambiar el número de libros por estante

```typescript
const booksPerShelf = 20  // Cambia este número
```

### Cambiar el diseño arquitectónico

Los estilos principales están definidos con clases de Tailwind CSS. Puedes modificar:

- Colores de madera: `amber-900`, `amber-800`, `amber-700`
- Sombras: `shadow-lg`, `shadow-xl`, `shadow-2xl`
- Gradientes: `bg-gradient-to-b`, `bg-gradient-to-r`
- Bordes: `border-2`, `border-4`, `rounded-lg`, `rounded-xl`

## 📝 Notas importantes

- La biblioteca funciona completamente en el navegador (no requiere backend)
- Los archivos de libros deben estar en la carpeta `public/books/`
- Puedes tener hasta 200 libros (configurado en el código)
- El diseño es responsive y funciona en móviles, tablets y desktops
- Para activar un libro, simplemente cambia su status a 'available'

## 🛠️ Tecnologías utilizadas

- **Next.js 16**: Framework de React
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Estilos utility-first
- **Lucide Icons**: Iconos (vía shadcn/ui)

## 📞 Soporte

Si tienes preguntas o necesitas ayuda:
1. Revisa las instrucciones en este README
2. Revisa los comentarios en el código `src/app/page.tsx`
3. Verifica que los archivos estén en las carpetas correctas

## 📄 Licencia

Este proyecto es de código abierto y puede ser modificado y distribuido libremente.
