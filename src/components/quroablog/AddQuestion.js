import { Link } from 'react-router-dom';
import {RiCloseFill} from 'react-icons/ri';


function AddQuestion(){
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
                    
                <div className='tips'>
                    <h3>Tips on getting good answers quickly</h3>
                    <p>Make sure your question has not been asked already</p>
                    <p>Keep your question short and to the point</p>
                    <p>Double-check grammar and spelling</p>
                </div>

                <div className='start_your_question'>
                    <input type="text" placeholder='Start your question with "What", "How", "Why", etc.'/>
                </div>

                <div className="line"></div>
                <div className="post_btn_holder">                   
                    <div className="add_question_btn">  
                        <button className='cancelBtn'>Cancle</button>
                        <button className='add_quest'>Add Question</button></div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default AddQuestion;