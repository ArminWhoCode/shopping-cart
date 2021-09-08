import React from 'react'

const Button = ({types,children,...otherProps}) => {
  const classList = types.map((item) => (`btn--${item}`)).join(' ');
  return (
    <button className={`btn ${classList}`} {...otherProps}>
      {children}
    </button>
  )
}

export default Button
