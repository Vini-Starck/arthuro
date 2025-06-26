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
    <section className="w-full h-full flex flex-col items-center justify-center relative text-gray-100 p-4">
      <h1 className="mt-8 mb-4 text-3xl md:text-4xl font-extrabold text-purple-400">Fotos</h1>

      <div className="relative w-full max-w-4xl h-auto" style={{ paddingBottom: '66.66%' }}> {/* 3:2 Aspect Ratio (example) */}
        <img
          src={photos[currentIndex]}
          alt={`Foto ${currentIndex + 1}`}
          className="absolute top-0 left-0 w-full h-full object-contain bg-gray-900 rounded-lg shadow-lg"
        />

        {/* Botão anterior */}
        <button
          onClick={prevPhoto}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition z-10"
          aria-label="Anterior"
        >
          <ChevronLeft size={32} className="sm:w-8 sm:h-8 md:w-10 md:h-10" />
        </button>

        {/* Botão próximo */}
        <button
          onClick={nextPhoto}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition z-10"
          aria-label="Próxima"
        >
          <ChevronRight size={32} className="sm:w-8 sm:h-8 md:w-10 md:h-10" />
        </button>
      </div>

      <p className="mt-4 text-sm sm:text-base opacity-75">
        Foto {currentIndex + 1} de {photos.length}
      </p>
    </section>
  )
}
