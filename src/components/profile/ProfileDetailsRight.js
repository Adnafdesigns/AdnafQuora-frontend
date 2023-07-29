import { Link } from 'react-router-dom';
import {FiEdit2} from 'react-icons/fi';
import quroa_share from './img_icons/quora_share.jpg';
import { TiShoppingBag} from 'react-icons/ti'
import { FaGraduationCap } from 'react-icons/fa';
import { SlLocationPin} from 'react-icons/sl';


function ProfileDetailsRight(){
    return(
        <div>
            <div>
                <div className='credential_fi_edit_icon'>
                    <p>Credentials & Highlights</p>
                    <div className='fi_edit_icon'> <FiEdit2/></div>
                </div>
                <div className='credential_fi_edit_icon_line'></div>
                <div className='credential_links'>
                    <div>
                        <TiShoppingBag/>
                        <a href="">Add emplyment credential</a>
                    </div>
                    <div>
                        <FaGraduationCap/>
                        <a href="">Add education credential</a>
                    </div>
                    <div className='location_icon'>
                        <SlLocationPin/>
                        <a href="">Add location credential</a>
                    </div>
                    <div>
                        <p>Joined December 2023</p>
                    </div> 
                </div>
                <div className='knows_about_fi_edit_icon'>
                    <p>Knows about</p>
                   <div className='fi_edit_icon'> <FiEdit2/></div>
                </div>
                <div className='credential_fi_edit_icon_line'></div>
                <div className='ad_topics'>
                    <img src={quroa_share} alt='image' className='quroa_share'></img>
                    <p>You haven't added any topics yet.</p>
                    <Link><button className='topic_btn'>Add topics</button></Link>
                </div>
            </div>
        </div>        
    )
}
export default ProfileDetailsRight;