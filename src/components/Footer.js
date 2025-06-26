import { FaInstagram, FaSpotify, FaSoundcloud, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-100 border-t border-gray-700 p-6 flex flex-col md:flex-row items-center md:justify-between justify-center text-center select-none">
      
      {/* Made by Vinícius Starck (Left) */}
      <div className="order-3 md:order-1 text-sm text-gray-400 mt-4 md:mt-0 md:text-left">
        Desenvolvido por {''}
        <a 
          href="https://starck-portifolio.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-600 transition-colors duration-300 font-semibold"
        >
          Vinícius Starck
        </a>
      </div>

      {/* Copyright (Center) */}
      <div className="order-1 md:order-2 mb-4 md:mb-0">
        <p>© 2025 Arthuro. All rights reserved.</p>
        <p className="mt-1 text-sm text-gray-500 italic">
          Made with passion for techno melódico 🎶
        </p>
      </div>

      {/* Social Icons (Right) */}
      <div className="flex space-x-6 text-xl order-2 md:order-3 mt-4 md:mt-0">
        <a
          href="https://www.instagram.com/arthuromusic/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-colors duration-300"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://open.spotify.com/intl-pt/artist/3CAIUvRWktbPST2UF8bIkO?si=Ax_jwZJARnOcgCVHwNOH7g"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition-colors duration-300"
          aria-label="Spotify"
        >
          <FaSpotify />
        </a>
        <a
          href="https://soundcloud.com/arthuromusic"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400 transition-colors duration-300"
          aria-label="SoundCloud"
        >
          <FaSoundcloud />
        </a>
        <a
          href="https://www.youtube.com/@arthuro-c6l"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 transition-colors duration-300"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
      </div>
      
    </footer>
  )
}
