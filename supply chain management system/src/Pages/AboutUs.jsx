import Header from './Components/Landing Page/Header';
import './Components/Landing Page/AboutUs.css'; 
import Footer from './Components/Landing Page/Footer';

function AboutUs(){
    return(
        <>
        <Header></Header>

        <div className="wrapperOne">
            <div className="imageOne">
            <img src="/APJClipart.jpg" id="APJImage" alt="Founder Dr. APJ Kalam" />
            <p id="ImagePara">Dr. APJ Kalam, Founder</p>
            </div>

            <div className="textOne">
            <h1 id="FirstHeading">LOREM IPSIUM</h1>
            <h3 id="FirstSubheading">Lorem ipsum dolor sit amet</h3>
            <p id="FirstPara">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, facere? Ipsa quaerat, doloribus mollitia natus eum iusto expedita voluptatum incidunt suscipit voluptas, commodi hic soluta aspernatur explicabo cupiditate praesentium similique.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati corporis sapiente dolorum quis vel nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores velit ducimus accusantium a quo beatae!
            </p>
            <button id="ParaButton">Read More</button>
            </div>
        </div>

        {/* Section 2 starts here */}
        <div className="wrapperTwo">
            <div className="imageTwo">
            <img src="/SupplyChainProcess.jpg" id="ProcessImage" />
            </div>

            <div className="textTwo">
            <h1 id="SecondHeading">LOREM IPSIUM</h1>
            <h3 id="SecondSubheading">Lorem ipsum dolor sit amet</h3>
            <p id="SecondPara">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, facere? Ipsa quaerat, doloribus mollitia natus eum iusto expedita voluptatum incidunt suscipit voluptas, commodi hic soluta aspernatur explicabo cupiditate praesentium similique.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati corporis sapiente dolorum quis vel nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores velit ducimus accusantium a quo beatae!
            </p>
            <button id="ParaButtonTwo">Read More</button>
            </div>
        </div>
        <Footer></Footer>
    </>
        
    );
}

export default AboutUs;