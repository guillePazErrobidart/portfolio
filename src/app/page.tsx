import { FaUser, FaHeadphones , FaEnvelope } from "react-icons/fa";
import { Card } from "./components/Card";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] text-white flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
        {/* Left section */}
        <div className="flex flex-col justify-center mr-6">
          <p className="text-yellow-400 mb-2">¡Hola! 👋</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Soy Guille Paz Errobidart
          </h1>
          <p className="text-gray-300 mb-6">
            Soy desarrollador web con pasión por el diseño minimalista, los
            podcasts y la tecnología. Este portfolio es un pequeño espacio para
            compartir mis proyectos y contenidos.
          </p>
          <a
            href="/cvGuillermoPazErrobidart.pdf"
            download
            className="bg-yellow-400 text-black font-semibold px-5 py-2 rounded hover:bg-yellow-300 transition w-fit"
          >
            Descargar CV
          </a>
        </div>

        {/* Right section */}
        <div className="grid grid-cols-1 gap-3 ml-12 w-80">
          <Card icon={<FaUser />} label="Sobre mí" href="/about" />
          <Card icon={<FaHeadphones  />} label="Mi podcast" href="/podcast" />
          <Card icon={<FaEnvelope />} label="Contacto" href="/contact" />
        </div>
      </div>
    </main>
  );
}
