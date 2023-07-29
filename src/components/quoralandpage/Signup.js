import React from "react";
import {RiCloseFill} from 'react-icons/ri';


    const Signup = ({open, onClose}) =>{
        if(!open) return null;
    
    return(  
        <div className="siginup_main">
            <div className="siginup_main_parent">
                <div className="signupModal">
                    <div className="closeBackcground"  onClick={onClose}><RiCloseFill className="close_fill_icon"/></div>                    
                    <p className="signUp">Sign up</p>
                    <div className="signup_inputs">
                        <p>Name</p>
                        <input type="text" placeholder="What would you like to be called?"/>
                        </div>
                    <div className="signup_inputs">
                        <p>Email</p>
                        <input type="text" placeholder="Your Email"/>
                    </div>
                    <div className="line"></div>
                    <div className="signupNext">  <button>Next</button></div>
                </div>
            </div>
        </div>
    );
    }

export default Signup;