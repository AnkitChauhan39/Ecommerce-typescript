// import React from 'react'
import storeItems from "../Data/items.json";
import Card from "../Components/Card";
import { useShoppingCart } from "../Context/ShoppingCartContext";
import { ImCross } from "react-icons/im";
import Cart from "../Components/Cart";

const Store = () => {
  const { showCart, setShowCart } = useShoppingCart();

  return (
    <div className="">
      <div
        className={`flex absolute gap-10 flex-wrap justify-evenly ${
          showCart ? " filter blur-lg " : " block"
        }`}
      >
        {storeItems.map((item) => {
          return <Card {...item} />;
        })}
      </div>
      {showCart && (
        <div className="absolute top-[150px] rounded-lg p-[40px] h-[500px] w-[800px]  shadow-2xl right-[400px] bg-white flex flex-col gap-3 ">
          <Cart/>
          
          <ImCross
            onClick={() => {
              setShowCart(false);
            }}
            className=" absolute cursor-pointer right-4 top-4 text-[18px]"
          />
        </div>
      )}
    </div>
  );
};

export default Store;
