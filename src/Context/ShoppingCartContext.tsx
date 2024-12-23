// import React from 'react'
import { createContext , ReactNode, useContext, useState } from "react"


type ShoppingCartProviderProps = {
    children : ReactNode 
}

type CartItem = { 
    id : number , 
    quantity : number 
}

type ShoppingCartContextProps = {
    getItemQuantity : (id:number) => number 
    increaseItemQuantity : (id:number ) => void  
    decreaseItemQuatity : (id: number ) => void 
    removeItemQuatity : (id:number) => void 
    cartItems : CartItem[]
    cartQuantity : number 
    showCart: boolean 
    setShowCart : (value:boolean) => void 
}



const ShoppingCartContext = createContext({} as ShoppingCartContextProps )  

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}



export function ShoppingCartProvider({children} : ShoppingCartProviderProps){

    const [cartItems , setcartItems] = useState<CartItem[]>([]) ;
    const [showCart , setShowCart] = useState(true)

    const getItemQuantity = (id : number) => {
        return cartItems.find( (item) => { return item.id == id} )?.quantity || 0  
    }

    const cartQuantity = cartItems.reduce( 
        (quantity,item) => item.quantity + quantity, 0  
    )

    const increaseItemQuantity = (id: number) => {
       
        const value = cartItems.find( (item) => {
            return item.id == id
        } )

        if(value == null ){
            const currItems = [...cartItems ,{id: id , quantity :1} ]
            console.log(currItems)
            setcartItems(currItems)
            console.log(cartItems)
        }else{
           
            setcartItems(
                cartItems.map( (item) => {
                    return item.id == id ? {...item , quantity : item.quantity +1 } : item 
                })
            )
        }
    }

    const decreaseItemQuatity = ( id : number ) => {
        const value = cartItems.find( (item) => { 
            return item.id == id 
        })

        if(value?.quantity == 1 ){
            setcartItems( 
                cartItems.filter( item => item.id != id ) 
            )
        }else{
            setcartItems( 
                cartItems.map( (item) => {
                    return item.id == id ? {...item, quantity: item.quantity-1}: item
                })
            )
        }
    }

    const removeItemQuatity = (id: number ) => { 
        setcartItems( 
            cartItems.filter( item => item.id != id ) 
        )
    }



    return <ShoppingCartContext.Provider value={{
        cartItems, 
        getItemQuantity, 
        increaseItemQuantity,
        decreaseItemQuatity,
        removeItemQuatity,
        cartQuantity,
        showCart,
        setShowCart
    }}>
        {children}
    </ShoppingCartContext.Provider>
}