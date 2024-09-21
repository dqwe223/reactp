// src/components/Sidebar.js
import React from 'react';

const Sidebar = ({ steps, currentStep, setCurrentStep }) => {
  return (
    <div className="sidebar">
      <h3>Steps</h3>
      <ul>
        {steps.map((step, index) => (
          <li
            key={index}
            className={index === currentStep ? "active-step" : ""}
            onClick={() => setCurrentStep(index)}
          >
            {step.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
