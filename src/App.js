import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FindCandidates from './pages/FindCandidates/FindCandidates'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="find-candidates"
            element={<FindCandidates />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
