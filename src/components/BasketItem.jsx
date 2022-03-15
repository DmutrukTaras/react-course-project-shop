import {useContext} from "react"
import {ShopContext} from "../context"

function BasketItem(props) {

    const {removeFromBasket, plusBasketItem, minusBasketItem} = useContext(ShopContext)

    const { id, title, price, image, quantity } = props

    return <div className="basket-item hoverable row">
        <li className="collection-item avatar">
            <div className="col s4">
                <img src={image} alt={title} className="circle" />
                <span className="title">{title}</span>
                <p>
                    <span className="basket-item-price">Count ({quantity})  =  {price * quantity} USD</span>
                </p>
            </div>
            <div className="col s8">
                <span className="basket-item-minus"><i className="material-icons blue-grey-text text-darken-4" onClick={()=>minusBasketItem(id)}>indeterminate_check_box</i></span>
                <span className="basket-item-quantity"> {quantity} </span>
                <span className="basket-item-plus"><i className="material-icons blue-grey-text text-darken-4" onClick={()=>plusBasketItem(id)}>add_box</i></span>
            </div>

            <span className="secondary-content" onClick={()=>{removeFromBasket(id)}}><i className="material-icons basket-delete">clear</i></span>
        </li>
    </div>
}

export { BasketItem };