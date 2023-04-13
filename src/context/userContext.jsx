import { createContext, useContext, useState } from 'react'

const UserContext = createContext(null)

export const UserProvider = ({ children }) =>{

    const [user, setUser] = useState(null)

    return (
        <UserContext.Provider value={{user, setUserHandler: (newUser) => setUser(newUser)}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext) 