import { AppContext } from "../Context/ActivePageProvider";
import { useContext } from "react";

function MoneyTab() {
    const { money, setMoney, basket } = useContext(AppContext);

    //console.log(formatCurrency(money))





    return (
        <div className="table">

            {basket.map((item, idx) => {
                return (
                    <ul key={idx}>
                        <li className="li1">{item.title}</li>
                        <li className="li2">x{item.adet}</li>
                        <li className="li3">{item.adet * item.price}</li>
                    </ul>
                );
            }
            )}
            <hr />
            <ul>
                <li className="li4">TOTAL</li>
                <li> </li>
                <li className="li3">{}</li>
            </ul>

        </div>
    )
}

export default MoneyTab