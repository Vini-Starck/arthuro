export default function Musicas() {
  return (
    <section className="max-w-3xl mx-auto p-6 space-y-10">
      <h1 className="text-4xl font-extrabold text-center text-grey-100 mb-8">Músicas</h1>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-100">TURN X Arthuro (BR)</h2>
        <iframe
          title="Novo Spotify Player"
          src="https://open.spotify.com/embed/artist/3wK2mSY4CgWTT3sAia2WdC?utm_source=generator"
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>

      <div className="space-y-4">
        <iframe
          title="Spotify Player"
          src="https://open.spotify.com/embed/artist/3CAIUvRWktbPST2UF8bIkO?utm_source=generator"
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-100">SoundCloud</h2>
        <iframe
          title="SoundCloud Player"
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/arthuromusic&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </section>
  );
}
