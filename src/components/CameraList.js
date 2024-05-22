import React, { useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const CameraList = ({ cameras, deleteCamera, editCamera }) => {
    const navigate = useNavigate();
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [cameraToDelete, setCameraToDelete] = useState(null);

    const handleAddClick = () => {
        navigate('/cameras/add');
    };

    const handleEditClick = (camera) => {
        editCamera(camera);
        navigate('/cameras/add');
    };

    const handleDeleteClick = (camera) => {
        setCameraToDelete(camera);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        if (cameraToDelete) {
            deleteCamera(cameraToDelete.id);
            setShowDeleteModal(false);
        }
    };

    return (
        <div className="container">
            <h3 className="my-3">Camera List</h3>
            <Button onClick={handleAddClick} className="mt-3">Add Camera</Button>

            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Site Id</th>
                        <th>Site Name</th>
                        <th>Number of Cameras</th>
                        <th>Cost per Camera</th>
                        <th>Total Cost</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cameras.length > 0 ? (
                        cameras.map((camera, index) => (
                            <tr key={index}>
                                <td>{camera.id}</td>
                                <td>{camera.siteName}</td>
                                <td>{camera.totalCameras}</td>
                                <td>${camera.cameraCost}</td>
                                <td>${camera.totalCameras * camera.cameraCost}</td>
                                <td>
                                    <Button onClick={() => handleEditClick(camera)}>Edit</Button>{' '}
                                    <Button onClick={() => handleDeleteClick(camera)}>Delete</Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No cameras found</td>
                        </tr>
                    )}
                </tbody>
            </Table>

            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Camera</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this camera?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
                    <Button variant="danger" onClick={confirmDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CameraList;
