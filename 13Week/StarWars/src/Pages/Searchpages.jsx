import { useContext } from "react";
import { starContext } from "../Context/StarContext";
import Cards from "../Components/Cards";



function Searchpages() {
  const {searchValue} =useContext(starContext) 
  return (
    <ul className='list'>
      {searchValue.map((item,idx)=>{
       return <Cards key={idx} item={item} />
      })}
     
    </ul>
  )
}

export default Searchpages;