// src/components/AddFieldModal.js
import React from 'react';
import './AddFieldModal.css';

const AddFieldModal = ({ addField, closeModal }) => {
  const fieldTypes = ["Multiple Choice", "Short Text", "Email", "Dropdown", "Phone Number", "Section", "Contact Information", "Legal"];

  return (
    <div className="modal-background">
      <div className="modal-container">
        <h3>Add Field</h3>
        <ul className="field-list">
          {fieldTypes.map((type, index) => (
            <li key={index} onClick={() => addField(type)}>{type}</li>
          ))}
        </ul>
        <button className="close-modal" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default AddFieldModal;
