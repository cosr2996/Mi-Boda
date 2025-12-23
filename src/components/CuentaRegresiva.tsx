import { useState, useEffect } from 'react';

const CuentaRegresiva = () => {
  const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });

  const fechaBoda = new Date("2026-11-14T17:30:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const ahora = new Date().getTime();
      const distancia = fechaBoda - ahora;
      if (distancia > 0) {
        setTimeLeft({
          dias: Math.floor(distancia / (1000 * 60 * 60 * 24)),
          horas: Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutos: Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60)),
          segundos: Math.floor((distancia % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#2D3A30] py-12 flex justify-center items-center rounded-2xl shadow-lg">
      <div className="flex items-center">
        
        {/* Lado Izquierdo: El número protagonista (pequeño pero potente) */}
        <div className="text-right pr-6">
          <span className="block text-6xl font-light text-[#DFD3C3] tracking-tighter leading-none">
            {timeLeft.dias}
          </span>
          <span className="text-[#D18B39] text-[10px] uppercase tracking-[0.4em] font-bold">
            Días
          </span>
        </div>

        {/* La línea vertical que te gusta, pero más sutil */}
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#D18B39]/50 to-transparent" />

        {/* Lado Derecho: Los detalles que acompañan */}
        <div className="pl-6 space-y-2">
          <div className="flex gap-3 text-[#DFD3C3]/70 font-light text-sm italic border-b border-[#DFD3C3]/10 pb-1">
            <span>{timeLeft.horas}h</span>
            <span>{timeLeft.minutos}m</span>
            <span className="text-[#D18B39] font-medium not-italic">{timeLeft.segundos}s</span>
          </div>
          <p className="text-[10px] text-[#DFD3C3]/40 uppercase tracking-[0.2em] leading-tight">
            Noviembre 14 <br /> 2026
          </p>
        </div>

      </div>
    </section>
  );
};

export default CuentaRegresiva;