export default function ProductCard({ title, description, imageSrc }) {
  return (
    <div className="relative overflow-hidden rounded-sm bg-gradient-to-b from-white/10 to-[#0a0a0a] backdrop-blur-2xl border border-white/5 group transition-all duration-500 hover:border-purple-500/30">
      <div className="h-80 w-full relative overflow-hidden bg-[#111]">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
      </div>
      <div className="p-10 relative z-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
        <h3 className="text-2xl font-light tracking-[0.2em] text-white uppercase mb-4">{title}</h3>
        <p className="text-gray-400 font-light text-sm leading-relaxed mb-8 min-h-[80px]">{description}</p>
        <button className="w-full py-4 bg-transparent border border-gray-700 text-white uppercase tracking-[0.2em] text-xs hover:border-purple-500 hover:text-purple-300 hover:shadow-[0_0_15px_rgba(147,51,234,0.3)] transition-all duration-300">
          Ver equipos
        </button>
      </div>
    </div>
  );
}