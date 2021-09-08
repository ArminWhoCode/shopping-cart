import React from 'react'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero__bg"></div>
      <h1 className="hero__title">Restaurant</h1>
      <div className="hero__sub">Fresh taste at a great price <br/> only for hungry people.</div>
      <Button types={['large','shadow']}>
        Get Started
      </Button>
    </section>
  )
}

export default Hero
