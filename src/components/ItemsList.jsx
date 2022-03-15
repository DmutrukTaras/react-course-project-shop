import {useContext} from "react"
import {ShopContext} from "../context"
import { Item } from "./Item";

function ItemsList(){
    const {items = []} = useContext(ShopContext)

    return <div className="items">
        {items.length ? items.map(item => (
      <Item key={item.mainId} {...item}/>
    )): (<h4>Nothing found</h4>)}
    </div>
}

export {ItemsList};