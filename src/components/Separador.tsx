const Separador = () => {
  return (
    <div className="bg-[#2D3A30] py-15 flex items-center justify-center">
      <div className="flex items-center gap-4 w-full max-w-xs justify-center">
        {/* Línea degradada hacia la izquierda */}
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D18B39] opacity-40"></div>

        {/* Icono central (Hoja sutil) */}
        <span className="text-[#D18B39] text-xl transform hover:scale-110 transition-transform duration-500">
          🍂
        </span>

        {/* Línea degradada hacia la derecha */}
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D18B39] opacity-40"></div>
      </div>
    </div>
  );
};

export default Separador;
