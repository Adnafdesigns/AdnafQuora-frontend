import { Link } from 'react-router-dom';
import {RiCameraLine} from 'react-icons/ri';
import {RiCloseFill} from 'react-icons/ri';
import React from 'react';

function Create(){
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
                    <div className='p_details_holder'>                        
                    <a href='profileDetails'>
                            <div className='p_details'>
                                <button>Y</button>
                                <p>Yusuf Abdulrafiu</p>
                            </div>
                        </a>
                        <div className='choose_credentia'>
                            {/* <select>
                                <option>Choose credential</option>
                            </select> */}
                        </div>
                    </div>
                    <div className='say_something'>
                        <textarea type="text" placeholder='Say something...'/>
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
export default Create;