import Header from './Components/Landing Page/Header';
import Features from './Components/Landing Page/Features';
import Hero from './Components/Landing Page/Hero';

const LandingPage = () => {
  return (
    <>
   
    <Header></Header>

    <div className="Hero">
      <Hero></Hero>
    </div>
    
    <Features></Features>
   
    </>
  );
}

export default LandingPage;