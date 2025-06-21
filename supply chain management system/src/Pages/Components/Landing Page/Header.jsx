import './Header.css';

function Header(){

    return(
        <header>
                <div className="EntireNavbar">
                <div className="header-image">
                <img src="/Logo.jpg" id="Logo" />
                </div>
                <ul>
                <li><a href="#" id="HomeElement">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Ship Now</a></li>
                <button id="LoginButton">LOGIN</button>
                </ul>
                </div>    
                       
        </header>
    );
}

export default Header;