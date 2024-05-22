import React, { useContext, useEffect, useState }  from "react";
import AppContext from "./AppContext";
const SiteForm = ({addSites, editSites, editToSite}) => {
    const { customers } = useContext(AppContext);

    const [formState, setFormState] = useState({
        id:'',
        name:'',
        customerName:'',
        address:''
    });

    useEffect(() => {
        if (editToSite) {
            setFormState(editToSite);
        }
    }, [editToSite]);

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (editToSite) {
            editSites(formState);
        } else {
            addSites(formState);
        }
        setFormState({
            id: '',
            name: '',
            customerName: '',
            address: ''
        });
    }

return (


    <div className="container">
    <h3 className="my-3">{editToSite ? 'Edit Site' : 'Add New Site'}</h3>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="id" className="form-label">ID</label>
            <input type="text" className="form-control" name="id" id="id" value={formState.id} onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Site Name</label>
            <input type="text" className="form-control" name="name" id="name" value={formState.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label htmlFor="customerName" className="form-label">Customer Name</label>
            <select className="form-control" name="customerName" id="customerName" value={formState.siteName} onChange={handleChange}>
                        <option value="">Select Customer</option>
                        {customers.map((customer) => (
                            <option key={customer.id} value={customer.name}>{customer.name}</option>
                        ))}
                    </select>
        </div>
        <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input type="text" className="form-control" name="address" id="address" value={formState.address} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">{editToSite ? "Update Site" : "Add Site"}</button>
    </form>
</div>
)


}
export default SiteForm;
