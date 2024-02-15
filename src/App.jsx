import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'


function App() {

    return(

        <div className=' w-screen min-h-screen overflow-hidden'>
            <div>
                <Navbar />
            </div>


            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/cart' element={ <Cart /> } />
                <Route path='*' element={ <NotFound />} />
            </Routes>
        </div>

    )
}

export default App
