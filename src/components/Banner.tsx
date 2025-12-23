import { useState, useRef } from "react";
import CuentaRegresiva from "./CuentaRegresiva";

const Banner = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpenInvitation = () => {
    if (audioRef.current) {
      // Forzamos la reproducción JUSTO en el momento del click
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setHasStarted(true); // Solo avanzamos si el audio arrancó o se intentó
        })
        .catch((err) => {
          console.log("Reintento tras interacción:", err);
          setHasStarted(true); // Si falla, abrimos igual, pero el permiso ya quedó dado
        });
    }
  };

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  // Componente de Hojas
  const FallingLeaves = () => (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <div key={i} className={`leaf leaf-${i}`} />
      ))}
      <style>{`
        .leaf { position: absolute; width: 20px; height: 20px; background: #8B4513; opacity: 0.6; border-radius: 0 100% 0 100%; top: -50px; animation: fall linear infinite; }
        .leaf:nth-child(even) { background: #C19A6B; }
        .leaf:nth-child(3n) { background: #1B3022; }
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); left: var(--left); opacity: 0; }
          10% { opacity: 0.8; }
          100% { transform: translateY(100vh) rotate(720deg); left: var(--left-end); opacity: 0; }
        }
        ${[...Array(12)].map((_, i) => `.leaf-${i} { --left: ${Math.random() * 100}%; --left-end: ${Math.random() * 100 + (Math.random() * 20 - 10)}%; animation-duration: ${Math.random() * 5 + 7}s; animation-delay: ${Math.random() * 5}s; }`).join('')}
      `}</style>
    </div>
  );

  return (
    <section className="relative w-full min-h-screen bg-[#F3EFE0] overflow-hidden">
      {/* 1. EL AUDIO ESTÁ AQUÍ Y NUNCA SE MUEVE NI SE REINICIA */}
      <audio
        ref={audioRef}
        src="/Perfect.mp3"
        loop
        playsInline
        preload="auto"
      />

      {/* 2. PANTALLA DEL SOBRE (Solo se muestra si no ha iniciado) */}
      {!hasStarted ? (
        <div className="fixed inset-0 z-[100] bg-[#F3EFE0] flex items-center justify-center p-4">
          <div className="relative w-full max-w-[340px] h-[550px] bg-[#FAF7F0] shadow-2xl flex flex-col items-center justify-between py-12 px-8 border border-[#C19A6B]/20 rounded-sm">
            <div className="absolute top-0 left-0 w-full h-32 bg-[#8B4513] clip-path-envelope flex items-center justify-center shadow-md">
               <div className="w-16 h-16 rounded-full border-2 border-[#C19A6B]/50 flex items-center justify-center">
                  <span className="text-[#F3EFE0] font-serif text-2xl">S&C</span>
               </div>
            </div>

            <div className="mt-28 space-y-6 text-center">
              <h3 className="text-[#1B3022] tracking-[0.4em] text-[10px] uppercase font-bold">Reserva la fecha</h3>
              <h2 className="font-['Mrs_Saint_Delafield'] text-[#8B4513] text-7xl leading-tight">Nuestra Boda</h2>
              <p className="text-[#1B3022]/60 italic font-serif text-sm">
                Cada estación tiene su belleza, pero ninguna como la que caminamos juntos.
              </p>
            </div>

            <button 
              onClick={handleOpenInvitation}
              className="w-full py-4 bg-[#1B3022] text-[#F3EFE0] hover:bg-[#8B4513] transition-all uppercase text-[10px] tracking-[0.4em] font-bold shadow-lg"
            >
              Abrir Invitación
            </button>
            <style>{`.clip-path-envelope { clip-path: polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%); }`}</style>
          </div>
        </div>
      ) : (
        /* 3. CONTENIDO DE LA INVITACIÓN (Solo aparece tras abrir) */
        <div className="flex flex-col w-full min-h-screen animate-fade-in">
          <FallingLeaves />
          
          <div className="relative w-full h-[65vh] z-0">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1519741497674-611481863552")`,
                maskImage: "linear-gradient(to bottom, black 60%, transparent 95%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 95%)",
              }}
            >
              <div className="absolute inset-0 bg-[#1B3022]/20 mix-blend-multiply"></div>
            </div>
          </div>

          <div className="relative z-10 -mt-32 px-6 flex flex-col items-center pb-10">
            <div className="w-full max-w-lg bg-[#F3EFE0]/95 backdrop-blur-md p-8 rounded-[2rem] text-center border border-[#C19A6B]/30 shadow-2xl relative">
              
              <button
                onClick={toggleMusic}
                className="absolute -top-6 right-8 w-12 h-12 bg-[#8B4513] text-[#F3EFE0] rounded-full flex items-center justify-center shadow-lg transition-all active:scale-90 hover:bg-[#1B3022] z-50"
              >
                {isPlaying ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                )}
                {isPlaying && <span className="absolute inset-0 rounded-full border border-[#8B4513] animate-ping opacity-30"></span>}
              </button>

              <div className="mb-6 space-y-2">
                <h1 className="font-['Mrs_Saint_Delafield'] text-[#1B3022] text-6xl">
                  Sihomara <span className="text-[#C19A6B] italic">&</span> Cesar
                </h1>
                <p className="text-[#8B4513] tracking-[0.4em] text-[10px] uppercase font-bold">14 de Noviembre, 2026</p>
              </div>

              <div className="py-8 my-6 border-y border-[#C19A6B]/30">
                <CuentaRegresiva />
              </div>
              <p className="text-[#1B3022]/40 text-[9px] tracking-widest uppercase">Otoño 2026</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;