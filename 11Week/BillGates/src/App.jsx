import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { AppContext } from "./Context/ActivePageProvider";
import İmage1 from "../public/1.webp";
import Cards from "./Components/Cards";
import AlertMessage from "./Components/AlertMessage";

export default function App() {
  const { data, getData, error, loading } =
    useContext(AppContext);
  useEffect(() => {
    getData();
  }, []);

  


  if (loading) return <AlertMessage type={"info"} message={"Yükleniyor"} />;
  if (error) return <AlertMessage type={"info"} message={"Fetching hatası"}/>;
  
  return (
    <>
      <main >
        <img src={İmage1} alt="" />
        <h1>Spend Bill Gates Money</h1>
      </main>
      <div className="container">
        {data.map((item,idx) => (

          <Cards key={`${item}${idx}`} item={item} />

        ))}
      </div>
    </>
  );
}
