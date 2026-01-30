# 📚 Guía Rápida - Biblioteca Digital

## 🚀 Ver tu biblioteca ahora mismo

1. **Mira el Preview Panel** en el lado derecho de tu pantalla
2. O haz clic en **"Open in New Tab"** para abrir en una nueva pestaña del navegador

## 🎮 Uso básico

### Ver un libro disponible
- Los libros **coloreados** están disponibles
- Haz clic en cualquier libro coloreado para ver sus detalles
- En el modal verás los formatos disponibles (PDF, EPUB, MOBI, AZW3)
- Haz clic en el botón del formato que quieras descargar

### Libros no disponibles
- Los libros en **gris** no están disponibles aún
- No se puede hacer clic en ellos
- Para activarlos, sigue las instrucciones de "Cómo activar libros"

### Buscar libros
- Usa el buscador en la parte superior para buscar por título o autor
- Activa "Solo disponibles" para ver solo los libros activos

## 🔧 Cómo activar libros (cargar documentos)

### Método 1: Editando el código (recomendado para GitHub)

1. Abre el archivo `src/app/page.tsx`
2. Busca la función `generateBooks()`
3. Encuentra el libro que quieres activar en el array `books`
4. Cambia `status: 'unavailable'` a `status: 'available'`
5. Agrega los formatos: `formats: ['pdf', 'epub', 'mobi', 'azw3']`

**Ejemplo:**
```typescript
books.push({
  id: 1,
  title: 'Mi Libro',
  author: 'Mi Autor',
  year: 2024,
  status: 'available',        // ← Cambiar a 'available'
  formats: ['pdf', 'epub'],   // ← Agregar formatos disponibles
  color: '#8B4513'
})
```

### Método 2: Cargando los archivos

1. Crea la carpeta `public/books/{id}/` donde `{id}` es el número del libro
2. Coloca los archivos del libro en esa carpeta:
   ```
   public/books/1/
     ├── libro.pdf
     ├── libro.epub
     ├── libro.mobi
     └── libro.azw3
   ```
3. Edita el código para establecer `status: 'available'` y los `formats` correspondientes

## 📋 Cómo funcionan los 200 libros

El sistema genera automáticamente 200 libros con:
- **Títulos**: De una lista predefinida de obras clásicas y modernas
- **Autores**: Asignados aleatoriamente de una lista
- **Año**: Entre 1800 y 2025 (aleatorio)
- **Estado**: 30% disponibles, 70% no disponibles (puedes cambiar esto)
- **Formatos**: Se asignan aleatoriamente si el libro está disponible
- **Color**: De una paleta de 20 colores de libros

### Cambiar la proporción de libros disponibles

En `src/app/page.tsx`, busca esta línea:
```typescript
const status: BookStatus = Math.random() > 0.7 ? 'available' : 'unavailable'
```

Cámbiala a:
```typescript
// Todos disponibles:
const status: BookStatus = 'available'

// Todos no disponibles:
const status: BookStatus = 'unavailable'

// 50% disponibles:
const status: BookStatus = Math.random() > 0.5 ? 'available' : 'unavailable'

// Solo los primeros 50 disponibles (en el loop):
status: i < 50 ? 'available' : 'unavailable'
```

## 🎨 Personalización rápida

### Cambiar colores de los libros
Busca `const bookColors` en `src/app/page.tsx` y modifica los colores hexadecimales.

### Cambiar la información de los libros
Modifica los arrays `titles` y `authors` en `src/app/page.tsx`.

### Cambiar el diseño
Los estilos usan clases de Tailwind CSS. Busca y modifica:
- Colores de madera: `amber-900`, `amber-800`, etc.
- Sombras: `shadow-lg`, `shadow-xl`, etc.
- Gradientes: `bg-gradient-to-b`, `bg-gradient-to-r`

## 🌐 Desplegar en GitHub Pages

### Opción más simple: Vercel (recomendada)

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Inicia sesión con GitHub
4. Importa tu repositorio
5. ¡Listo! Vercel despliega automáticamente tu Next.js

### Opción: Exportar a HTML estático

1. Crea `next.config.js`:
   ```javascript
   const nextConfig = {
     output: 'export',
     images: { unoptimized: true }
   }
   module.exports = nextConfig
   ```

2. Ejecuta:
   ```bash
   bun run build
   ```

3. Los archivos estáticos estarán en la carpeta `out/`

4. Sube el contenido de `out/` a GitHub

5. Activa GitHub Pages en la configuración del repositorio

## 📝 Sistema de "comentados" explicado

### ¿Qué significa "comentados"?

En tu pedido mencionaste que los libros podrían estar "comentados" y que al cargar un documento los "descomentas". En este código:

- **"Comentado"** = `status: 'unavailable'` (libro en gris, no interactivo)
- **"Descomentado"** = `status: 'available'` (libro coloreado, interactivo)

### El flujo de trabajo

1. **Inicialmente**: Los libros están "comentados" (unavailable)
2. **Cargas un documento**: Subes el PDF/EPUB a la carpeta `public/books/{id}/`
3. **Descomentas el libro**: Cambias `status: 'available'` en el código
4. **El libro se activa**: Ahora aparece coloreado y se puede descargar

### Ejemplo práctico

Digamos que quieres activar el libro #5:

1. Subes el archivo:
   ```
   public/books/5/
     └── mi-libro.pdf
   ```

2. En `src/app/page.tsx`, buscas donde se crea el libro #5 (índice 4 en el array):

   ```typescript
   // En el loop for, donde i === 4
   books.push({
     id: 5,  // i + 1
     title: 'Cien Años de Soledad',
     author: 'Gabriel García Márquez',
     year: 1967,
     status: 'available',  // ← CAMBIAR DE 'unavailable' A 'available'
     formats: ['pdf'],     // ← AGREGAR LOS FORMATOS QUE CARGASTE
     color: '#8B4513'
   })
   ```

3. Guardas el archivo

4. ¡El libro #5 ahora está activo en tu biblioteca!

## 🔍 Solución de problemas

### Los libros no se ven
- Asegúrate de que el servidor de desarrollo esté corriendo
- Refresca la página (F5)

### Los libros no se pueden descargar
- Verifica que los archivos estén en `public/books/{id}/`
- Verifica que el libro tenga `status: 'available'`
- Verifica que el formato esté en el array `formats`

### El diseño se ve mal
- Asegúrate de que Tailwind CSS esté configurado correctamente
- Verifica que no haya errores en la consola del navegador

### El código no compila
- Ejecuta `bun run lint` para ver errores
- Asegúrate de que todas las llaves `{}` y paréntesis `()` estén cerrados

## 📞 ¿Necesitas ayuda?

1. Revisa el README.md completo
2. Lee los comentarios en `src/app/page.tsx`
3. Verifica que los archivos estén en las carpetas correctas
4. Revisa la consola del navegador para errores

## 🎉 ¡Disfruta tu biblioteca digital!

Tu biblioteca ya está lista con:
- ✅ 200 libros en estantes arquitectónicos
- ✅ Diseño de madera oscura estilo biblioteca clásica
- ✅ Sistema de activación/desactivación de libros
- ✅ Soporte para múltiples formatos (PDF, EPUB, MOBI, AZW3)
- ✅ Buscador y filtros
- ✅ Diseño responsive
- ✅ Listo para GitHub Pages
