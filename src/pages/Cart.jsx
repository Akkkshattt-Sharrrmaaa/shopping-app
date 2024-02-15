import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'

function Cart() {

    const {cart} = useSelector( (state)=>state )
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect( ()=>{

        setTotalAmount( cart.reduce( (acc ,item) => acc + item.price, 0 ) )

    }, [cart])

    return(
        <div>
            {
                cart.length > 0 ? (
                    <div>
                        {/* left section */}
                        <div>
                            {
                                cart.map( (post, index) => {
                                    return <CartItem key={post.id} post={post} index={index} />
                                })
                            }
                        </div>

                        {/* right section */}
                        <div>
                            {/* right-top */}
                            <div>
                                <div>Your Cart</div>
                                <div>Summary</div>
                                <p>Total Items : {cart.length}</p>
                            </div>
                            {/* right-bottom */}
                            <div>
                                <p>Total amount : ${totalAmount}</p>
                                <button> Checkout Now </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <p> Your Cart is Empty!</p>
                        <Link to="/">
                            <button>
                                Shop Now
                            </button>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default Cart
