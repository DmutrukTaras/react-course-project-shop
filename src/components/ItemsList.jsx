import { Item } from "./Item";

function ItemsList(props){
    const {items = [], addToBasket = Function.prototipe} = props

    return <div className="items">
        {items.length ? items.map(item => (
      <Item key={item.mainId} {...item} addToBasket={addToBasket}  />
    )): (<h4>Nothing found</h4>)}
    </div>
}

export {ItemsList};