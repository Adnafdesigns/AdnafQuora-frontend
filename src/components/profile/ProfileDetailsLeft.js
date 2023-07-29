import { Link } from 'react-router-dom';
import quroa_share from './img_icons/quora_share.jpg';

function ProfileDetailsLeft(){
    return(
        <div className="profileDetailsLeft_holder">
            <div className="profileDetailsLeft">
                 <div className='pro_holder'>
                    <p className='short_name_y'>Y</p>
                    <div>
                    <p className='ful_name'>Yusuf Abdulrafiu</p>
                    <ul className='ad_profile_credential'>
                        <Link><li>Add profile credential</li></Link>
                        <div className='folowing'>
                            <ul>
                                <Link><li>0 followers</li></Link>
                                <Link><li>0 following</li></Link>
                            </ul>
                        </div>
                    </ul>
                    </div>                    
                 </div>

                 <div className='write_a_drisption_about_yourself'>
                    <ul>
                        <Link><li>Write a description about yourself</li></Link>
                    </ul>
                 </div>
                 <div className='profile_btns'>
                    <Link><button>Profile</button></Link>
                    <Link><button>0 Answers</button></Link>
                    <Link><button>0 Questions</button></Link>
                    <Link><button>0 Posts</button></Link>
                    <Link><button>0 Followers</button></Link>
                    <Link><button>0 Following</button></Link>
                    <Link><button>Edits</button></Link>
                    <Link><button>Activity</button></Link>
                 </div>
                 <div className='credential_fi_edit_icon_line'></div>
                 <div className='profile_selection'>
                    <h3>Profile</h3>
                    <select>
                        <option>Most recent</option>
                        <option>All-time views</option>
                    </select>
                 </div>
                 <div className='credential_fi_edit_icon_line'></div>
                 <div className='quroa_share_answered'>
                    <img src={quroa_share} alt='image' className='quroa_share'></img>
                    <p>You haven't shared, answered or posted anything yet.</p>
                 </div>
                 <div className='answer_questions'>
                    <Link><button>Answer questions</button></Link>
                 </div>
            </div>
        </div>
    )
}
export default ProfileDetailsLeft;