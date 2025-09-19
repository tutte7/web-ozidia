"use client"

import Image from "next/image"
import { useCallback, useEffect, useMemo, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

export function Process() {
  const steps = useMemo(
    () => [
      {
        id: 0,
        label: "Paso 1",
        title: "Reunión inicial",
        description:
          "Conversamos con vos para entender tu negocio, tus objetivos y lo que querés transmitir en tu web.",
        image: "/paso-1.gif",
      },
      {
        id: 1,
        label: "Paso 2",
        title: "Desarrollo a medida",
        description:
          "Diseñamos y programamos tu sitio con un estilo único, moderno y pensado para atraer clientes.",
        image: "/Coder (1).svg",
      },
      {
        id: 2,
        label: "Paso 3",
        title: "Lanzamiento online",
        description:
          "Publicamos tu web y queda lista para que tu negocio tenga más visibilidad desde el primer día.",
        image: "/servicio-ecommerce-2.png",
      },
    ],
    []
  )

  const [activeIndex, setActiveIndex] = useState(0)
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null)

  const handleKey = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault()
        setActiveIndex((prev) => (prev + 1) % steps.length)
      } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault()
        setActiveIndex((prev) => (prev - 1 + steps.length) % steps.length)
      }
    },
    [steps.length]
  )

  useEffect(() => {
    if (!carouselApi) return
    const onSelect = () => {
      try {
        // embla selected index
        const index = carouselApi.selectedScrollSnap()
        setActiveIndex(index)
      } catch {}
    }
    onSelect()
    carouselApi.on("select", onSelect)
    return () => {
      carouselApi.off("select", onSelect as any)
    }
  }, [carouselApi])

  return (
    <section id="proceso" className="py-0 pb-[50px] mb-[50px]">
      <div className="container px-5 sm:px-8 lg:px-8 xl:px-8">
        <div className="text-center mb-10">
          <h2 className="font-medium text-[35px] leading-none mb-3">Así trabajamos</h2>
          <p className="text-sm text-muted-foreground max-w-[56ch] mx-auto tracking-tight">
            Olvidate de procesos eternos: nos contás tu idea, armamos el plan y ejecutamos
            rápido. Menos gestión, más resultado.
          </p>
        </div>
        {/* Mobile layout: swipeable cards */}
        <div className="lg:hidden">
          <Carousel opts={{ loop: false, align: "start" }} setApi={setCarouselApi} className="w-full">
            <CarouselContent>
              {steps.map((step, index) => {
                const isActive = index === activeIndex
                return (
                  <CarouselItem key={step.id} className="basis-full">
                    <div className="flex flex-col gap-4">
                      <div className="relative w-full aspect-[5/4] rounded-[28px] overflow-hidden bg-[#e5e5e5]">
                        <Image
                          src={step.image}
                          alt={`${step.label} - ilustración`}
                          fill
                          sizes="100vw"
                          className="object-cover"
                          priority={index === 0}
                        />
                      </div>
                      <div
                        className={`rounded-[24px] p-6 transition ${
                          isActive
                            ? "bg-gradient-to-br from-[#ff6a00] to-[#ff3d00] text-white"
                            : "bg-[#f7f7f7] text-black"
                        }`}
                      >
                        <div className={`text-[22px] font-semibold mb-2 ${isActive ? "text-white" : "text-black"}`}>{step.label}</div>
                        <div className={`text-[18px] font-medium mb-2 ${isActive ? "text-white" : "text-black"}`}>{step.title}</div>
                        <p className={`text-[14px] leading-snug ${isActive ? "text-white/90" : "text-black/80"}`}>{step.description}</p>
                      </div>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious className="left-2 top-[38%] size-8 bg-white/90 border-none shadow-md" />
            <CarouselNext className="right-2 top-[38%] size-8 bg-white/90 border-none shadow-md" />
          </Carousel>

          {/* Progress dots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {steps.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir al paso ${i + 1}`}
                onClick={() => carouselApi?.scrollTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === activeIndex ? "bg-[#ff6a00]" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop layout: alturas sincronizadas con el panel izquierdo */}
        <div className="hidden lg:grid gap-6 sm:gap-8 lg:grid-cols-2 items-stretch">
          <div className={`relative mx-auto w-full max-w-[650px] aspect-[4/3] sm:aspect-[1/1] rounded-[32px] lg:rounded-[100px] overflow-hidden ${steps[activeIndex].image?.toLowerCase().includes("coder") ? "bg-white" : "bg-[#e5e5e5]"}`}>
            <Image
              key={steps[activeIndex].image}
              src={steps[activeIndex].image}
              alt={`${steps[activeIndex].label} - ilustración`}
              fill
              sizes="(min-width: 1024px) 650px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div
            className="relative mx-auto w-full max-w-[650px] aspect-[4/3] sm:aspect-[1/1] flex flex-col gap-4 sm:gap-6 pt-4 lg:pt-6"
            role="listbox"
            aria-label="Pasos del proceso"
            onKeyDown={handleKey}
          >
            {steps.map((step, index) => {
              const isActive = index === activeIndex
              return (
                <div
                  key={step.id}
                  role="option"
                  aria-selected={isActive}
                  tabIndex={0}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className={`
                    rounded-[24px] lg:rounded-[46px] px-6 py-5 lg:px-8 lg:py-6 cursor-pointer outline-none transition flex-1 min-h-0 overflow-hidden
                    ${
                      isActive
                        ? "bg-gradient-to-br from-[#ff6a00] to-[#ff3d00] text-white shadow-md"
                        : "bg-[#f7f7f7] text-black"
                    }
                    focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black/40
                  `}
                >
                  <div className={`text-[26px] lg:text-[28px] font-semibold mb-2 ${isActive ? "text-white" : "text-black"}`}>
                    {step.label}
                  </div>
                  <div className="space-y-3">
                    <div className={`text-[18px] lg:text-[22px] font-medium leading-tight ${isActive ? "text-white" : "text-black"}`}>{step.title}</div>
                    <p className={`text-[14px] lg:text-[16px] leading-snug break-words max-w-prose ${isActive ? "text-white/90" : "text-black/80"}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
