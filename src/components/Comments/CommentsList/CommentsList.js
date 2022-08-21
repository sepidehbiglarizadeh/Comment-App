import { useEffect, useState } from "react";
import getAllCommentsService from "../../../Services/getAllCommetnsService";
import Comment from "../Comment/Comment";
import styles from "./CommentsList.module.css"

const CommentsList = () => {
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await getAllCommentsService();
        setComments(data);
      } catch (err) {
        console.log("error");
        setError(true);
      }
    };
    getComments();
  }, []);

  const renderComments = () => {
    let renderValue = <p>Loading...</p>;

    if (error) {
      renderValue = <p>Fetching Data Failed</p>;
    }

    if (comments && !error) {
      renderValue = comments.map((c) => {
        return (
          <Comment key={c.id} name={c.name} email={c.email}/>
        );
      });
    }

    return renderValue;
  };

  return <section className={styles.commentsList}>{renderComments()}</section>;
};

export default CommentsList;
