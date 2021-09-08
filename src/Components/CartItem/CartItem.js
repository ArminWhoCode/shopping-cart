import Counter from "../Counter/Counter";
import {FaTrashAlt} from 'react-icons/fa';
import { connect } from "react-redux";
import { deleteItem } from "../../store/actions/cart";

const CartItem = ({item,deleteItem}) => {
    return (
        <div className='cart__item'>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <Counter item = { item } qty={item.quantity}/>
            <button className='trash' onClick={() => deleteItem(item)}>
                <FaTrashAlt />
            </button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    deleteItem: (item) => dispatch(deleteItem(item))
})

export default connect(
    null,mapDispatchToProps
)(CartItem)
