import React from 'react'

const Card = props => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src="image1.png" alt="" />
      </div>

      <div className="card-body">
        <h4 className="card-title">Frontend</h4>
      </div>
    </div>
  )
}

export default Card