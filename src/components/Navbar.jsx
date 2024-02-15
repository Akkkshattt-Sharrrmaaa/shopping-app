import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-removebg.png'

function Navbar() {
  return (
    <div className=' bg-[rgb(144,177,182)] '>
        <div className=' flex mx-auto justify-between items-center w-4/5'>

            <NavLink to='/'>
                <img width={100} src={logo} />
            </NavLink> 

            <div className=' flex gap-8 items-center text-2xl'>
                <NavLink to="/" >
                    <p className=' hover:scale-[1.2] font-bold  transition-all duration-200'>Home</p>
                </NavLink>

                <NavLink to="/cart">
                    <FaShoppingCart className=' hover:scale-[1.2] hover:font-bold  transition-all duration-200' />
                </NavLink>

            </div>
        </div>
    </div>
  )
}

export default Navbar
