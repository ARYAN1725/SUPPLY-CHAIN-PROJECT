import './Components/Landing Page/OrdersPage.css';
import Header from './Components/Landing Page/Header';
import Footer from './Components/Landing Page/Footer';

function OrdersPage(){
    return(
        <>
        <Header></Header>

        <div className="Wrapper">
            <div className="Image">
            <div className="TextImage">
            <h2>TRACK YOUR ORDER</h2>
            <input type="text" placeholder='Enter your order ID...' id="OrderIDInput"/>
            <button id="OrderIDSubmit">SUBMIT</button>
            </div>
            </div>
            </div>

            <div className="FeaturesSVG">
                <div id="SuppliesSection">
                <img src="/Supplies.svg" id="SuppliesSVG"/>
                <h3>Receive Supplies</h3>
                <p>Receive Exciting Supplies on Parcels and Shipments</p>
                </div>

                <div id="TruckSection">
                <img src="/Truck.svg" alt="" id="TruckSVG" />
                <h3>Manage Pickups</h3>
                <p>Schedule and manage pickups online</p>
                </div>
                
                <div id="LocationSVG">
                <img src="/Location.svg" alt="" id="LocationSVG"/>
                <h3>Manage Locations</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                </div>

                <div id="GiftSection">
                <img src="/Gift.svg" id="GiftSVG" />
                <h3>Receive Rewards</h3>
                <p>Receive Rewards and exciting offers!</p>
                </div>
            </div>

        

        <Footer></Footer>
        </>
    );
}

export default OrdersPage;