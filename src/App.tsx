import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Main } from "./pages/main";
import { Navbar } from './components/navbar/navbar';
import { Projects } from './pages/projects';
import { Error } from './pages/404';

function App() {

  return (
    <div>
      <Router>
            <Navbar/>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
      </Router>
    </div>
  )
}

export default App
