import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaInstagram, FaSpotify, FaSoundcloud, FaYoutube, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("");

    if (!form.nome || !form.email || !form.mensagem) {
      setStatus("Por favor, preencha todos os campos.");
      return;
    }

    const SERVICE_ID = "seu_service_id";
    const TEMPLATE_ID = "seu_template_id";
    const USER_ID = "seu_user_id";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, USER_ID)
      .then(() => {
        setStatus("Mensagem enviada com sucesso!");
        setForm({ nome: "", email: "", mensagem: "" });
      })
      .catch(() => {
        setStatus("Erro ao enviar a mensagem. Tente novamente mais tarde.");
      });
  };

  return (
    <section className="max-w-lg mx-auto mt-24 mb-12 p-8 bg-gradient-to-br from-gray-900 via-purple-900 to-black rounded-lg shadow-xl text-gray-100 font-sans">
      <h1 className="text-4xl font-extrabold mb-8 text-center tracking-wide text-purple-400 drop-shadow-lg">
        Entre em Contato
      </h1>

      <p className="text-center mb-10 text-gray-300 font-mono tracking-widest">
        Quer marcar uma festa, trocar ideia ou ouvir um set exclusivo? Me mande uma mensagem!
      </p>

      <div className="flex justify-center gap-8 mb-12">
        <a
          href="mailto:arthuro.maeztu@gmail.com"
          className="flex items-center gap-2 px-5 py-3 border border-purple-600 rounded-md text-purple-400 hover:bg-purple-700 hover:text-white transition shadow-md"
          aria-label="Enviar email"
        >
          <FaEnvelope className="w-6 h-6" />
          arthuro.maeztu@gmail.com
        </a>

        <a
          href="https://wa.me/5511941474743"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 border border-green-600 rounded-md text-green-400 hover:bg-green-700 hover:text-white transition shadow-md"
          aria-label="Enviar mensagem via WhatsApp"
        >
          <FaWhatsapp className="w-6 h-6" />
          (11) 9 4147-4743
        </a>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <label className="block">
          <span className="text-gray-300 font-semibold">Nome</span>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            placeholder="Seu nome"
            className="mt-2 w-full rounded-md bg-gray-800 border border-gray-700 p-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            required
          />
        </label>

        <label className="block">
          <span className="text-gray-300 font-semibold">Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            className="mt-2 w-full rounded-md bg-gray-800 border border-gray-700 p-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            required
          />
        </label>

        <label className="block">
          <span className="text-gray-300 font-semibold">Mensagem</span>
          <textarea
            name="mensagem"
            value={form.mensagem}
            onChange={handleChange}
            placeholder="Digite sua mensagem..."
            rows={5}
            className="mt-2 w-full rounded-md bg-gray-800 border border-gray-700 p-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-semibold tracking-wide shadow-lg transition"
        >
          Enviar Mensagem
        </button>
      </form>

      {status && (
        <p
          className={`mt-6 text-center font-semibold ${
            status.includes("sucesso") ? "text-green-400" : "text-red-500"
          }`}
        >
          {status}
        </p>
      )}

      <div className="flex space-x-6 text-xl text-gray-400 mt-12 justify-center">
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
    </section>
  );
}
