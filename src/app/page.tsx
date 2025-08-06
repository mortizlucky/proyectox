  'use client'
  import Link from 'next/link';
  import { useState } from "react"

export default function Home() {
 const [menuOpen, setMenuOpen] = useState(false)
   
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

          <a onClick={handleLinkClick} href="#" className="text-white hover:text-blue-600 w-full sm:w-auto block py-2 sm:py-0">Inicio</a>
          <a onClick={handleLinkClick} href="#nosotros" className="text-white hover:text-blue-600 w-full sm:w-auto block py-2 sm:py-0">Nosotros</a>
          <a onClick={handleLinkClick} href="#servicios" className="text-white hover:text-blue-600 w-full sm:w-auto block py-2 sm:py-0">Servicios</a>

          <Link onClick={handleLinkClick} href="/contacto" className="text-white bg-#064077 w-full sm:w-auto block py-2 sm:py-0">
            Contáctanos
          </Link>

          <a onClick={handleLinkClick} href="#" className="btnportal bg-transparent sm:w-auto block py-2 sm:py-0">Iniciar Sesión</a>
        </nav>
      </div>
    </header>

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


<section className="bg-gray-50 py-12 px-6 sm:px-12">
 

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Card 1 */}
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
      <div className="flex justify-center mb-4">
        <div className="bg-indigo-100 p-4 rounded-full">
          <img src="/mision.png" alt="Enterprise Solutions Apps" className="w-10" />

        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Misión</h3>
      <p className="text-gray-600 text-sm">Entendemos tus necesidades para crear soluciones digitales innovadoras y seguras.</p>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
      <div className="flex justify-center mb-4">
        <div className="bg-green-100 p-4 rounded-full">
          <img src="/calidad.png" alt="Enterprise Solutions Apps" className="w-10" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Calidad</h3>
      <p className="text-gray-600 text-sm">Desarrollamos con estándares de calidad y tecnologías de última generación.</p>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
      <div className="flex justify-center mb-4">
        <div className="bg-yellow-100 p-4 rounded-full">
          <img src="/innovacion.png" alt="Enterprise Solutions Apps" className="w-10" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Innovación</h3>
      <p className="text-gray-600 text-sm">Apostamos por la transformación digital con tecnologías modernas y eficientes.</p>
    </div>

    {/* Card 4 */}
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
      <div className="flex justify-center mb-4">
        <div className="bg-gray-100 p-4 rounded-full">
            <img src="/compromiso.png" alt="Enterprise Solutions Apps" className="w-10" />
        
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">Compromiso</h3>
      <p className="text-gray-600 text-sm">Acompañamos tu proyecto hasta lograr los resultados esperados.</p>
    </div>
  </div>
</section>


 {/* Nosotros */}
<section id="nosotros" className="py-30 bg-gray-50">
 <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Nosotros</h2>
    <p className="text-gray-600 text-lg leading-relaxed text-justify">
      En <strong>Enterprise Solutions Apps</strong> nos especializamos en brindar soluciones tecnológicas y servicios especializados, con un enfoque firme en la
    <strong> calidad, la innovación y la confianza.</strong> Nuestro propósito es acompañar a nuestros clientes en sus procesos de
    <strong>transformación digital y optimización operativa</strong>, aportando valor en cada etapa.
    </p>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 text-justify">
      Contamos con un <strong>equipo multidisciplinario de profesionales altamente capacitados </strong>, 
      que trabaja con compromiso, integridad y pasión para generar resultados significativos. 
      En Enterprise Solutions Apps, estamos convencidos de que la <strong>tecnología es un motor clave para el crecimiento sostenible </strong> y el desarrollo competitivo de las organizaciones.
    </p>
  </div>
</section>

 {/* Servicios */}
<section id="servicios" className="py-30 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Nuestros Servicios</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Servicio 1 */}
      <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition-all">
        <div className="mb-4">
          <span className="inline-block bg-blue-100 text-blue-600 p-3 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 17v-2a4 4 0 014-4h6"></path>
              <path d="M15 21h6v-6"></path>
              <path d="M16 5H8a4 4 0 00-4 4v12h12a4 4 0 004-4v-5"></path>
            </svg>
          </span>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Software a la Medida</h3>
        <p className="text-gray-600">
          Creamos soluciones digitales personalizadas para tu empresa: desde sistemas internos hasta plataformas complejas que impulsan eficiencia y crecimiento.
        </p>
      </div>

      {/* Servicio 2 */}
      <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition-all">
        <div className="mb-4">
          <span className="inline-block bg-green-100 text-green-600 p-3 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 5h18M9 3v2m6-2v2M4 11h16M4 17h16M10 21h4"></path>
            </svg>
          </span>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Aplicaciones Web</h3>
        <p className="text-gray-600">
          Desarrollamos apps web modernas, seguras y adaptables, con enfoque en rendimiento, usabilidad y acceso desde cualquier dispositivo.
        </p>
      </div>

      {/* Servicio 3 */}
      <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition-all">
        <div className="mb-4">
          <span className="inline-block bg-indigo-100 text-indigo-600 p-3 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9.75 3L8 6H5.25L6.75 9L5.25 12H8l1.75 3 1.75-3h2.75L15 9l-1.75-3H10.5L9.75 3z"></path>
            </svg>
          </span>
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Consultoría Tecnológica</h3>
        <p className="text-gray-600">
          Asesoramos a tu empresa en la adopción de tecnología, optimización de procesos y toma de decisiones estratégicas en TI.
        </p>
      </div>
    </div>
  </div>
</section>






      <footer className="footer">
        <p>© 2025 Enterpise Solutions Apps S.A. Todos los derechos reservados.</p>
      </footer>
    </main>
    
  );
  
}
