import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import Tabs from './components/Tabs';
import Display from './components/Display';

function App() {

  const [tabName, setTabName] = useState({
    content: [
      "Tab 1", 
      "Tab 2", 
      "Tab 3"
    ],
    selectedTab: 0,
  });
  
  return (
    <div className="App container mt-4">
      <div className="row">
        <Tabs 
          tabName={tabName}
          setTabName={setTabName}
        />
      </div>
      <div className="row">
        <Display 
          tabName={tabName}
        />
      </div>
    </div>
  );
}

export default App;
