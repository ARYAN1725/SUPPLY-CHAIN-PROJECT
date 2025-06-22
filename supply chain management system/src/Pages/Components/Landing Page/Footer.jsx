import './Footer.css';

function Footer(){
    return(
        <div className="footerWrapper">
        <footer>
            <div className="FooterText">
            <p id="FooterPara">Connect with us on...</p>
            </div>

            <div class="profileLinks">
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
            
        </footer>
        </div>
    );
}

export default Footer;