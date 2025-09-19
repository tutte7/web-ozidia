import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Process } from "@/components/process"
import { Team } from "@/components/team"
import { Footer } from "@/components/footer"
import { SectionDivider } from "@/components/ui/separator"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Process />
      <SectionDivider />
      <Team />
      <Footer />
    </main>
  )
}
