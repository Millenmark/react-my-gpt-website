import './BrandStyles.css'
import * as brands from './imports'
import React from 'react'


const Brand = () => {
  const brandNames = Object.keys(brands)

  return (
    <div className='gpt3__brand section__padding'>
      {
        brandNames.map((name, index) => (
          <div key={index}>
            <img src={brands[name]} alt="google" />
          </div>
        ))
      }
    </div>
  )
}

export default Brand