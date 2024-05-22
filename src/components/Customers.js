import React, { useContext, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import CustomerForm from "./CustomerForm";
import CustomerList from "./CustomerList";
import AppContext from "./AppContext";
import axios from 'axios';

const Customers = () => {
    const { customers, setCustomers , fetchCustomers} = useContext(AppContext);
    const [customerToEdit, setCustomerToEdit] = useState(null);
    const navigate = useNavigate();

    const addCustomer = async (newCustomer) => {
        try {
            const response = await axios.post('https://ilookup-latest.onrender.com/api/customers', newCustomer);
        } catch (error) {
            console.error('Error adding Customer:', error);
        }
        setCustomerToEdit(null);
        navigate('/customers');
    };

    const editCustomer =async  (updatedCustomer) => {
        console.log("Editinf customer")
        try {
            const response = await axios.put(`https://ilookup-latest.onrender.com/api/customers/${updatedCustomer.id}`, updatedCustomer);
        } catch (error) {
            console.error('Error Updatig Customer:', error);
        }   
        setCustomerToEdit(null);
        navigate('/customers');
    };

    const deleteCustomer = async (customerId) => {
        try {
            const response = await axios.delete(`https://ilookup-latest.onrender.com/api/customers/${customerId}`);
         } catch (error) {
            console.error('Error Dleeting Customer:', error);
        }   
        setCustomerToEdit(null);
        setCustomers(fetchCustomers);
    };

    const handleAddButtonClick = () => {
        setCustomerToEdit(null);
        navigate('/customers/add');
    };

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <CustomerList
                        editCustomer={editCustomer}
                        deleteCustomer={deleteCustomer}
                        customerToEdit={setCustomerToEdit}
                        onAddButtonClick={handleAddButtonClick}
                    />
                }
            />
            <Route
                path="add"
                element={
                    <CustomerForm
                        addCustomer={addCustomer}
                        editCustomer={editCustomer}
                        customerToEdit={customerToEdit}
                    />
                }
            />
        </Routes>
    );
};

export default Customers;
