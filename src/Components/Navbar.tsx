// import React from 'react'
import { Link, useLocation } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import { useShoppingCart } from "../Context/ShoppingCartContext";

const Navbar = () => {

  const {cartQuantity , setShowCart} = useShoppingCart() ;
  const location = useLocation()

  return (
    <div className="px-10 py-4 text-[24px] sticky top-0 z-10 bg-white shadow-lg flex justify-between items-center  ">
        <div className="flex gap-[20px]">
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/store'}>Store</Link>
        </div>
        {
          (location.pathname === "/store") && 
          <div onClick={() => { 
            setShowCart(true) 
          }} className="text-blue-500 cursor-pointer border-2 relative text-[24px] p-2 rounded-full border-blue-500">
            <FaShoppingCart  />
            <div className="absolute text-[10px]  p-1 bg-red-500  text-black px-2 rounded-full right-0 font-extrabold " >{cartQuantity}</div>
          </div>
        }
    </div>
  )
}

export default Navbar





