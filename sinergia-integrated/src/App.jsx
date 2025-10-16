import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import SystemsSection from './components/SystemsSection'
import InteractiveTools from './components/InteractiveTools'
import NichesSection from './components/NichesSection'
import AcademySection from './components/AcademySection'
import DashboardSection from './components/DashboardSection'
import CommunitySection from './components/CommunitySection'
import AmbassadorProgram from './components/AmbassadorProgram'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <Hero />
            <SystemsSection />
            <InteractiveTools />
            <NichesSection />
            <AcademySection />
          </>
        )
      case 'systems':
        return <SystemsSection />
      case 'niches':
        return <NichesSection />
      case 'academy':
        return <AcademySection />
      case 'dashboard':
        return <DashboardSection />
      case 'community':
        return <CommunitySection />
      case 'ambassadors':
        return <AmbassadorProgram />
      default:
        return (
          <>
            <Hero />
            <SystemsSection />
            <InteractiveTools />
            <NichesSection />
            <AcademySection />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {renderContent()}
      </main>
    </div>
  )
}

export default App
