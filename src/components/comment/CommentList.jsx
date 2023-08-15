import { Suspense, useContext } from "react";
import { UserContext } from "../../context/user.context";
import useCommentHook from "../../hooks/useCommentHook";
import Comment from "./Comment";
import { CommentListContainer } from "./comment.styled.component";
import Scrollbars from "react-custom-scrollbars";
import { BallTriangle } from "react-loader-spinner";

const CommentList = (props) => {
    const { selectedUser } = useContext(UserContext);
    const { comments } = useCommentHook(selectedUser?.id);

    return (
        <Scrollbars style={{ height: '100vh' }}>
            <CommentListContainer>
                <Suspense fallback={<BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#4fa94d"
                    ariaLabel="ball-triangle-loading"
                    wrapperClass={{}}
                    wrapperStyle=""
                    visible={true}
                />}>
                    {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
                </Suspense>
            </CommentListContainer>
        </Scrollbars>
    );
}

export default CommentList;