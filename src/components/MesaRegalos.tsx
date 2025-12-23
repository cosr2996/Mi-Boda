import Separador from "./Separador";

const MesaRegalos = () => {
  return (
    <section className="bg-[#2D3A30]  px-6 font-serif">
      <div className="max-w-md mx-auto">
        {/* Título de la Sección */}
        <div className="text-center mb-12">
          <h2 className="text-[#D18B39] text-3xl tracking-[0.2em] uppercase font-light">
            Mesa de Regalos
          </h2>
          <div className="h-px w-16 bg-[#D18B39]/40 mx-auto mt-4"></div>
        </div>

        {/* Tarjeta de Regalos */}
        <div className="bg-[#DFD3C3] p-10 rounded-[40px] shadow-2xl text-center relative overflow-hidden">
          {/* Adorno sutil de fondo */}

          <p className="text-[#2D3A30] text-sm leading-relaxed mb-10 italic">
            "Su presencia es nuestro mejor regalo, pero si desean tener un
            detalle con nosotros, pueden encontrar nuestra mesa de regalos en:"
          </p>

          {/* Logo o Nombre de Tienda */}
          <div className="mb-10">
            <h3 className="text-[#A65D37] text-2xl font-bold tracking-tighter mb-2">
              Liverpool
            </h3>
            <div className="h-0.5 w-10 bg-[#A65D37] mx-auto mb-4"></div>
            <p className="text-[#2D3A30] text-[10px] uppercase tracking-[0.3em] font-bold">
              Evento: <span className="text-black">12345678</span>{" "}
              {/* Reemplaza con tu número de evento */}
            </p>
          </div>

          {/* Botón de Acción */}
          <a
            href="https://mesaderegalos.liverpool.com.mx/" // Reemplaza con el link directo a tu mesa
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full bg-[#2D3A30] text-[#DFD3C3] py-4 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold shadow-lg hover:bg-[#A65D37] transition-all"
          >
            Ver Mesa de Regalos
          </a>

          <p className="mt-8 text-[11px] text-gray-500 uppercase tracking-widest leading-loose">
            O si lo prefieren, contaremos con <br />
            <span className="text-[#A65D37] font-bold">
              Cofre de Sobres
            </span>{" "}
            <br />
            el día del evento.
          </p>
        </div>

        {/* Frase Final de Agradecimiento */}
        <div className="mt-16 text-center">
          <p className="text-[#DFD3C3] text-xs tracking-[0.4em] uppercase opacity-40 italic">
            — Gracias por tanto cariño —
          </p>
        </div>
      </div>

      <Separador />
    </section>
  );
};

export default MesaRegalos;
