import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header(){
    const navigate = useNavigate();
    return(
        <header>
                <div className="EntireNavbar">
                <div className="header-image">
                <img src="/Logo.jpg" id="Logo" />
                </div>
                
                <div className="centerNavbar">
                <ul>
                <li><a href="#" id="HomeElement">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Ship Now</a></li>
                </ul>
                </div>
                <div className="buttons">
                <button id="LoginButton" onClick={() => navigate('/login')}>LOGIN</button>
                <button id="SignupButton" onClick={() => navigate('/signup')}>SIGN UP</button>
                </div>
                </div>    
                       
        </header>
    );
}

export default Header;