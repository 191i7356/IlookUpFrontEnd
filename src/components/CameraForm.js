import React, { useContext, useEffect, useState } from 'react';
import SiteContext from './AppContext';

const CameraForm = ({ addCamera, editCamera, cameraToEdit }) => {
    const [formState, setFormState] = useState({
        id: '',
        siteName: '',
        totalCameras: '',
        cameraCost: ''
    });

    const {sites} = useContext(SiteContext);

    useEffect(() => {
        if (cameraToEdit) {
            setFormState(cameraToEdit);
        }
    }, [cameraToEdit]);

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cameraToEdit) {
            editCamera(formState);
        } else {
            addCamera(formState);
        }
        setFormState({
            id: '',
            siteName: '',
            totalCameras: '',
            cameraCost: ''
        });
    };

    return (
        <div className="container">
            <h3 className="my-3">{cameraToEdit ? 'Edit Camera' : 'Add New Camera'}</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID</label>
                    <input type="text" className="form-control" name="id" id="id" value={formState.id} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="siteName" className="form-label">Site Name</label>
                    <select className="form-control" name="siteName" id="siteName" value={formState.siteName} onChange={handleChange}>
                        <option value="">Select Site Name</option>
                        {sites.map((site) => (
                            <option key={site.id} value={site.name}>{site.name}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="totalCameras" className="form-label">Number of Cameras</label>
                    <input type="text" className="form-control" name="totalCameras" id="totalCameras" value={formState.totalCameras} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cameraCost" className="form-label">Cost Per Camera</label>
                    <input type="text" className="form-control" name="cameraCost" id="cameraCost" value={formState.cameraCost} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">{cameraToEdit ? "Update Camera" : "Add Camera"}</button>
            </form>
        </div>
    );
};

export default CameraForm;
