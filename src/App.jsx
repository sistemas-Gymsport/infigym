import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Tienda from './pages/Tienda'
import ProductoDetalle from './pages/ProductoDetalle'
import Nosotros from './pages/Nosotros'
import Login from './pages/Login'
import Cotizacion from './pages/Cotizacion'
import Admin from './pages/Admin'
import AdminProductos from './pages/AdminProductos'
import AdminConfiguracion from './pages/AdminConfiguracion'
import AdminSidebar from './components/AdminSidebar'

export default function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdminRoute && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/producto/:id" element={<ProductoDetalle />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/cotizacion" element={<Cotizacion />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={
            <div className="flex min-h-screen bg-gray-50">
              <AdminSidebar />
              <div className="flex-1 p-8"><Admin /></div>
            </div>
          } />
          <Route path="/admin/productos" element={
            <div className="flex min-h-screen bg-gray-50">
              <AdminSidebar />
              <div className="flex-1 p-8"><AdminProductos /></div>
            </div>
          } />
          <Route path="/admin/configuracion" element={
            <div className="flex min-h-screen bg-gray-50">
              <AdminSidebar />
              <div className="flex-1 p-8"><AdminConfiguracion /></div>
            </div>
          } />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  )
}