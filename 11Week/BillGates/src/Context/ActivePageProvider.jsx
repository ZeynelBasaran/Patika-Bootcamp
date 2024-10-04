import axios from "axios";
import { createContext, useState } from "react";
const AppContext = createContext();



function ActivePageProvider({ children }) {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [money, setMoney] = useState(10000000);



  const getData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      setData(response.data.products);
    } catch (err) {
      setError('Veri yüklenirken hata oluştu!');
      console.log(err)
    } finally {
      setLoading(false); // İstek tamamlandığında yükleme durumunu kapatıyoruz
    }
  };


console.log(basket)

  return (
    <AppContext.Provider value={{basket,setBasket,data,setData,getData,error,loading,money,setMoney }}>
      {children}
    </AppContext.Provider>
  );
}

export default ActivePageProvider; //Provider Compo exportu
export { AppContext }; //ContextExportu
