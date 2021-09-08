import React, { useState } from 'react';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { connect } from 'react-redux';
import { add, remove } from '../../store/actions/cart';
const Counter = ({item,addItem,removeItem,qty = 0}) => {

  const [count,setCount] = useState(qty);

  const inc = () => {
    setCount(prev => prev + 1)
    addItem(item)
  }

  const dec = () => {
    if(count > 0) {
      setCount(prev => prev - 1)
    }
    removeItem(item)
  }

  return (
    <div className='counter'>
      <button>
        <FaAngleLeft onClick={dec}/>
      </button>
      <p className='couter__count'>
        {count}
      </p>
      <button onClick={inc}>
        <FaAngleRight />
      </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(add(item)),
  removeItem: (item) => dispatch(remove(item))
})

export default connect(
  null,mapDispatchToProps
)(Counter);
