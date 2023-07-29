import QuoraLogin from './QuoraLogin';
import quora_background_landpage from '../quoralandpage/quora_background.jpg';
import quora_logo_landingpgage from '../quoralandpage/R (42).png';

function QuoraLandingPage(){
    return(
        <div>    
           <img height="100%" width="100%" src={quora_background_landpage} alt="image" className='landpageimg'></img>
            <div className='quora_sign_board_holder'>            
                <div className='quora_sign_board'>
                    <div className='quora_logo_landingpgage'>
                        <img src={quora_logo_landingpgage} alt="image" className='quora_logo_landing'></img>
                        <p>A place to share knowledge and better understand the world</p>
                    </div>
                    <QuoraLogin/>
                    <p className="underline_under"></p>
                         <div className='new'>
                            <p>New: العربية, עברית, polski, ગુજરાતી, ಕನ್ನಡ, മലയാളം and తెలుగు</p>
                            <p className="underline"></p>
                        </div>
                        <div className='li_es'>
                            <li className='about'>About</li>
                            <li>Careers</li>
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>Contact</li>
                            <li>Languages</li>
                            <li>Your Ad Choices</li>
                            <li>Press</li>
                            <li>(c) Quora, Inc. 2023</li>
                        </div>
                </div>                             
            </div>            
        </div>
    )
}
export default QuoraLandingPage