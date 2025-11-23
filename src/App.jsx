import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DynamicDirectory from './pages/DynamicDirectory';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/*" element={<DynamicDirectory />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
