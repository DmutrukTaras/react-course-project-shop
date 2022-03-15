import { useEffect, useContext } from "react";
import { API_KEY, API_URL } from '../config'

import {ShopContext} from "../context"

import { Preloader } from "../components/Preloader";
import { ItemsList } from "../components/ItemsList";
import { Cart } from "../components/Cart";
import { BasketList } from "../components/BasketList";
import { Alert } from "../components/Alert";


function Shop() {
    const {loading, order, isBasketShow, alertMsg, setItems, setLoading} = useContext(ShopContext);

    useEffect(function getItems() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        })
            .then((response) => response.json())
            .then((data) => {
                data.shop && setItems(data.shop);
            }).catch((err) => {
                console.log(err);
                setLoading(false);
            });
            
        // eslint-disable-next-line
    }, []);


    return <main className="container content">
        <Cart quantity={order.length} />

        {
            loading ? <Preloader /> : <ItemsList />
        }

        {
            isBasketShow && <BasketList />
        }

        {
            alertMsg && <Alert />
        }
    </main>
}

export { Shop };