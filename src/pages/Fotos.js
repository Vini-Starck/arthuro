import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import arthuro1 from '../fotos/arthuro1.jpg'
import arthuro2 from '../fotos/arthuro2.jpg'
import arthuro3 from '../fotos/arthuro3.jpg'
import arthuro4 from '../fotos/arthuro4.jpg'
import arthuro5 from '../fotos/arthuro5.jpg'
import arthuro6 from '../fotos/arthuro6.jpg'
import arthuro7 from '../fotos/arthuro7.jpg'
import arthuro8 from '../fotos/arthuro8.jpg'
import arthuro9 from '../fotos/arthuro9.jpg'
import arthuro10 from '../fotos/arthuro10.jpg'
import arthuro11 from '../fotos/arthuro11.jpg'
import arthuro12 from '../fotos/arthuro12.jpg'

export default function Fotos() {
  const photos = [
    arthuro1, arthuro2, arthuro3, arthuro4, arthuro5, arthuro6,
    arthuro7, arthuro8, arthuro9, arthuro10, arthuro11, arthuro12
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center relative text-gray-100">
      <h1 className="absolute top-6 text-3xl font-extrabold">Fotos</h1>

      <img
        src={photos[currentIndex]}
        alt={`Foto ${currentIndex + 1}`}
        className="max-w-full max-h-full object-contain bg-gray-900"
      />

      {/* Botão anterior */}
      <button
        onClick={prevPhoto}
        className="absolute left-4 md:left-12 text-white p-2 hover:text-gray-400 transition"
        aria-label="Anterior"
      >
        <ChevronLeft size={48} />
      </button>

      {/* Botão próximo */}
      <button
        onClick={nextPhoto}
        className="absolute right-4 md:right-12 text-white p-2 hover:text-gray-400 transition"
        aria-label="Próxima"
      >
        <ChevronRight size={48} />
      </button>

      <p className="absolute bottom-6 text-sm opacity-75">
        Foto {currentIndex + 1} de {photos.length}
      </p>
    </section>
  )
}
