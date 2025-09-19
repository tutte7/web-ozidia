"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function Team() {
  // Assets provistos por el marco seleccionado en Figma
  const imgProfileImage = "/img-prueba-nosotros.png"
  const imgProfileMateo = "/mateo-img-perfil.png"
  const imgProfileAgus = "/agus-img-perfil.png"
  const imgGroup = "http://localhost:3845/assets/ee4b9cb4948596ee53f174a3305d8b66a9f47aec.svg"
  const imgGroup1 = "http://localhost:3845/assets/862eb65f8fdeac007524176361364bf61f079240.svg"
  const imgGroup2 = "http://localhost:3845/assets/8c494f2be68488595c2d33228210811a6cf76471.svg"
  const imgGroup3 = "http://localhost:3845/assets/49bd5102ba56d4e31b5a9768181203fd03fab5b5.svg"
  const imgFrame = "http://localhost:3845/assets/3bfae419068b136ab73885fb151c0b8fda1f517b.svg"
  const imgVector = "http://localhost:3845/assets/51c52aa7eb1f28c57f3c3116b3740d4a2cfc77c6.svg"
  const imgVector1 = "http://localhost:3845/assets/18cc6f991d45b5613d6ecb1e53c283d6cb1ab486.svg"
  const imgVector2 = "http://localhost:3845/assets/96ed5cbff02c27cd42078ce155183f79dcc49294.svg"
  const imgVector3 = "http://localhost:3845/assets/8a86fd3489d3b715a89556ce9bdb3c6f8eb58c0f.svg"
  const imgGroup4 = "http://localhost:3845/assets/33024144ee8d82d24757d234411f8bab7954007a.svg"
  const imgVector4 = "http://localhost:3845/assets/81ace3cb87ef61b3346986057978f8bb7a96b996.svg"

  return (
    <section id="equipo" className="relative bg-[#fbfbfb]">
      <div className="container px-4 md:px-0">
        {/* Título y descripción unificados con el resto del sitio */}
        <div className="text-center leading-[0] not-italic mt-[50px]" data-name="Titulo y Descripcion-Nosotros" data-node-id="1186:224">
          <h2 className="heading font-medium text-[35px] leading-[normal] mb-[14px]">Nosotros</h2>
          <p className="mx-auto max-w-[472px] w-full px-4 md:px-0 text-[16px] tracking-[-0.8px] text-muted-foreground leading-[normal]">
            Somos un estudio de dos. Todo lo hacemos nosotros, sin atajos. Trabajo bien hecho, foco donde importa y cuidado en cada detalle.
          </p>
        </div>

        {/* Cards (idénticas a Figma) */}
        <div
          className="flex flex-col md:flex-row justify-center gap-[24px] md:gap-[50px] mt-[50px] mb-[50px]"
          data-name="Cards-Nosotros"
          data-node-id="1186:139"
        >
          {/* Card Mateo */}
          <div
            className="bg-gradient-to-b from-[rgba(252,252,252,0.7)] to-[rgba(252,252,252,0.56)] h-[520px] md:h-[600px] relative rounded-[40px] md:rounded-[50.143px] w-full md:w-[560px]"
            data-name="Mateo"
            data-node-id="1186:140"
          >
            <div className="h-[520px] md:h-[600px] overflow-clip relative w-full md:w-[560px]">
              <div className="absolute inset-[10.03px_10.03px_9.57px_10.03px] rounded-[40.114px]" data-name="Profile Image Container" data-node-id="1186:141">
                <div className="overflow-clip relative size-full">
                  <div
                    className="absolute bg-center bg-cover bg-no-repeat inset-0 rounded-[40.114px]"
                    data-name="Profile Image"
                    data-node-id="1186:142"
                    style={{ backgroundImage: `url('${imgProfileMateo}')` }}
                  >
                    
                    <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_10.029px_0px_inset_rgba(255,255,255,0.15)]" />
                    <div aria-hidden className="absolute border-[1.88px] border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[40.114px]" />
                  </div>
                </div>
                <div aria-hidden className="absolute border-[1.88px] border-[rgba(124,139,137,0.27)] border-solid inset-0 pointer-events-none rounded-[40.114px]" />
              </div>
              <div className="absolute bottom-[10px] box-border flex flex-col gap-[15px] items-start justify-start left-1/2 overflow-clip pb-[24px] md:pb-[32px] pt-0 px-[20px] md:px-[32px] translate-x-[-50%] w-[calc(100%-20px)] md:w-[540px]" data-node-id="1186:146">
                <div className="flex flex-col gap-[10px] items-start justify-start leading-[0] not-italic relative text-neutral-50 w-full" data-node-id="1186:147">
                  <div className="[text-shadow:rgba(0,0,0,0.25)_0px_1px_0px] font-sans font-semibold relative text-[28px] text-nowrap tracking-[-0,05em]" data-node-id="1186:148">
                    <p className="leading-none whitespace-pre">Mateo Ricagni</p>
                  </div>
                  <div className="flex flex-col font-sans font-normal justify-center min-w-full relative text-[18px] tracking-[-0,05px]" data-node-id="1186:149" style={{ width: "min-content" }}>
                    <p className="leading-none">Diseñador UI/UX — webs claras y enfocadas en convertir.</p>
                  </div>
                </div>
                <div className="flex gap-[10px] items-start justify-start relative" data-node-id="1186:150">
                  <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(255,255,255,0.1)] box-border flex gap-[10px] items-center justify-center px-[14px] py-[6px] relative rounded-[999px]" data-node-id="1186:151">
                    <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
                    <div className="relative size-[14px]" data-name="Group" data-node-id="1186:152">
                      <div className="absolute inset-[-3.571%]">
                        <img alt="" className="block max-w-none size-full" src="/web-icon.svg" />
                      </div>
                    </div>
                    <div className="font-sans font-medium leading-[0] not-italic relative text-[14px] text-nowrap text-white tracking-[-0.7px]" data-node-id="1186:158">
                      <p className="leading-none whitespace-pre">Web Design</p>
                    </div>
                  </div>
                  <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(255,255,255,0.1)] box-border flex gap-[10px] items-center justify-center px-[14px] py-[6px] relative rounded-[999px]" data-node-id="1186:159">
                    <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
                    <div className="h-[14px] relative w-[9.335px]" data-name="Group" data-node-id="1186:160">
                      <div className="absolute inset-[-3.57%_-5.36%]">
                        <img alt="" className="block max-w-none size-full" src="/figma-icon.svg" />
                      </div>
                    </div>
                    <div className="font-sans font-medium leading-[0] not-italic relative text-[14px] text-nowrap text-white tracking-[-0.7px]" data-node-id="1186:164">
                      <p className="leading-none whitespace-pre">Figma</p>
                    </div>
                  </div>
                  <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(255,255,255,0.1)] box-border flex gap-[10px] items-center justify-center px-[14px] py-[6px] relative rounded-[999px] hidden md:flex" data-node-id="1186:165">
                    <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
                    <div className="h-[14px] relative w-[23.331px]" data-name="Group" data-node-id="1186:166">
                      <div className="absolute inset-[-3.57%_-2.14%]">
                        <img alt="" className="block max-w-none size-full" src="/webflow-icon.svg" />
                      </div>
                    </div>
                    <div className="font-sans font-medium leading-[0] not-italic relative text-[14px] text-nowrap text-white tracking-[-0.7px]" data-node-id="1186:169">
                      <p className="leading-none whitespace-pre">Webflow</p>
                    </div>
                  </div>
                  <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(255,255,255,0.1)] box-border flex gap-[10px] items-center justify-center px-[14px] py-[6px] relative rounded-[999px]" data-node-id="1186:170">
                    <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
                    <div className="h-[14.001px] relative w-[14px]" data-name="Group" data-node-id="1186:171">
                      <div className="absolute inset-[-5.36%_-5.36%_-5.35%_-5.36%]">
                        <img alt="" className="block max-w-none size-full" src="/motion-icon.svg" />
                      </div>
                    </div>
                    <div className="font-sans font-medium leading-[0] not-italic relative text-[14px] text-nowrap text-white tracking-[-0.7px]" data-node-id="1186:174">
                      <p className="leading-none whitespace-pre">Motion</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-start relative w-full gap-[12px] md:gap-0" data-node-id="1186:175">
                  <div className="basis-0 flex gap-[30px] md:grow items-center justify-start min-h-px min-w-px relative" data-name="Stats Container" data-node-id="1186:176">
                    <div className="hidden md:flex gap-[5.014px] items-center justify-start relative" data-name="Followers Container" data-node-id="1186:177">
                      <div className="h-[21px] relative w-[24px]" data-name="Frame" data-node-id="1186:178">
                        <img alt="" className="block max-w-none size-full" src="/portfolio-icon.svg" />
                      </div>
                      <div className="font-sans font-semibold leading-[0] not-italic relative text-[#fdfdfd] text-[17.55px] text-nowrap tracking-[-0.8775px]" data-node-id="1186:180">
                        <p className="[text-underline-position:from-font] decoration-solid leading-none underline whitespace-pre">Portafolio</p>
                      </div>
                    </div>
                    <div className="hidden md:flex gap-[5.014px] items-center justify-start relative" data-name="Followers Container" data-node-id="1186:181">
                      <div className="h-[21px] relative w-[20px]" data-name="Vector" data-node-id="1186:182">
                        <img alt="" className="block max-w-none size-full" src="/linkedin-icon.svg" />
                      </div>
                      <div className="font-sans font-semibold leading-[0] not-italic relative text-[#fdfdfd] text-[17.55px] text-nowrap tracking-[-0.8775px]" data-node-id="1186:183">
                        <p className="[text-underline-position:from-font] decoration-solid leading-none underline whitespace-pre">LinkedIn</p>
                      </div>
                    </div>
                  </div>
                  <Button
                    type="button"
                    aria-label="Ver LinkedIn de Mateo"
                    className="rounded-full bg-[#efefef] text-[#181818] text-[18px] tracking-[-0.9px] w-[185px] h-[47px] px-0 py-0 gap-[8px] shadow-[0px_-2.507px_5.014px_0px_inset_rgba(137,137,137,0.08),0px_1.88px_7.521px_0px_inset_#ffffff] border border-[rgba(24,24,24,0.03)]"
                    onClick={() => window.open('https://www.linkedin.com/in/mateoricagni/', '_blank')}
                  >
                    Ver LinkedIn
                    <ExternalLink className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div aria-hidden className="absolute border-[#eeeeee] border-[1.254px] border-solid inset-0 pointer-events-none rounded-[50.143px] shadow-[0px_178.007px_106.554px_0px_rgba(0,0,0,0.02),0px_78.975px_78.975px_0px_rgba(0,0,0,0.04),0px_20.057px_43.875px_0px_rgba(21,32,30,0.04)]" />
              </div>

          {/* Card Agus */}
          <div
            className="bg-gradient-to-b from-[rgba(252,252,252,0.7)] to-[rgba(252,252,252,0.56)] h-[520px] md:h-[600px] relative rounded-[40px] md:rounded-[50.143px] w-full md:w-[560px]"
            data-name="Agus"
            data-node-id="1186:187"
          >
            <div className="h-[520px] md:h-[600px] overflow-clip relative w-full md:w-[560px]">
              <div className="absolute inset-[10.03px_10.03px_9.57px_10.03px] rounded-[40.114px]" data-name="Profile Image Container" data-node-id="1186:188">
                <div className="overflow-clip relative size-full">
                  <div
                    className="absolute bg-center bg-cover bg-no-repeat inset-0 rounded-[40.114px]"
                    data-name="Profile Image"
                    data-node-id="1186:189"
                    style={{ backgroundImage: `url('${imgProfileAgus}')` }}
                  >
                    
                    <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_10.029px_0px_inset_rgba(255,255,255,0.15)]" />
                    <div aria-hidden className="absolute border-[1.88px] border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[40.114px]" />
                  </div>
                </div>
                <div aria-hidden className="absolute border-[1.88px] border-[rgba(124,139,137,0.27)] border-solid inset-0 pointer-events-none rounded-[40.114px]" />
              </div>
              <div className="absolute bottom-[10px] box-border flex flex-col gap-[15px] items-start justify-start left-1/2 overflow-clip pb-[24px] md:pb-[32px] pt-0 px-[20px] md:px-[32px] translate-x-[-50%] w-[calc(100%-20px)] md:w-[540px]" data-node-id="1186:193">
                <div className="flex flex-col gap-[10px] items-start justify-start leading-[0] not-italic relative text-neutral-50 w-full" data-node-id="1186:194">
                  <div className="[text-shadow:rgba(0,0,0,0.25)_0px_1px_0px] font-sans font-semibold relative text-[28px] text-nowrap tracking-[-1.4px]" data-node-id="1186:195">
                    <p className="leading-none whitespace-pre">Agustin Mc Innes</p>
                  </div>
                  <div className="flex flex-col font-sans font-normal justify-center min-w-full relative text-[18.804px] tracking-[-0.9402px]" data-node-id="1186:196" style={{ width: "min-content" }}>
                    <p className="leading-none">Desarrollador Front-End — código limpio, escalable y veloz.</p>
                  </div>
                </div>
                <div className="flex gap-[10px] items-start justify-start relative" data-node-id="1186:197">
                  <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(255,255,255,0.1)] box-border flex gap-[10px] items-center justify-center px-[14px] py-[6px] relative rounded-[999px]" data-node-id="1186:198">
                    <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
                    <div className="relative size-[14px]" data-name="Vector" data-node-id="1186:199">
                      <div className="absolute inset-[-3.57%]">
                        <img alt="" className="block max-w-none size-full" src="/next-icon.svg" />
                      </div>
                    </div>
                    <div className="font-sans font-medium leading-[0] not-italic relative text-[14px] text-nowrap text-white tracking-[-0.7px]" data-node-id="1186:200">
                      <p className="leading-none whitespace-pre">Next.js</p>
                    </div>
                  </div>
                  <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(255,255,255,0.1)] box-border flex gap-[10px] items-center justify-center px-[14px] py-[6px] relative rounded-[999px]" data-node-id="1186:201">
                    <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
                    <div className="h-[14px] relative w-[12px]" data-name="Vector" data-node-id="1186:202">
                      <img alt="" className="block max-w-none size-full" src="/react-icon.svg" />
                    </div>
                    <div className="font-sans font-medium leading-[0] not-italic relative text-[14px] text-nowrap text-white tracking-[-0.7px]" data-node-id="1186:203">
                      <p className="leading-none whitespace-pre">React</p>
                    </div>
                  </div>
                  <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(255,255,255,0.1)] box-border flex gap-[10px] items-center justify-center px-[14px] py-[6px] relative rounded-[999px]" data-node-id="1186:204">
                    <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
                    <div className="relative size-[14px]" data-name="Group" data-node-id="1186:205">
                      <div className="absolute inset-[-5.357%]">
                        <img alt="" className="block max-w-none size-full" src="/ts-icon.svg" />
                      </div>
                    </div>
                    <div className="font-sans font-medium leading-[0] not-italic relative text-[14px] text-nowrap text-white tracking-[-0.7px]" data-node-id="1186:208">
                      <p className="leading-none whitespace-pre">TypeScript</p>
                    </div>
                  </div>
                  <div className="backdrop-blur-[5px] backdrop-filter bg-[rgba(255,255,255,0.1)] box-border flex gap-[10px] items-center justify-center px-[14px] py-[6px] relative rounded-[999px] hidden md:flex" data-node-id="1186:209">
                    <div aria-hidden className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[999px]" />
                    <div className="h-[14px] relative w-[16px]" data-name="Vector" data-node-id="1186:210">
                      <img alt="" className="block max-w-none size-full" src="/vercel-icon.svg" />
                    </div>
                    <div className="font-sans font-medium leading-[0] not-italic relative text-[14px] text-nowrap text-white tracking-[-0.7px]" data-node-id="1186:211">
                      <p className="leading-none whitespace-pre">Vercel</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-start relative w-full gap-[12px] md:gap-0" data-node-id="1186:212">
                  <div className="basis-0 flex gap-[30px] md:grow items-center justify-start min-h-px min-w-px relative" data-name="Stats Container" data-node-id="1186:213">
                    <div className="hidden md:flex gap-[5.014px] items-center justify-start relative" data-name="Followers Container" data-node-id="1186:214">
                      <div className="h-[21px] relative w-[24px]" data-name="Frame" data-node-id="1186:215">
                        <img alt="" className="block max-w-none size-full" src="/portfolio-icon.svg" />
                      </div>
                      <div className="font-sans font-semibold leading-[0] not-italic relative text-[#fdfdfd] text-[17.55px] text-nowrap tracking-[-0.8775px]" data-node-id="1186:217">
                        <p className="[text-underline-position:from-font] decoration-solid leading-none underline whitespace-pre">Portafolio</p>
                      </div>
                    </div>
                    <div className="hidden md:flex gap-[5.014px] items-center justify-start relative" data-name="Followers Container" data-node-id="1186:218">
                      <div className="h-[21px] relative w-[20px]" data-name="Vector" data-node-id="1186:219">
                        <img alt="" className="block max-w-none size-full" src="/linkedin-icon.svg" />
                      </div>
                      <div className="font-sans font-semibold leading-[0] not-italic relative text-[#fdfdfd] text-[17.55px] text-nowrap tracking-[-0.8775px]" data-node-id="1186:220">
                        <p className="[text-underline-position:from-font] decoration-solid leading-none underline whitespace-pre">LinkedIn</p>
                      </div>
                    </div>
                  </div>
                  <Button
                    type="button"
                    aria-label="Ver LinkedIn de Agustín"
                    className="rounded-full bg-[#efefef] text-[#181818] text-[18px] tracking-[-0.9px] w-[185px] h-[47px] px-0 py-0 gap-[8px] shadow-[0px_-2.507px_5.014px_0px_inset_rgba(137,137,137,0.08),0px_1.88px_7.521px_0px_inset_#ffffff] border border-[rgba(24,24,24,0.03)]"
                    onClick={() => window.open('https://www.linkedin.com/in/agustinmcinnes/', '_blank')}
                  >
                    Ver LinkedIn
                    <ExternalLink className="size-4" />
                  </Button>
                </div>
            </div>
        </div>
            <div aria-hidden className="absolute border-[#eeeeee] border-[1.254px] border-solid inset-0 pointer-events-none rounded-[50.143px] shadow-[0px_178.007px_106.554px_0px_rgba(0,0,0,0.02),0px_78.975px_78.975px_0px_rgba(0,0,0,0.04),0px_20.057px_43.875px_0px_rgba(21,32,30,0.04)]" />
          </div>
        </div>
      </div>
    </section>
  )
}


