import './Footer.css';

function Footer(){
    return(
        <div className="footerWrapper">
        <footer>

            <div className="UsefulLinksColumn">
                <h2>USEFUL LINKS</h2>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Orders</a>
                <a href="#">Shipment</a>
            </div>

            <div className="EmailFormColumn">
                <h2>NEWSLETTER</h2>
                <form action="#">
                    <input type="text" placeholder='Enter your Email' />
                    <button className="SubscribeNow">SUBSCRIBE NOW</button>
                </form>
            </div>

            <div className="AddressColumn">
                <h2>CONTACT </h2>
                <p>2/31, ABC Road, DEF</p>
                <p>HIJ, KLM, India.</p>
            </div>

            <div className="Proflies">
            <div className="FooterText">
            <p id="FooterPara">Connect with us on...</p>
            </div>

            <div className="profileLinks">
            <a href="">
            <img src="/Instagram.svg" alt="" class="profileIcons" />
            </a>
            <a href="https://x.com/aryanpatil1725">
            <img src="/Twitter.svg" alt="" class="profileIcons"/>
            </a>
            <a href="https://www.linkedin.com/in/aryan-patil-62571b356/">
            <img src="/Linkedin.svg" alt="" class="profileIcons"/>
            </a>
            </div>
            </div>
            
        </footer>
        </div>
    );
}

export default Footer;