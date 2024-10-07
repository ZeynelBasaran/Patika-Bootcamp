
import axios from 'axios'
import './App.css'
import { useState } from 'react'

function App() {
  const [data,setData] = useState("")

  axios.get("https://swapi.dev/api/starships/").then(res => console.log(res))
  axios.get("https://swapi.dev/api/starships/").then(res => setData(res.data.results
  ))



  return (
    <>
  <div>
  Star Wars Ships
  </div>


<ul>
  
</ul>
    

   
    </>
  )
}

export default App
