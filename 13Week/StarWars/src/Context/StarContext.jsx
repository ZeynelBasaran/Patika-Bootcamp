import axios from "axios";
import { createContext, useState } from "react";
const starContext = createContext();


function ActivePageProvider({ children }) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchValue, setSearchValue] = useState([])
    const [page, setPage] = useState(1)

    //Get Database
    const getData = async () => {
        try {
            const response = await axios.get(
                `https://swapi.dev/api/starships/?page=` + page
            );
            setData(response.data.results)
            setLoading(false)
        } catch (error) {
            console.log(error);
        } finally {
            //console.log("Data Yüklendi.");
        }
    };

   
    console.log(page)
    console.log(data)


    return (
        <starContext.Provider value={{ getData, data, setData, loading, setLoading, searchValue, setSearchValue, setPage, page }}>
            {children}
        </starContext.Provider>
    );
}

export default ActivePageProvider; //Provider Compo exportu
export { starContext }; //ContextExportu
