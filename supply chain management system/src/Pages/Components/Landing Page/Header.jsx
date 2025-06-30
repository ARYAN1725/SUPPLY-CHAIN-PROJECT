import './Header.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Header(){
    const navigate = useNavigate();
    return(
        <>
        <div className="wrapper">
        <div className="header-image">
                <img src="/Logo.jpg" id="Logo" />
                </div>

                <div className="EntireNavbar">
                <div className="centerNavbar">
                <ul>
                <li><a href="#" id="HomeElement">Home</a></li>
                <li><Link to="/about" id="AboutUsElement">About Us</Link></li>
                <li><Link to="/orders" id="OrdersPageElement">Orders</Link></li>
                <li><a href="#">Ship Now</a></li>
                </ul>
                </div>
                <div className="buttons">
                <button id="LoginButton" onClick={() => navigate('/login')}>LOGIN</button>
                <button id="SignupButton" onClick={() => navigate('/signup')}>SIGN UP</button>
                </div>
                </div>    
                       
        </div>
        </>
    );
}

export default Header;