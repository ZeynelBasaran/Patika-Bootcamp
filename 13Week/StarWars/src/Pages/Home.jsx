import { useContext, useEffect } from "react"
import Cards from "../Components/Cards"
import { starContext } from '../Context/StarContext'
import { Link } from "react-router-dom"
import axios from "axios"






function Home() {
  const { data, setPage, page, setData } = useContext(starContext)

  const pagesFunc = () => {
    setPage(prev => prev + 1)
  }

  useEffect(() => {
    addData()
  }, [page])

  const addData = async () => {
    try {
      const response = await axios.get(
        `https://swapi.dev/api/starships/?page=` + page
      );
      setData((prev) => [...prev, ...response.data.results])
    } catch (error) {
      console.log(error);
    } finally {
      //console.log("Data Yüklendi.");
    }
  };

  





  return (
    <ul className='list'>
      {data?.map((item, idx) => {
        return <Link key={idx} to={`/starships/${idx}`}>
          <Cards item={item} />
        </Link>
      })}
      <div>
        {page<4 && <button onClick={pagesFunc}>Daha fazla yükle</button>}
       
      </div>
    </ul>

  )
}

export default Home
