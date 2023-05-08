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
                        Elevate Your Career with AI Technology
                    </h1>
                    <div className='d-flex justify-content-start mt-4'>
                        <a href="https://www.producthunt.com/posts/jobmind-ai?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-jobmind&#0045;ai"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=393236&theme=light" alt="JobMind&#0032;AI - Elevate&#0032;your&#0032;career&#0032;with&#0032;AI&#0032;technology | Product Hunt" width="250" height="54" /></a>
                    </div>
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
