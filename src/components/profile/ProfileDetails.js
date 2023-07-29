import ProfileDetailsLeft from './ProfileDetailsLeft';
import ProfileDetailsRight from './ProfileDetailsRight';
import QuoraNav from '../quroablog/QuoraNav';

function ProfileDetails(){
    return(
        <div>
            <QuoraNav/>
            <div className="profileDetails_hold">
                <div className="profileDetails_main">
                    <div className="profileDetails_left"><ProfileDetailsLeft/></div>
                    <div className="profileDetails_right"><ProfileDetailsRight/></div>
                </div>
            </div>
        </div>
    )
}
export default ProfileDetails;