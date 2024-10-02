import { AppContext } from "../Context/ActivePageProvider";
import { useContext } from "react";

export default function Cards({ item }) {
  const { basket, setBasket } = useContext(AppContext);

  const addBasketİtem = () => {
    
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

    //setBasket((prev)=> prev.filter(items=> items.id==item.id))
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
