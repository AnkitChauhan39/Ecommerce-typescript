// import React from 'react'

// import { useState } from "react"
import { useShoppingCart } from "../Context/ShoppingCartContext"

type Cardprops = { 
    id : number , 
    name : string ,
    price : number , 
    imgUrl: string, 
}




const Card = ({id, name , price , imgUrl} : Cardprops) => {

    const {
        getItemQuantity, 
        increaseItemQuantity , 
        decreaseItemQuatity , 
        removeItemQuatity ,
    } = useShoppingCart() 

    const quantity = getItemQuantity(id) 

  return (
    <div className=" shadow-lg p-4 w-[400px] ">
       <div className="text-[24px]" >{name}</div>
       <div className="h-[200px]">
        <img src={imgUrl} className="object-cover w-full h-full overflow-hidden" alt="" />
       </div>
       <div className="flex justify-between mt-3">
        <div> Price : {price}$</div>
        {
            (quantity == 0 )&&(
                <div>
                    <button 
                        onClick={ () =>{ 
                            increaseItemQuantity(id) ; 
                        }} className="p-2 shadow-lg bg-blue-600">
                        Add to cart
                    </button>
                </div>
            )
        }
        {
            (quantity !== 0 ) && (
                <div className="flex flex-col justify-center gap-2">
                    <div className="flex gap-3 items-center" >
                        <button onClick={ () =>{  
                            decreaseItemQuatity(id) ; 
                        }} className="px-2 text-[18px] shadow-md bg-blue-700" >-</button>
                        <div>{quantity}</div>
                        <button onClick={ () =>{ 
                           increaseItemQuantity(id) ; 
                        }} className="px-2 text-[18px] shadow-md bg-blue-700" >+</button>
                    </div>
                    <button onClick={ () =>{ 
                            removeItemQuatity(id) ; 
                        }}className="p-2 shadow-lg bg-red-600">
                        Remove
                    </button>
                </div>
            )
        }
       </div>
    </div>
  )
}

export default Card
