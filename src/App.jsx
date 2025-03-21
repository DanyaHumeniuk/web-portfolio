import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import FeatureSection from "./components/FeatureSection"
import About from "./components/About"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        {/* <FeatureSection /> */}
        <About />
      </div>
    </>
  )
}

export default App