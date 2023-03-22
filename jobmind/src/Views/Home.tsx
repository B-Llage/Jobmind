import React from 'react'
import { AiFillCaretDown } from "react-icons/ai";
import FadeIn from 'react-fade-in';
import CoveredCard from '../Components/Cards/CoveredCard';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <FadeIn transitionDuration={400} delay={200}>
                <div className='bg-black p-5 w-100 rounded border border-2 border-white mt-5'>
                    <h1 className='display-1 fw-bold text-white text-start'>
                        Elevate Your Business with AI Technology
                    </h1>
                </div>
                <div className='w-100 d-flex justify-content-center'>
                    <AiFillCaretDown className="text-white p-0 my-5 zoom" size={60} />
                </div>
            </FadeIn>


            <CoveredCard />

            <div className='w-100 bg-black border border-2 border-white rounded-3 p-5 mb-5'>
                <h1 className='display-5 fw-bold text-center text-white'>
                    Intergenie
                </h1>
                <h5 className='text-center text-white'>
                    Our next revolutionary tool
                </h5>
                <hr className='text-white'></hr>
                <div className='d-flex justify-content-center'>
                    <Link to={"/"} className='btn btn-dark border border-white border-2 shadow p-4 disabled'>Coming Soon</Link>
                </div>

            </div>
        </>
    )
}
