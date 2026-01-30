'use client'

import { useState } from 'react'

// Tipos para las publicaciones
type BookStatus = 'available' | 'unavailable'
type BookFormat = 'pdf' | 'epub' | 'mobi' | 'azw3'

interface Book {
  id: number
  title: string
  author: string
  year: number
  status: BookStatus
  formats: BookFormat[]
  color: string
}

// Generar 200 libros con estados aleatorios
const generateBooks = (): Book[] => {
  const titles = [
    'Cien Años de Soledad', 'El Quijote', 'La Odisea', '1984', 'Orgullo y Prejuicio',
    'Crimen y Castigo', 'Moby Dick', 'Guerra y Paz', 'Ulises', 'Divina Comedia',
    'Don Juan Tenorio', 'El Principito', 'El Alquimista', 'Los Miserables', 'Anna Karenina',
    'La Ilíada', 'Hamlet', 'Macbeth', 'Romeo y Julieta', 'Otelo',
    'El Gran Gatsby', 'Matar a un Ruiseñor', 'La Metamorfosis', 'El Señor de los Anillos', 'El Hobbit',
    'Harry Potter', 'Dune', 'Fundación', 'Neuromante', 'Fahrenheit 451',
    'Brave New World', 'La Rebelión de Atlas', 'El Código Da Vinci', 'El Nombre de la Rosa', 'La Sombra del Viento',
    'Como Agua para Chocolate', 'Pedro Páramo', 'Rayuela', 'Ficciones', 'El Aleph',
    'La Casa de los Espíritus', 'Kafka en la Orilla', '1Q84', 'El Viento en los Sauces', 'Alicia en el País de las Maravillas',
    'Peter Pan', 'Las Crónicas de Narnia', 'El Pequeño Príncipe', 'El Lobo Estepario', 'Siddhartha',
    'Demian', 'El Juego de las Sillas', 'La Nausea', 'El Extranjero', 'La Peste',
    'El Tunel', 'Sobre Héroes y Tumbas', 'Boquitas Pintadas', 'El Amor en los Tiempos del Cólera', 'Crónica de una Muerte Anunciada',
    'El Coronel no Tiene Quien le Escriba', 'La Casa Verde', 'Conversación en la Catedral', 'La Fiesta del Chivo', 'Travesuras de la Niña Mala',
    'La Ciudad y los Perros', 'Pantaleón y las Visitadoras', 'Los Cachorros', '¿Quién Mató a Palomino Molero?', 'La Tía Julia y el Escribidor',
    'Lituma en los Andes', 'Los Cuervos', 'La Casa de Asterión', 'Borges y Yo', 'El Sur',
    'El Jardín de Senderos que se Bifurcan', 'La Biblioteca de Babel', 'El Zahir', 'La Muerte y la Brújula', 'El Inmortal',
    'El Otro, el Mismo', 'El Hacedor', 'Elogio de la Sombra', 'El Oro de los Tigres', 'La Rosa Profunda',
    'El Libro de Arena', 'Historia Universal de la Infamia', 'Fervor de Buenos Aires', 'Luna de Enfrente', 'Cuaderno San Martín',
    'El Amor, la Muerte y otros Temas', 'Antología Personal', 'Nueva Antología Personal', 'Textos Cautivos', 'Biblioteca Personal',
    'Obras Completas I', 'Obras Completas II', 'Obras Completas III', 'Obras Completas IV', 'Obras Completas V',
    'Poesía Completa', 'Cuentos Completos', 'Ensayos Completos', 'Prólogos', 'Discursos',
    'Entrevistas', 'Cartas', 'Diarios', 'Autobiografías', 'Biografías',
    'Historias', 'Leyendas', 'Mitología', 'Filosofía', 'Religión',
    'Ciencia', 'Tecnología', 'Arte', 'Música', 'Cine',
    'Teatro', 'Danza', 'Pintura', 'Escultura', 'Arquitectura',
    'Fotografía', 'Diseño', 'Moda', 'Gastronomía', 'Viajes',
    'Geografía', 'Historia', 'Política', 'Economía', 'Sociología',
    'Psicología', 'Psiquiatría', 'Medicina', 'Biología', 'Física',
    'Química', 'Matemáticas', 'Astronomía', 'Geología', 'Ecología',
    'Botánica', 'Zoología', 'Antropología', 'Arqueología', 'Paleontología',
    'Genética', 'Neurociencia', 'Robótica', 'Inteligencia Artificial', 'Realidad Virtual',
    'Blockchain', 'Criptomonedas', 'Big Data', 'Machine Learning', 'Deep Learning',
    'Ciberseguridad', 'Cloud Computing', 'IoT', '5G', 'Realidad Aumentada',
    'Impresión 3D', 'Nanotecnología', 'Biotecnología', 'Fusión Nuclear', 'Energía Renovable',
    'Sostenibilidad', 'Cambio Climático', 'Medio Ambiente', 'Desarrollo Sostenible', 'Economía Circular',
    'E-commerce', 'Marketing Digital', 'Redes Sociales', 'SEO', 'SEM',
    'Content Marketing', 'Email Marketing', 'Inbound Marketing', 'Outbound Marketing', 'Growth Hacking',
    'Product Management', 'Project Management', 'Agile', 'Scrum', 'Kanban',
    'DevOps', 'CI/CD', 'Docker', 'Kubernetes', 'Terraform',
    'AWS', 'Azure', 'Google Cloud', 'Heroku', 'Vercel',
    'Netlify', 'GitHub', 'GitLab', 'Bitbucket', 'Jira',
    'Confluence', 'Slack', 'Zoom', 'Teams', 'Discord',
    'Figma', 'Sketch', 'Adobe XD', 'InVision', 'Marvel'
  ]

  const authors = [
    'Gabriel García Márquez', 'Miguel de Cervantes', 'Homero', 'George Orwell', 'Jane Austen',
    'Fiodor Dostoyevski', 'Herman Melville', 'León Tolstói', 'James Joyce', 'Dante Alighieri',
    'José Zorrilla', 'Antoine de Saint-Exupéry', 'Paulo Coelho', 'Victor Hugo', 'León Tolstói',
    'Homero', 'William Shakespeare', 'William Shakespeare', 'William Shakespeare', 'William Shakespeare',
    'F. Scott Fitzgerald', 'Harper Lee', 'Franz Kafka', 'J.R.R. Tolkien', 'J.R.R. Tolkien',
    'J.K. Rowling', 'Frank Herbert', 'Isaac Asimov', 'William Gibson', 'Ray Bradbury',
    'Aldous Huxley', 'Ayn Rand', 'Dan Brown', 'Umberto Eco', 'Carlos Ruiz Zafón',
    'Laura Esquivel', 'Juan Rulfo', 'Julio Cortázar', 'Jorge Luis Borges', 'Jorge Luis Borges',
    'Isabel Allende', 'Haruki Murakami', 'Haruki Murakami', 'Kenneth Grahame', 'Lewis Carroll',
    'J.M. Barrie', 'C.S. Lewis', 'Antoine de Saint-Exupéry', 'Hermann Hesse', 'Hermann Hesse',
    'Hermann Hesse', 'Eugène Ionesco', 'Jean-Paul Sartre', 'Albert Camus', 'Albert Camus',
    'Ernesto Sábato', 'Ernesto Sábato', 'Manuel Puig', 'Gabriel García Márquez', 'Gabriel García Márquez',
    'Gabriel García Márquez', 'Mario Vargas Llosa', 'Mario Vargas Llosa', 'Mario Vargas Llosa', 'Mario Vargas Llosa',
    'Mario Vargas Llosa', 'Mario Vargas Llosa', 'Mario Vargas Llosa', 'Mario Vargas Llosa', 'Mario Vargas Llosa',
    'Mario Vargas Llosa', 'Jorge Luis Borges', 'Jorge Luis Borges', 'Jorge Luis Borges', 'Jorge Luis Borges',
    'Jorge Luis Borges', 'Jorge Luis Borges', 'Jorge Luis Borges', 'Jorge Luis Borges', 'Jorge Luis Borges',
    'Jorge Luis Borges', 'Jorge Luis Borges', 'Jorge Luis Borges', 'Jorge Luis Borges', 'Jorge Luis Borges',
    'Jorge Luis Borges', 'Jorge Luis Borges', 'Jorge Luis Borges', 'Jorge Luis Borges', 'Jorge Luis Borges',
    'Jorge Luis Borges', 'Jorge Luis Borges', 'Jorge Luis Borges', 'Jorge Luis Borges', 'Jorge Luis Borges',
    'Clásicos', 'Clásicos', 'Clásicos', 'Clásicos', 'Clásicos',
    'Clásicos', 'Clásicos', 'Clásicos', 'Clásicos', 'Clásicos',
    'Clásicos', 'Clásicos', 'Clásicos', 'Clásicos', 'Clásicos',
    'Clásicos', 'Clásicos', 'Clásicos', 'Clásicos', 'Clásicos',
    'Clásicos', 'Clásicos', 'Clásicos', 'Clásicos', 'Clásicos',
    'Modernos', 'Modernos', 'Modernos', 'Modernos', 'Modernos',
    'Modernos', 'Modernos', 'Modernos', 'Modernos', 'Modernos',
    'Modernos', 'Modernos', 'Modernos', 'Modernos', 'Modernos',
    'Tecnología', 'Tecnología', 'Tecnología', 'Tecnología', 'Tecnología',
    'Tecnología', 'Tecnología', 'Tecnología', 'Tecnología', 'Tecnología',
    'Tecnología', 'Tecnología', 'Tecnología', 'Tecnología', 'Tecnología',
    'Innovación', 'Innovación', 'Innovación', 'Innovación', 'Innovación',
    'Innovación', 'Innovación', 'Innovación', 'Innovación', 'Innovación',
    'Business', 'Business', 'Business', 'Business', 'Business',
    'Business', 'Business', 'Business', 'Business', 'Business',
    'Business', 'Business', 'Business', 'Business', 'Business',
    'DevOps', 'DevOps', 'DevOps', 'DevOps', 'DevOps',
    'Cloud', 'Cloud', 'Cloud', 'Cloud', 'Cloud',
    'Herramientas', 'Herramientas', 'Herramientas', 'Herramientas', 'Herramientas',
    'Colaboración', 'Colaboración', 'Colaboración', 'Colaboración', 'Colaboración',
    'Diseño', 'Diseño', 'Diseño', 'Diseño', 'Diseño'
  ]

  const bookColors = [
    '#8B4513', '#A0522D', '#CD853F', '#D2691E', '#B8860B',
    '#556B2F', '#8FBC8F', '#2F4F4F', '#800020', '#8B0000',
    '#4A4A4A', '#696969', '#2C3E50', '#34495E', '#5D4037',
    '#795548', '#8D6E63', '#6D4C41', '#5D4037', '#4E342E'
  ]

  const books: Book[] = []
  for (let i = 0; i < 200; i++) {
    const title = titles[i % titles.length]
    const author = authors[i % authors.length]
    const status: BookStatus = Math.random() > 0.7 ? 'available' : 'unavailable'
    const formats: BookFormat[] = status === 'available' 
      ? (['pdf', 'epub', 'mobi', 'azw3'] as BookFormat[]).filter(() => Math.random() > 0.3)
      : []
    const color = bookColors[i % bookColors.length]

    books.push({
      id: i + 1,
      title,
      author,
      year: 1800 + Math.floor(Math.random() * 225),
      status,
      formats,
      color
    })
  }

  return books
}

