// src/components/StepContent.js
import React from 'react';

const StepContent = ({ step }) => {
  return (
    <div className="step-content">
      <h2>{step.title}</h2>
      <p>{step.description}</p>
      {step.fields.map((field, index) => (
        <div key={index} className="form-field">
          <label>{field.type}</label>
          <input type="text" placeholder={`Enter ${field.type.toLowerCase()}`} />
        </div>
      ))}
    </div>
  );
};

export default StepContent;
