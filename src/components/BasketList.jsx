import { BasketItem } from "./BasketItem";

function BasketList(props) {
    const { order, total, handleBasketShow, removeFromBasket, plusBasketItem, minusBasketItem } = props;

    return <div className="basket-list">
        <ul className="collection">
            <li className="collection-header blue-grey darken-2 white-text"><h4>Cart</h4></li>


            {order.length ? order.map(item => (
                <BasketItem key={item.id} {...item} removeFromBasket={removeFromBasket} plusBasketItem={plusBasketItem} minusBasketItem={minusBasketItem} />
            )) : (<li className="collection-item"><h4>Cart empty</h4></li>)}

            <li className="collection-footer blue-grey darken-2 white-text">Total: {total} USD
            <button className="secondary-content btn">Buy</button>
            </li>
            <span className="basket-close" onClick={handleBasketShow}><i className="material-icons">clear</i></span>    
        </ul>
    </div>
}

export { BasketList };