import { useEffect, useState } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { CartState } from '../../components/Context/Context'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const Cart = () => {

    const { state: { cart }, dispatch } = CartState()

    const [total, setTotal] = useState()

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0))
    }, [cart])

    const notifyDelete = (item) => {
        toast.error(`Delete ${item.name}`)
    }
    const notifyDefault = () => {
        toast.warning('Unavailable')
    }

    return <div className="home__mycart">
        <div className="productContainer">
            {cart.map((prod) => {
                return (
                    <div key={prod.id}>
                        <img src={prod.image} alt={prod.name} width="130px" height="130px" />
                        <span className="nameProduct">{prod.name}</span>
                        <div>
                            <button disabled={prod.qty === 1} onClick={() => {
                                dispatch({
                                    type: "CHANGE_CART_QTY",
                                    payload: {
                                        id: prod.id,
                                        qty: --prod.qty
                                    }
                                })
                            }}>Minus</button><span>{prod.qty}</span>
                            <button onClick={() => {
                                dispatch({
                                    type: "CHANGE_CART_QTY",
                                    payload: {
                                        id: prod.id,
                                        qty: ++prod.qty
                                    }
                                })
                            }}>Plus</button>
                        </div>
                        <span className="priceProduct">${prod.price.split('.')[0]}</span>

                        <div className="cart__delete" onClick={() => {
                            dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: prod,
                            })
                            notifyDelete(prod)
                        }}><MdDeleteForever size="30px" />
                        </div>
                    </div>
                )
            })
            }
        </div>
        {cart.length > 0 ? (
            <>
                <div className="filters__cart">
                    <div>
                        <span className="title">Subtotal ({cart.length}) items</span>
                        <span className="price">Total: ${total}</span>
                    </div>
                    <button type="button" disabled={cart.length === 0} onClick={() => {
                        notifyDefault()
                    }}>
                        Proceed to Checkout
                    </button>
                </div>
            </>
        ) : (
            <div className="empty">Cart is Empty!</div>
        )}
    </div>
}

export default Cart;