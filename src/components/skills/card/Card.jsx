import React from 'react'
import './Card.scss'

const Card = ({ title, image, description }) => {
  return (
    <div className="card">
        <div className="cardImages">
          {image.map(imagePath => {
              return <img src={imagePath} alt="" />
            })
          }
        </div>
        <h3>
            {title}
        </h3>
        <p>
            {description}
        </p>
    </div>
  )
}

export default Card;