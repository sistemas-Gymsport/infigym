import { Link, useLocation } from 'react-router-dom';

export default function AdminSidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-72 bg-[#050505] h-screen flex flex-col border-r border-gray-900 text-white sticky top-0 flex-shrink-0">
      <div className="p-8 border-b border-gray-900 flex items-center justify-center mb-4">
        <img src="/logo.png" alt="Logo Infinité" className="h-12 object-contain invert brightness-0" />
      </div>
      
      <nav className="flex-1 px-4 flex flex-col gap-2">
        <Link 
          to="/admin" 
          className={`px-5 py-4 rounded-xl text-sm tracking-wide transition-all ${isActive('/admin') ? 'bg-white text-black font-bold shadow-sm' : 'text-gray-400 hover:text-white font-medium'}`}
        >
          Dashboard
        </Link>
        <Link 
          to="/admin/productos" 
          className={`px-5 py-4 rounded-xl text-sm tracking-wide transition-all ${isActive('/admin/productos') ? 'bg-white text-black font-bold shadow-sm' : 'text-gray-400 hover:text-white font-medium'}`}
        >
          Gestión de Productos
        </Link>
        <Link 
          to="/admin/configuracion" 
          className={`px-5 py-4 rounded-xl text-sm tracking-wide transition-all ${isActive('/admin/configuracion') ? 'bg-white text-black font-bold shadow-sm' : 'text-gray-400 hover:text-white font-medium'}`}
        >
          Apariencia y Textos
        </Link>
      </nav>

      <div className="p-6 border-t border-gray-900">
        <Link to="/" className="flex items-center justify-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest hover:text-white transition-colors bg-gray-900/50 py-3 rounded-lg">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Volver a la tienda
        </Link>
      </div>
    </aside>
  );
}