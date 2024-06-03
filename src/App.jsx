import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import TheamContext from './context/TheamContext'

function App() {

  return (
    <TheamContext>
    <Header />
    <Outlet />
    <Footer />
    </TheamContext>
  )
}

export default App
