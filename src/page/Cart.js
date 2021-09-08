import React from 'react';
import {connect} from 'react-redux';
import {selectCartItems,selectCartTotal} from '../store/selectors/cart.selector';
import CartItem from '../Components/CartItem/CartItem';

const Cart = ({cartItems,total}) => {

    return (
        <div className='cart'>
            <h1>Cart Items</h1>
            { cartItems.length > 0
                ? cartItems.map(item => (
                    <CartItem item={item} key={item.id} />
                ))
                : <span>Cart is empty!</span>
            }
            <p className="total">total: {total.toFixed(1)}$</p>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    total: selectCartTotal(state)
})

export default connect(
    mapStateToProps
)(Cart);