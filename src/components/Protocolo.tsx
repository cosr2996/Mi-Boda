import React from 'react';
import Separador from './Separador';

const UbicacionYProtocolo = () => {
  return (
    /* Fondo Verde Bosque Profundo para toda la sección */
    <div className="bg-[#2D3A30]  px-6 font-serif">
      <div className="max-w-md mx-auto">
        
        {/* TÍTULO DE SECCIÓN */}
        <div className="text-center mb-16">
          <h2 className="text-[#DFD3C3] text-3xl tracking-[0.25em] uppercase font-light">
            Logística
          </h2>
          <div className="h-px w-20 bg-[#D18B39] mx-auto mt-4"></div>
        </div>

        {/* CONTENEDOR DE UBICACIONES */}
        <div className="space-y-6 mb-20">
          
          {/* Tarjeta Iglesia - Estilo Lujoso Oscuro */}
          <div className="bg-[#242E26] p-8 rounded-2xl border border-[#DFD3C3]/10 shadow-2xl text-center">
            <span className="text-[#D18B39] text-3xl block mb-4">⛪</span>
            <h3 className="text-[#DFD3C3] text-xl mb-2 tracking-widest font-light">Ceremonia Religiosa</h3>
            <p className="text-[#D18B39] font-bold text-lg mb-1">Capilla de la Medalla Milagrosa</p>
            <p className="text-[#DFD3C3]/70 text-sm mb-6 uppercase tracking-widest">05:00 PM</p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              className="inline-block border border-[#D18B39] text-[#D18B39] px-8 py-2.5 rounded-sm text-[10px] uppercase tracking-[0.25em] hover:bg-[#D18B39] hover:text-[#2D3A30] transition-all duration-300"
            >
              Ver Mapa
            </a>
          </div>

          {/* Tarjeta Recepción */}
          <div className="bg-[#242E26] p-8 rounded-2xl border border-[#DFD3C3]/10 shadow-2xl text-center">
            <span className="text-[#D18B39] text-3xl block mb-4">🥂</span>
            <h3 className="text-[#DFD3C3] text-xl mb-2 tracking-widest font-light">Recepción</h3>
            <p className="text-[#D18B39] font-bold text-lg mb-1">Nombre del Salón</p>
            <p className="text-[#DFD3C3]/70 text-sm mb-6 uppercase tracking-widest">07:00 PM</p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              className="inline-block bg-[#D18B39] text-[#2D3A30] px-8 py-2.5 rounded-sm text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-[#DFD3C3] transition-all duration-300"
            >
              Ver Mapa
            </a>
          </div>
        </div>

        
<Separador/>

      </div>
    </div>
  );
};

export default UbicacionYProtocolo;