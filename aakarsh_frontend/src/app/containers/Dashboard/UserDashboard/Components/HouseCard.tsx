import React from 'react'

const HouseCard = ({houseCardImage,price,filters}:any) => {
  return (
    <a href='/properties' className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out" >

      <img className="w-full h-56 object-cover" src={houseCardImage?.thumbnail} alt="House" />

      <div className="px-6 py-4">

        <div className="font-bold text-xl mb-2">${price}</div>

        <div className="flex flex-wrap">
          {filters.map((filter:any, index:any) => (
            <span key={index} className="text-gray-600 text-sm mr-2 mb-2">
              {filter}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

export default HouseCard
