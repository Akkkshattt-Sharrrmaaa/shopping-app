import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import Spinner from '../components/spinner/Spinner'
import Product from '../components/Product'

function Home() {

    const API_URL = `https://fakestoreapi.com/products`;

    const [ loading , setLoading ] = useState(false);
    const [ posts , setPosts ] = useState([]);

    async function fetchData(){

        setLoading(true);
        try{

            const {data} = await axios.get(API_URL);
            console.log(data);
            setPosts(data);

        }catch(error){

            setPosts([]);
            console.log("api call fat gayi")
            toast.error("Data fetch failed")
        }
        setLoading(false);

    }

    useEffect(()=>{
        fetchData();
    },[])

return (
        <div className=' w-full h-full'>

            {
                loading ? ( <Spinner /> ) : (

                    posts.length > 0 ? (
                        <div className=' flex flex-wrap'>
                            {
                                posts.map( (post) => {
                                    return ( <Product post={post} key={post.id} /> )
                                })
                            }
                        </div>

                    ) : (
                        <p> No Products Available Currently</p>
                    )
                )
            }

            <Toaster />
        </div>
    )
}

export default Home
