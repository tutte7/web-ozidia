"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

const ITEMS = [
  { id: "servicios", label: "Servicios", href: "#servicios" },
  { id: "proyectos", label: "Proyectos", href: "#proyectos" },
  { id: "proceso", label: "Proceso", href: "#proceso" },
  { id: "equipo", label: "Nosotros", href: "#equipo" },
  { id: "contacto", label: "Contacto", href: "#contacto" },
] as const

// Recursos del navbar desde /public
const imgLogoFooter = "/logo-ozidia.svg"
const imgVector = "/logo-wsp.svg"

export function Navbar() {
  const [active, setActive] = useState<string>("hero")

  // Sincroniza con el hash si cambia por scroll/anchor
  useEffect(() => {
    const onHash = () => {
      const hash = (window.location.hash || "").replace("#", "")
      if (hash && ITEMS.some(i => i.id === hash)) setActive(hash)
    }
    onHash()
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])

  // Scrollspy: observa secciones y actualiza el activo
  useEffect(() => {
    const ids = ["hero", ...ITEMS.map(i => i.id)]
    const elements = ids
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Elige la entrada con mayor intersección visible
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          const id = visible[0].target.id
          setActive(id)
        }
      },
      {
        rootMargin: "-45% 0px -55% 0px", // foco alrededor del centro de la pantalla
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )

    elements.forEach(el => observer.observe(el as Element))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="sticky top-4 z-50 mt-[25px]">
      <div className="container px-0">
        {/* Variante móvil: pill centrado con logo a la izquierda y WhatsApp a la derecha */}
        <div className="md:hidden flex justify-center">
          <Sheet>
            <div className="backdrop-blur-sm bg-black/5 rounded-full h-[50px] w-[300px] p-[6px] shadow-[0px_3px_25px_rgba(0,0,0,0.12)] ring-1 ring-black/5 flex items-center justify-between">
              <a
                href="#hero"
                onClick={() => setActive("hero")}
                aria-label="Ir a inicio"
                className={`bg-white rounded-full shadow-[0px_3px_25px_rgba(0,0,0,0.25)] ring-1 ring-white/10 h-[38px] w-[38px] flex items-center justify-center`}
              >
                <img src={imgLogoFooter} alt="Ozidia" className="h-[22px] w-[26px]" />
              </a>
              <SheetTrigger asChild>
                <button
                  aria-label="Abrir menú"
                  className="bg-white rounded-full shadow-[0px_3px_25px_rgba(0,0,0,0.25)] ring-1 ring-white/10 h-[38px] w-[38px] flex items-center justify-center"
                >
                  <Menu className="h-[18px] w-[18px]" />
                </button>
              </SheetTrigger>
            </div>

            {/* Menú móvil: diseño estético con animaciones y gradientes */}
            <SheetContent 
              side="top"
              className="inset-0 h-screen w-screen border-none bg-gradient-to-br from-slate-50 via-white to-gray-50 p-0 overflow-hidden [&>button]:hidden"
            >
              {/* Elementos decorativos de fondo */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-orange-100 to-red-100 rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute top-1/3 -left-24 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-25 blur-2xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full opacity-20 blur-xl"></div>
              </div>

              {/* Top bar con glassmorphism */}
              <div className="relative h-[80px] flex items-center justify-between px-6 backdrop-blur-md bg-white/70 border-b border-white/20 shadow-sm">
                <a 
                  href="#hero" 
                  onClick={() => setActive("hero")} 
                  aria-label="Ir a inicio" 
                  className="flex items-center gap-3 group"
                >
                  <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
                    <img src={imgLogoFooter} alt="Ozidia" className="h-5 w-6 filter brightness-0 invert" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900 tracking-tight">Ozidia</span>
                </a>
                <SheetClose asChild>
                  <button 
                    aria-label="Cerrar" 
                    className="h-12 w-12 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white/90 transition-all duration-200 group"
                  >
                    <X className="h-5 w-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
                  </button>
                </SheetClose>
              </div>

              {/* Navigation Items con animaciones */}
              <div className="relative flex-1 flex flex-col justify-center px-6 pb-32">
                <nav className="space-y-2">
                  {[
                    { id: "hero", label: "Home", href: "#hero", icon: "🏠" },
                    { id: "servicios", label: "Servicios", href: "#servicios", icon: "⚡" },
                    { id: "proyectos", label: "Proyectos", href: "#proyectos", icon: "🚀" },
                    { id: "equipo", label: "Nosotros", href: "#equipo", icon: "👥" },
                    { id: "contacto", label: "Contacto", href: "#contacto", icon: "📞" },
                  ].map((item, index) => (
                    <SheetClose asChild key={item.id}>
                      <a
                        href={item.href}
                        onClick={() => setActive(item.id)}
                        className={`group relative flex items-center gap-6 p-4 rounded-3xl transition-all duration-300 hover:translate-x-2 scroll-smooth ${
                          active === item.id 
                            ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-2xl shadow-orange-500/25" 
                            : "bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80 hover:shadow-xl"
                        }`}
                        style={{ 
                          animationDelay: `${index * 100}ms`,
                          animation: "slideInLeft 0.6s ease-out forwards"
                        }}
                      >
                        <div className={`text-2xl transition-transform duration-300 group-hover:scale-110 ${
                          active === item.id ? "filter brightness-0 invert" : ""
                        }`}>
                          {item.icon}
                        </div>
                        <span className="text-2xl font-semibold tracking-tight leading-none">
                          {item.label}
                        </span>
                        <div className={`absolute right-4 w-2 h-2 rounded-full transition-all duration-300 ${
                          active === item.id 
                            ? "bg-white scale-100" 
                            : "bg-orange-400 scale-0 group-hover:scale-100"
                        }`}></div>
                      </a>
                    </SheetClose>
                  ))}
                </nav>
              </div>

              {/* CTA Section con diseño mejorado */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/95 via-white/90 to-transparent backdrop-blur-md">
                <div className="space-y-3">
                  <p className="text-center text-sm text-gray-600 font-medium">
                    ¿Listo para comenzar tu proyecto?
                  </p>
                  <a
                    href="https://cal.com/ozidia/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center text-white text-lg font-semibold tracking-tight rounded-3xl py-4 bg-gradient-to-r from-orange-500 to-red-500 shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/40 hover:scale-[1.02] transition-all duration-300 active:scale-[0.98]"
                  >
                    Agenda una reunión
                  </a>
                  <div className="flex justify-center">
                    <a
                      href="https://wa.me/5492233551992"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-green-500 text-white font-medium shadow-lg hover:bg-green-600 transition-all duration-200 hover:scale-105"
                    >
                      <img src={imgVector} alt="WhatsApp" className="h-5 w-5 filter brightness-0 invert" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Estilos de animación */}
              <style jsx>{`
                @keyframes slideInLeft {
                  from {
                    opacity: 0;
                    transform: translateX(-30px);
                  }
                  to {
                    opacity: 1;
                    transform: translateX(0);
                  }
                }
              `}</style>
            </SheetContent>
          </Sheet>
        </div>

        {/* Variante desktop: layout original con tabs */}
        <div className="hidden md:flex justify-center items-center gap-3">
          {/* Izquierda: logo redondo */}
          <a
            href="#hero"
            onClick={() => setActive("hero")}
            aria-label="Ir a inicio"
            className={`backdrop-blur-sm ${active === "hero" ? "bg-white" : "bg-white/25"} rounded-full shadow-[0px_3px_25px_rgba(0,0,0,0.25)] ring-1 ring-white/10 h-[46px] w-[46px] flex items-center justify-center`}
          >
            <img src={imgLogoFooter} alt="Ozidia" className="h-[25px] w-[30px]" />
          </a>

          {/* Centro: pill con tabs */}
          <div className="backdrop-blur-sm bg-white/25 rounded-full shadow-[0px_3px_25px_rgba(0,0,0,0.25)] ring-1 ring-white/10 h-[46px] px-2 flex items-center">
            {ITEMS.map((item) => {
              const isActive = active === item.id
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActive(item.id)}
                  className={`${isActive ? "bg-white text-black shadow-[0px_1px_3px_rgba(0,0,0,0.1)]" : "text-black/80"} h-[38px] px-4 rounded-full flex items-center justify-center text-[16px] tracking-[-0.8px]`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </a>
              )
            })}
          </div>

          {/* Derecha: botón WhatsApp */}
          <a
            href="https://wa.me/5492233551992"
            target="_blank"
            rel="noopener noreferrer"
            className="backdrop-blur-sm bg-white/25 rounded-full shadow-[0px_3px_25px_rgba(0,0,0,0.25)] ring-1 ring-white/10 h-[46px] w-[46px] flex items-center justify-center"
            aria-label="WhatsApp"
          >
            <img src={imgVector} alt="WhatsApp" className="h-[22px] w-[22px]" />
          </a>
        </div>
      </div>
    </nav>
  )
}
