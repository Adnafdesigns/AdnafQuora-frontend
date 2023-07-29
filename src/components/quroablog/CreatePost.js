import React from "react";
import {RiCloseFill, RiCameraLine} from 'react-icons/ri';
import everyone_icon from './R (15).png';
import {FaGlobe} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CreatePost = ({open}) =>{
    // if (!open) return null;
    return(
        <div className="siginup_main">
        <div className="siginup_main_parent">
            <div className="signupModal">
                <div className="closeBackcground">
                    <RiCloseFill className="close_fill_icon"/>                    
                </div>                    
                <div className="adquestion_createpost">
                    <div className="adquestion_createpost_holder">
                        <Link to="/addQuestion"><button>Add Question</button></Link>
                        <Link to="/create"><button>Create Post</button></Link>
                    </div>
                </div>
                <div className="line"></div>
                <div className="post_btn_holder">
                    <Link to="/"><div className="btns"><button>Aa</button><button><RiCameraLine/></button></div></Link>
                    <div className="post_btn">  <button>Post</button></div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default CreatePost;