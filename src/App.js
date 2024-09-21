// src/App.js
import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import StepContent from './components/StepContent';
import AddFieldModal from './components/AddFieldModal';

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([
    { title: "Welcome screen", description: "This is a description of the form", fields: [] },
    { title: "Enter your name", description: "Please provide your name", fields: [] },
    { title: "Enter your email", description: "Please provide your email", fields: [] },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const addField = (fieldType) => {
    const updatedSteps = [...steps];
    updatedSteps[currentStep].fields.push({ type: fieldType, value: "" });
    setSteps(updatedSteps);
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      <Sidebar steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <StepContent step={steps[currentStep]} />
      <button className="add-field-button" onClick={() => setIsModalOpen(true)}>
        + Add Field
      </button>
      {isModalOpen && <AddFieldModal addField={addField} closeModal={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default App;
