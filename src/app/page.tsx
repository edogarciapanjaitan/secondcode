import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";

export default function Home() {
  return ( 
        <main className="flex flex-col min-h-screen bg-[#121212]">
          <NavBar />
          <div className="container mt-25 mx-auto px-12 py-4">
        <HeroSection /> 
        <AboutMe />
        {/* <Footer /> */}
        
          </div>
        </main>

        
  );
}
