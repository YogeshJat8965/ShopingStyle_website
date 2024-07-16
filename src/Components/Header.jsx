import React from 'react';
import logo from '../images/logo.png';
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux';
import './Header.css';


export default function Header() {

    const {cart} = useSelector( (state) => state ); 


    return (

        <nav className='w-10/12 max-w-[1150px] flex  justify-between content-center my-3  relative' >

            
            
            <div className=' absolute px-1.5 right-[-8px] top-2 text-black text-sm bg-green-500 rounded-full cartTransition ' >{cart.length}</div>
                <div>
                    <img src={logo} className='w-40 h-15' ></img>
                </div>
            

            <div className=' flex gap-6 justify-center  items-center' >

                <NavLink to={'/'} >
                    <div className='text-white text-lg ' >Home</div>
                </NavLink>

                <NavLink to={'/cart'} >
                    <div>< FaShoppingCart color='white' size={25} /> </div>
                </NavLink>

            </div>

        </nav>

    );
}