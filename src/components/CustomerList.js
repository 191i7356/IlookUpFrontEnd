import React, { useContext, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AppContext from "./AppContext";

const CustomerList = ({ deleteCustomer, customerToEdit}) => {
    // eslint-disable-next-line no-unused-vars
    const { customers} = useContext(AppContext);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [customerDelete, setCustomerDelete] = useState(null);


    // useEffect(() => {
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    //     fetchCustomers();  // Fetch customers when the component mounts
    // }, []); // Empty dependency array means it runs only once when component mounts
    const navigate = useNavigate();
    const handleEditClick = (customer) => {
        console.log("Edit button clicked")
        customerToEdit(customer);
         navigate('/customers/add');
    }

    const handleDeleteClick = (customer) => {
        setCustomerDelete(customer);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        if (customerDelete) {
            deleteCustomer(customerDelete.id);
            setShowDeleteModal(false);
        }
    };

    const handleAddButtonClick = () => {
        navigate('/customers/add'); 
    };

      return (

        <div className="container">
            <h3 className="my-3">Customer List</h3>
            <Button onClick={handleAddButtonClick} className="mt-3">Add Customer</Button>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Customer Id</th>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Phone number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {customers.length > 0 ? (
customers.map((customer, index) => (
    <tr key={index}>
        <td>{customer.id}</td>
        <td>{customer.name}</td>
        <td>{customer.email}</td>
        <td>{customer.phone}</td>
        <td>
<Button onClick={ () => handleEditClick(customer)} > Edit</Button>{' '}
<Button onClick={ () => handleDeleteClick(customer)} > delete</Button>

        </td>
        </tr>



))) :(
    <tr>
        <td colSpan="6">No Customers found</td>
    </tr>
)}
                    </tbody>

            </Table>

<Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
<Modal.Header closeButton>
                    <Modal.Title>Delete Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this customer?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
                    <Button variant="danger" onClick={confirmDelete}>Delete</Button>
                </Modal.Footer>
                </Modal>
        </div>

      )


}

export default CustomerList;
