import { useContext } from "react";
import { UserCommentLink, UserContainer } from "./User.styled.component";
import { UserContext } from "../../context/user.context";

const rightArrow = {
    width: 0,
    height: 0,
    borderTop: '60px solid transparent',
    borderBottom: '60px solid transparent',
    borderRight: '60px solid green'
}

const User = ({ user, setSelectedUser }) => {
    const { name } = user;
    const { selectedUser } = useContext(UserContext);
    const isUserSelected = selectedUser && selectedUser.id && selectedUser.id === user.id;

    return (<UserContainer>
        <UserCommentLink style={isUserSelected ? { backgroundColor:'#d5ddaf'} : {}}  onClick={e => setSelectedUser(user)}>{name}</UserCommentLink>
    </UserContainer>);
}
export default User;