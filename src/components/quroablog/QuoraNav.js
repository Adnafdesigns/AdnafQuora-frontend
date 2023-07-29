import quora_logo_blog from './quora_logo_icon.png';
import {FaHome, FaRegNewspaper, FaRegEdit, FaRegBell, FaGlobe} from 'react-icons/fa';
import {FiSearch} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import ProfileDropdown from '../profile/ProfileDropdown';
import AddQuestion from '../quroablog/AddQuestion';

function QuoraNav(){
    const [isOpen, setIsOpen] = useState(false);
    const toggleButton = ()=> {
        setIsOpen(!isOpen)
    }

    const [addOpen, setAddOpen] = useState(false);
    const     toggleQuestionButton = ()=> {
        setAddOpen(!addOpen)
    }


    return(
        <div className="quora_nav_holder">
            <div className="quora_nav">           
                <div className='quora_logo_div_div'>
                <img src={quora_logo_blog} alt="image" className="quora_logo_blog"></img>
                </div>
                <div className='faHo'> <Link to="/quoraHolderBlog"><FaHome className='home_icon'/></Link></div>
                <div className="faR"><FaRegNewspaper className='FaRegEdit'/></div>
                <div className="faR"> <FaRegEdit className='FaRegEdit'/></div> 
                <div className="faR"> <FaRegEdit className='FaRegEdit'/></div>                
                <div className='faBell'><FaRegBell className='FaRegBell'/></div>
                <div className="quora_searc_in">
                    <div className='quora_input_holder'>
                        <div className='searh_icon'><FiSearch/></div></div>
                   <div className='seach_q'> <input type="text" placeholder="Seach Quora"/></div>                
                
                </div>
                <div className='try_quora'><button>Try Quora+</button></div>
                <div  className="faR">
                    <button onClick={toggleButton} className='comment_name'>Y</button>
                    <div>
                        {isOpen   ?   < ProfileDropdown />  : ""
                        }
                    </div>
                    </div>
                    
                <div className="faR"><FaGlobe className='FaRegEdit'/></div>
                <div className='add_question'>
                    <button onClick={toggleQuestionButton}>Add question</button>
                    <div>
                        {/* {addOpen ? <AddQuestion/> : ""} */}
                    </div>
                    <Link to='/createPost'>
                        <select className='crete_post_btn'>
                             <option></option>
                            <option >Create Post</option>
                        </select>
                    </Link>
                    </div>             
            
        </div>
        </div>
    )
}
export default QuoraNav;