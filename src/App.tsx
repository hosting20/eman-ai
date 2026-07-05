import GridGlow from './components/GridGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeroMockWindow from './components/HeroMockWindow';
import Services from './components/Services';
import Approach from './components/Approach';
import Products from './components/Products';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="page-bg">
      <GridGlow />
      <Navbar />
      <Hero />
      <HeroMockWindow />
      <Services />
      <Approach />
      <Products />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
