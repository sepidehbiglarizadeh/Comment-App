import styles from "./Comment.module.css"

const Comment = ({name,email}) => {
    return ( 
        <div>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
        </div>
     );
}
 
export default Comment;