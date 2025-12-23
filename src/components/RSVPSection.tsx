import { useState } from "react";

const RSVPSection = () => {
  const [nombre, setNombre] = useState("");
  const [asistencia, setAsistencia] = useState("");

  const enviarWhatsApp = () => {
    if (!nombre || !asistencia) {
      alert("Por favor, completa tu nombre y elige una opción.");
      return;
    }

    const telefono = "1234567890"; // Reemplaza con tu número de WhatsApp (con código de país)
    const mensaje = `¡Hola! Soy ${nombre}. Confirmo que ${
      asistencia === "si" ? "SÍ asistiré" : "NO podré asistir"
    } a su boda.`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="bg-[#2D3A30]  px-6 font-serif">
      <div className="max-w-md mx-auto">
        {/* Encabezado RSVP */}
        <div className="text-center mb-12">
          <h2 className="text-[#D18B39] text-3xl tracking-[0.2em] uppercase font-light">
            Confirmación
          </h2>
          <p className="text-[#DFD3C3] text-sm mt-2 opacity-70 italic">
            Nos encantaría contar con tu presencia
          </p>
          <div className="h-px w-16 bg-[#A65D37] mx-auto mt-4"></div>
        </div>

        {/* Tarjeta del Formulario */}
        <div className="bg-[#DFD3C3] p-8 rounded-3xl shadow-2xl">
          <div className="space-y-8">
            {/* Campo de Nombre */}
            <div>
              <label className="block text-[#2D3A30] text-[10px] uppercase tracking-[0.2em] font-bold mb-3">
                Nombre Completo
              </label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Escribe tu nombre aquí"
                className="w-full bg-transparent border-b border-[#A65D37] py-2 focus:outline-none text-[#2D3A30] placeholder-[#2D3A30]/40 transition-colors"
              />
            </div>

            {/* Opciones de Radio (Asistencia) */}
            <div>
              <label className="block text-[#2D3A30] text-[10px] uppercase tracking-[0.2em] font-bold mb-5 text-center">
                ¿Nos acompañarás?
              </label>

              <div className="flex flex-col gap-4">
                {/* Opción SI */}
                <label
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer ${
                    asistencia === "si"
                      ? "bg-[#2D3A30] border-[#2D3A30]"
                      : "bg-white/50 border-[#A65D37]/20"
                  }`}
                >
                  <span
                    className={`text-sm uppercase tracking-widest ${
                      asistencia === "si" ? "text-[#DFD3C3]" : "text-[#2D3A30]"
                    }`}
                  >
                    Sí, asistiré
                  </span>
                  <input
                    type="radio"
                    name="asistencia"
                    value="si"
                    className="accent-[#D18B39] h-4 w-4"
                    onChange={(e) => setAsistencia(e.target.value)}
                  />
                </label>

                {/* Opción NO */}
                <label
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer ${
                    asistencia === "no"
                      ? "bg-[#2D3A30] border-[#2D3A30]"
                      : "bg-white/50 border-[#A65D37]/20"
                  }`}
                >
                  <span
                    className={`text-sm uppercase tracking-widest ${
                      asistencia === "no" ? "text-[#DFD3C3]" : "text-[#2D3A30]"
                    }`}
                  >
                    No podré asistir
                  </span>
                  <input
                    type="radio"
                    name="asistencia"
                    value="no"
                    className="accent-[#D18B39] h-4 w-4"
                    onChange={(e) => setAsistencia(e.target.value)}
                  />
                </label>
              </div>
            </div>

            {/* Botón de Enviar */}
            <button
              onClick={enviarWhatsApp}
              className="w-full bg-[#A65D37] text-white py-4 rounded-full text-xs uppercase tracking-[0.3em] font-bold shadow-lg active:scale-95 transition-transform mt-4"
            >
              Confirmar por WhatsApp
            </button>

            <p className="text-[9px] text-center text-[#2D3A30]/60 uppercase tracking-tighter">
              Favor de confirmar antes del [Fecha Límite]
            </p>
          </div>
        </div>

        {/* Mensaje de Cierre */}
        <div className="mt-16 text-center text-[#DFD3C3]/50 italic text-sm">
          <p>¡Esperamos verte pronto!</p>
          <span className="text-xl mt-4 block">🍂</span>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;
