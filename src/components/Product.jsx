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
    <div className=' flex flex-col w-[250px]'>

        <div>
            <p className=' font-bold text-2xl'>{post.title}</p>
        </div>

        <div>
            <p>{post.description}</p>
        </div>

        <div>
            <img src={post.image} width={180} />
        </div>

        <div>
            <p className=' text-green-600 font-bold text-2xl'> Rs. {post.price}</p>
        </div>

        <div>
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

    <Toaster />
    </div>
)
}

export default Product