// Componente de Libro
function BookComponent({ book, onClick }: { book: Book; onClick: (book: Book) => void }) {
  const isAvailable = book.status === 'available'

  return (
    <button
      onClick={() => onClick(book)}
      className={`
        relative w-8 h-32 rounded-sm shadow-lg transform transition-all duration-300
        hover:scale-105 hover:shadow-2xl hover:translate-y-[-4px]
        ${isAvailable 
          ? 'cursor-pointer hover:brightness-110' 
          : 'cursor-not-allowed opacity-40 grayscale'
        }
      `}
      style={{
        backgroundColor: book.color,
        boxShadow: isAvailable 
          ? '2px 2px 8px rgba(0,0,0,0.4), inset 1px 1px 2px rgba(255,255,255,0.1)'
          : 'none'
      }}
      disabled={!isAvailable}
      title={isAvailable ? `${book.title} - ${book.author}` : 'No disponible'}
    >
      {/* Lomo del libro */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/20" />
      
      {/* Textura del libro */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      
      {/* Líneas decorativas en el lomo */}
      <div className="absolute left-0.5 top-2 bottom-2 flex flex-col justify-between">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-1 h-0.5 bg-white/20"
          />
        ))}
      </div>

      {/* Etiqueta del libro (solo si está disponible) */}
      {isAvailable && (
        <div className="absolute right-1 top-1/2 -translate-y-1/2 w-5">
          <div className="text-[6px] text-white/80 font-bold leading-tight">
            <span className="block">{book.title.slice(0, 10)}</span>
            <span className="text-[5px] text-white/60">{book.author.split(' ').pop()}</span>
          </div>
        </div>
      )}
    </button>
  )
}

