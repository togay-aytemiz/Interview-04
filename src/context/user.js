import { createContext, useState } from "react";

const UserContext = createContext();

const AppProvider = ({children}) => {


    const [userState, setUserState] = useState({
        Namık: true,
        Eda: true,
        Suzan: true,
        Engin: true,
        Samet: true
    })



    const valueToShare = {
        userState,
        setUserState
      }

    return (
        <UserContext.Provider value={valueToShare}>{children}</UserContext.Provider>
    )

}


export { AppProvider };
export default UserContext;