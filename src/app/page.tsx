'use client'
// Biblioteca Digital - Digital Library

// App fixed and working
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
  pdfUrl?: string
}

// Generar 120 libros con PDF directos
const generateBooks = (): Book[] => {
  const titles = [
    'Tao Te King', 'I Ching', 'Así habló Zaratustra', 'El mundo como voluntad y representación', 'Libro Tibetano de los Muertos',
    'Matemáticas Básicas', 'Álgebra Lineal', 'Geometría Analítica', 'Cálculo Diferencial e Integral', 'Historia de las Matemáticas', 'Pensamiento Matemático',
    'La República', 'Poética', 'Historia de la Filosofía', 'Filosofía Antigua', 'Humano, Demasiado Humano', 'Historia de la Filosofía en México',
    'Teoría de la Música', 'Armonía Musical', 'Teoría del Arte', 'Historia del Arte', 'Arte en Chile', 'Artes Plásticas',
    'Astronomía Básica', 'Sistema Solar', 'Conceptos de Astronomía', 'Astrónomos', 'Astronomía en la Escuela',
    'Mitología Griega', 'Dioses y Héroes de la Mitología Griega',
    'Historia Mundial', 'Historia Universal Contemporánea', 'Historia de México', 'Viaje por la Historia de México', 'Historia del Arte en México',
    'Biografía del Che Guevara', 'José de San Martín', 'Simón Bolívar', 'San Martín: Soldado Argentino', 'Bolívar: Libertador',
    'Física General', 'Fundamentos de Física', 'Física Universitaria', 'Física Básica para Ingenieros',
    'Química Básica', 'Química General', 'Química Orgánica', 'Química: Conceptos Básicos', 'Química I',
    'Informática Básica', 'Computación Básica', 'Python: Aprende a Programar', 'Tutorial de Python 3', 'Programador Python Junior', 'Bases de Datos',
    'Fundamentos de Permacultura', 'La Esencia de la Permacultura', 'Manual de Hidroponía', 'ABC de la Hidroponía', 'Manual Básico de Hidroponía', 'Sistema Hidropónico',
    'Manual Básico de Piscicultura', 'Piscicultura: Manual Práctico',
    'Manual de Construcción con Tierra', 'Bioconstrucción', 'Taller de Bioconstrucción', 'Manual de Carpintería', 'Manual de Muebles de Madera',
    'Manual Básico de Apicultura', 'Guía Práctica del Apicultor', 'Manual de Apicultura', 'Guía de la Abeja Reina',
    'Mecatrónica Básica', 'Electrónica para Mecatrónica', 'Robótica Aplicada', 'Neurociencia para Ingenieros', 'Economía Solidaria',
    'Libro de los Muertos Egipcio', 'Textos Budistas', 'Sutras del Budismo', 'Vedanta', 'Vedas',
    'Fundamentos de Lingüística', 'Historia del Lenguaje', 'Lingüística General', 'Análisis del Discurso', 'Fonología y Fonética',
    'Teoría de la Literatura', 'Historia de la Literatura', 'Análisis Literario', 'Crítica Literaria', 'Literatura Comparada',
    'Diseño Arquitectónico', 'Historia de la Arquitectura', 'Urbanismo', 'Arquitectura Sostenible', 'Teoría de la Arquitectura',
    'Cien Años de Soledad', 'Don Quijote de la Mancha', 'La Ilíada', '1984', 'Orgullo y Prejuicio',
    'Crimen y Castigo', 'Moby Dick', 'Guerra y Paz', 'Ulises', 'La Divina Comedia',
    'Don Juan Tenorio', 'El Principito', 'El Alquimista', 'Los Miserables', 'Ana Karenina',
    'La Odisea', 'Hamlet', 'Romeo y Julieta', 'Macbeth', 'El Gran Gatsby',
    'Matar a un Ruiseñor', 'La Metamorfosis', 'El Señor de los Anillos', 'El Hobbit', 'Harry Potter',
    'Dune', 'Fundación', 'Neuromante', 'Fahrenheit 451', 'La Rebelión de Atlas',
    'El Código Da Vinci', 'El Nombre de la Rosa', 'Como Agua para Chocolate', 'Pedro Páramo', 'Rayuela',
    'La Casa de los Espíritus', 'Tokio Blues', 'Kafka en la Orilla', 'El Viento en los Sauces', 'Alicia en el País de las Maravillas',
    'Peter Pan', 'Las Crónicas de Narnia', 'El Principito', 'Siddhartha', 'Demian', 'El Lobo Estepario',
    'Rinoceronte', 'La Náusea', 'El Existencialismo es un Humanismo', 'El Túnel', 'Sobre Héroes y Tumbas',
    'Boquitas Pintadas', 'La Tregua', 'La Invención de Morel', 'Ficciones', 'El Aleph',
    'El Hijo del Hombre', 'La Ciudad y los Perros', 'Conversación en la Catedral', 'Pantaleón y las Visitadoras', 'La Casa Verde',
    'La Guerra del Fin del Mundo', 'La Fiesta del Chivo', 'El Hablador', 'Travesuras de la Niña Mala', 'El Sueño del Celta',
    'El Paraíso en la Otra Esquina', 'Los Jefes', 'Los Cachorros', 'La Casa Verde', 'Los Héroes'
  ]

  const colors = [
    '#8B4513', '#A0522D', '#CD853F', '#D2691E', '#B8860B',
    '#556B2F', '#8FBC8F', '#2E8B57', '#3CB371', '#20B2AA',
    '#4682B4', '#5F9EA0', '#6495ED', '#7B68EE', '#483D8B',
    '#8B008B', '#9932CC', '#BA55D3', '#C71585', '#DB7093'
  ]

  const books: Book[] = titles.map((title, index) => ({
    id: index + 1,
    title,
    author: `Autor ${index + 1}`,
    year: 2000 + (index % 24),
    status: index % 3 === 0 ? 'unavailable' : 'available',
    formats: ['pdf', 'epub', 'mobi'].filter(() => Math.random() > 0.5) as BookFormat[],
    color: colors[index % colors.length],
    pdfUrl: index < 5 ? `https://example.com/book-${index + 1}.pdf` : undefined
  }))

  return books
}

