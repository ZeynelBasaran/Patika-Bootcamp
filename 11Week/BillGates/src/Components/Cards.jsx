import { AppContext } from "../Context/ActivePageProvider";
import { useContext } from "react";

export default function Cards({ item }) {
  const { basket, setBasket } = useContext(AppContext);

  const addBasketİtem = () => {


    const findItem = basket?.find((items) => items.id === item.id);
    
    //basket?.filter((items) => items.id !== item.id)
    setBasket((prev)=> prev.filter(items=> items.id==item.id))
    
    if (findItem) {
      
      setBasket(prev => [...prev, { ...findItem, adet:findItem.adet+1 }])
      /*
       return state.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
        */
    } else {
      setBasket(prev => [...prev, { ...item, adet: 1 }])
    }
  };

  /*
   
  
  
  const exists = state.find((item) => item.id === action.payload.id);
  if (exists) {
    return state.map((item) =>
      item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
    );

  */



  const removeBasketİtem = () => {
    console.log(item);

    setBasket((prev)=> prev.filter(items=> items.id==item.id))
    //console.log(basket)

    //setBasket((prev) => [...prev, item]);
  };

  return (
    <div className="card">
      <div>
        <img src={item.images[0]} alt="" />
      </div>
      <h5>$ {item.price} </h5>
      <h3>{item.title}</h3>
      <div className="btns">
        <button className="btn01" onClick={removeBasketİtem}>
          Sell
        </button>
        <input type="number" />
        <button className="btn03" onClick={addBasketİtem}>
          Buy
        </button>
      </div>
    </div>
  );
}
