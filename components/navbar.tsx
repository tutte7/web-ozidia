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

            {/* Menú móvil: overlay blanco a pantalla completa, items alineados a la izquierda y CTA inferior */}
            <SheetContent
              side="top"
              className="inset-0 h-screen w-screen border-none bg-white p-0"
            >
              {/* Top bar */}
              <div className="h-[64px] flex items-center justify-between px-4 border-b border-[#EDEDED]">
                <a href="#hero" onClick={() => setActive("hero")} aria-label="Ir a inicio" className="flex items-center gap-2">
                  <img src={imgLogoFooter} alt="Ozidia" className="h-6 w-7" />
                </a>
                <SheetClose asChild>
                  <button aria-label="Cerrar" className="h-10 w-10 rounded-full bg-black/5 flex items-center justify-center">
                    <X className="h-5 w-5" />
                  </button>
                </SheetClose>
              </div>

              {/* Items */}
              <nav className="flex flex-col gap-2 px-4 py-6">
                {[
                  { id: "hero", label: "Home", href: "#hero" },
                  { id: "servicios", label: "Servicios", href: "#servicios" },
                  { id: "proyectos", label: "Proyectos", href: "#proyectos" },
                  { id: "equipo", label: "Nosotros", href: "#equipo" },
                  { id: "contacto", label: "Contacto", href: "#contacto" },
                ].map((item) => (
                  <SheetClose asChild key={item.id}>
                    <a
                      href={item.href}
                      onClick={() => setActive(item.id)}
                      className={`text-[28px] leading-none tracking-[-0.02em] py-3 ${active === item.id ? "text-black" : "text-black/80 hover:text-black"}`}
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>

              {/* CTA sticky bottom */}
              <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#EDEDED] p-4">
                <a
                  href="https://cal.com/ozidia/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-white text-[18px] tracking-[-0.02em] rounded-[999px] py-3 bg-[linear-gradient(180deg,#ea411b_4.75%,#fc8237_103.69%)] shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
                >
                  Agenda una reunión
                </a>
              </div>
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
