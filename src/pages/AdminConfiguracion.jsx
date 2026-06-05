import { useState, useEffect } from 'react';

export default function AdminConfiguracion() {
  const [settings, setSettings] = useState({ hero_text: '', hero_image: '', whatsapp: '', about_title: '', about_text: '', about_image: '', footer_text: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('/api/settings').then(res => res.json()).then(data => setSettings(data || {}));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetch('/api/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings)
    });
    setLoading(false);
    alert('Configuración guardada correctamente.');
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold uppercase tracking-widest text-black">Apariencia y Textos</h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-800 border-b border-gray-100 pb-3">Información General</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Número WhatsApp</label>
              <input type="text" value={settings.whatsapp || ''} onChange={e => setSettings({...settings, whatsapp: e.target.value})} className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-sm text-gray-800" placeholder="+52 1 446 200 0666" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Texto del Footer</label>
              <input type="text" value={settings.footer_text || ''} onChange={e => setSettings({...settings, footer_text: e.target.value})} className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-sm text-gray-800" placeholder="Derechos de autor ©..." />
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-800 border-b border-gray-100 pb-3">Sección Inicio (Hero)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Texto Principal</label>
              <input type="text" value={settings.hero_text || ''} onChange={e => setSettings({...settings, hero_text: e.target.value})} className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-sm text-gray-800" placeholder="EQUIPO DE FITNESS DE ALTA GAMA" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">URL Imagen de Fondo</label>
              <input type="text" value={settings.hero_image || ''} onChange={e => setSettings({...settings, hero_image: e.target.value})} className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-sm text-gray-800" placeholder="https://..." />
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-800 border-b border-gray-100 pb-3">Sección Nosotros</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Título de la sección</label>
              <input type="text" value={settings.about_title || ''} onChange={e => setSettings({...settings, about_title: e.target.value})} className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-sm text-gray-800" placeholder="Bienvenido a INFINITÉ..." />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase text-gray-500 tracking-wider">Texto Descriptivo</label>
              <textarea value={settings.about_text || ''} onChange={e => setSettings({...settings, about_text: e.target.value})} className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black text-sm text-gray-800 min-h-[150px] resize-y" placeholder="Somos una empresa especializada..." />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4 mb-12">
          <button type="submit" disabled={loading} className="px-10 py-4 bg-black text-white rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all disabled:bg-gray-300 shadow-lg shadow-black/10">
            {loading ? 'Guardando...' : 'Guardar Configuración'}
          </button>
        </div>

      </form>
    </div>
  );
}