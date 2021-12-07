import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { GlobalContext } from '../Context/GlobalState';
import CartModalShoe from './CartModalShoe';

const CartModal = () => {
    const { shoesData, toggleShowCart, showCartModal } =
        React.useContext(GlobalContext);
    const shoesInCart = shoesData.filter((item) => item.inCart === true);
    return (
        <>
            {showCartModal && (
                <div className='cart-overlay'>
                    <div className='cart-modal'>
                        <div className='cart-header'>
                            <h1>Shopping Cart</h1>
                            <FontAwesomeIcon
                                icon={faTimes}
                                onClick={toggleShowCart}
                                className='cart-close-icon'
                            />
                        </div>
                        {shoesInCart.length > 0 ? (
                            <table className='cart-table' width='100%'>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {shoesInCart.map((shoe) => {
                                        return (
                                            <CartModalShoe
                                                key={shoe.id}
                                                shoe={shoe}
                                            />
                                        );
                                    })}
                                </tbody>
                            </table>
                        ) : (
                            <h2 className='cart-empty-msg'>No Items In Cart</h2>
                        )}
                        <div className='cart-footer'>
                            <h3>Cart Total</h3>
                            <h3>Number of items: 0</h3>
                            <h3>Total Price: $0</h3>
                        </div>
                        <button className='checkout-btn'>Checkout</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default CartModal;
