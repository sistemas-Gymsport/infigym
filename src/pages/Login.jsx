import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      
      if (res.ok) {
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/admin/productos');
      } else {
        setError('Contraseña incorrecta');
      }
    } catch (err) {
      setError('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-6">
      <form onSubmit={handleLogin} className="bg-white p-10 shadow-lg border border-gray-100 w-full max-w-md flex flex-col gap-6">
        <div className="text-center mb-4">
          <span className="text-3xl font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2 mb-2">
            <span className="text-4xl">∞</span> INFINITÉ
          </span>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Panel de Administración</p>
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-widest text-gray-700">Contraseña de acceso</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="p-3 border border-gray-300 focus:outline-none focus:border-black transition-colors"
          />
        </div>
        
        {error && <p className="text-red-500 text-xs font-bold uppercase">{error}</p>}
        
        <button 
          type="submit" 
          disabled={loading}
          className="bg-black text-white p-4 font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors disabled:opacity-50 mt-2"
        >
          {loading ? 'Verificando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
}