import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

export const ShopContext =createContext();

const ShopContextProvider=(props)=>{

    const [search,setSearch]=useState('');
    const [ShowSearch , setShowSearch]=useState(false);
    const [cartItem, setCartItem]=useState({})
    const currency='₹';
    const delivery_fee=20
    
    const addToCart= async (itemId,size)=>{

        if(!size){
            toast.error("Please select product size")
            return
        }

        let cartData=structuredClone(cartItem);
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1;
            }
            else{
                cartData[itemId][size]=1;
            }
        }
        else{
            cartData[itemId]={}
            cartData[itemId][size]=1;
        }
        setCartItem(cartData);
    }

    //change the cart value
    const getCartCount=()=>{
        let totalcount=0;
        for(const items in cartItem){           //loop on items
            for(const item in cartItem[items]){       //loop on product size
                try{
                    if(cartItem[items][item] > 0){
                        totalcount+=cartItem[items][item];
                    }
                }
                catch(error){

                }
               
            }    
        }
        return totalcount
    }


    //************* Updating the Quantity of products  *******************/
    const updateQuantity = async (itemId,size,quantity)=>{
        let cartData=structuredClone(cartItem);
        cartData[itemId][size]=quantity;
        
        setCartItem(cartData);
    }
    
    
    //************* Finding Total Amout of All the selected product in the Cart *******************/
    const getCartAmount = ()=>{
         let totalAmount=0;
         for(const items in cartItem){
             let ItemInfo=products.find((product)=>product._id === items);
             for(const item in cartItem[items]){
                 try {
                     if(cartItem[items][item] > 0){
                         totalAmount+=ItemInfo.price * cartItem[items][item];
                     }
                 } catch (error) {
                    
                 }
             }
         }
        return totalAmount
    }
    
    // Context Provider Values which help in reuse of these values in different component
    const value={   
        products , currency , delivery_fee,
        search,setSearch,ShowSearch,setShowSearch,
        cartItem,addToCart ,getCartCount , getCartAmount,updateQuantity
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
