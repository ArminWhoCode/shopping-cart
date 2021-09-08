import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import { category } from '../../data/constants';
import TabItem from './TabItem';

const TabList = ({foods}) => {

  const [activeCategory, setActiveCategory] = useState('all');
  const [flitredFoods, setFiltredFoods] = useState(foods);

  useEffect(() => {
    if (activeCategory) {
      const data = activeCategory === 'all'
        ? foods
        : foods.filter(food => food.category === activeCategory)
      setFiltredFoods(data)
    }
  }, [activeCategory,foods])

  return (
    <div className="food-list">
      <h3>Foods</h3>
      <div className="tab__category">
        {category.map((cat, index) => (
          <div
            className={activeCategory === cat ? 'category active' : 'category'}
            onClick={() => setActiveCategory(cat)}
            key={index}
          >
            {cat}
          </div>
        ))}
      </div>
      <div className="tab__list" id='menu'>
        {flitredFoods.map(food => (
          <TabItem key={food.id} item={food}/>
        ))}
      </div>
    </div>

  )
}

const mapStateToProps = (state) => ({
  foods : state.foods
})

export default connect(
  mapStateToProps
)(TabList);
