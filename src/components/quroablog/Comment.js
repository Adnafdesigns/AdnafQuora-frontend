import {useState} from 'react';

function Comment(){
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const onClickHandler = () =>{
        setComments ((comments) => [...comments, comment]);
    };
    const onChangeHandler = (e) =>{
        setComment(e.target.value);
    };
    return(
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
    )
}
export default Comment;