// Componente de Estante
function Bookshelf({ books, startIdx, endIdx, onBookClick }: { 
  books: Book[]; 
  startIdx: number; 
  endIdx: number; 
  onBookClick: (book: Book) => void 
}) {
  const shelfBooks = books.slice(startIdx, endIdx)

  return (
    <div className="relative w-full">
      {/* Fondo de madera del estante */}
      <div className="bg-gradient-to-b from-amber-900/50 to-amber-950/50 rounded-lg p-4 shadow-inner">
        {/* Estantería superior */}
        <div className="flex items-end justify-center gap-1 min-h-[140px] px-2 pb-3">
          {shelfBooks.map((book) => (
            <BookComponent key={book.id} book={book} onClick={onBookClick} />
          ))}
        </div>
        
        {/* Tablón del estante */}
        <div className="h-4 bg-gradient-to-b from-amber-800 to-amber-900 rounded-sm shadow-lg">
          <div className="h-0.5 bg-amber-950/50" />
        </div>
      </div>
    </div>
  )
}

// Modal de detalle del libro
function BookModal({ book, onClose }: { book: Book | null; onClose: () => void }) {
  if (!book) return null

  const formatIcons = {
    pdf: '📄',
    epub: '📱',
    mobi: '📚',
    azw3: '📖'
  }

  const formatLabels = {
    pdf: 'PDF',
    epub: 'EPUB',
    mobi: 'MOBI',
    azw3: 'AZW3'
  }

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg shadow-2xl max-w-lg w-full p-6 border-4 border-amber-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header del modal */}
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-amber-900 flex-1">
            {book.title}
          </h2>
          <button
            onClick={onClose}
            className="text-amber-900 hover:text-red-700 text-2xl font-bold ml-4"
          >
            ✕
          </button>
        </div>

        {/* Información del libro */}
        <div className="space-y-3 mb-6">
          <p className="text-amber-800">
            <span className="font-semibold">Autor:</span> {book.author}
          </p>
          <p className="text-amber-800">
            <span className="font-semibold">Año:</span> {book.year}
          </p>
          <p className="text-amber-800">
            <span className="font-semibold">Estado:</span>{' '}
            <span className={`font-semibold ${book.status === 'available' ? 'text-green-700' : 'text-red-700'}`}>
              {book.status === 'available' ? 'Disponible' : 'No disponible'}
            </span>
          </p>
        </div>

        {/* Formatos disponibles */}
        {book.status === 'available' && book.formats.length > 0 ? (
          <div>
            <h3 className="text-lg font-semibold text-amber-900 mb-3">
              Formatos disponibles:
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {book.formats.map((format) => (
                <button
                  key={format}
                  className={`
                    flex items-center gap-2 p-3 rounded-lg font-semibold
                    bg-gradient-to-br from-amber-600 to-amber-700
                    text-white shadow-md
                    hover:from-amber-700 hover:to-amber-800
                    active:scale-95 transition-all
                  `}
                  onClick={() => {
                    alert(`Descargando ${book.title} en formato ${formatLabels[format]}\n\nNota: Debe cargar el archivo ${formatLabels[format]} en la carpeta /public/books/${book.id}/ para que el enlace funcione.`)
                  }}
                >
                  <span className="text-xl">{formatIcons[format]}</span>
                  <span>{formatLabels[format]}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-amber-100 border-2 border-amber-300 rounded-lg p-4 text-center">
            <p className="text-amber-800 font-semibold">
              📚 Este libro aún no está disponible en formato digital
            </p>
            <p className="text-amber-700 text-sm mt-2">
              Cargue los archivos (PDF, EPUB, MOBI, AZW3) para activar este libro
            </p>
          </div>
        )}

        {/* Footer del modal */}
        <div className="mt-6 pt-4 border-t-2 border-amber-300">
          <p className="text-sm text-amber-700 text-center">
            Para activar este libro, cargue los archivos en:
            <code className="ml-2 bg-amber-200 px-2 py-1 rounded font-mono text-xs">
              /public/books/{book.id}/
            </code>
          </p>
        </div>
      </div>
    </div>
  )
}

// Página principal
export default function Home() {
  const [books] = useState<Book[]>(generateBooks())
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [showAvailableOnly, setShowAvailableOnly] = useState(false)

  // Filtrar libros
  const filteredBooks = books.filter(book => {
    const matchesSearch = 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesAvailability = !showAvailableOnly || book.status === 'available'
    return matchesSearch && matchesAvailability
  })

  // Calcular estadísticas
  const availableBooks = books.filter(b => b.status === 'available').length
  const totalBooks = books.length

  // Crear estantes (20 libros por estante)
  const booksPerShelf = 20
  const shelves = []
  for (let i = 0; i < Math.ceil(filteredBooks.length / booksPerShelf); i++) {
    shelves.push({
      startIdx: i * booksPerShelf,
      endIdx: Math.min((i + 1) * booksPerShelf, filteredBooks.length)
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-amber-200">
      {/* Modal de detalle */}
      <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />

      {/* Header */}
      <header className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-amber-100 tracking-wide">
                📚 Biblioteca Digital
              </h1>
              <p className="text-amber-200 mt-2 text-lg">
                {availableBooks} de {totalBooks} libros disponibles
              </p>
            </div>

            {/* Buscador y filtros */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="text"
                placeholder="Buscar por título o autor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 rounded-lg bg-amber-100 text-amber-900 placeholder-amber-600 border-2 border-amber-700 focus:border-amber-500 focus:outline-none w-full sm:w-64"
              />
              <label className="flex items-center gap-2 text-amber-100 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showAvailableOnly}
                  onChange={(e) => setShowAvailableOnly(e.target.checked)}
                  className="w-5 h-5 rounded accent-amber-500"
                />
                <span>Solo disponibles</span>
              </label>
            </div>
          </div>
        </div>
      </header>

      {/* Contenido principal - Sala de la biblioteca */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Decoración arquitectónica - Paredes */}
        <div className="relative">
          {/* Marco de madera */}
          <div className="absolute -inset-4 bg-gradient-to-b from-amber-900 to-amber-950 rounded-2xl" />
          
          {/* Panel interior */}
          <div className="relative bg-gradient-to-br from-amber-200 to-amber-300 rounded-xl p-6 shadow-2xl">
            {/* Detalles arquitectónicos - Molduras */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-amber-600 to-amber-700 rounded-t-xl" />
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-amber-600 to-amber-700 rounded-b-xl" />
            
            {/* Estantes de libros */}
            <div className="space-y-6">
              {shelves.map((shelf, index) => (
                <Bookshelf
                  key={index}
                  books={filteredBooks}
                  startIdx={shelf.startIdx}
                  endIdx={shelf.endIdx}
                  onBookClick={setSelectedBook}
                />
              ))}
            </div>

            {/* Mensaje si no hay libros */}
            {filteredBooks.length === 0 && (
              <div className="text-center py-12">
                <p className="text-2xl text-amber-800 font-semibold">
                  No se encontraron libros
                </p>
                <p className="text-amber-700 mt-2">
                  Intente con otra búsqueda o desactive el filtro
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Instrucciones para el administrador */}
        <div className="mt-8 bg-amber-100 border-2 border-amber-600 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-bold text-amber-900 mb-3">
            📝 Instrucciones para activar libros:
          </h3>
          <ul className="space-y-2 text-amber-800">
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span> Cada libro tiene una carpeta en <code className="bg-amber-200 px-2 py-1 rounded">/public/books/{'{id}'}/</code></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span> Cargue los archivos (PDF, EPUB, MOBI, AZW3) en la carpeta correspondiente</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span> Los libros aparecerán disponibles automáticamente cuando se detecten los archivos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span> Puede activar/desactivar libros modificando el array <code className="bg-amber-200 px-2 py-1 rounded">generateBooks()</code> en el código</span>
            </li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 mt-8 py-6 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-amber-200">
            📚 Biblioteca Digital - {new Date().getFullYear()}
          </p>
          <p className="text-amber-300 text-sm mt-2">
            Diseñado para alojar y compartir conocimiento en múltiples formatos
          </p>
        </div>
      </footer>
    </div>
  )
}