const books = generateBooks()

// Componente de un libro individual
function BookComponent({ book, onClick }: { book: Book; onClick: () => void }) {
  const height = 100 + Math.floor(Math.random() * 40)

  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer transition-all duration-200 hover:scale-105 hover:-translate-y-2"
      style={{ height: `${height}px` }}
    >
      <div
        className="w-12 h-full rounded-sm shadow-lg relative overflow-hidden"
        style={{ backgroundColor: book.color }}
      >
        {/* Efecto de lomo del libro */}
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/20" />
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/20" />

        {/* Título en el lomo */}
        <div className="absolute inset-0 flex items-center justify-center p-1">
          <div
            className="text-[6px] font-bold text-white text-center leading-tight"
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)'
            }}
          >
            {book.title}
          </div>
        </div>
      </div>

      {/* Indicador de disponibilidad */}
      {book.status === 'unavailable' && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">✗</span>
        </div>
      )}
    </div>
  )
}

// Modal de detalle del libro
function BookDetail({ book, onClose }: { book: Book; onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{book.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="w-24 h-32 rounded-lg shadow-lg"
        loading="lazy"
                style={{ backgroundColor: book.color }}
              />
              <div className="flex-1">
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Autor:</span> {book.author}
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Año:</span> {book.year}
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-gray-600">Estado:</span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      book.status === 'available'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {book.status === 'available' ? 'Disponible' : 'No disponible'}
                  </span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {book.formats.map(format => (
                    <span
                      key={format}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium uppercase"
                    >
                      {format}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {book.pdfUrl && (
              <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-amber-800 text-sm font-medium">
                  📄 PDF disponible para descarga
                </p>
              </div>
            )}

            <div className="flex gap-3 mt-6">
              {book.status === 'available' && (
                <button className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all shadow-lg">
                  Solicitar Préstamo
                </button>
              )}
              <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-all">
                Reservar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Imágenes del Header - Guardianes tradicionales japoneses
function ShisaLeft() {
  return (
    <div className="relative w-24 md:w-32 h-32 md:h-40 flex-shrink-0">
      <img
        src="https://tabimaniajapan.com/wp-content/uploads/2020/04/Identity-shisa-840x1024.jpg"
        alt="Shisa Okinawense - Guardián izquierdo"
        className="w-full h-full object-contain drop-shadow-lg"
        loading="lazy"
      />
    </div>
  )
}

function ManekiNeko() {
  return (
    <div className="relative w-16 md:w-20 h-20 md:h-24 flex-shrink-0">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGIIXQQbKEMEY4_D-4LPmTKyi1TaTNXKbABA&s"
        alt="Maneki Neko - Gato de la Suerte"
        className="w-full h-full object-contain drop-shadow-lg"
        loading="lazy"
      />
    </div>
  )
}

function KitsuneFox() {
  return (
    <div className="relative w-16 md:w-20 h-20 md:h-24 flex-shrink-0">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLSZ0VAv8l4o2GJqzpbSUi1sg3ei4IX3S6-A&s"
        alt="Zorro Kitsune de Inari"
        className="w-full h-full object-contain drop-shadow-lg"
        loading="lazy"
      />
    </div>
  )
}

function ShisaRight() {
  return (
    <div className="relative w-24 md:w-32 h-32 md:h-40 flex-shrink-0">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyPcpMaQW_90WDRnqapKezhV8HAMJsOnbZPA&s"
        alt="Shisa Okinawense - Guardián derecho"
        className="w-full h-full object-contain drop-shadow-lg"
        loading="lazy"
      />
    </div>
  )
}

// Componente de estrella dorada ámbar
function GoldStar() {
  return (
    <svg
      className="w-8 h-8 md:w-10 md:h-10 drop-shadow-lg flex-shrink-0"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="goldStar" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#FFA500', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FF8C00', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <polygon
        points="50,5 61,40 98,40 69,55 80,90 50,75 20,90 31,55 2,40 39,40"
        fill="url(#goldStar)"
        stroke="#B8860B"
        strokeWidth="2"
      />
    </svg>
  )
}

// Componente de estrella ámbar clara
function AmberStar() {
  return (
    <svg
      className="w-8 h-8 md:w-10 md:h-10 drop-shadow-lg flex-shrink-0"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="amberStar" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#FCD34D', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#F59E0B', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <polygon
        points="50,5 61,40 98,40 69,55 80,90 50,75 20,90 31,55 2,40 39,40"
        fill="url(#amberStar)"
        stroke="#D97706"
        strokeWidth="2"
      />
    </svg>
  )
}

function Clock() {
  return (
    <div className="relative w-8 h-12 relative flex-shrink-0">
      <div className="absolute top-1 left-1 w-6 h-1 bg-gradient-to-r from-gray-700 to-gray-600 rounded" />
      <div className="absolute top-2 left-2 w-4 h-4 bg-gradient-to-br from-gray-200 to-gray-100 rounded-full border-2 border-gray-300" />
      <div className="absolute bottom-0 left-2 w-4 h-1 bg-gradient-to-r from-gray-700 to-gray-600 rounded" />
    </div>
  )
}

// Imágenes para estantes - Más pequeñas que los libros
const shelfImages = [
  { name: 'borges.jpg', alt: 'Jorge Luis Borges' },
  { name: 'silvina_bioy.jpg', alt: 'Silvina Ocampo y Bioy Casares' },
  { name: 'alejandra_pizarnik.jpg', alt: 'Alejandra Pizarnik' },
  { name: 'cortazar.jpg', alt: 'Julio Cortázar' },
  { name: 'philip_k_dick.jpg', alt: 'Philip K. Dick' },
  { name: 'ursula_k_le_guin.jpg', alt: 'Ursula K. Le Guin' },
  { name: 'chantal_maillard.jpg', alt: 'Chantal Maillard' },
  { name: 'ray_bradbury.jpg', alt: 'Ray Bradbury' },
  { name: 'che_guevara.jpg', alt: 'Che Guevara' }
]

function ShelfImage({ image, shelfIndex }: { image: typeof shelfImages[0]; shelfIndex: number }) {
  return (
    <div className="relative w-10 h-12 flex-shrink-0 z-10">
      <img
        src={`/images/${image.name}`}
        alt={image.alt}
        className="w-full h-full object-cover rounded-sm shadow-md"
        loading="lazy"
      />
    </div>
  )
}

// Enciclopedias Especiales - Libros destacados
function NihongoAppBook() {
  return (
    <a
      href="https://kami00dragon.github.io/NihongoApp/index.html"
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-12 md:w-16 h-36 md:h-40 rounded-sm shadow-lg cursor-pointer transition-all duration-200 hover:scale-105 hover:-translate-y-2"
      style={{ backgroundColor: '#8B0000' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/20" />
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/20" />
      <div className="absolute inset-0 flex items-center justify-center p-1">
        <div
          className="text-[8px] md:text-[10px] font-bold text-white text-center leading-tight"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)'
          }}
        >
          NihongoApp
        </div>
      </div>
    </a>
  )
}

function AeternusAppBook() {
  return (
    <a
      href="https://kami00dragon.github.io/AeternusApp/"
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-12 md:w-16 h-36 md:h-40 rounded-sm shadow-lg cursor-pointer transition-all duration-200 hover:scale-105 hover:-translate-y-2"
      style={{ backgroundColor: '#5D4037' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/20" />
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/20" />
      <div className="absolute inset-0 flex items-center justify-center p-1">
        <div
          className="text-[8px] md:text-[10px] font-bold text-white text-center leading-tight"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)'
          }}
        >
          AeternusApp
        </div>
      </div>
    </a>
  )
}

function GramaticAppBook() {
  return (
    <a
      href="https://kami00dragon.github.io/gramaticapp/#posturas-teoricas"
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-12 md:w-16 h-36 md:h-40 rounded-sm shadow-lg cursor-pointer transition-all duration-200 hover:scale-105 hover:-translate-y-2"
      style={{ backgroundColor: '#424242' }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/20" />
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/20" />
      <div className="absolute inset-0 flex items-center justify-center p-1">
        <div
          className="text-[8px] md:text-[10px] font-bold text-white text-center leading-tight"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)'
          }}
        >
          GramaticApp
        </div>
      </div>
    </a>
  )
}

// Componente principal del estante de libros
function Bookshelf({ books, shelfIndex, onBookClick, isFirstShelf }: {
  books: Book[];
  shelfIndex: number;
  onBookClick: (book: Book) => void;
  isFirstShelf: boolean;
}) {
  // Obtener imagen correspondiente al estante (usar offset diferente al de los libros para que parezcan alejadas)
  const shelfImage = shelfImages[(shelfIndex + 5) % shelfImages.length]

  return (
    <div className="flex items-end gap-2">
      {/* Contenedor de libros */}
      <div className={`flex flex-1 gap-8 overflow-hidden max-h-48 ${shelfIndex % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
        {/* Agregar enciclopedias especiales si es el primer estante */}
        {isFirstShelf && (
          <>
            <NihongoAppBook />
            <AeternusAppBook />
            <GramaticAppBook />
          </>
        )}
        {books.map((book, index) => (
          <BookComponent key={book.id} book={book} onClick={() => onBookClick(book)} />
        ))}
      </div>

      {/* Imagen decorativa en el lado opuesto a los libros */}
      {shelfImage && (
        <ShelfImage image={shelfImage} shelfIndex={shelfIndex} />
      )}
    </div>
  )
}

export default function Home() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  // Crear estantes
  const shelves: Book[][] = []
  const booksPerShelf = Math.ceil(120 / 50)

  for (let i = 0; i < 50; i++) {
    const startIdx = i * booksPerShelf
    const shelfBooks = books.slice(startIdx, startIdx + booksPerShelf)
    shelves.push(shelfBooks)
  }

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50 to-orange-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-950 via-amber-800 to-amber-900 text-white py-6 px-4 shadow-2xl border-b-4 border-amber-950">
        <div className="max-w-7xl mx-auto">
          {/* Título con guardianes */}
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-4 flex-wrap">
            <div className="flex items-end gap-1">
              <ShisaLeft />
              <ManekiNeko />
            </div>
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-wider leading-tight">
                <div className="text-2xl md:text-4xl lg:text-5xl text-amber-300">
                  Biblioteca
                </div>
                <div className="text-xl md:text-3xl lg:text-4xl text-amber-100 mt-1">
                  Digital
                </div>
              </h1>
            </div>
            <div className="flex items-end gap-1">
              <KitsuneFox />
              <ShisaRight />
            </div>
          </div>

          {/* Barra de búsqueda con estrellas */}
          <div className="flex items-center justify-center gap-2 md:gap-4 max-w-2xl mx-auto mt-4">
            <GoldStar />
            <input
              type="text"
              placeholder="Buscar por título o autor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-500 min-w-[200px]"
            />
            <AmberStar />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Bookshelves */}
          {searchTerm ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {filteredBooks.map(book => (
                <BookComponent key={book.id} book={book} onClick={() => setSelectedBook(book)} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {shelves.map((shelfBooks, index) => (
                <div key={index} className="bg-gradient-to-b from-amber-800 to-amber-900 rounded-lg p-4 shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-amber-100 text-sm font-semibold">Estante #{index + 1}</span>
                    <Clock />
                  </div>
                  <Bookshelf books={shelfBooks} shelfIndex={index} onBookClick={setSelectedBook} isFirstShelf={index === 0} />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-800 via-red-600 to-red-700 text-white py-6 mt-auto">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm opacity-90">
            📚 Biblioteca Digital - Tu puerta al conocimiento universal 📚
          </p>
          <p className="text-xs opacity-70 mt-2">
            {books.length} libros disponibles para explorar
          </p>
        </div>
      </footer>

      {/* Modal */}
      {selectedBook && (
        <BookDetail book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  )
}
