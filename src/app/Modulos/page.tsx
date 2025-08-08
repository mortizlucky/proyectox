// src/app/modulos/page.tsx

import { FaFileAlt, FaChartLine, FaUsers, FaCog } from "react-icons/fa";

export default function ModulosPage() {
  const modulos = [
    {
      titulo: "Reportes",
      descripcion: "Genera y consulta reportes en tiempo real.",
      icono: <FaFileAlt size={40} />,
      link: "/modulos/reportes",
    },
    {
      titulo: "Estadísticas",
      descripcion: "Visualiza gráficos y tendencias.",
      icono: <FaChartLine size={40} />,
      link: "/modulos/estadisticas",
    },
    {
      titulo: "Usuarios",
      descripcion: "Gestiona clientes y usuarios.",
      icono: <FaUsers size={40} />,
      link: "/modulos/usuarios",
    },
    {
      titulo: "Configuración",
      descripcion: "Personaliza tu cuenta y preferencias.",
      icono: <FaCog size={40} />,
      link: "/modulos/configuracion",
    },
  ];

  return (
    <div >
      {/* Encabezado */}

      
      <header className="fixed top-0 w-full z-50 bg-black shadow">
        <div className="header flex justify-between items-center px-4 py-2 bg-white shadow-md relative z-50">
      
        <img src="/ES.png" alt="Logo" className="h-10" />
        <button className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-600">
          Cerrar sesión
        </button>
        </div>
      </header>
<br></br><br></br>
      {/* Contenido */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Módulos disponibles</h1>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {modulos.map((mod, idx) => (
            <a
              key={idx}
              href={mod.link}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <div className="text-blue-600 mb-4">{mod.icono}</div>
              <h2 className="text-lg font-semibold mb-2">{mod.titulo}</h2>
              <p className="text-gray-600 text-sm">{mod.descripcion}</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
