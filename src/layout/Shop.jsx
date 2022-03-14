import { useState, useEffect } from "react";
import { API_KEY, API_URL } from '../config'
import { Preloader } from "../components/Preloader";
import { ItemsList } from "../components/ItemsList";
import { Cart } from "../components/Cart";
import { BasketList } from "../components/BasketList";
import { Alert } from "../components/Alert";


function Shop() {

    const [items, setItems] = useState([]);
    const [order, setOrder] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isBasketShow, setIsBasketShow] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');
    const total = order.map((orderItem) => { return orderItem.quantity * orderItem.price }).reduce((sum, elem) => sum + elem, 0);

    const addToBasket = (item) => {
        let itemIndex = order.findIndex(order => order.id === item.id);
        if (itemIndex < 0) {
            const newOrder = {
                ...item,
                quantity: 1
            }
            setOrder([
                ...order,
                newOrder
            ]);
            setAlertMsg(`"${item.title}" is added to the cart`)
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return { ...orderItem };
                }
            })

            setOrder(newOrder);
            setAlertMsg(`One more "${item.title}" item added to cart`)
        }
    }

    const removeFromBasket = (itenId) => {
        const newOrder = order.filter(elem => elem.id !== itenId);
        setOrder(newOrder);

    }

    const plusBasketItem = (itenId) => {
        let itemIndex = order.findIndex(order => order.id === itenId);
        const newOrder = order.map((orderItem, index) => {
            if (index === itemIndex) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity + 1
                }
            } else {
                return { ...orderItem };
            }
        });
        setOrder(newOrder);
    }
    const minusBasketItem = (itenId) => {
        let itemIndex = order.findIndex(order => order.id === itenId);
        let newOrder = order.map((orderItem, index) => {
            if (index === itemIndex && orderItem.quantity > 1) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity - 1
                }
            }  else {
                return { ...orderItem };
            }
        });
        if(order[itemIndex].quantity===1){
            newOrder = order.filter(elem => elem.id !== itenId);
        }
        setOrder(newOrder);
    }


    const handleBasketShow = () => {
        setIsBasketShow(!isBasketShow)
    }

    const closeAlert = () =>{
        setAlertMsg('');
    }


    useEffect(function getItems() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        })
            .then((response) => response.json())
            .then((data) => {
                data.shop && setItems(data.shop);
                setLoading(false);
            }).catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);




    return <main className="container content">
        <Cart quantity={order.length} handleBasketShow={handleBasketShow} />

        {
            loading ? <Preloader /> : <ItemsList items={items} addToBasket={addToBasket} />
        }

        {
            isBasketShow && <BasketList
                order={order}
                total={total}
                handleBasketShow={handleBasketShow}
                removeFromBasket={removeFromBasket}
                plusBasketItem={plusBasketItem}
                minusBasketItem={minusBasketItem}
            />
        }
        {
            alertMsg && <Alert msg={alertMsg} closeAlert={closeAlert} />
        }
    </main>
}

export { Shop };