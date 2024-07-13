import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Main } from "./pages/main";
import { Navbar } from './components/navbar/navbar';
import { Projects } from './pages/projects';

function App() {

  return (
    <div id="appRoot">
      <Router>
        <div className="content">
          <div className="navbar">
            <Navbar/>
          </div>
        <div className="mainContent">
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
        </div>
        </div>
      </Router>
    </div>
  )
}

export default App
