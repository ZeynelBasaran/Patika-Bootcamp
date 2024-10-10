import './index.css'
import { useEffect, useContext } from 'react'
import Loadings from "./Components/Loadings"
import Navbar from "./Components/Navbar"
import {
  Routes, Route
} from "react-router-dom";
import Home from './Pages/Home'
import Searchpages from './Pages/Searchpages'
import { starContext } from './Context/StarContext'
import CardDetails from './Pages/CardDetails';


function App() {
  const { getData, loading, data } = useContext(starContext)

  useEffect(() => {
    getData()
  }, [])




  if (loading) {
    <Loadings />
  }


  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home data={data} />}></Route>
        <Route path={"/Searchpages"} element={<Searchpages />}></Route>
        <Route path={`/starships/:id`} element={<CardDetails />}></Route>
      </Routes>
    </>
  )
}

export default App
