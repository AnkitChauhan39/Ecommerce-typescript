// import React from 'react'
import { useShoppingCart } from "../Context/ShoppingCartContext";
import CartCards from "./CartCards";
import emptycart from "../../public/emptycart.png";

const Cart = () => {
  const { cartItems } = useShoppingCart();

  return (
    <div className="flex flex-col gap-5 ">
      {cartItems.length == 0 ? (
        <div className=" text-center  ">
          <img src={emptycart} className="mx-auto " alt="" />
          <div className="p-10 text-[24px] font-semibold">EMPTY CART</div>
        </div>
      ) : (
        <div className=" no-scrollbar overflow-y-auto max-h-[400px] shadow-2xl p-2 flex flex-col gap-4">
          {cartItems.map((item) => {
            return <CartCards {...item} />;
          })}
          <button className=" p-4 bg-blue-600 ">CheckOut</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
