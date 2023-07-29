import QuoraNav from './QuoraNav';
import Blogs from './Blogs';
import Post from './Post';
import Advertisement from './Advertisement';

function QuoraHolderBlog(){
    return(
        <div>
            <QuoraNav/>
            <div className='blogs_divs_holder'>
                <div className="blogs_divs_parent">
                   <div className='blog_post_adt'>
                   <Blogs/>
                    <Post/>
                    <Advertisement/>
                   </div>
                </div>
            </div>         
        </div>
    )
}
export default QuoraHolderBlog;