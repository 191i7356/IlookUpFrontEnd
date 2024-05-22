import React, { useEffect, useState }  from "react";
const CustomerForm = ({addCustomer, editCustomer, customerToEdit}) => {
    const [formState ,setFormState] = useState({
        id:'',
        name:'',
        email:'',
        phone:''
    });

    useEffect(() => {
        if (customerToEdit) {
            setFormState(customerToEdit);
        }
    }, [customerToEdit]);


    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        });

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (customerToEdit) {
            editCustomer(formState);
        } else {
            addCustomer(formState);
        }
        setFormState({
            id: '',
            name: '',
            email: '',
            phone: ''
        });
    }



              return (
                <div className="container">
                     <h3 className="my-3">{customerToEdit ? 'Edit Customer' : 'Add New Customer'}</h3>
                    <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" id="name" value={formState.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">Email</label>
                    <input type="text" className="form-control" name="email" id="email" value={formState.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" name="phone" id="phone" value={formState.phone} onChange={handleChange} />
                </div>

                    <button type="submit" className="btn btn-primary">{customerToEdit ? 'Update Customer' : 'Add Customer'}</button>
                    </form>

                </div>
              );

}
export default CustomerForm;