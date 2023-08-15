import { useContext } from "react";
import { CompanyContainer, EmailAndPhone, EmptyResponseContainer, UserDetailContainer, UserName, UserNameAndEmailContainer } from "./User.information.container";
import { UserContext } from "../../context/user.context";


const getUserDetails = ({ name, email, phone, company, website, address: { city, zipcode, street, suite } }) => {
    return (
        <UserDetailContainer >
            <UserNameAndEmailContainer>
                <UserName>{name}</UserName>
                <EmailAndPhone>
                    <span>{email}</span>
                    <span>{phone}</span>
                </EmailAndPhone>
            </UserNameAndEmailContainer>
            <CompanyContainer>
                <div>{company.name}</div>
                <div>{company.bs}</div>
                <div>{company.catchPhrase}</div>
                <div style={{ fontWeight: 'bold', textTransform: "lowercase" }}>{website}</div>
            </CompanyContainer>
            <hr />
            <div>
                <span>{`${suite}, `}</span>
                <span>{`${street}, `}</span>
                <span>{`${city}, `}</span>
                <span>{`ZIP - ${zipcode}`}</span>
            </div>
        </UserDetailContainer>
    );
};

const noUserSelected = () => {
    return (<EmptyResponseContainer>Please select User to see Details.</EmptyResponseContainer>)
}

const UserDetails = () => {
    const { selectedUser } = useContext(UserContext);

    return (
        selectedUser ? getUserDetails(selectedUser) : noUserSelected()
    );
}

export default UserDetails;