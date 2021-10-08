import './HeaderCart.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';
import { NavLink, useRouteMatch, Route, Switch } from 'react-router-dom';
import Products from '../Products';
import React from 'react';
import Cart from '../../Cart';
import { CartState } from '../../../../components/Context/Context';

function HeaderCart() {

    let { path, url } = useRouteMatch();

    const {
        state: { cart },
        dispatch
    } = CartState()

    const { productDispatch } = CartState()

    function handleMouseEnter(e) {
        e.currentTarget.children[1].classList.add("cart__hover")
    }
    function handleMouseLeave(e) {
        e.currentTarget.children[1].classList.remove("cart__hover")
    }

    return (
        <div>
            <div className="header__cart">
                <div className="home__cart">
                    <NavLink exact to={`${url}`} activeClassName="active__cart" onClick={() => {
                        productDispatch({
                            type: "CLEAR_FILTERS",
                        })
                    }}>Shopping Cart</NavLink>
                </div>
                <div className="items__cart">
                    <ul>
                        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <NavLink to={`${url}/my-cart`} activeClassName="active__cart" className="item-header">
                                {cart.length}
                                <AiOutlineShoppingCart color="#fff" size="25px" />
                            </NavLink>
                            <div className="hide">
                                {cart.length > 0 ? (
                                    <>{
                                        cart.map((cart => {
                                            return (
                                                <div className="cart__hover--item" key={cart.id}>
                                                    <img src={cart.image} alt={cart.name} width="75px" height="75px"></img>
                                                    <span>{cart.name}</span>
                                                    <div className="cart__delete" onClick={() => {
                                                        dispatch({
                                                            type: "REMOVE_FROM_CART",
                                                            payload: cart,
                                                        })
                                                    }}><MdDeleteForever size="30px" />
                                                    </div>
                                                </div>
                                            )
                                        }))
                                    }
                                    </>
                                ) : (
                                    <span style={{ padding: 10, textAlign: 'center' }}>Cart is Empty!</span>
                                )}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <Switch>
                <Route exact path={path}>
                    <Products />
                </Route>
                <Route path={`${path}/:myCartId`}>
                    {<Cart />}
                </Route>
            </Switch>
        </div>
    );
}

export default HeaderCart;