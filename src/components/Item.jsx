import {useContext} from "react"
import {ShopContext} from "../context"


function Item(props) {
    const {
        mainId: id,
        displayName: title,
        displayDescription: description,
        displayType: type,
        price,
        displayAssets: image,
    } = props

    const {addToBasket} = useContext(ShopContext)

    return <div className="card" id={id}>
        <div className="card-image">
            <img src={image[0].full_background} alt={title} />
            {price.regularPrice === 0 ? (<h4 className="free red-text text-lighten-1">Free</h4>) : (<div></div>)}
        </div>
        <div className="card-content">
            <div className="card-type col s12">
                <i className="material-icons  blue-grey-text text-lighten-4">category</i>
                <span className="type">{type}</span>
            </div>
            <p className="card-title">{title}</p>
            <p>{description}</p>
        </div>
        <div className="card-action">
            <button className="btn" onClick={() => addToBasket({ 'id': id, 'title': title, 'price': price.regularPrice, 'image': image[0].full_background})} href="#!">Add</button>
            <span className="right price">{price.regularPrice} USD</span>
        </div>
    </div>

}

export { Item };