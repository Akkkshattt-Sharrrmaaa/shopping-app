import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add , remove} from '../redux/slices/CartSlice'
import toast, { Toaster } from 'react-hot-toast'

function Product({post}) {

    const {cart} = useSelector( (state)=> state)
    const dispatch = useDispatch()

    function removeFromCart(){
        dispatch( remove(post.id) )
        toast.success("Removed from cart")

    }

    function addToCart(){
        dispatch( add(post) )
        toast.success("Added to cart")
    }

return (
    <div className=' flex flex-col justify-between gap-4 rounded-lg bg-white px-10 py-5 w-[320px] hover:scale-105 ease-in transition-all duration-300'>

        <div>
            <div className=' mb-3'>
                <p className=' font-semibold text-xl truncate'>{post.title}</p>
            </div>

            <div>
                <p>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
            </div>
        </div>

        <div>
            <img src={post.image}/>
        </div>

        <div className=' flex justify-between items-center'>
            <div>
                <p className=' text-green-600 font-bold text-xl'> ${post.price}</p>
            </div>

            <div className=' border-blue-950 border-2 rounded-xl px-3 py-1 hover:scale-105 transition-all ease-in duration-200 hover:text-white hover:bg-blue-900'>
                {
                    cart.some( (p)=> p.id == post.id) ? (
                        <button onClick={removeFromCart}>
                            Remove from Cart
                        </button>
                    ) : (
                        <button onClick={addToCart}>
                            Add to cart
                        </button>
                    )
                }
            </div>
        </div>

    <Toaster />
    </div>
)
}

export default Product
