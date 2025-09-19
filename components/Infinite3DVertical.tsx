"use client"

import Image from "next/image"
import * as React from "react"

export type Project = {
  src: string
  alt: string
}

type Infinite3DVerticalProps = {
  left: Project[]
  right: Project[]
  speedLeft?: number // segundos por ciclo
  speedRight?: number // segundos por ciclo
  className?: string
  skewXDeg?: number // sesgo/rotación en X aplicado a las columnas (se corrige en las tarjetas)
}

export function Infinite3DVertical({
  left,
  right,
  speedLeft = 16,
  speedRight = 18,
  className = "",
  skewXDeg = -5,
}: Infinite3DVerticalProps) {
  const leftItems = React.useMemo(() => [...left, ...left], [left])
  const rightItems = React.useMemo(() => [...right, ...right], [right])

  return (
    <section
      className={`group relative overflow-hidden w-[600px] md:w-[620px] ${className}`}
      style={{
        // fades top/bottom
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
        perspective: "1200px",
        transform: `skewX(${skewXDeg}deg) skewY(-1deg)`,
      }}
    >
      <div className="mx-auto max-w-[1200px]">
        <div
          className="relative grid grid-cols-2 gap-3 [transform-style:preserve-3d] [transform:skewX(-5deg)_skewY(-1deg)] transition-transform duration-300 group-hover:[transform:skewX(-5deg)_skewY(-1deg)_rotateX(3deg)]"
        >
          {/* Columna izquierda: sube */}
          <Column
            items={leftItems}
            duration={speedLeft}
            direction="up"
            skewXDeg={skewXDeg}
          />

          {/* Columna derecha: baja */}
          <Column
            items={rightItems}
            duration={speedRight}
            direction="down"
            skewXDeg={skewXDeg}
          />
        </div>
      </div>

      <style jsx global>{`
        @keyframes iv-scroll-up {
          to { transform: translateY(-50%); }
        }
        @keyframes iv-scroll-down {
          to { transform: translateY(50%); }
        }
      `}</style>
    </section>
  )
}

function Column({
  items,
  duration,
  direction,
  skewXDeg,
}: {
  items: Project[]
  duration: number
  direction: "up" | "down"
  skewXDeg: number
}) {
  return (
    <div className="relative w-[260px] h-[600px] md:h-[720px] overflow-hidden" style={{ transform: `skewX(${skewXDeg}deg)` }}>
      <div
        className={`absolute inset-0 will-change-transform group-hover:[animation-play-state:paused]`}
        style={{
          animationName: direction === "up" ? "iv-scroll-up" : "iv-scroll-down",
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        <div className="flex flex-col gap-3">
          {items.map((p, idx) => (
            <Card key={`${p.src}-${idx}`} project={p} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Card({ project, idx }: { project: Project; idx: number }) {
  // Variaciones ligeras para sensación 3D
  const rotate = (idx % 3) - 1 // -1,0,1
  const scale = 0.96 + ((idx % 5) * 0.01)

  return (
    <div
      className="relative mx-auto w-[260px] h-[200px] md:w-[260px] md:h-[200px] rounded-[24px] bg-white ring-1 ring-[#EFEFEF] overflow-hidden"
      style={{ transform: `skewX(5deg) rotate(${rotate}deg) scale(${scale})` }}
    >
      <Image
        src={project.src}
        alt={project.alt}
        fill
        sizes="260px"
        className="object-cover w-full h-full"
        priority={idx < 2}
      />
    </div>
  )
}

export default Infinite3DVertical


