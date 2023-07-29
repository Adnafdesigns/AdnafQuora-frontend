import {FaRegEdit, FaTimes, FaRegComment} from 'react-icons/fa';
import {FiRefreshCw} from 'react-icons/fi';
import {FiEdit2} from 'react-icons/fi';
import {BiMessageAltCheck, BiUpvote, BiDownvote} from 'react-icons/bi';
import profile_img from './IMG-20230622-WA0031.jpg';
import {Link} from 'react-router-dom';
import Comment from './Comment';
import {useState} from "react";

function Post(){
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const onClickHandler = () =>{
        setComments ((comments) => [...comments, comment]);
    };
    const onChangeHandler = (e) =>{
        setComment(e.target.value);
    };

    return(
        <div className="quora_post_holder">
            <div className="quora_post">
                <div className="postsss_parent">
                <div className='postsss_one_holder'>
                <div className="what_do_you_share_input_tag">
                   <input type="text" placeholder="What do you want to ask or share?"/>
                </div>
               <div className='icons'>
               <div className='BiMessageAltCheck'>
               <div className='bi_mess_icon'><BiMessageAltCheck/><p>Ask</p></div>
               <div className="regEdit "> <FaRegEdit className='regEdit'/><p>Answer</p></div> 
                <div className='FiEdit2'><FiEdit2/><p>Post</p></div>
               </div>
               </div>
                </div>
                </div>
                <div className="postsss_holder">
                <div className="postsss_parent_2">
                    <div className='profile'>
                            <div className='profile_holder'>
                                <div className='profile_img'><img src={profile_img} alt="avatar" className='' ></img></div>

                                <div className='profile_details'>
                                <div className='profile_div'><h3 className='name'>Yusuf Abdulrafiu</h3><li className='folow'>Follow</li> </div>
                                <div className='profile_div'><li className='status'>Graphic Designer</li><li className='date'>June 20</li> </div>                            
                                </div>

                                <div className='features_holder'>
                                <div className='feature'>
                                    {/* <FaTimes className='close_icon'/> */}
                                </div>
                                </div>
                            </div>
                    </div>
                   <div className='topic'><h3>What is the best advice you can give to a junior programmer?</h3></div>
                        <div className='text_story'>
                            <p>Don’t be disappointed if you see code and apps that look pretty complicated. Believe me, 
                                those who made such apps like Instagram, WhatsApp or Facebook have practiced a decade, 
                                maybe decades, to make such apps. You need time. The difference between a master and a 
                                beginner is time.
                                Don’t be disappointed if you see code and apps that look pretty complicated. Believe me, 
                                those who made such apps like Instagram, WhatsApp or Facebook have practiced a decade, 
                                maybe decades, to make such apps. You need time. The difference between a master and 
                                Don’t be disappointed if you see code and apps that look pretty complicated. Believe me, 
                                those who made such apps like Instagram, WhatsApp or Facebook have practiced a decade, 
                                maybe decades, to make such apps. You need time. The difference between a master and </p>
                         </div>                  
                </div>
                <div className='quora_icons_parent'>
                        <div className='quora_icons_holder'>
                            <div className='icon_one'>                                
                                <button className='icon_fishare'> <div><BiUpvote color='blue'/></div> <p>343</p></button>
                            </div>
                            <div className='icon_one'>                                
                                <button className='icon_fishare'> <div><BiDownvote /></div> <p>343</p></button>
                            </div>
                            <div className='icon_one'>                               
                                <div><button className='icon_fishare'> <div>  <FaRegComment /></div> <p>343</p></button></div>
                            </div>
                            <div className='icon_one'>                                
                                <button className='icon_fishare'> <div><FiRefreshCw /></div> <p>343</p></button>
                            </div>
                        </div>
                   </div>
                        
                   <div className="comement_main">
                   <div className='comment_container'>                       
                            {comments.map((text) =>(
                                <div className="comment_text">{text}</div>
                            ))}                              
                                <div className="comement_holder">
                                    <button className='comment_name'>Y</button>
                                    <input type="text" placeholder="Add a comment..." value={comment} onChange={onChangeHandler}/>
                                    <button onClick={onClickHandler} className='ad_comment'>Add comment</button>
                                </div>
                        </div>
                        </div>
                </div>

                <div className="postsss_holder">
                <div className="postsss_parent_2">
                    <div className='profile'>
                            <div className='profile_holder'>
                                <div className='profile_img'><img src={profile_img} alt="avatar" className='' ></img></div>

                                <div className='profile_details'>
                                <div className='profile_div'><h3 className='name'>Yusuf Abdulrafiu</h3><li className='folow'>Follow</li> </div>
                                <div className='profile_div'><li className='status'>Graphic Designer</li><li className='date'>June 20</li> </div>                            
                                </div>

                                <div className='features_holder'>
                                <div className='feature'>
                                    {/* <FaTimes className='close_icon'/> */}
                                </div>
                                </div>
                            </div>
                    </div>
                   <div className='topic'><h3>What is the best advice you can give to a junior programmer?</h3></div>
                        <div className='text_story'>
                            <p>Don’t be disappointed if you see code and apps that look pretty complicated. Believe me, 
                                those who made such apps like Instagram, WhatsApp or Facebook have practiced a decade, 
                                maybe decades, to make such apps. You need time. The difference between a master and a 
                                beginner is time.
                                Don’t be disappointed if you see code and apps that look pretty complicated. Believe me, 
                                those who made such apps like Instagram, WhatsApp or Facebook have practiced a decade, 
                                maybe decades, to make such apps. You need time. The difference between a master and 
                                Don’t be disappointed if you see code and apps that look pretty complicated. Believe me, 
                                those who made such apps like Instagram, WhatsApp or Facebook have practiced a decade, 
                                maybe decades, to make such apps. You need time. The difference between a master and </p>
                         </div>                  
                </div>
                <div className='quora_icons_parent'>
                        <div className='quora_icons_holder'>
                            <div className='icon_one'>                                
                                <button className='icon_fishare'> <div><BiUpvote color='blue'/></div> <p>343</p></button>
                            </div>
                            <div className='icon_one'>                                
                                <button className='icon_fishare'> <div><BiDownvote /></div> <p>343</p></button>
                            </div>
                            <div className='icon_one'>                               
                                <div><button className='icon_fishare'> <div>  <FaRegComment /></div> <p>343</p></button></div>
                            </div>
                            <div className='icon_one'>                                
                                <button className='icon_fishare'> <div><FiRefreshCw /></div> <p>343</p></button>
                            </div>
                        </div>
                   </div>
                        
                   <div className="comement_main">
                   <div className='comment_container'>                       
                            {comments.map((text) =>(
                                <div className="comment_text">{text}</div>
                            ))}                              
                                <div className="comement_holder">
                                    <button className='comment_name'>Y</button>
                                    <input type="text" placeholder="Add a comment..." value={comment} onChange={onChangeHandler}/>
                                    <button onClick={onClickHandler} className='ad_comment'>Add comment</button>
                                </div>
                        </div>
                        </div>
                </div>

                <div className="postsss_holder">
                <div className="postsss_parent_2">
                    <div className='profile'>
                            <div className='profile_holder'>
                                <div className='profile_img'><img src={profile_img} alt="avatar" className='' ></img></div>

                                <div className='profile_details'>
                                <div className='profile_div'><h3 className='name'>Yusuf Abdulrafiu</h3><li className='folow'>Follow</li> </div>
                                <div className='profile_div'><li className='status'>Graphic Designer</li><li className='date'>June 20</li> </div>                            
                                </div>

                                <div className='features_holder'>
                                <div className='feature'>
                                    {/* <FaTimes className='close_icon'/> */}
                                </div>
                                </div>
                            </div>
                    </div>
                   <div className='topic'><h3>What is the best advice you can give to a junior programmer?</h3></div>
                        <div className='text_story'>
                            <p>Don’t be disappointed if you see code and apps that look pretty complicated. Believe me, 
                                those who made such apps like Instagram, WhatsApp or Facebook have practiced a decade, 
                                maybe decades, to make such apps. You need time. The difference between a master and a 
                                beginner is time.
                                 </p>
                         </div>                  
                </div>
                <div className='quora_icons_parent'>
                        <div className='quora_icons_holder'>
                            <div className='icon_one'>                                
                                <button className='icon_fishare'> <div><BiUpvote color='blue'/></div> <p>343</p></button>
                            </div>
                            <div className='icon_one'>                                
                                <button className='icon_fishare'> <div><BiDownvote /></div> <p>343</p></button>
                            </div>
                            <div className='icon_one'>                               
                                <div><button className='icon_fishare'> <div>  <FaRegComment /></div> <p>343</p></button></div>
                            </div>
                            <div className='icon_one'>                                
                                <button className='icon_fishare'> <div><FiRefreshCw /></div> <p>343</p></button>
                            </div>
                        </div>
                   </div>
                        
                   <div className="comement_main">
                   <div className='comment_container'>                       
                            {comments.map((text) =>(
                                <div className="comment_text">{text}</div>
                            ))}                              
                                <div className="comement_holder">
                                    <button className='comment_name'>Y</button>
                                    <input type="text" placeholder="Add a comment..." value={comment} onChange={onChangeHandler}/>
                                    <button onClick={onClickHandler} className='ad_comment'>Add comment</button>
                                </div>
                        </div>
                        </div>
                </div>



                <div className="postsss_holder">
                <div className="postsss_parent_2">
                    <div className='profile'>
                            <div className='profile_holder'>
                                <div className='profile_img'><img src={profile_img} alt="avatar" className='' ></img></div>

                                <div className='profile_details'>
                                <div className='profile_div'><h3 className='name'>Yusuf Abdulrafiu</h3><li className='folow'>Follow</li> </div>
                                <div className='profile_div'><li className='status'>Graphic Designer</li><li className='date'>June 20</li> </div>                            
                                </div>

                                <div className='features_holder'>
                                <div className='feature'>
                                    {/* <FaTimes className='close_icon'/> */}
                                </div>
                                </div>
                            </div>
                    </div>
                   <div className='topic'><h3>What is the best advice you can give to a junior programmer?</h3></div>
                        <div className='text_story'>
                            <p>Don’t be disappointed if you see code and apps that look pretty complicated. Believe me, 
                                those who made such apps like Instagram, WhatsApp or Facebook have practiced a decade, 
                                maybe decades, to make such apps. You need time. The difference between a master and a 
                                beginner is time.
                                 </p>
                         </div>                  
                </div>
                <div className='quora_icons_parent'>
                        <div className='quora_icons_holder'>
                            <div className='icon_one'>                                
                                <button className='icon_fishare'> <div><BiUpvote color='blue'/></div> <p>343</p></button>
                            </div>
                            <div className='icon_one'>                                
                                <button className='icon_fishare'> <div><BiDownvote /></div> <p>343</p></button>
                            </div>
                            <div className='icon_one'>                               
                                <div><button className='icon_fishare'> <div>  <FaRegComment /></div> <p>343</p></button></div>
                            </div>
                            <div className='icon_one'>                                
                                <button className='icon_fishare'> <div><FiRefreshCw /></div> <p>343</p></button>
                            </div>
                        </div>
                   </div>
                        
                   <div className="comement_main">
                   <div className='comment_container'>                       
                            {comments.map((text) =>(
                                <div className="comment_text">{text}</div>
                            ))}                              
                                <div className="comement_holder">
                                    <button className='comment_name'>Y</button>
                                    <input type="text" placeholder="Add a comment..." value={comment} onChange={onChangeHandler}/>
                                    <button onClick={onClickHandler} className='ad_comment'>Add comment</button>
                                </div>
                        </div>
                        </div>
                </div>


                                    

                
            </div>         
        </div>
    )
}
export default Post;