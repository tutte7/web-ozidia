export function Footer() {
  return (
    <footer id="contacto" className="relative overflow-hidden h-screen flex flex-col">
      {/* Banner con gradiente idéntico al Figma */}
      <div className="group relative w-full flex-1 bg-[linear-gradient(180deg,#ea411b_4.75%,#fc8237_103.69%)]">
        {/* Contenido centrado */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="flex flex-col items-center gap-[50px] px-6 text-center">
            <div className="relative leading-[0] not-italic w-full max-w-[711px]">
              <h2 className="heading font-bold text-white text-[35px] leading-[1.2] tracking-[-0.02em] sm:text-[40px] md:text-[56px]">
                <span>COMIENZA HOY TU</span>
                <br />
                <span>NUEVO PROYECTO</span>
                <br />
                <span>
                  CON <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: "linear-gradient(83deg, #572982 0%, #EA411B 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    OZIDIA
                  </span>
                </span>
              </h2>
              {/* Texto fantasma OZIDIA detrás (como en Figma) */}
              <div className="pointer-events-none absolute left-1/2 top-[170px] -translate-x-1/2 h-[62px] w-[231px] md:top-[140px] sm:hidden">
                <div className="heading font-bold text-[71px] leading-[1.2] bg-clip-text text-transparent">
                  OZIDIA
                </div>
              </div>
            </div>

            <p className="font-medium text-[16px] tracking-[-0.8px] text-white/80 sm:max-w-[85%]">
              Get professional design delivered at startup speed. Schedule a call below.
            </p>

            <div className="flex flex-col items-center gap-5">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[18px] font-medium text-black shadow-[0_5px_20px_rgba(0,0,0,0.25)] sm:text-[16px]"
              >
                <img src="/icon-google-meet.svg" alt="Google Meet" className="h-[15px] w-[18px]" />
                Reservar una llamada
              </a>
              <p className="font-medium text-[16px] tracking-[-0.8px] text-white/80 sm:text-[14px]">
                O escríbenos al WhatsApp →
                <a
                  href="https://wa.me/5492233551992"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-1 underline text-white/80"
                >
                  +54 9 2233 55-1992
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Imágenes en esquinas (ocultas en mobile para un diseño limpio) */}
        <div className="hidden sm:block absolute inset-0 pointer-events-none z-0">
          {/* Izquierda inferior 1 */}
          <div className="absolute left-[-65px] bottom-[0px] h-[283px] w-[370px] flex items-center justify-center lg:left-[-120px] md:scale-[.8] sm:hidden">
            <div className="rotate-[22.18deg] transition-transform duration-500 ease-out group-hover:translate-x-[28px] group-hover:-translate-y-[10px]">
              <div
                className="h-[171px] w-[330px] rounded-[20px] bg-cover bg-center"
                style={{ backgroundImage: "url('/web-footer-condaaz.png')" }}
              />
            </div>
          </div>

          {/* Izquierda inferior 2 */}
          <div className="absolute left-[-217.64px] bottom-[40px] h-[246px] w-[436px] flex items-center justify-center lg:left-[-260px] md:scale-[.85] sm:hidden">
            <div className="rotate-[356.214deg] transition-transform duration-500 ease-out group-hover:translate-x-[40px] group-hover:-translate-y-[6px]">
              <div
                className="h-[218.638px] w-[422.274px] rounded-[20px] bg-cover bg-center"
                style={{ backgroundImage: "url('/web-footer-dropeaa.png')" }}
              />
            </div>
          </div>

          {/* Izquierda superior */}
          <div className="absolute left-[-325px] top-[-260px] h-[520.11px] w-[520.11px] flex items-center justify-center lg:left-[-380px] md:scale-[.8] sm:hidden">
            <div className="rotate-45 transition-transform duration-500 ease-out group-hover:translate-x-[60px] group-hover:translate-y-[40px]">
              <div
                className="h-[250.924px] w-[484.631px] rounded-[20px] bg-cover bg-center"
                style={{ backgroundImage: "url('/web-footer-dwgba.png')" }}
              />
            </div>
          </div>

          {/* Derecha inferior */}
          <div className="absolute right-[-65px] bottom-[0px] h-[264.343px] w-[458.375px] flex items-center justify-center xl:right-[-40px] md:scale-[.85] sm:hidden">
            <div className="rotate-[355.197deg] transition-transform duration-500 ease-out group-hover:-translate-x-[36px] group-hover:-translate-y-[8px]">
              <div
                className="h-[228.24px] w-[440.819px] rounded-[20px] bg-cover bg-center"
                style={{ backgroundImage: "url('/web-footer-dpp.png')" }}
              />
            </div>
          </div>

          {/* Derecha superior */}
          <div className="absolute right-[-120px] top-[-184.51px] h-[389.745px] w-[437.927px] flex items-center justify-center xl:right-[-80px] md:scale-[.85] sm:hidden">
            <div className="rotate-[325.385deg] transition-transform duration-500 ease-out group-hover:-translate-x-[70px] group-hover:translate-y-[50px]">
              <div
                className="h-[203px] w-[392px] rounded-[20px] bg-no-repeat bg-[length:100%_611.34%] bg-top-left"
                style={{ backgroundImage: "url('/web-footer-nickk.png')" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior centrada */}
      <div className="relative h-[80px] w-full bg-white">
        {/* Línea superior */}
        <div className="absolute left-0 right-0 top-0 h-px bg-[#EDEDED]" />

        {/* Contenido centrado y distribuido */}
        <div className="mx-auto h-full flex items-center justify-between px-4 md:px-0 w-full max-w-[1220px]">
          {/* Texto izquierda */}
          <p className="font-medium not-italic text-[#969696] text-[12px] tracking-[-0.6px]">
            Ozidia © 2025
          </p>

          {/* Logo centrado */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[40px] w-[48px]">
            <img src="/logo-ozidia.svg" alt="Ozidia" className="block size-full max-w-none" />
          </div>

          {/* Enlaces derecha */}
          <div className="flex items-center gap-[20px] font-medium text-[#969696] text-[12px] tracking-[-0.6px]">
            <a href="https://www.instagram.com/ozidia.dev/" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
            <a href="https://wa.me/5492233551992" target="_blank" rel="noreferrer" className="hover:underline">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
