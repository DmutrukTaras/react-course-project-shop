import {useContext} from "react"
import {ShopContext} from "../context"
import { BasketItem } from "./BasketItem";

function BasketList() {

    const {order = [], handleBasketShow} = useContext(ShopContext)

    const total = order.map((orderItem) => { return orderItem.quantity * orderItem.price }).reduce((sum, elem) => sum + elem, 0);

    return <div className="basket-list">
        <ul className="collection">
            <li className="collection-header blue-grey darken-2 white-text"><h4>Cart</h4></li>


            {order.length ? order.map(item => (
                <BasketItem key={item.id} {...item} />
            )) : (<li className="collection-item"><h4>Cart empty</h4></li>)}

            <li className="collection-footer blue-grey darken-2 white-text">Total: {total} USD
            <button className="secondary-content btn">Buy</button>
            </li>
            <span className="basket-close" onClick={handleBasketShow}><i className="material-icons">clear</i></span>    
        </ul>
    </div>
}

export { BasketList };