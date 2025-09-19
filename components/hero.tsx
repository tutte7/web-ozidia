"use client"

import Image from "next/image"

// Activos ahora desde /public
const imgRectangle13 = "/img-dropea-academy.png"
const imgRectangle14 = "/img-dp.png"
const imgRectangle15 = "/img-nicks.png"
const imgRectangle17 = "/img-condaaz.png"
const imgRectangle16 = "/img-travel.png"
const imgGroup11 = "/icon-responsive.svg" // 100% Responsive
const imgGroup10 = "/icon-seo-op.svg" // SEO Optimizado
const imgGroup9 = "/icon-diseño-medida.svg" // Diseño a medida
// sin recurso externo: las líneas divisorias se renderizan como <div> de 1px
const imgEllipse2 = "/circle1.svg" // Disponible para nuevos proyectos
const imgIconGoogleMeet1 = "/icon-google-meet.svg"
const imgVector = "/logo-wsp.svg" // WhatsApp
const imgLineaHero = "/placeholder.svg" // línea horizontal, reemplazar si subís el SVG
 

export function Hero() {
  return (
    <section id="hero" className="relative bg-background min-h-[80vh] md:min-h-[92vh]">
      {/* Línea superior ahora es global en layout */}

      <div className="container px-4 md:px-0 w-full relative pt-[50px]">
        {/* Líneas verticales locales removidas: ahora son globales en layout */}
        <div className="grid md:grid-cols-12 gap-5 items-center">
          {/* Columna izquierda */}
          <div className="md:col-span-7">
            <div className="flex justify-center md:justify-start">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm ring-1 ring-[#EFEFEF] shadow-sm">
                <img src={imgEllipse2} alt="" className="w-3 h-3" />
                <span className="text-[#00a63e] font-medium tracking-tight">Disponible para nuevos proyectos</span>
              </div>
            </div>

            <div className="mt-5">
              <h1 className="font-[var(--font-nohemi)] text-[#1a1a1a] font-extrabold leading-[1.03] tracking-tight text-[48px] md:text-[72px] text-center md:text-left">
                CREAMOS TU
                <br />
                PÁGINA WEB
                <br />
                <span className="inline-flex items-end gap-3">
                  EN
                  <span className="inline-block bg-[#FF6A00] text-white px-3 py-1 rounded-none font-extrabold font-[var(--font-nohemi)] leading-none text-[48px] md:text-[72px]">
                    72 HORAS
                  </span>
                </span>
              </h1>
            </div>

            <p className="mt-4 text-[18px] tracking-tight text-center md:text-left">Ozidia - Diseño y Desarrollo Web</p>

            <div className="mt-6 flex gap-3 items-center justify-center md:justify-start">
              <a
                href="https://cal.com/ozidia/30min"
                className="group bg-white rounded-full px-5 py-3 md:px-0 md:py-0 shadow-[0px_5px_20px_rgba(0,0,0,0.25)] ring-1 ring-black/5 inline-flex items-center justify-center gap-2 hover:shadow-[0px_8px_25px_rgba(0,0,0,0.35)] transition-all duration-300 cursor-pointer md:w-[235px] md:h-[45px]"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Reservar una llamada"
              >
                <img src={imgIconGoogleMeet1} alt="Google Meet" className="w-[15px] h-[13px]" />
                <span className="relative h-[18px] overflow-hidden leading-none">
                  <span className="block text-[14px] md:text-[18px] font-medium tracking-[-0.4px] md:tracking-[-0.8px] text-black transition-transform duration-300 group-hover:-translate-y-full">
                    Reservar una llamada
                  </span>
                  <span className="block absolute inset-0 translate-y-full text-[14px] md:text-[18px] font-medium tracking-[-0.4px] md:tracking-[-0.8px] text-black transition-transform duration-300 group-hover:translate-y-0">
                    Reservar una llamada
                  </span>
                </span>
              </a>
              <a
                href="https://wa.me/5492233551992"
                className="group bg-black/10 hover:bg-black/20 rounded-full px-5 py-3 md:px-0 md:py-0 inline-flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer md:w-[155px] md:h-[45px]"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir WhatsApp"
              >
                <img src={imgVector} alt="WhatsApp" className="w-5 h-5" />
                <span className="relative h-[18px] overflow-hidden leading-none">
                  <span className="block text-[14px] md:text-[18px] font-medium tracking-[-0.4px] md:tracking-[-0.8px] text-black transition-transform duration-300 group-hover:-translate-y-full">
                    WhatsApp
                  </span>
                  <span className="block absolute inset-0 translate-y-full text-[14px] md:text-[18px] font-medium tracking-[-0.4px] md:tracking-[-0.8px] text-black transition-transform duration-300 group-hover:translate-y-0">
                    WhatsApp
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Columna derecha: grilla 2xN de tarjetas */}
          <div className="md:col-span-5 w-full">
            {/* Desktop: grilla 2xN */}
            <div className="hidden sm:grid grid-cols-2 gap-5 w-full max-w-[560px]">
              <div className="bg-center bg-cover bg-no-repeat h-[200px] rounded-[32px] w-full" style={{ backgroundImage: `url('${imgRectangle13}')` }} />
              <div className="bg-center bg-cover bg-no-repeat h-[200px] rounded-[32px] w-full" style={{ backgroundImage: `url('${imgRectangle14}')` }} />
              <div className="bg-center bg-cover bg-no-repeat h-[200px] rounded-[32px] w-full" style={{ backgroundImage: `url('${imgRectangle15}')` }} />
              <div className="bg-center bg-cover bg-no-repeat h-[200px] rounded-[32px] w-full" style={{ backgroundImage: `url('${imgRectangle17}')` }} />
              <div className="bg-center bg-cover bg-no-repeat h-[200px] rounded-[32px] w-full" style={{ backgroundImage: `url('${imgRectangle16}')` }} />
              <div className="bg-center bg-cover bg-no-repeat h-[200px] rounded-[32px] w-full" style={{ backgroundImage: `url('${imgRectangle14}')` }} />
            </div>
            {/* Mobile: una sola imagen */}

          </div>
        </div>

        {/* Guías con ticks de 50px eliminadas a pedido */}

        {/* Bullets inferiores */}
        <div className="relative mt-10">
          {/* Línea divisoria de extremo a extremo (igual a la del navbar) */}
          <div className="w-screen relative left-1/2 -translate-x-1/2">
            <div className="w-full h-px bg-[#EDEDED]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 place-items-center text-center pt-[25px] pb-[25px] px-4 md:px-0">
            <div className="flex items-center justify-start md:justify-center gap-4 w-full max-w-[280px] md:max-w-none bg-white md:bg-transparent rounded-xl md:rounded-none p-4 md:p-0 shadow-sm md:shadow-none border md:border-none border-gray-100">
              <div className="flex-shrink-0">
                <img src={imgGroup9} alt="Diseño a medida" className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" />
              </div>
              <span className="text-[14px] md:text-[16px] tracking-[-0.4px] md:tracking-[-0.8px] font-medium text-left md:text-center">Diseño a medida</span>
            </div>
            <div className="flex items-center justify-start md:justify-center gap-4 w-full max-w-[280px] md:max-w-none bg-white md:bg-transparent rounded-xl md:rounded-none p-4 md:p-0 shadow-sm md:shadow-none border md:border-none border-gray-100">
              <div className="flex-shrink-0">
                <img src={imgGroup10} alt="SEO Optimizado" className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" />
              </div>
              <span className="text-[14px] md:text-[16px] tracking-[-0.4px] md:tracking-[-0.8px] font-medium text-left md:text-center">SEO Optimizado</span>
            </div>
            <div className="flex items-center justify-start md:justify-center gap-4 w-full max-w-[280px] md:max-w-none bg-white md:bg-transparent rounded-xl md:rounded-none p-4 md:p-0 shadow-sm md:shadow-none border md:border-none border-gray-100">
              <div className="flex-shrink-0">
                <img src={imgGroup11} alt="100% Responsive" className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]" />
              </div>
              <span className="text-[14px] md:text-[16px] tracking-[-0.4px] md:tracking-[-0.8px] font-medium text-left md:text-center">100% Responsive</span>
            </div>
          </div>
          {/* Línea divisoria inferior */}
          <div className="w-screen relative left-1/2 -translate-x-1/2">
            <div className="w-full h-px bg-[#EDEDED]" />
          </div>
        </div>
      </div>
    </section>
  )
}
