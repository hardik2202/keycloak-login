import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import KeycloakProvider from './KeycloakProvider';
import HomePage from './HomePage';
import CallbackPage from './CallbackPage';

function App() {
  return (
    <KeycloakProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/callback" element={<CallbackPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </KeycloakProvider>
  );
}

export default App;
