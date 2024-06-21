import './App.css';
import Login from './login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './signup'
import CollapsibleSidebar from './Components/Dashboard'

function App() {
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path="/dashboard" element={<CollapsibleSidebar />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
