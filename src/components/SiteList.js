import React, {  useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const SiteList = ({sites , editSites, deleteSites}) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [siteToDelete, setSiteToDelete] = useState(null);
    const navigate = useNavigate();
    const handleEditClick = (site) => {
        editSites(site);
        navigate('/sites/add');
   } 

   const handleDeleteClick = (site) => {
         setSiteToDelete(site);
       setShowDeleteModal(true);
   };

   const confirmDelete = () => {
       if (siteToDelete) {
           deleteSites(siteToDelete.id);
           setShowDeleteModal(false);
       }
   };

   const handleAddButtonClick = () => {
       navigate('/sites/add'); 
   };

    return(
        <div className="container">
       <h3 className="my-3">Sites List</h3>
       <Button onClick={handleAddButtonClick} className="mt-3">Add Site</Button>

       <Table bordered hover>
                <thead>
                    <tr>
                        <th>Site Id</th>
                        <th>Site Name</th>
                        <th>Customer Name</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sites.length > 0 ? (
                        sites.map((site, index) => (
                            <tr key={index}>
                                <td>{site.id}</td>
                                <td>{site.name}</td>
                                <td>{site.customerName}</td>
                                <td>${site.address}</td>
                                <td>
                                    <Button onClick={() => handleEditClick(site)}>Edit</Button>{' '}
                                    <Button onClick={() => handleDeleteClick(site)}>Delete</Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No Sites found</td>
                        </tr>
                    )}
                </tbody>
            </Table>

            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Site</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this Site?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
                    <Button variant="danger" onClick={confirmDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>


        </div>


    );

}

export default SiteList;