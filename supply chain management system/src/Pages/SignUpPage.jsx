import './Components/Landing Page/SignUpPage.css';
import Header from './Components/Landing Page/Header';

function Signup(){
    return(
        <>
        <Header></Header>
        <div className="Wrapper">
        <div className="EntireForm">
        <form action="">

            <div className="TitleSubtitle">
            <h2 id="FormHeader">Lorem ipsum</h2>
            <p id="WelcomeBack">Welcome back! Please login to contiune</p>
            </div>

            <div className="FormInputs">

            <div className="UsernameInput">
            <img src="/Username.svg" id="UsernameSVG" style={{width: '20px', height: '20px'}}/>
            <label htmlFor="Username" id="Username">Username</label>
            <br />
            <input type="text" id="Username" placeholder='Choose any username...'/>
            <br /><br />
            </div>

            <div id="EmailSection">
            <img src="/Email.svg" style={{width: '20px', height: '20px'}} id="EmailSVG"/>
            <label htmlFor="Email">Email</label>
            <br />
            <input type="text" id="Email" placeholder='Example: abc@example.com'/>
            <br /><br />
            </div>

            <div id="PasswordSection">
            <img src="Password.svg" style={{width: '20px', height: '20px'}} id="PasswordSVG"/>
            <label htmlFor="Password">Password</label>
            <br />
            <input type="password" id="Password" placeholder='Enter your password'/>
            </div>
            </div>

            <div className="RememberForgot">
            <div className="LeftRemember">
            <input type="checkbox" id="RememberMe" />
            <label htmlFor="RememberMe">Remember Me</label>
            </div>
            <a href="#" id="ForgotPassword">Forgot password?</a>
            <br /><br />
            </div>
            
            <button id="LoginFormButton">SIGNUP</button>

            <div className="SignUpPara">
            <p id="SignUp">Don't have an account? <a href="#" id="SignUp">Sign up</a> </p>
            </div>

        </form>
        </div>

        <div className="RightSide">

            
            <img src="/LoginImage.jpg" alt="" id="LoginImage"/>
            
            <div className="RightSideText">
            <h2 id="RightSideHeader">LOREM IPSUIM</h2>

            <h4 id="RightSideSubtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit</h4>

            <p id="RightSidePara">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore nam beatae numquam quos, dolore quisquam, pariatur minima deleniti laborum nihil labore  consectetur sint. Magnam dicta perferendis magni cumque expedita.</p>

            </div>
        </div>
        </div>
        </>
    );
}

export default Signup;