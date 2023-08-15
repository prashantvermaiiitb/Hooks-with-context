import { useContext } from "react";
import { BallTriangle } from "react-loader-spinner";
import { UserContext } from "../../context/user.context";
import User from "./User";
import { UserInformationContainer } from "./User.information.container";
import UserDetails from "./UserDetails";
const ulStyle = { listStyle: 'auto', textAlign: 'left' };

const UserInformation = () => {
    const { users, setSelectedUser } = useContext(UserContext);

    if (Array.isArray(users) && users.length === 0) {
        return (<BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
        />);
    }

    return (<UserInformationContainer>
        <ul style={ulStyle}>{
            users.map(
                user => <User key={user.id} user={user} setSelectedUser={setSelectedUser} />)}
        </ul>
        {<UserDetails />}
    </UserInformationContainer>);
}

export default UserInformation;