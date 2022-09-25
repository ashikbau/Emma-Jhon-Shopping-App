import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let Shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price*product.quantity;
        Shipping = Shipping + product.shipping;
    }
const tax = parseFloat(( total*0.1).toFixed(2));
const grandTotal = total + Shipping + tax;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
                <p>Selected item:{quantity}</p>
                <p>Total Price :${total} </p>
                <p>Total Shipping:${Shipping} </p>
                <p>Tax: ${tax}</p>
                <h5>Grand Total:${grandTotal.toFixed(2)}</h5>

        </div>
    );
};

export default Cart;