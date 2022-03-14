import { useEffect } from 'react';

function Alert(props) {
    const { msg = '', closeAlert = Function.prototype } = props;

    useEffect(()=>{
        const timerId = setTimeout(closeAlert,3000);

        return () => {
            clearTimeout(timerId);
        }
        // eslint-disable-next-line
    },[msg])

    return (
        <div id='toast-container'>
            <div className='toast'><span>{msg}</span></div>
        </div>
    )
}



export { Alert };