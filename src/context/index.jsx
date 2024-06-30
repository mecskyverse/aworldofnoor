'use client'
import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export function UserProvider ({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  
  const updateUser = (newUser) => {
    setCurrentUser(newUser);
  };

  return (
    <UserContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  return useContext(UserContext);
};