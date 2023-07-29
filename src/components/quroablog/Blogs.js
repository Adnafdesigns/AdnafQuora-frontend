
import nigeria_map from './Nigeria_flag_map.png';
import fine_art_img from './fine_art.png';
import education_img from './education.png';
import marketing_img from './marketing.png';
import fashion_style_img from './fashion and style.png';
import economics_img from './economics.png'
import business_img from './business.png';
import costs_img from './cost.png';

function Blogs(){
    return(
        <div className="quora_blog_holder">
            <div className="quora_blog"> 
                <div className="quora_blog_input">
                    <input type="text" placeholder="+ Create Space"/>
                </div>
                <div className="blogs_btn">
                    <div className='nigeria_butt'><button>
                        <div className="nigeria_map_img"><img src={nigeria_map} alt="image" className="nigeria_map"></img>
                        </div>NIGERIA</button></div>
                        
                        <div className='nigeria_butt'><button>
                        <div className="fine_art_img"><img src={fine_art_img} alt="image" className="nigeria_map"></img>
                        </div>Fine Art</button></div>

                        <div className='nigeria_butt'><button>
                        <div className="fine_art_img"><img src={education_img} alt="image" className="nigeria_map"></img>
                        </div>Education</button></div>

                        <div className='nigeria_butt'><button>
                        <div className="fine_art_img"><img src={marketing_img} alt="image" className="nigeria_map"></img>
                        </div>Marketing</button></div>

                        <div className='nigeria_butt'><button>
                        <div className="fine_art_img"><img src={fashion_style_img} alt="image" className="nigeria_map"></img>
                        </div>Fashion and Style</button></div>
                   
                        <div className='nigeria_butt'><button>
                        <div className="fine_art_img"><img src={economics_img} alt="image" className="nigeria_map"></img>
                        </div>Economics</button></div>

                        <div className='nigeria_butt'><button>
                        <div className="fine_art_img"><img src={business_img} alt="image" className="nigeria_map"></img>
                        </div>Business</button></div>                   
                   
                        <div className='nigeria_butt'><button>
                        <div className="fine_art_img"><img src={costs_img} alt="image" className="nigeria_map"></img>
                        </div>Costs</button></div> 
                </div>
                <div className="about_career_ul">
                    <div className="about_career_ul_holder">
                        <ul>
                            <div className="about_ca"><li>About</li> <li>Career</li></div>
                            <div className="about_ca"><li>Terms</li> <li>Privacy</li></div>
                            <div className="about_ca"><li>Acceptable Use</li></div>
                            <div className="about_ca">  <li>Business</li> <li>Press</li></div>
                            <div className="about_ca"> <li>Your Ad Choices</li></div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Blogs