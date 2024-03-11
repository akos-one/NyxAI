import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing';
import RootLayout from './layouts/rootLayout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<RootLayout />}>
                  <Route index element={<Landing />} />

          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;