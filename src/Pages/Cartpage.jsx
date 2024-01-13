import { useDispatch, useSelector } from "react-redux";
import { CartSlice, remove } from "../redux/Slices/Cartslice";
import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";


export default function Cartpage() {

    const { cart } = useSelector((state) => state);
    console.log("cart is = ", cart);
    const [totalItems, settotalItems] = useState(0);

    useEffect(() => {
        settotalItems(cart.reduce((totalAmount, currentValue) => totalAmount + currentValue.price, 0));
    }, [cart])

    // function calculateTotalamount(cart) {
    //     cart.map((eachitem) => (settotalItems(totalItems += eachitem.price)));
    // }

    // useEffect(() => {
    //     calculateTotalamount();
    // }, [cart]);

    const dispatch = useDispatch();

    function deleteItem(itemId) {

        dispatch(remove(itemId));

    }

    return (

        <div className="w-full mt-[150px] flex justify-center items-center " >

            {
                cart.length > 0 ?
                    (<div className='relative w-full max-w-[1150px] flex flex-col items-start ' >
                        {cart.map((eachitem) =>
                        (<div className='w-1/2  flex gap-20 items-start justify-center mb-20 border-b-2 pb-8 border-black ' >

                            <div className="w-[30%] m-3 align-center flex justify-center  " >
                                <img src={eachitem.image} className='object-cover' ></img>
                            </div>

                            <div className='flex flex-col max-w-[300px] ' >
                                <div className=' flex flex-col items-start' >
                                    <p className='font-bold m-2 text-2xl ' >{eachitem.title}</p>
                                    <p className='m-2 text-md text-gray-600 ' >{eachitem.description.substr(0,60)+"...."}</p>
                                </div>
                                <div className='flex justify-between  items-center mt-[60px] pr-8 ' >
                                    <div className='text-green-600 font-bold text-2xl' >
                                        {`$ ${eachitem.price}`}
                                    </div>
                                    <div className=' bg-red-200 rounded-full px-4 p-3 text-black  '>
                                        <button onClick={() => deleteItem(eachitem.id)} ><MdDelete size={19}  ></MdDelete></button>
                                    </div>

                                </div>
                            </div>

                        </div>))}

                        <div className=' absolute top-[0%] right-[0%] ' >
                            <div className='  ' >
                                <p className=' text-green-700 text-2xl font-semibold ' >YOUR CART</p>
                                <h1 className=' text-green-700 font-semibold text-[70px] ' >SUMMARY</h1>
                                <p className=' text-2xl font-bold mt-10 ' >{`Total Items : ${cart.length}`}</p>
                            </div>
                            <div className=' mt-[480px] ' >
                                <span className=' text-2xl  ' >Total Amount: </span><span className='text-2xl font-bold' >{`$${Math.floor(totalItems)}`}</span>
                                <p className='border bg-green-600 text-white  text-2xl font-semibold text-center rounded-lg mt-4 py-2  ' ><button>Checkout Now</button></p>
                            </div>
                        </div>

                    </div>) :
                    (<div className='relative left-[0%] top-[300px] '>
                        <p className=' text-3xl font-bold mb-6 ' > Your cart is empty </p>
                        <NavLink to={'/'} >
                            <button className=' border bg-green-500 p-3 px-[74px] rounded-lg text-white text-2xl ' >
                                Shop Now
                            </button>
                        </NavLink>
                    </div>)
            }
        </div>

    );

}