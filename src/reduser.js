export function reduser(state, {
    type,
    payload
}) {
    switch (type) {

        case 'SET_ITEM':
            return {
                ...state,
                items: payload || [],
                loading: false
            };

            case 'SET_LOADING':
                return {
                    ...state,
                    loading: payload
                };

            case 'CLOSE_ALERT':
                return {
                    ...state,
                    alertMsg: ''
                };
    
        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                order: state.order.filter(elem => elem.id !== payload.id)
            };

        case 'ADD_TO_BASKET': {
            let itemIndex = state.order.findIndex(order => order.id === payload.item.id);
            if (itemIndex < 0) {
                const newOrder = {
                    ...payload.item,
                    quantity: 1
                }

                return {
                    ...state,
                    order: [
                        ...state.order,
                        newOrder
                    ],
                    alertMsg: `"${payload.item.title}" is added to the cart`
                }
            } else {
                const newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1
                        }
                    } else {
                        return {
                            ...orderItem
                        };
                    }
                })
                return {
                    ...state,
                    order: newOrder,
                    alertMsg: `One more "${payload.item.title}" item added to cart`

                }
            }

        };

    case 'BASKET_SHOW':
        return {
            ...state,
            isBasketShow: !state.isBasketShow
        };

    case 'PLUS_BASKET_ITEM': {
        let itemIndex = state.order.findIndex(order => order.id === payload.id);
        const newOrder = state.order.map((orderItem, index) => {
            if (index === itemIndex) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity + 1
                }
            } else {
                return {
                    ...orderItem
                };
            }
        });
        return {
            ...state,
            order: newOrder
        };
    }

    case 'MINUS_BASKET_ITEM': {

        let itemIndex = state.order.findIndex(order => order.id === payload.id);
        let newOrder = state.order.map((orderItem, index) => {
            if (index === itemIndex && orderItem.quantity > 1) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity - 1
                }
            } else {
                return {
                    ...orderItem
                };
            }
        });
        if (state.order[itemIndex].quantity === 1) {
            newOrder = state.order.filter(elem => elem.id !== payload.id);
        }

        return {
            ...state,
            order: newOrder
        };
    }

    default:
        return state;
    }

}