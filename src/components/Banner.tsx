import CuentaRegresiva from "./CuentaRegresiva";

const Banner = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#F3EFE0] flex flex-col overflow-hidden font-serif">
      {/* 1. Imagen con Desvanecido Artístico (Máscara de Gradiente) */}
      <div className="relative w-full h-[65vh] z-0">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1519741497674-611481863552"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            // Máscara que desvanece la foto hacia el fondo crema en la base
            maskImage: "linear-gradient(to bottom, black 60%, transparent 95%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 60%, transparent 95%)",
          }}
        >
          {/* Overlay de color para armonizar la foto con el Verde Bosque */}
          <div className="absolute inset-0 bg-[#1B3022]/10 mix-blend-multiply"></div>
        </div>

       
      </div>

      {/* 2. Bloque de Información Flotante */}
      <div className="relative z-10 -mt-32 px-6 flex flex-col items-center">
        {/* Contenedor Principal (Limpio y elegante) */}
        <div className="w-full bg-[#F3EFE0]/90 backdrop-blur-md p-8 rounded-[3rem] text-center border border-white/20 shadow-sm">
          <div className="mb-6 space-y-2">
            <h1 className="text-[#1B3022] text-4xl font-light leading-tight">
              Sihomara{" "}
              <span className="text-[#C19A6B] font-serif italic">&</span> Cesar
            </h1>
            <p className="text-[#8B4513] tracking-[0.4em] text-[10px] uppercase font-bold">
              14 de Noviembre, 2026
            </p>
          </div>

          {/* CUENTA REGRESIVA (Enmarcada sutilmente) */}
          <div className="py-8 my-6 border-y border-[#C19A6B]/20">
            <CuentaRegresiva />
          </div>

          <div className="space-y-4">
            

            <button className="mt-4 w-full bg-[#1B3022] hover:bg-[#8B4513] text-white py-4 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold shadow-2xl transition-all active:scale-95">
              Confirmar Asistencia
            </button>
          </div>
        </div>
      </div>

      {/* 3. Decoración Floral SVG (Color Musgo) en la base */}
      <div className="absolute w-64 h-64 pointer-events-none opacity-20">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 0C100 0 120 80 200 100C120 120 100 200 100 200C100 200 80 120 0 100C80 80 100 0 100 0Z"
            fill="#37553C"
          />
        </svg>
      </div>
    </section>
  );
};

export default Banner;
