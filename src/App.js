import React, { useContext, useEffect, useState } from "react";
import UserContext from "./context/user";

function App() {
  // KODUNUZ BURAYA GELECEK
  return (
    <div className="m-4">
      <h1 className="m-2 font-bold text-2xl mb-5">User List</h1>
      <UserList />
    </div>
  );
}

const UserList = () => {
  // KODUNUZ BURAYA GELECEK
  const { userState, setUserState } = useContext(UserContext);
  console.log(userState);

  useEffect(()=>{

    const toggleStatus = () => {
      const keys = Object.keys(userState);
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      const value = userState[randomKey];
      // console.log(randomKey);

      setUserState(pre => ({
        ...pre,
        [randomKey]: !value,
      }))
    }
    const interval = setInterval(()=> {
      toggleStatus();
    }, 2000)

    return () => {
      clearInterval(interval);
    }
  })

  return (
    <>
      <div>
        {Object.entries(userState).map(([userName, isOnline], index) => (

          <div key={index} className="p-2 m-2 bg-gray-100 rounded-md w-[150px] flex gap-2 items-center shadow-sm">
            <p>{isOnline ? "🟢" : "🔴"}</p>
            <div>
              <p className=" font-semibold">{userName}</p>
              <div className=" text-sm font-light">{isOnline ? (<p className=" text-green-500">Online</p>) : (<p className="text-red-500">Offline</p>)}</div>
              
            </div>
          </div>

         
        ))}
      </div>
    </>
  );
};

export default App;
