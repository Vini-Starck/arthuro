import React, { useState } from "react";
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

    // Comentado para simular o envio, pois os IDs do EmailJS são placeholders.
    // Para usar o EmailJS de verdade, descomente e preencha com seus IDs.
    // const SERVICE_ID = "YOUR_SERVICE_ID"; 
    // const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    // const USER_ID = "YOUR_USER_ID"; 

    // emailjs
    //   .send(SERVICE_ID, TEMPLATE_ID, form, USER_ID)
    //   .then(() => {
    //     setStatus("Mensagem enviada com sucesso!");
    //     setForm({ nome: "", email: "", mensagem: "" });
    //   })
    //   .catch(() => {
    //     setStatus("Erro ao enviar a mensagem. Tente novamente mais tarde.");
    //   });

    // Simulação de envio de e-mail bem-sucedido
    setTimeout(() => {
      setStatus("Mensagem enviada com sucesso!");
      setForm({ nome: "", email: "", mensagem: "" });
    }, 1000); // Simula um atraso de 1 segundo
  };

  return (
    <section className="max-w-md mx-auto my-8 p-6 sm:p-8 bg-gradient-to-br from-gray-900 via-purple-900 to-black rounded-lg shadow-xl text-gray-100 font-sans">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 sm:mb-8 text-center tracking-wide text-purple-400 drop-shadow-lg">
        Entre em Contato
      </h1>

      <p className="text-center mb-8 text-gray-300 font-mono tracking-widest text-sm sm:text-base">
        Quer marcar uma festa, trocar ideia ou ouvir um set exclusivo? Me mande uma mensagem!
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-8">
        <a
          href="mailto:arthuro.maeztu@gmail.com"
          className="flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-3 border border-purple-600 rounded-md text-purple-400 hover:bg-purple-700 hover:text-white transition shadow-md text-sm sm:text-base"
          aria-label="Enviar email"
        >
          <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />
          <span>Email</span>
        </a>

        <a
          href="https://wa.me/5511941474743"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-3 border border-green-600 rounded-md text-green-400 hover:bg-green-700 hover:text-white transition shadow-md text-sm sm:text-base"
          aria-label="Enviar mensagem via WhatsApp"
        >
          <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
          <span>WhatsApp</span>
        </a>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
        <label className="block">
          <span className="text-gray-300 font-semibold">Nome</span>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            placeholder="Seu nome"
            className="mt-1 sm:mt-2 w-full rounded-md bg-gray-800 border border-gray-700 p-2 sm:p-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm sm:text-base"
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
            className="mt-1 sm:mt-2 w-full rounded-md bg-gray-800 border border-gray-700 p-2 sm:p-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm sm:text-base"
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
            rows={4}
            className="mt-1 sm:mt-2 w-full rounded-md bg-gray-800 border border-gray-700 p-2 sm:p-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-sm sm:text-base"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full py-2 sm:py-3 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-semibold tracking-wide shadow-lg transition text-base sm:text-lg"
        >
          Enviar Mensagem
        </button>
      </form>

      {status && (
        <p
          className={`mt-4 sm:mt-6 text-center font-semibold text-sm sm:text-base ${
            status.includes("sucesso") ? "text-green-400" : "text-red-500"
          }`}
        >
          {status}
        </p>
      )}

      <div className="flex justify-center space-x-4 sm:space-x-6 text-lg sm:text-xl text-gray-400 mt-8 sm:mt-12">
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