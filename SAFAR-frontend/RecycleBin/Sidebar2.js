import React, { useState } from 'react';
import '../Styles/Sidebar2.css';

function App() {
 const [sidebarOpen, setSidebarOpen] = useState(true);

 const handleSidebarClick = () => {
    setSidebarOpen(!sidebarOpen);
 };

 return (
    <div className="App">
      <header className="App-header">
        <h1>My App</h1>
      </header>
      <main className="App-main">
        <section className="sidebar-container">
          <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
            <h2>GUIDE</h2>
            <ul>
              <li>Maps</li>
              <li>Converters</li>
              <li>Translator</li>
              <li>Assistant</li>
            </ul>
          </div>
          <div className="main-content">
            <h2>Cards</h2>
            <div className="cards">
              <div className="card">Card 1</div>
              <div className="card">Card 2</div>
              <div className="card">Card 3</div>
            </div>
          </div>
        </section>
      </main>
      <footer className="App-footer">
        <button onClick={handleSidebarClick}>
          {sidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
        </button>
      </footer>
    </div>
 );
}

export default App;