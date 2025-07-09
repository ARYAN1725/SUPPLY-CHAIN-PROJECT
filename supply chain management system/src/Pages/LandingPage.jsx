import Header from './Components/Landing Page/Header';
import Features from './Components/Landing Page/Features';
import Hero from './Components/Landing Page/Hero';
import Footer from './Components/Landing Page/Footer';
import { useNavigate } from 'react-router-dom';
import API from '../api';
import { useEffect } from 'react';

const LandingPage = () => {
  const fetchDashboard = async() => {
    try{
      const response = await API.get('/api/landingpage');
      console.log(response.data)
    }
    catch (error){
      if (error.response && error.response.status === 401) {
        alert("Please login first.");
        Navigate("/login")
      }
      else{
        console.log(error)
      }
    } 
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

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