import { Link } from 'react-router-dom';

const values = [
  {
    num: '01',
    title: 'Calidad sin Compromiso',
    desc: 'Cada producto pasa por rigurosas pruebas de calidad antes de llegar a tus manos. Fabricados con los mejores materiales del mercado.',
  },
  {
    num: '02',
    title: 'Asesoría Especializada',
    desc: 'Nuestro equipo de expertos está disponible para guiarte en la selección del equipo ideal según tus objetivos y espacio.',
  },
  {
    num: '03',
    title: 'Garantía Infinité',
    desc: 'Respaldamos cada venta con nuestra garantía exclusiva. Tu inversión está completamente protegida.',
  },
  {
    num: '04',
    title: 'Logística Eficiente',
    desc: 'Enviamos a todo México. Desde Querétaro llevamos tu equipo de gimnasio en perfectas condiciones, a tiempo.',
  },
];

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-white">

      <div className="bg-black py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full border border-white translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-white -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-2 text-xs text-gray-600 uppercase tracking-widest mb-8">
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-white">Nosotros</span>
          </div>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">Nuestra Historia</p>
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase leading-none tracking-tighter mb-8">
              Somos<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Infinité</span>
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl">
              Una empresa mexicana especializada en la venta de equipos de gimnasio de alta calidad, para uso personal y comercial, con sede en Querétaro.
            </p>
          </div>
        </div>
      </div>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div className="lg:sticky lg:top-40">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="Infinité Products"
                  className="w-full max-w-sm mx-auto lg:mx-0 object-contain"
                />
                <div className="mt-10 grid grid-cols-2 gap-4">
                  {[
              
                    { num: '100%', label: 'Garantía' },
                    { num: 'MX', label: 'Envíos nacionales' },
                  ].map(item => (
                    <div key={item.label} className="bg-gray-50 border border-gray-100 p-5">
                      <p className="text-3xl font-black text-black">{item.num}</p>
                      <p className="text-xs text-gray-400 uppercase tracking-widest mt-1 font-medium">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl font-medium text-gray-900 leading-relaxed mb-6">
                  En INFINITÉ, nos enorgullece ofrecer una amplia selección de equipos de gimnasio de última generación diseñados para ayudarte a alcanzar tus objetivos de forma efectiva y eficiente.
                </p>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  Ya sea que estés buscando construir músculo, mejorar tu resistencia o simplemente mantenerte en forma, nuestros equipos están diseñados para satisfacer tus necesidades — ya sea para uso personal en casa o para equipar un gimnasio comercial completo.
                </p>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  Nuestros equipos están fabricados con los mejores materiales y tecnologías avanzadas para garantizar su durabilidad y eficacia. Todos nuestros productos han sido probados y certificados para cumplir con los estándares de calidad más altos.
                </p>
                <p className="text-gray-600 font-light leading-relaxed">
                  Nuestro equipo de profesionales altamente capacitados está siempre a tu disposición para responder cualquier pregunta y brindarte una experiencia de compra sin problemas. Estamos comprometidos en hacer todo lo posible para garantizar tu satisfacción.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <p className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6">Nuestros valores</p>
                <div className="flex flex-col divide-y divide-gray-100">
                  {values.map((v) => (
                    <div key={v.num} className="py-6 flex gap-6 group">
                      <span className="text-xs font-black text-gray-200 group-hover:text-black transition-colors mt-0.5 flex-shrink-0 tabular-nums">
                        {v.num}
                      </span>
                      <div>
                        <h3 className="text-sm font-black text-gray-900 uppercase tracking-wide mb-2">{v.title}</h3>
                        <p className="text-sm text-gray-500 font-light leading-relaxed">{v.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link
                  to="/tienda"
                  className="px-8 py-4 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  Ver productos
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/cotizacion"
                  className="px-8 py-4 border border-gray-200 text-black text-xs font-bold uppercase tracking-widest hover:border-black transition-colors flex items-center justify-center"
                >
             </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-t border-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">¿Tienes preguntas?</p>
          <h2 className="text-4xl font-black text-black uppercase mb-6">Hablemos</h2>
          <p className="text-gray-500 text-sm font-light mb-8 max-w-md mx-auto">
            Estamos disponibles de lunes a viernes de 9:00 AM a 6:00 PM para atenderte.
          </p>
          <a
            href="https://wa.me/5214421347882"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Contáctanos por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}