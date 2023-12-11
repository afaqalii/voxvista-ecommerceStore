import React from 'react'

const Card = ({card}) => {
  return (
    <div>
        <span></span>
        <img src={card?.img} alt={card?.title} />
        <div>
            <h1>{card?.title}</h1>
        </div>
    </div>
  )
}

export default Card