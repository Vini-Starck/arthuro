import arthuroImg from '../fotos/arthuro.jpg'

export default function Home() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Imagem de fundo */}
      <img
        src={arthuroImg}
        alt="DJ Arthuro"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Texto centralizado */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold text-center px-4">
          Welcome to Arthuro's world of melodic techno
        </h1>
      </div>
    </section>
  )
}
