import { randomColor } from "../../utils/randomColorGenerator";
import { CommentContainer, EmailContainer, PostHeading } from "./comment.styled.component";

const Comment = ({ comment }) => {
    const { id, postId, name, body, email } = comment;
    const bgColor = randomColor();
    return (<CommentContainer bgcolor={bgColor}>
        <PostHeading><span>Post-{id}</span></PostHeading>
        <h1>{name}</h1>
        <p>{body}</p>
        <EmailContainer><h4>{email}</h4></EmailContainer>
    </CommentContainer>);
}

export default Comment;