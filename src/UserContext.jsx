import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
        setLoading(true);
        const res = await fetch('https://randomuser.me/api/?page=${page}&results=10');
        const json = await res.json();
        setUsers(json.results);
        setLoading(false);
    }   
    fetchUsers();
  }, [page]);

  return (
    <UserContext.Provider value={{users, setPage, loading}}>
      {children}
    </UserContext.Provider>
  );
};
