import {TiMessages} from 'react-icons/ti';
import msg from './img_icons/message.png';
import create_ad from './img_icons/create_ad.png';
import monetization from './img_icons/monetization.png';
import your_content from './img_icons/Your_content.png';
import bokmark from './img_icons/bookmark.png';
import draft from './img_icons/draft_icon.png';
import try_quro from './img_icons/try_quora.png';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';


function ProfileDropdown(){
        const [open, setOpen] = useState(false);

    return(
        <div className="profile_modal_container">
            <div className="profile_modal_container">
                <div>
                <div className="dropdown_menu">
                  
                  <a  href="/profileDetails">
                    <div className='profile_details_d'> 
                        <button className='profile_d' >Y</button>
                        <div className='name'>Yusuf Abdulrafiu</div>
                    </div>
                  </a>                 
                        <ul>
                            <DropdownItem img ={msg} text={"Messages"}/>
                            <DropdownItem img ={create_ad} text={"Create Ad"}/>
                            <DropdownItem img ={monetization} text={"Monetization"}/>
                            <DropdownItem img ={your_content} text={"Your content & Stats"}/>
                            <DropdownItem img ={bokmark} text={"Bookmarks"}/>
                            <DropdownItem img ={draft} text={"Drafts"}/>
                            <DropdownItem img ={try_quro} text={"Try Quora+"}/>                   
                        </ul>
                </div>
                </div>
              
               
            </div>
        </div>
    );
}
function DropdownItem(props){
    return(
        <li className='DropdownItem'>
            <img src={props.img}></img>
             <a>{props.text}</a>
        </li>
        
    );
}
export default ProfileDropdown;