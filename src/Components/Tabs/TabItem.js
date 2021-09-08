import React from 'react';
import {connect} from 'react-redux';
import Button from '../Button/Button';
import { add } from '../../store/actions/cart';

const TabItem = ({item,addItem}) => {

  return (
    <div className='tab__item'>
      <img src={item.image} alt={item.name} />
      <p className="tab__title">{item.name}</p>
      <div className="tab__price">
        <p>price :</p>
        <p>{item.price}$</p>
      </div>
      <Button types={['small','primary']} onClick={() => addItem(item)}>
        add
      </Button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(add(item))
})

export default connect(
  null,mapDispatchToProps
)(React.memo(TabItem))
