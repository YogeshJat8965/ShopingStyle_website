import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/Cartslice";
import { toast } from "react-hot-toast";

export default function Card({ singleData }) {

    const {cart} = useSelector( (state) => state );
    console.log("cart valu check =",cart);
    const dispatch = useDispatch();

    function removeFromCart(){

        dispatch( remove( singleData.id ) );
        toast.error("Item Removed");

    }

    function addToCart(){

        dispatch( add(singleData) );
        toast.success("Item added to Cart");

    }

    // const [selected,setselected] = useState(false);

    return (

        <div className=" flex flex-col max-w-[262px] mx-1 border border-gray-400 rounded-2xl h-[380px] p-2 mb-6 hover:scale-110 transition duration-300 ease-in hover:shadow-[0_0_100px_-30px_black] " >

            <h1 className=" font-bold text-center m-2 " >{singleData.title.substr(0, 14) + "...."}</h1>

            <p className=" text-sm text-gray-600 m-2 text-center " >{singleData.description.substr(0, 50) + "...."}</p>

            <div className=" m-3 align-center flex justify-center" >
                <img src={singleData.image} className=" h-[180px] " ></img>
            </div>

            <div className=" flex justify-between mt-6 items-center mx-2 " >
                <p className=" text-green-500 font-bold" >{`$${singleData.price}`}</p>

                {
                    cart.some( (p) => p.id === singleData.id) ?
                        ((<button onClick={removeFromCart} className=" border-2 border-black rounded-3xl py-1.5 px-2.5 font-medium text-xs  hover:bg-gray-700
                        hover:text-white transition duration-300 ease-in " >REMOVE ITEM</button>)) :
                        ((<button onClick={addToCart} className=" border-2 border-black rounded-3xl py-1.5 px-2.5 font-medium text-xs  hover:bg-gray-700
                        hover:text-white transition duration-300 ease-in" >ADD TO CART</button>)) 
                }

                {/* {selected ?
                    (<button>Remove Item</button>) :
                    (<button>Add tO Cart</button>)} */}
            </div>

        </div>

    );

}