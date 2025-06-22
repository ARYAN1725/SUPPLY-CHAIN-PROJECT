import Header from './Components/Landing Page/Header';
import Features from './Components/Landing Page/Features';
import Hero from './Components/Landing Page/Hero';
import Footer from './Components/Landing Page/Footer';

const LandingPage = () => {
  return (
    <>
   
    <Header></Header>

    <div className="Hero">
      <Hero></Hero>
    </div>
    
    <Features></Features>

    <Footer></Footer>
   
    </>
  );
}

export default LandingPage;