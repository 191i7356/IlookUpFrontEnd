import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CameraList from './CameraList';
import CameraForm from './CameraForm';

const Cameras = () => {
    const [cameras, setCameras] = useState([]);
    const [cameraToEdit, setCameraToEdit] = useState(null);

    const navigate = useNavigate();

    const addCamera = (newCamera) => {
        setCameras([...cameras, newCamera]);
        navigate('/cameras'); // Navigate back to the camera list after adding
    };

    const deleteCamera = (cameraId) => {
        const updatedCameras = cameras.filter((camera) => camera.id !== cameraId);
        setCameras(updatedCameras);
    };

    const editCamera = (editedCamera) => {
        const updatedCameras = cameras.map((camera) =>
            camera.id === editedCamera.id ? editedCamera : camera
        );
        setCameras(updatedCameras);
        setCameraToEdit(editedCamera);
        navigate('/cameras'); // Navigate back to the camera list after editing
    };

    const handleAddButtonClick = () => {
        setCameraToEdit(null);
        navigate('/cameras/add'); // Navigate to the camera form
    };

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <CameraList
                        cameras={cameras}
                        deleteCamera={deleteCamera}
                        editCamera={editCamera}
                        setCameraToEdit={setCameraToEdit}
                        onAddButtonClick={handleAddButtonClick}
                    />
                }
            />
            <Route
                path="add"
                element={
                    <CameraForm
                        addCamera={addCamera}
                        editCamera={editCamera}
                        cameraToEdit={cameraToEdit}
                    />
                }
            />
        </Routes>
    );
};

export default Cameras;
