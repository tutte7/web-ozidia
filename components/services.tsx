import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

export function Services() {
  const websiteTypes = [
    {
      title: "Landing Page",
      description: "Convierte visitas en clientes con una página enfocada en resultados.",
      image: "/servicio-landingpage.png",
    },
    {
      title: "E-commerce",
      description: "Tienda online rápida, segura y escalable para vender más.",
      image: "/servicio-ecommerce-2.png",
    },
    {
      title: "Institucional",
      description: "Plataformas de aprendizaje modernas con enfoque en usabilidad.",
      image: "/servicio-institucional-2.png",
    },
    {
      title: "Portfolio",
      description: "Muestra tu trabajo y construye autoridad con diseño premium.",
      image: "/servicio-portfolio-2.png",
    },
    {
      title: "Proyecto Personalizado",
      description: "Desarrollo a medida según tus objetivos, funcionalidades y presupuesto.",
      image: "/servicio-proyectopersonalizado.png",
    },
    {
      title: "Multi-Page Website",
      description: "Sitio multipágina escalable con arquitectura clara y navegación optimizada.",
      image: "/servicio-MultiPage.png",
    },
  ]

  return (
    <section id="servicios" className="pt-[60px]">
      {/* Wrapper general según Figma: px-[9px] py-[80px] y gap-[50px] centrado */}
      <div className="container">
        <div className="flex flex-col items-center gap-[50px]">
          {/* Título + descripción */}
          <div className="text-center leading-[0] not-italic">
            <h2 className="heading font-medium text-[35px] leading-[normal] mb-[14px]">Servicios</h2>
            <p className="mx-auto max-w-[344px] w-full px-4 md:px-0 text-[16px] tracking-[-0.8px] text-muted-foreground leading-[normal]">
              ¿Querés ver lo que logramos? Nuestros resultados hablan por nosotros.
            </p>
          </div>

          {/* Mobile: Grid simple - Desktop: Carrusel */}
          <div className="w-full">
            {/* Mobile: Pills/botones simples */}
            <div className="block md:hidden px-4">
              <div className="flex flex-col gap-4 max-w-[400px] mx-auto">
                {/* Fila 1: 2 botones */}
                <div className="flex gap-4 justify-center">
                  <div className="flex-1 bg-[#F5F5F5] rounded-[25px] py-4 px-6 text-center">
                    <span className="text-[16px] font-medium text-gray-800">Landing Page</span>
                  </div>
                  <div className="flex-1 bg-[#F5F5F5] rounded-[25px] py-4 px-6 text-center">
                    <span className="text-[16px] font-medium text-gray-800">E-commerce</span>
                  </div>
                </div>
                {/* Fila 2: 2 botones */}
                <div className="flex gap-4 justify-center">
                  <div className="flex-1 bg-[#F5F5F5] rounded-[25px] py-4 px-6 text-center">
                    <span className="text-[16px] font-medium text-gray-800">Institucional</span>
                  </div>
                  <div className="flex-1 bg-[#F5F5F5] rounded-[25px] py-4 px-6 text-center">
                    <span className="text-[16px] font-medium text-gray-800">Blog</span>
                  </div>
                </div>
                {/* Fila 3: 2 botones */}
                <div className="flex gap-4 justify-center">
                  <div className="flex-1 bg-[#F5F5F5] rounded-[25px] py-4 px-6 text-center">
                    <span className="text-[16px] font-medium text-gray-800">Portfolio</span>
                  </div>
                  <div className="flex-1 bg-[#F5F5F5] rounded-[25px] py-4 px-6 text-center">
                    <span className="text-[16px] font-medium text-gray-800">Personalizado</span>
                  </div>
                </div>
                {/* Fila 4: 1 botón centrado */}
                <div className="flex justify-center">
                  <div className="bg-[#F5F5F5] rounded-[25px] py-4 px-8 text-center min-w-[160px]">
                    <span className="text-[16px] font-medium text-gray-800">Multi-Page</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Carrusel original */}
            <div className="hidden md:block relative mx-auto w-full max-w-[1214px] overflow-visible px-4 sm:px-0">
              <Carousel className="relative" opts={{ align: "start", loop: true }}>
                <CarouselContent className="ml-0 gap-5 px-5 pb-6">
                  {websiteTypes.map((site, index) => (
                    <CarouselItem key={index} className="basis-[280px] sm:basis-[326px] !pl-0">
                      <Card className="overflow-hidden rounded-[28px] !gap-0 !p-[6px] border border-transparent bg-card shadow-sm w-[280px] sm:w-[326px] shrink-0">
                        <div className="relative h-[220px] sm:h-[262px] w-[268px] sm:w-[314px]">
                          <Image
                            src={site.image}
                            alt={site.title}
                            width={314}
                            height={262}
                            className="object-cover rounded-[22px] w-full h-full"
                            priority={index < 2}
                          />
                        </div>
                        <CardContent className="w-[268px] sm:w-[314px] px-2 pt-5 pb-4">
                        <h3 className={`${inter.className} text-[18px] font-semibold !tracking-[-0.05em] leading-[normal] mb-2`}>
                          {`${site.title}:`}
                        </h3>
                          <p className="w-[252px] sm:w-[298px] text-[14px] tracking-[-0.7px] leading-[normal] text-muted-foreground">
                            {site.description}
                          </p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Flechas: agrupadas abajo a la derecha con gap de 10px */}
                <div className="absolute right-0 bottom-[-14px] flex items-center gap-[10px]">
                  <CarouselPrevious
                    className="!static size-[50px] rounded-full border border-[#EDEDED] bg-white shadow-sm !top-auto !left-auto !right-auto !translate-y-0"
                  />
                  <CarouselNext
                    className="!static size-[50px] rounded-full border border-[#EDEDED] bg-white shadow-sm !top-auto !left-auto !right-auto !translate-y-0"
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
