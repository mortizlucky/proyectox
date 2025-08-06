  'use client'
  import Link from 'next/link';
  import { useState } from "react"

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [status, setStatus] = useState('');
const [menuOpen, setMenuOpen] = useState(false)
   
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevenir recarga

    setStatus('Enviando...');

    try {
      const res = await fetch('/api/sendmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('Correo enviado con éxito ✅');
        setFormData({ nombre: '', email: '', mensaje: '' });
      } else {
        setStatus(`Error: ${data.error}`);
      }
    } catch (error) {
      setStatus(`Error en la conexión ❌`);
    }
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 640) {
      setMenuOpen(false)
    }
  }

  return (

    <main>
      <header className="fixed top-0 w-full z-50 bg-black shadow">
      
      <div className="header flex justify-between items-center px-4 py-2 bg-white shadow-md relative z-50">
        <img src="/ES.png" alt="Enterprise Solutions Apps" className="w-44" />

        {/* Botón Hamburguesa (solo en móviles) */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menú de navegación */}
        <nav
  className={`absolute sm:static top-full left-0 w-full sm:w-auto sm:bg-transparent bg-[#053460] text-white shadow sm:shadow-none px-4 sm:px-0 
  flex-col sm:flex-row sm:flex gap-4 items-start sm:items-center text-sm sm:text-base transition-all duration-200 
  ${menuOpen ? 'flex' : 'hidden'} sm:flex`}
>

          <a onClick={handleLinkClick} href="/" className="text-white hover:text-blue-600 w-full sm:w-auto block py-2 sm:py-0">Inicio</a>
          <a onClick={handleLinkClick} href="/#nosotros" className="text-white hover:text-blue-600 w-full sm:w-auto block py-2 sm:py-0">Nosotros</a>
          <a onClick={handleLinkClick} href="/#servicios" className="text-white hover:text-blue-600 w-full sm:w-auto block py-2 sm:py-0">Servicios</a>

          <Link onClick={handleLinkClick} href="#" className="text-white bg-#064077 w-full sm:w-auto block py-2 sm:py-0">
            Contáctanos
          </Link>

          <a onClick={handleLinkClick} href="#" className="btnportal bg-transparent sm:w-auto block py-2 sm:py-0">Iniciar Sesión</a>
        </nav>
      </div>
    </header>

      
    
    <section id="contacto" className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contáctanos</h2>
        <p className="text-lg text-gray-600 mb-10">
          ¿Tienes un proyecto en mente? Estamos listos para ayudarte.
        </p>

        <form className="grid grid-cols-1 gap-y-6" onSubmit={handleSend}>
          <div>
            <label htmlFor="nombre" className="block text-left text-sm font-medium text-gray-700">
              Nombre completo
            </label>
            <input
              type="text"
              id="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="tunombre@correo.com"
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-left text-sm font-medium text-gray-700">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Cuéntanos sobre tu proyecto..."
            />
          </div>

          <div>
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-white rounded-md text-base font-medium hover:opacity-90 cursor-pointer hover:underline"
              style={{ backgroundColor: '#3a7ebe' }}
            >
              Enviar correo
            </button>
          </div>
        </form>

        {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
      </div>
    </section>
    
{/* Hero Video */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover brightness-[35%] z-0"
        >
          <source src="/174086-850404739.mp4" type="video/mp4" />
          Tu navegador no soporta el video HTML5.
        </video>

        {/* Texto encima del video */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-bold mb-6">
            Enterprise Solutions Apps
          </h1>
          <p className="text-lg sm:text-xl mb-4">
            Transformamos necesidades con soluciones a la medida
          </p>
          <h3 className="text-md sm:text-lg max-w-3xl">
            Diseñamos y desarrollamos soluciones de software que impulsan la transformación digital de empresas en Colombia y Latinoamérica.
          </h3>
        </div>
      </div>
      </main>
  );
}
