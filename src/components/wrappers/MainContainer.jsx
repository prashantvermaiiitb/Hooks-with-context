import CommentList from "../comment/CommentList";
import UserInformation from "../user/User.information";
import { MainContainerDiv } from "./main.container.styled.component";

const MainContainer = (props) => {
    return (<MainContainerDiv>
        <UserInformation />
        <CommentList />
    </MainContainerDiv>);
}

export default MainContainer;