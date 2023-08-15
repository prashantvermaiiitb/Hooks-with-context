import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
    users: [],
    setusers: () => {},
    selectedUser: null,
    setSelectedUser: () => { }
});

const UserContextProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(users => {
                if (users !== null) {
                    setUsers(users);
                }
            })
    }, []);
    const value = { users, selectedUser, setSelectedUser };
    console.log("🚀 ~ file: user.context.js:19 ~ UserContextProvider ~ users:", value);
    return (<UserContext.Provider value={value}>{children}</UserContext.Provider>);
}

export default UserContextProvider;