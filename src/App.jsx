import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="app-container">
      {/* Target routing sub-components will inject inside this Outlet wrapper */}
      <Outlet />
    </div>
  );
};

export default App;