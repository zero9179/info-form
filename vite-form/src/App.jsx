
import { Outlet, Route, Router, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Layout from './components/Layout'
import About from './pages/About'
import SongAddForm from './pages/SongAddForm'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='home' element={<Home/>} />
          <Route path='about' element={<About />} />
          <Route path='addsong' element={<SongAddForm/>} ></Route>
        </Route>
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
      </Routes>
    </>
  )
}

export default App
