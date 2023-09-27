import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
const UserContext = createContext();
const url = "http://localhost:8080";

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    usedStorage: 0,
    maxStorage: 0,
  });
  const updateUsedStorage = (sizeToAdd) => {
    setUser((prevUser) => ({
      ...prevUser,
      usedStorage: prevUser.usedStorage + sizeToAdd,
    }));
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${url}/user/details`);
        const userdata = res.data.user;
        setUser(userdata);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, updateUsedStorage }}>
      {children}
    </UserContext.Provider>
  );
};
