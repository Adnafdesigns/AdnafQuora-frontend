import google_icon from './R (43).png';
import facebook_icon from './R (44).png';
import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import Signup from './Signup';

function QuoraLogin(){
        const [openModal, setOpenModal] = useState(false);

    return(
        <div className="quora_loging_holder">
            <div className="quora_side1">
                <p className="terme_and_condition">By continuing you indicate that you agree to</p> 
                <p className="terme_and_condition">Quora’s Terms of Service and Privacy Policy</p>

                <div className="google_facebook">
                    <input type="text" placeholder="Continue with Google"/>
                    <img src={google_icon} alt="image" className="google_icon"></img> <br></br>
                    <input type="text" placeholder="Continue with Facebook"/>
                    <img src={facebook_icon} alt="image" className="google_icon"></img><br></br>
                <div><button onClick={() => setOpenModal(true)}>Sign up with email</button>
                    <Signup open={openModal} onClose={() => setOpenModal(false)}/>
                </div>
                </div>
            </div>

            <div className="quora_side2">
                    <p className="log_in">Login</p>
                    <p className="underline"></p>
                <div>
                    <p>Email</p>
                    <input type="text" placeholder="Your email"/>
                </div>
                <div>
                    <p className="pwd">Password</p>                    
                    <input type="text" placeholder="Your password"/>
                </div>
                <div className="forgot_passwd">
                    <li>Forgot password?</li> 
                    <button>Login</button>
                </div>
            </div>            
        </div>
    )
}
export default QuoraLogin;