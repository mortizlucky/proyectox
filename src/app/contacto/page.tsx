'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [status, setStatus] = useState('');

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

  

  return (

    <main>
      <header className="fixed top-0 w-full z-50 bg-white shadow">
        <div className="header">
          <img src="/ES.png" alt="Enterprise Solutions Apps" className="w-44" />
          <nav className="flex gap-4 items-center text-sm sm:text-base">
            <Link href="/" className="hover:text-blue-600">
              Inicio
            </Link>    
             <Link href="/#nosotros" className="hover:text-blue-600">
              Nosotros
            </Link>   
             <Link href="/#servicios" className="hover:text-blue-600">
              Servicios
            </Link>   
              <a href="#" className="hover:text-blue-600">Contáctanos</a>
              <a href="#" className="btnportal">Iniciar Sesión</a>
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
