import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { selectCartItemsCount } from '../../store/selectors/cart.selector';
import { FaShoppingCart } from 'react-icons/fa';

const CartIcon = ({count}) => {
    return (
        <Link to='/cart' className='cart-icon' cart-length={count}>
            <div className="cart__length">
            </div>
            <FaShoppingCart />
        </Link>
    )
}

const mapStateToProps = (state) => ({
    count: selectCartItemsCount(state)
})

export default connect(mapStateToProps)(CartIcon)