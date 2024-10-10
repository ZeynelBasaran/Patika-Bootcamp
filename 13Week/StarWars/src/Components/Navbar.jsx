import Button from '@mui/material/Button';
import axios from 'axios';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { starContext } from '../Context/StarContext';

function Navbar() {
    const {searchValue,setSearchValue} = useContext(starContext)

    const [searchBtn, setSearchBtn] = useState("")
    

    const inputValue = (e) => {
        setSearchBtn(e.target.value)
    }

    const sendToSearch = async () => {

        try {
            const response = await axios.get(
                `https://swapi.dev/api/starships/?search=${searchBtn}`
            );
            setSearchValue(response.data.results
            )
            console.log(searchValue)
            
        } catch (error) {
            console.log(error);
        } finally {
            console.log("Data Yüklendi.");
        }
    };



    return (
        <nav>
            <div>
                <Link to={"/"} className='home-link'>Home</Link>
            </div>
            <div className='search-box'>
                <input type="text" className='input-box' placeholder='Name/Model' onChange={(e) => { inputValue(e) }} />

                <Link to={"/Searchpages"}>
                <Button variant="outlined" color='black' style={{ cursor: "pointer" }} onClick={sendToSearch}>
                    Search
                </Button>
                </Link>
                
            </div>
        </nav>


    )
}

export default Navbar