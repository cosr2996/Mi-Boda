import { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
 <nav className="bg-white text-[#37553C] shadow-lg text-xl font-bold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className=" flex items-center">
            <span className="text-2xl font-bold tracking-wider text-[#37553C]">
              Sihomara & Cesar
            </span>
          </div>

          {/* Enlaces Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="hover:text-[#B5651D] px-3 py-2 transition-colors">Boda</a>
              <a href="#" className="hover:text-[#B5651D] px-3 py-2 transition-colors">Nuestra Historia</a>
              <a href="#" className="hover:text-[#B5651D] px-3 py-2 transition-colors">RSVP</a>
            </div>
          </div>

          {/* Botón Menú Móvil */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-[#B5651D] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#C19A6B] border-t border-[#B5651D]`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="block hover:bg-white px-3 py-2 rounded-md">Boda</a>
          <a href="#" className="block hover:bg-white px-3 py-2 rounded-md">Nuestra Historia</a>
          <a href="#" className="block hover:bg-white px-3 py-2 rounded-md">Proyectos</a>
        </div>
      </div>
    </nav>
  );
};
