import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [sites, setSites] = useState([]);
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        fetchSites();
        fetchCustomers();
    }, []);

   const fetchCustomers =async () => {
    try{
     const response =  await axios.get('https://ilookup-latest.onrender.com/api/customers')
     setCustomers(response.data);

    }catch(error){
        console.error('Error fetching customers:', error);
    }
   };
   const fetchSites = async () => {
    try{
   const response =  await axios.get('https://ilookup-latest.onrender.com/api/sites')
    setSites(response.data);
    }catch(error){
        console.log("Error fetching sites : " , error)
    }
   }
    return (
        <AppContext.Provider value={{ sites, setSites, customers, setCustomers, fetchCustomers, fetchSites }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
