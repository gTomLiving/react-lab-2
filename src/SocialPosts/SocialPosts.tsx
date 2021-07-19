import React, { useState } from "react";
import PostForm from "../PostForm/PostForm";
import PostInList from "../PostInList/PostInList";
import ReactModal from "react-modal";
import Post from "../InterfacePost/InterfacePost";
import './SocialPosts.css';







function SocialPosts () {
    
    const[posts, setPosts] = useState<Post[]>([
        {
            title: 'Idea number 1',
            thought: 'this is something I have to say'
        }
    ]);
    const [form, setForm] = useState(false);
    
    

    function handleOpenForm() {
        setForm(true);
    }

    function handleFormClose() {
        setForm(false)
    }


    function handleAdd(post: Post) {
        setPosts(prevPosts => [
            ...prevPosts,
            post
        ])
        setForm(false);
    }
    function handleDelete(index: number) {
        setPosts(prevPosts => [
            ...prevPosts.slice(0, index),
            ...prevPosts.slice(index+1)
        ])
    }
    
    return(
        <div className="SocialPosts">
            <section className="MainBox">
                <div className="Top"> 
                <h1 className="Heading">My Thoughts</h1>
                <button className="ThoughtBtn" onClick={handleOpenForm}>New Thought</button>
                </div>
                <ReactModal className="Modal" isOpen={form}>
                    <PostForm onSubmit={handleAdd} onClose={handleFormClose}/>

                </ReactModal>
            
            
            
                <table>
                    
                        {posts.map((post, index) => 
                            <PostInList
                            key={`${post.title}- ${index}`}
                            post={post}
                            onDelete={() => handleDelete(index)}
                        />
                    )}
                  

                </table>
            </section>

        </div>



    );
}




export default SocialPosts;