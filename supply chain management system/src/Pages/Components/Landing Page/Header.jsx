import './Header.css';

function Header(){

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
                <button id="LoginButton">LOGIN</button>
                <button id="SignupButton">SIGN UP</button>
                </div>
                </div>    
                       
        </header>
    );
}

export default Header;