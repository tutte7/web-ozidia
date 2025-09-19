"use client"

import { useEffect, useState } from "react"

// Imágenes locales desde /public
const imgCardProyecto = "/proyecto-dwgba-1.png"
const imgCardProyecto1 = "/proyecto-dropea-1.png"
const imgCardProyecto2 = "/proyecto-experto-1.png"
const imgCardProyecto3 = "/proyecto-condaaz-1.png"
const imgCardProyecto4 = "/proyecto-travel-1.png"
// Iconos
const imgLogoProyecto = "/logo-proyecto-dwgba-o.svg"
const imgLogoDropea = "/icono-logo.svg"
const imgLogoExperto = "/icono-logo-experto.svg"
const imgLogoCondaaz = "/icono-logo-condaaz.svg"
const imgLogoTravel = "/icono-logo-travel.svg"
const imgFrame = "/link.svg"

export function Projects() {
  const [supportsBackdrop, setSupportsBackdrop] = useState(true)

  useEffect(() => {
    try {
      const hasSupport = (typeof CSS !== "undefined" && typeof CSS.supports === "function")
        ? (CSS.supports("backdrop-filter: blur(1px)") || CSS.supports("-webkit-backdrop-filter: blur(1px)"))
        : false
      setSupportsBackdrop(hasSupport)
    } catch {
      setSupportsBackdrop(false)
    }
  }, [])

  return (
    <section id="proyectos" className="relative">
      {/* Título y descripción - igual que secciones anteriores */}
      <div className="text-center leading-[0] not-italic">
        <h2 className="heading font-medium text-[35px] leading-[normal] mb-[14px]">Proyectos</h2>
        <p className="mx-auto w-[344px] text-[16px] tracking-[-0.8px] text-muted-foreground leading-[normal]">
          Una selección de nuestros mejores proyectos, creados por Ozidia.
        </p>
      </div>

      {/* Cards - responsivo (stack en mobile, 1220px en desktop) */}
      <div className="content-center flex flex-wrap gap-[20px] items-center justify-center relative mx-auto mt-[41.5px] w-full max-w-[1220px] px-4 md:px-0">
        {/* Fila 1: 2 tarjetas grandes (600 x 555) */}
        {[
          { bg: imgCardProyecto, logo: imgLogoProyecto, title: "dwgba • estudio", subtitle: "Institucional", url: "https://dwgba-estudio.vercel.app/" },
          { bg: imgCardProyecto1, logo: imgLogoDropea, title: "Dropea", subtitle: "Landing Page", url: "https://dropea.com/" },
        ].map(({ bg, logo, title, subtitle, url }, i) => (
          <div
            key={`big-${i}`}
            className="bg-[rgba(0,0,0,0.05)] box-border flex flex-col gap-[10px] items-center justify-end overflow-clip pb-[16px] pt-[26px] px-[16px] relative rounded-[32px] md:rounded-[46px] shadow-[0_0_30px_0_rgba(0,0,0,0.25)] shrink-0 w-full sm:w-[calc(50%-10px)] md:w-[600px] h-[420px] sm:h-[480px] md:h-[555px]"
            style={{ backgroundImage: `url('${bg}')`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            {/* Navbar proyecto */}
            <div className="[backdrop-filter:blur(12.5px)] bg-[rgba(0,0,0,0.2)] box-border flex h-[60px] items-center justify-between pl-[22px] pr-[6px] py-[6px] relative rounded-[30px] w-full">
              {/* Borde */}
              <div aria-hidden className="absolute inset-0 rounded-[30px] border border-[rgba(255,255,255,0.5)] pointer-events-none" />
              <div className="flex gap-[12px] items-center">
                <div className="bg-center bg-contain bg-no-repeat rounded-[10px] size-[39px]" style={{ backgroundImage: `url('${logo}')` }} />
                <div className="flex flex-col h-[37px] justify-between text-[12px] md:text-[14px] tracking-[-0.6px] md:tracking-[-0.7px] leading-[0] not-italic">
                  <div className="text-white [text-shadow:rgba(0,0,0,0.3)_0px_1px_0px]"><p className="leading-[14px] md:leading-[16px] whitespace-pre">{title}</p></div>
                  <div className="text-[rgba(250,250,250,0.75)] [text-shadow:rgba(0,0,0,0.2)_0px_1px_0px]"><p className="leading-[14px] md:leading-[16px] whitespace-pre">{subtitle}</p></div>
                </div>
              </div>
              <a
                href={url}
                className="bg-white flex gap-[8px] items-center justify-center pl-[20px] md:pl-[25px] pr-[15px] md:pr-[18px] py-[8px] md:py-[10px] h-full rounded-[24px] group cursor-pointer"
                aria-label={`Ver proyecto ${title}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative h-[16px] md:h-[18px] overflow-hidden leading-none">
                  <span className="block text-[14px] md:text-[16px] tracking-[-0.7px] md:tracking-[-0.8px] text-black transition-transform duration-300 group-hover:-translate-y-full">
                    Ver Proyecto
                  </span>
                  <span className="block absolute inset-0 translate-y-full text-[14px] md:text-[16px] tracking-[-0.7px] md:tracking-[-0.8px] text-black transition-transform duration-300 group-hover:translate-y-0">
                    Ver Proyecto
                  </span>
                </span>
                <div className="relative size-[13px]"><img alt="" src={imgFrame} className="block max-w-none size-full" /></div>
              </a>
              {!supportsBackdrop && (
                <div aria-hidden className="absolute inset-0 rounded-[30px] overflow-hidden">
                  <img src={bg} alt="" className="w-full h-full object-cover scale-110 blur-[12.5px]" />
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Fila 2: 3 tarjetas pequeñas (~392/396 x 500) */}
        {[
          { bg: imgCardProyecto2, w: 392, logo: imgLogoExperto, title: "Expertos en Viajes", subtitle: "Multi-Pages", url: "https://www.expertosenviajes.com.ar/" },
          { bg: imgCardProyecto3, w: 392, logo: imgLogoCondaaz, title: "ConDaAz", subtitle: "Personalizado", url: "https://condaaz.com/" },
          { bg: imgCardProyecto4, w: 396, logo: imgLogoTravel, title: "Travel Mar del Plata", subtitle: "E-commerce", url: "https://www.travelmardelplata.com/" },
        ].map(({ bg, w, logo, title, subtitle, url }, i) => (
          <div
            key={`small-${i}`}
            className="bg-[rgba(0,0,0,0.05)] box-border flex flex-col gap-[10px] items-center justify-end overflow-clip pb-[16px] pt-[26px] px-[16px] relative rounded-[32px] md:rounded-[46px] shadow-[0_0_30px_0_rgba(0,0,0,0.25)] shrink-0 w-full sm:w-[calc(33.333%-13.5px)] md:w-[392px] h-[380px] sm:h-[440px] md:h-[500px]"
            style={{ backgroundImage: `url('${bg}')`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="[backdrop-filter:blur(12.5px)] bg-[rgba(0,0,0,0.2)] box-border flex h-[60px] items-center justify-between pl-[22px] pr-[6px] py-[6px] relative rounded-[30px] w-full">
              <div aria-hidden className="absolute inset-0 rounded-[30px] border border-[rgba(255,255,255,0.5)] pointer-events-none" />
              <div className="flex gap-[12px] items-center">
                <div className="bg-center bg-contain bg-no-repeat rounded-[10px] size-[39px]" style={{ backgroundImage: `url('${logo}')` }} />
                <div className="flex flex-col h-[37px] justify-between text-[12px] md:text-[14px] tracking-[-0.6px] md:tracking-[-0.7px] leading-[0] not-italic">
                  <div className="text-white [text-shadow:rgba(0,0,0,0.3)_0px_1px_0px]"><p className="leading-[14px] md:leading-[16px] whitespace-pre">{title}</p></div>
                  <div className="text-[rgba(250,250,250,0.75)] [text-shadow:rgba(0,0,0,0.2)_0px_1px_0px]"><p className="leading-[14px] md:leading-[16px] whitespace-pre">{subtitle}</p></div>
                </div>
              </div>
              <a
                href={url}
                className="bg-white flex gap-[8px] items-center justify-center pl-[20px] md:pl-[25px] pr-[15px] md:pr-[18px] py-[8px] md:py-[10px] h-full rounded-[24px] group cursor-pointer"
                aria-label={`Ver proyecto ${title}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative h-[16px] md:h-[18px] overflow-hidden leading-none">
                  <span className="block text-[14px] md:text-[16px] tracking-[-0.7px] md:tracking-[-0.8px] text-black transition-transform duration-300 group-hover:-translate-y-full">
                    Ver Proyecto
                  </span>
                  <span className="block absolute inset-0 translate-y-full text-[14px] md:text-[16px] tracking-[-0.7px] md:tracking-[-0.8px] text-black transition-transform duration-300 group-hover:translate-y-0">
                    Ver Proyecto
                  </span>
                </span>
                <div className="relative size-[13px]"><img alt="" src={imgFrame} className="block max-w-none size-full" /></div>
              </a>
              {!supportsBackdrop && (
                <div aria-hidden className="absolute inset-0 rounded-[30px] overflow-hidden">
                  <img src={bg} alt="" className="w-full h-full object-cover scale-110 blur-[12.5px]" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA "Ver más proyectos" */}
      <div className="relative flex items-center justify-center mt-[26px]">
        <button
          type="button"
          className="relative h-[43px] w-[180px] rounded-[999px] text-white text-[16px] tracking-[-0.8px]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(0, 0, 0, 0.56) 0%, rgba(0, 0, 0, 0.56) 100%), linear-gradient(179.664deg, rgb(255, 255, 255) 1.195%, rgba(255, 255, 255, 0) 98.805%), url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 180 43\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(10.92 0.05 -0.0172 2.6087 90 21.5)\\'><stop stop-color=\\'rgba(0,0,0,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>') , linear-gradient(rgb(255, 255, 255) 0%, rgb(153, 153, 153) 50.124%, rgb(255, 255, 255) 96.744%, rgb(153, 153, 153) 114.88%)",
          }}
        >
          <span className="relative z-10">Ver mas proyectos</span>
          <span className="absolute inset-0 pointer-events-none shadow-[0px_0.25px_0.25px_0px_inset_rgba(255,255,255,0.32),0px_0.75px_0.25px_0px_inset_rgba(255,255,255,0.12),0px_4px_16px_0px_inset_rgba(255,255,255,0.16),0px_-12px_16px_0px_inset_rgba(255,255,255,0.06)] rounded-[999px]" />
          <span aria-hidden className="absolute inset-0 rounded-[999px] shadow-[0px_0px_0px_0.75px_rgba(0,0,0,0.56),0px_3px_6px_0px_rgba(0,0,0,0.19),0px_10px_10px_0px_rgba(0,0,0,0.12),0px_23px_14px_0px_rgba(0,0,0,0.08),0px_40px_24px_0px_rgba(0,0,0,0.06)]" />
          <span aria-hidden className="absolute inset-0 rounded-[999px] border border-white/50" />
        </button>
      </div>
    </section>
  )
}
