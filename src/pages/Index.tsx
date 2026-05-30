import { Navigation } from '@/components/Navigation'
import { GrainOverlay } from '@/components/GrainOverlay'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Work } from '@/components/Work'
import { Education } from '@/components/Education'
import { Writing as Experience } from '@/components/Writing'
import { Speaking as Testimonials } from '@/components/Speaking'
import { Contact } from '@/components/Contact'

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GrainOverlay />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Education />
        <Testimonials />
        <Contact />
      </main>
    </div>
  )
}

