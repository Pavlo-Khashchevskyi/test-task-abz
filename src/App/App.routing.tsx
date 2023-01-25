import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// Pages
import HomePage from 'pages/Home';

const AppRouting:React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRouting;
