import { Route, Routes } from 'react-router-dom'
import StarshipList from './components/StarshipList'
import StarshipPage from './pages/StarshipPage'
import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>STAR WARS STARSHIPS</h1>
      </header>
      <Routes>
        <Route path="/starships" element={<StarshipList />}/>
        <Route path='/starships/:starshipId' element={<StarshipPage />}/>
      </Routes>
    </>
  )
}

export default App

