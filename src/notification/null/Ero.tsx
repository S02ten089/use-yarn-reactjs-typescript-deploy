"use client"
import React, { useState } from 'react';
import './ero.module.scss';

interface ErrorMessageProps {
  type: 'error' | 'warning';
  message: string;
  description?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ type, message, description }) => {
  return (
    <div className={`alert ${type}`}>
      <strong>{message}</strong>
      {description && <p>{description}</p>}
      <button className="close-btn">&times;</button>
    </div>
  );
};

const Ero: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [warning, setWarning] = useState<string | null>(null);

  const triggerError = () => {
    setError("An error has occurred.");
  };

  const triggerWarning = () => {
    setWarning("This is a warning message.");
  };

  return (
    <div className="container">
      <h1>Display Error/Warning Messages</h1>
      
      {/* Trigger Buttons */}
      <button onClick={triggerError}>Trigger Error</button>
      <button onClick={triggerWarning}>Trigger Warning</button>

      {/* Display Error Message */}
      {error && (
        <ErrorMessage type="error" message={error} description="Something went wrong!" />
      )}

      {/* Display Warning Message */}
      {warning && (
        <ErrorMessage type="warning" message={warning} description="Please be careful!" />
      )}
    </div>
  );
};

export default Ero;
