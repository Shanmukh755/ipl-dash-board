import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route path="/team-matches/:id" Component={TeamMatches}/>
      <Route Component={NotFound} />
    </Routes>
  )
}

export default App
