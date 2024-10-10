import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { starContext } from "../Context/StarContext";



function CardDetails() {

  const {data} =useContext(starContext) 
  const { id } = useParams();
  return (
    <div className="carddetail">
      <ul>
        <li> <img src="https://www.bilimkurgukulubu.com/wp-content/uploads/2016/05/Resurgent-620x348.jpg" alt="" /> </li>
        <li><strong>Name:</strong> {data[id].name}</li>
        <li><strong>Model:</strong>{data[id].model}</li>
        <li><strong>Passengers:</strong> {data[id].passengers}</li>
        <li><strong>Max Atmosphering Speed:</strong> {data[id].max_atmosphering_speed}</li>
        <li><strong>Manufacturer:</strong> {data[id].manufacturer}</li>
        <li><strong>Crew:</strong> {data[id].crew}</li>
        <li><strong>Capacity:</strong> {data[id].cargo_capacity}</li>
      </ul>
    </div>
  )
}

export default CardDetails


/*
 useEffect(() => {
   
  }, []);

const getDetails = async () => {
    try {
        const response = await axios.get(
            `https://swapi.dev/api/starships/`+id
        );
        setFetchData(response.data)
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Data Yüklendi.");
    }
};
*/
