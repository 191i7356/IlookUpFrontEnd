import React, { useContext, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import SiteForm from "./SiteForm";
import SiteList from "./SiteList";
import AppContext from "./AppContext";

const Sites = () => {
    const { sites, setSites } = useContext(AppContext);
    const [siteToEdit, setSiteToEdit] = useState(null);
    const navigate = useNavigate();

    const addSite = (newSite) => {
        setSites((prevSites) => [...prevSites, newSite]);
        setSiteToEdit(null);
        navigate('/sites');
    };

    const editSite = (updatedSite) => {
        setSites((prevSites) =>
            prevSites.map((site) =>
                site.id === updatedSite.id ? updatedSite : site
            )
        );
        setSiteToEdit(updatedSite);
        navigate('/sites');
    };

    const deleteSite = (siteId) => {
        setSites((prevSites) =>
            prevSites.filter((site) => site.id !== siteId)
        );
    };

    const handleAddButtonClick = () => {
        setSiteToEdit(null);
        navigate('/sites/add');
    };

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <SiteList
                        sites={sites}
                        editSite={editSite}
                        deleteSite={deleteSite}
                        onAddButtonClick={handleAddButtonClick}
                    />
                }
            />
            <Route
                path="add"
                element={
                    <SiteForm
                        addSite={addSite}
                        editSite={editSite}
                        siteToEdit={siteToEdit}
                    />
                }
            />
        </Routes>
    );
};

export default Sites;
