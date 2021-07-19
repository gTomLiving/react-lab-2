
import { Delete } from "@material-ui/icons";
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { useState } from "react";
import Post from "../InterfacePost/InterfacePost";
import './PostInList.css';



interface Props {
    post : Post,
    onDelete: () => void, 
    // onVoteUp: () => void,
    // onVoteDown: () => void
}



function PostInList({post, onDelete}: Props) {

    const[up, setUp] = useState(0);
    const[down, setDown] = useState(0);
    
    
    function handleUp() {
        setUp(up + 1); 
    }
    function handleDown() {
        setDown(down + 1); 
    }
    
    return(
        <tbody className="PostInList">

            <div className="TableSection">

            
            <tr>
                <th><h3>{post.title}</h3></th>
            </tr>
            <tr className="PostLine"> 
                <td>
            {post.thought} 
                </td>
                <td>
            
            <span className="Votes">{up}</span><ThumbUpIcon className="ThumbUp" style={{fill: "#d7ecd9"}} type="button" onClick={handleUp}/>
            <span className="Votes">{down}</span><ThumbDownIcon className="ThumbDown" style={{fill: "#f5d5cb"}} type="button" onClick={handleDown}/>
            <Delete
            type="button" 
            onClick={onDelete}/> 
            </td>
            
            
            </tr>
            </div>
        </tbody>







       
    
    );
}




export default PostInList;