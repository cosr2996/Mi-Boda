import Separador from "./Separador";

const CodigoVestimentaVerde = () => {
  return (
    <section className="bg-[#2D3A30]  px-6 font-serif text-[#DFD3C3]">
      <div className="max-w-md mx-auto">
        {/* Título con diseño minimalista y serio */}
        <div className="text-center mb-12">
          <h2 className="text-[#D18B39] text-3xl tracking-[0.25em] uppercase font-light mb-4">
            Código de Vestimenta
          </h2>
          <div className="inline-block border-y border-[#D18B39]/40 py-2 px-10">
            <p className="text-sm tracking-[0.4em] uppercase font-medium">
              Formal Riguroso
            </p>
          </div>
        </div>

        {/* Iconografía en tonos crema y ocre */}
        <div className="grid grid-cols-2 gap-10 mb-16 text-center">
          <div className="space-y-3">
            <span className="text-4xl filter grayscale sepia opacity-80">
              👗
            </span>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#D18B39] font-bold">
              Vestido Largo
            </p>
          </div>
          <div className="space-y-3">
            <span className="text-4xl filter grayscale sepia opacity-80">
              👔
            </span>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#D18B39] font-bold">
              Traje Completo
            </p>
          </div>
        </div>

        {/* Contenedor de Paleta Otoñal - Unificado al Verde */}
        <div className="bg-[#242E26] p-8 rounded-2xl border border-[#DFD3C3]/10 shadow-2xl">
          <h3 className="text-[11px] uppercase tracking-[0.3em] mb-8 text-center text-[#DFD3C3]/80">
            Sugerencia de Colores
          </h3>

          <div className="flex justify-center gap-4 mb-10">
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#DFD3C3]/30 shadow-inner bg-[#A65D37]"></div>
              <span className="text-[8px] uppercase tracking-widest opacity-60">
                Terracota
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#DFD3C3]/30 shadow-inner bg-[#D18B39]"></div>
              <span className="text-[8px] uppercase tracking-widest opacity-60">
                Ocre
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#DFD3C3]/30 shadow-inner bg-[#5C3D2E]"></div>
              <span className="text-[8px] uppercase tracking-widest opacity-60">
                Café
              </span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#DFD3C3]/30 shadow-inner bg-[#B17F2C]"></div>
              <span className="text-[8px] uppercase tracking-widest opacity-60">
                Mostaza
              </span>
            </div>
          </div>

          {/* Sección de Restricciones - Muy clara y seria */}
          <div className="pt-8 border-t border-[#DFD3C3]/5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-center mb-6 text-[#D18B39] font-bold">
              Protocolo de Exclusividad
            </p>

            <div className="flex justify-around items-center">
              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-white border border-[#DFD3C3]/20 shadow-lg"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14  bg-red-800/60 rotate-45"></div>
                  </div>
                </div>
                <p className="text-[9px] uppercase tracking-widest mt-1">
                  Blanco
                </p>
                <p className="text-[7px] italic opacity-40">Exclusivo Novia</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-[#5B6D5B] border border-[#DFD3C3]/20 shadow-lg"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14  bg-red-800/60 rotate-45"></div>
                  </div>
                </div>
                <p className="text-[9px] uppercase tracking-widest mt-1 text-nowrap">
                  Verde Olivo
                </p>
                <p className="text-[7px] italic opacity-40">Exclusivo Novio</p>
              </div>
            </div>
          </div>
        </div>

        {/* Nota Final */}
        <p className="text-center mt-12 text-[10px] tracking-[0.2em] opacity-40 uppercase italic">
          Agradecemos su gentil colaboración
        </p>
      </div>

      <Separador />
    </section>
  );
};

export default CodigoVestimentaVerde;
