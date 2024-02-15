import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {remove} from '../redux/slices/CartSlice'
import toast, { Toaster } from 'react-hot-toast';

function CartItem({post , index}) {

    const dispatch = useDispatch();

    function deleteFromCart(){
        dispatch( remove ( post.id ) );
        toast.success("Removed from cart")
    }

return (
    <div>
        <div>
            <div>
                <img src={post.image } />
            </div>
            <div>
                <h1>{post.title}</h1>
                <h2>{post.description} </h2>
                <div>
                    <p>{post.price}</p>
                    <div>
                        <button onClick={deleteFromCart}>
                            <MdDelete/>
                        </button>
                    </div>

                </div>
            </div>
        </div>

        <Toaster />
    </div>
)
}

export default CartItem