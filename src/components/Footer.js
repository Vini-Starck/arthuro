import { FaInstagram, FaSpotify, FaSoundcloud, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-100 border-t border-gray-700 p-6 relative select-none">
      
      <div className="text-center">
        <p>© 2025 Arthuro. All rights reserved.</p>
        <p className="mt-1 text-sm text-gray-500 italic">
          Made with passion for techno melódico 🎶
        </p>
      </div>

      <div className="flex space-x-6 text-xl absolute right-6 top-1/2 transform -translate-y-1/2">
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
