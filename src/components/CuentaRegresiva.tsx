import { useState, useEffect } from "react";

const CuentaRegresiva = () => {
  // Fecha y hora específica de la misa: 14 de noviembre de 2026 a las 17:30
  const targetDate = new Date("2026-11-14T17:30:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    días: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          días: Math.floor(distance / (1000 * 60 * 60 * 24)),
          horas: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutos: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          segundos: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-[#1B3022] p-5 rounded-2xl shadow-2xl text-center max-w-lg mx-auto border border-[#37553C]">
      <h2 className="text-[#C19A6B] text-2xl font-serif mb-2 tracking-widest uppercase">
        Nuestra Boda
      </h2>
      <p className="text-[#37553C] text-sm mb-6 font-medium italic">
        Faltan solo...
      </p>

      <div className="grid grid-cols-4 gap-4">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div
            key={label}
            className="flex flex-col bg-[#16261b] p-3 rounded-lg border border-[#37553C]/20"
          >
            <span className="text-[#C19A6B] text-2xl font-bold font-mono">
              {String(value).padStart(2, "0")}
            </span>
            <span className="text-[#37553C] text-[10px] uppercase tracking-widest mt-1 font-bold">
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-[#37553C]/30 text-[#C19A6B] font-serif">
        <p className="text-lg">14 de Noviembre, 2026</p>
        <p className="text-sm opacity-80 mt-1 uppercase tracking-widest">
          5:30 pm
        </p>
      </div>
    </div>
  );
};

export default CuentaRegresiva;
