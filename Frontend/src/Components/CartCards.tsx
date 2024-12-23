// import React from 'react'
import { useShoppingCart } from "../Context/ShoppingCartContext";
import storeItems from "../Data/items.json";

type cartitem = {
  id: number;
  quantity: number;
};

const CartCards = ({ id, quantity }: cartitem) => {
  const curritem = storeItems.find((item) => item.id == id)
  const { 
    increaseItemQuantity , 
    decreaseItemQuatity , 
    removeItemQuatity 
  } = useShoppingCart() 

  return (
    <div className="h-[200px] w-[full] shadow-lg flex p-4 gap-3 justify-between " >
        <img src={curritem?.imgUrl} className="object-cover  w-[200px] h-full overflow-hidden" alt="" />
        <div className="flex flex-col justify-center items-center" >
            <div>Name : {curritem?.name}</div>
            <div>Price : {curritem?.price}$</div>
            <div>Quantity :  {quantity}</div>
        </div>
        <div className=" flex flex-col gap-2" >
            <div className="flex gap-2 justify-center items-center " >
                <div onClick={ () => {
                    decreaseItemQuatity(id) 
                }} className="p-2 bg-blue-500" >-</div>
                <div>{quantity}</div>
                <div onClick={() => {
                    increaseItemQuantity(id) 
                }} className="p-2 bg-blue-500" >+</div>
            </div>
            <button onClick={() => {
                removeItemQuatity(id)
            }} className="px-4 py-2 bg-red-500" >
                Remove
            </button>
            <div>
                Total : {quantity * (curritem?.price||0) }$
            </div>
        </div>
    </div>
  );
};

export default CartCards;
