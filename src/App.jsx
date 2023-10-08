import { Route, Routes, Navigate } from 'react-router-dom'
import StarshipList from './components/StarshipList'
import StarshipPage from './pages/StarshipPage'
import './App.css'


function App() {

  return (
    <div className="app-container">
      <header>
        <h1>STAR WARS STARSHIPS</h1>
      </header>
      <Routes>
        <Route path="/starships" element={<StarshipList />}/>
        <Route path='/starships/:starshipId' element={<StarshipPage />}/>
        <Route path="/" element={<Navigate to="/starships" />} />
      </Routes>
    </div>
  )
}

export default App

