import './Components/Landing Page/LoginPage.css';
import Header from './Components/Landing Page/Header';
import Footer from './Components/Landing Page/Footer';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

const Login = () =>{
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name] : value
        }));
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            const response = await API.post('/api/UserLogin',
                formData, {withCredentials: true}
            );

            if (response.data.username){
                sessionStorage.setItem('username', response.data.username);
                alert(`Welcome, ${response.data.username}!`);
                navigate('/home');
            }
            else{
                alert('Invalid email or password');
                console.log(response);
            }
        }
        catch (error){
            alert('An error occurred');
            console.log(error);
        }
    };

    return(
        <>
        <Header></Header>
        <div className="Wrapper">
        <div className="EntireForm">
        <form onSubmit={handleSubmit}>

            <div className="TitleSubtitle">
            <h2 id="FormHeader">Lorem ipsum</h2>
            <p id="WelcomeBack">Welcome back! Please login to contiune</p>
            </div>

            <div className="FormInputs" >
            <div id="EmailSection">
            <img src="/Email.svg" style={{width: '20px', height: '20px'}} id="EmailSVG"/>
            <label htmlFor="Email">Email</label>
            <br />
            <input 
            type="text" 
            id="Email" 
            placeholder='Example: abc@example.com' 
            value={formData.email}
            onChange={handleChange}
            name="email"
            required
            />
            <br /><br />
            </div>

            <div id="PasswordSection">
            <img src="Password.svg" style={{width: '20px', height: '20px'}} id="PasswordSVG"/>
            <label htmlFor="Password">Password</label>
            <br />
            <input type="password" 
            id="Password" 
            placeholder='Enter your password' 
            value={formData.password}
            onChange={handleChange}
            name="password"
            required
            />
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
            
            <button type="submit" id="LoginFormButton">LOGIN</button>

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

        <Footer></Footer>
        </>
    );
}

export default Login;