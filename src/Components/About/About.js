import React from 'react'
import Button from '../Button/Button';

import aboutImg from '../../assets/images/about.jpg'

const About = () => {
  return (
    <section className='about'>
      <h2 className="about__title">About Us</h2>
      <div className="about__content">
        <img src={aboutImg} alt="About Us" className="about__image" />
        <div className="about__text">
          <h3 className="about__header">Our Story</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, atque? Sunt accusantium rerum nisi itaque necessitatibus, autem ipsa provident dolores facilis excepturi quis, hic magnam maiores. Quia vero eveniet ullam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, atque? Sunt accusantium rerum nisi itaque necessitatibus, autem ipsa provident dolores facilis excepturi quis, hic magnam maiores. Quia vero eveniet ullam?
          </p>
          <Button types={['small', 'secondary']}>
            More
          </Button>
        </div>
      </div>
    </section>
  )
}

export default About
