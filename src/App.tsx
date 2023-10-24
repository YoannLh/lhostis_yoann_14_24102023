import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { CreateEmployees } from './Pages/CreateEmployees.tsx'
import { ListOfEmployees } from './Pages/ListOfEmployees.tsx'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateEmployees />} />
          <Route path="listOfEmployees" element={<ListOfEmployees />} />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
