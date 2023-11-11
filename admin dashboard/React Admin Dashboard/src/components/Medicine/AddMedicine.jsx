import React, { useState } from 'react';
import './addmedicine.css'

const AddMedicineForm = () => {
  const [medicineName, setMedicineName] = useState('');
  const [packing, setPacking] = useState('');
  const [genericName, setGenericName] = useState('');
  const [suppliersName, setSuppliersName] = useState('');
  const [showSupplierSuggestions, setShowSupplierSuggestions] = useState(false);

  const handleSupplierInputChange = (event) => {
    const value = event.target.value;
    setSuppliersName(value);
    // Add logic for showing supplier suggestions based on the input value
    setShowSupplierSuggestions(true);
  };

  const handleAddMedicineClick = () => {
    // Add logic for handling the "ADD" button click event
    // You can access the form values using the state variables (medicineName, packing, genericName, suppliersName)
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-8 form-group">
          <label className="font-weight-bold" htmlFor="medicine_name">Medicine Name :</label>
          <input
            type="text"
            className="form-control"
            id="medicine_name"
            placeholder="Medicine Name"
            onBlur={(e) => setMedicineName(e.target.value)}
          />
          <code className="text-danger small font-weight-bold float-right" style={{ display: 'none' }}></code>
        </div>
        <div className="col col-md-4 form-group">
          <label className="font-weight-bold" htmlFor="packing">Packing :</label>
          <input
            type="text"
            className="form-control"
            id="packing"
            placeholder="Packing e.g. 10 TAB / 100 ML"
            onBlur={(e) => setPacking(e.target.value)}
          />
          <code className="text-danger small font-weight-bold float-right" style={{ display: 'none' }}></code>
        </div>
      </div>

      <div className="row">
        <div className="col col-md-12 form-group">
          <label className="font-weight-bold" htmlFor="generic_name">Generic Name :</label>
          <input
            type="text"
            className="form-control"
            id="generic_name"
            placeholder="Generic Name"
            onBlur={(e) => setGenericName(e.target.value)}
          />
          <code className="text-danger small font-weight-bold float-right" style={{ display: 'none' }}></code>
        </div>
      </div>

      <div className="row">
        <div className="col col-md-12 form-group">
          <label className="font-weight-bold" htmlFor="suppliers_name">Supplier :</label>
          <input
            id="suppliers_name"
            type="text"
            className="form-control"
            placeholder="Supplier Name"
            name="suppliers_name"
            value={suppliersName}
            onChange={handleSupplierInputChange}
          />
          <code className="text-danger small font-weight-bold float-right" style={{ display: 'none' }}></code>
          {showSupplierSuggestions && (
            <div className="list-group position-fixed" style={{ zIndex: 1, width: '35.80%', overflow: 'auto', maxHeight: '200px' }}>
              {/* Render supplier suggestions here */}
            </div>
          )}
        </div>
      </div>

      <div className="row">
        <div className="col col-md-5 font-weight-bold" style={{ color: 'green', cursor: 'pointer' }} onClick={() => setShowSupplierSuggestions(true)}>
          <i className="fa fa-plus"></i>Add New Supplier
        </div>
      </div>
      <hr />

      <div className="row">
        <div className="form-group m-auto">
          <button className="btn btn-primary form-control" onClick={handleAddMedicineClick}>ADD</button>
        </div>
      </div>

      <div id="medicine_acknowledgement" className="col-md-12 h5 text-success font-weight-bold text-center" style={{ fontFamily: 'sans-serif' }}></div>
    </div>
  );
};

export default AddMedicineForm;
