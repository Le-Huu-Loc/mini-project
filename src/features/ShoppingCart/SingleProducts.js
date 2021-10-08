import { CartState } from '../../components/Context/Context';
import Rating from './Rating';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()
const SingleProducts = ({ product }) => {

    const { state: { cart }, dispatch } = CartState()


    const notifySucces = (item) => {
        toast.success(`Add ${item.name}`)
    }
    const notifyDelete = (item) => {
        toast.error(`Delete ${item.name}`)
    }

    return (
        <div className="products">
            <div className="products__card">
                <img src={product.image} alt={product.name} width="240px" height="180"></img>
                <div className="card__body">
                    <span className="card__body--title">{product.name}</span>
                    <div className="card__body--subtitle">
                        <span>${product.price.split(".")[0]}</span>
                        {product.fastDelivery ? (
                            <div>Fast Delivery</div>
                        ) : (
                            <div>4 days delivery</div>
                        )}
                        <Rating rating={product.ratings} />
                        {cart.some(p => p.id === product.id) ? (
                            <button style={{ background: "red" }} onClick={() => {
                                dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: product,
                                })
                                notifyDelete(product)
                            }}>Remove from Cart</button>
                        ) : (
                            <button style={{ background: "#5600ff" }} onClick={() => {
                                dispatch({
                                    type: "ADD_TO_CART",
                                    payload: product,
                                })
                                notifySucces(product)
                            }} disabled={!product.isStock}>{!product.isStock ? "Out to Stock" : "Add to Cart"}</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProducts;