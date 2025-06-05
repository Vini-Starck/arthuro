import { Link, useLocation } from "react-router-dom";
import { FaInstagram, FaSpotify, FaSoundcloud, FaYoutube } from "react-icons/fa";

export default function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-black text-gray-100 flex justify-between items-center p-4 border-b border-gray-800 shadow-lg">
      <Link
        to="/"
        className="text-3xl font-extrabold tracking-wide cursor-pointer text-purple-400 hover:text-purple-600 transition-colors duration-300"
      >
        Arthuro
      </Link>

      <nav className="space-x-10 font-semibold text-gray-300 flex">
        {[
          { label: "Home", path: "/" },
          { label: "Contato", path: "/contato" },
          { label: "Fotos", path: "/fotos" },
          { label: "Músicas", path: "/musicas" },
        ].map(({ label, path }) => (
          <Link
            key={path}
            to={path}
            className={`relative px-1 hover:text-purple-500 transition-colors duration-300 ${
              isActive(path)
                ? "text-purple-500 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-purple-500"
                : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="flex space-x-6 text-xl text-gray-400">
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
    </header>
  );
}
