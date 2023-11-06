import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { store } from './utils/store'
import { Provider } from 'react-redux'

import { CreateEmployees } from './Pages/CreateEmployees.tsx'
import { ListOfEmployees } from './Pages/ListOfEmployees.tsx'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateEmployees />} />
          <Route path="listOfEmployees" element={<ListOfEmployees />} />
          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
