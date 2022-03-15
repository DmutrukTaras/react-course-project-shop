import {useContext} from "react"
import {ShopContext} from "../context"
import { useEffect } from 'react';

function Alert() {

    const {alertMsg, closeAlert} = useContext(ShopContext)

    useEffect(()=>{
        const timerId = setTimeout(closeAlert,3000);

        return () => {
            clearTimeout(timerId);
        }
        // eslint-disable-next-line
    },[alertMsg])

    return (
        <div id='toast-container'>
            <div className='toast'><span>{alertMsg}</span></div>
        </div>
    )
}



export { Alert };