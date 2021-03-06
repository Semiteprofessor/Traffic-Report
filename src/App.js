import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
          <Home />
          <Create />
        </div>
    </div>
    </Router>
  );
}

export default App;
