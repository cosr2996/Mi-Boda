import Separador from "./Separador";

const NuestraHistoria = () => {
  return (
    /* Fondo Verde Bosque Mate (#2D3A30) 
       Es un color profundo que transmite elegancia y madurez.
    */
    <section className="bg-[#2D3A30] py-2 px-6 font-serif overflow-hidden">
      <div className="max-w-md mx-auto">
        {/* Título Principal en color Crema/Oro para contraste */}
        <div className="text-center mb-12">
          <h2 className="text-[#DFD3C3] text-4xl leading-tight mb-2 tracking-[0.1em] font-light">
            El camino hacia el sí
          </h2>
          <div className="h-px w-20 bg-[#A65D37] mx-auto"></div>
        </div>

        {/* Galería Estilo Collage con bordes limpios */}
        <div className="relative h-[480px] mb-14 px-2">
          {/* Foto de la Preparatoria */}
          <div className="absolute top-0 left-0 w-[75%] z-10 shadow-2xl transform -rotate-2">
            <div className="bg-[#DFD3C3] p-1.5 rounded-sm">
              <img
                src="inicio.jpg"
                alt="Donde todo comenzó"
                className="w-full h-60 object-cover rounded-sm"
              />
              <div className="py-3 bg-[#DFD3C3]">
                <p className="text-[9px] text-center text-[#2D3A30] tracking-[0.2em] uppercase font-bold">
                  Inicios · 2015
                </p>
              </div>
            </div>
          </div>

          {/* Foto Actual */}
          <div className="absolute bottom-0 right-0 w-[75%] z-20 shadow-2xl transform rotate-2">
            <div className="bg-white p-1.5 rounded-sm">
              <img
                src="haora.jpeg"
                alt="9 años después"
                className="w-full h-60 object-cover rounded-sm"
              />
              <div className="py-3">
                <p className="text-[9px] text-center text-[#A65D37] tracking-[0.2em] uppercase font-black">
                  9 Años Después
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bloque de Texto sobre el verde profundo */}
        <div className="space-y-6 text-center">
          <h3 className="text-[#D18B39] text-lg italic font-light tracking-wide">
            "El Destino nos quería juntos"
          </h3>

          <div className="text-[#DFD3C3]/90 space-y-4 text-[15px] leading-relaxed font-light px-2">
            <p>
              Todo comenzó con un flechazo inesperado en los XV años de mi
              prima. Bastó una mirada para quedar cautivado, pero ese día el
              destino nos jugó una pequeña broma: al regresar a buscarla, ella
              ya se había ido.
            </p>
            <p>
              Tras meses de silencio, la vida nos volvió a cruzar en los
              pasillos de la preparatoria. Allí, entre clases y risas, aquella
              conexión que parecía pausada se transformó en algo imparable.
            </p>
            <p className="text-[#D18B39] pt-4 text-lg font-medium">
              Hoy, celebramos que siempre estuvimos destinados a encontrarnos.
            </p>
          </div>
        </div>

        <Separador />
      </div>
    </section>
  );
};

export default NuestraHistoria;
