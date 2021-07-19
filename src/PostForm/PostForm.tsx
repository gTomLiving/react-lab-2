import { ChangeEvent, FormEvent, useState } from "react";
import Post from "../InterfacePost/InterfacePost";
import './PostForm.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


interface Submit {
    onSubmit: (post: Post) => void
    onClose: () => void
}


function PostForm({onSubmit, onClose}: Submit) {
    
    // const[formData, setFormData] = useState({
    //     title: '',
    //     thought: ''
    // })

    const[title, setTitle] = useState('');
    const[thought, setThought] = useState('');




    // function handleChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    //     setFormData({
    //         title: e.target.value,
    //         thought: ''
    //     })
    // }
    // function handleChangeThought(e: ChangeEvent<HTMLInputElement>) {
    //     setFormData({
    //         title: '',
    //         thought: e.target.value
    //     })
    // }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        onSubmit({
            title,
            thought
        });
        setTitle('');
        setThought('');

        // setFormData({
        //     title: '',
        //     thought: ''
        // })
        

    }
    // div style={{ display: showInfo ? "block" : "none" }}>info</div>
    
    
    
    return(

        <div className="PostForm">
            <form className="FormBox" onSubmit={handleSubmit}>
                <div className="Close">
                    <ExitToAppIcon className="X" style={{color: "5D534A"}} type="button"  onClick={ onClose } />
                </div>
                <div className="FormContent">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} value={title}/>
                    <label htmlFor="thought">Thought</label>
                    <textarea className="Thought" rows={5}  name="thought" id="thought" onChange={(e) => setThought(e.target.value)} value={thought}/>
                    <button className="Submit" type="submit">Submit</button>
                </div>



            </form>


        </div>






    );
}


export default PostForm;