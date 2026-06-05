import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const [stats, setStats] = useState({ products: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('isAuthenticated')) {
      navigate('/login');
      return;
    }
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setStats({ products: data.length || 0 }));
  }, [navigate]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold uppercase tracking-widest text-black">
          Dashboard General
        </h1>
      </div>
      
      <div className="mb-10 flex justify-center py-12 bg-white border border-gray-100 rounded-2xl shadow-sm">
        <img src="/logo.png" alt="Logo Infinité" className="h-40 object-contain opacity-90" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 border border-gray-100 rounded-2xl shadow-sm flex flex-col items-center justify-center transition-shadow hover:shadow-md">
          <span className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Total Productos</span>
          <span className="text-6xl font-black text-black">{stats.products}</span>
        </div>
        
        <div className="bg-black p-8 border border-black rounded-2xl shadow-sm flex flex-col items-center justify-center text-white">
          <span className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Estado del Sistema</span>
          <span className="text-2xl font-bold uppercase tracking-widest text-green-400 mt-2">En línea</span>
        </div>

        <div className="bg-white p-8 border border-gray-100 rounded-2xl shadow-sm flex flex-col items-center justify-center transition-shadow hover:shadow-md">
          <span className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">Acciones Rápidas</span>
          <button onClick={() => navigate('/admin/productos')} className="w-full py-3.5 bg-gray-100 rounded-lg text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
            Ir a Inventario
          </button>
        </div>
      </div>
    </div>
  );
}