import React from 'react'
import { loadFull } from 'tsparticles';
import Navbar from '../Components/UI/Navbar';
import { AiFillCaretDown } from "react-icons/ai";
import FadeIn from 'react-fade-in';
import type { Engine } from "tsparticles-engine";
import Particles from 'react-tsparticles';
import CoveredCard from '../Components/Cards/CoveredCard';
import { Link } from 'react-router-dom';
import { linksOptions } from '../Presets/Particles/Particles';

export default function Home() {
  
    const particlesInit = async (main: Engine) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    return (
        <div className="App" style={{}} >
            <Navbar brandName='JobMind AI' logo={`${process.env.PUBLIC_URL}/images/Jobmind.png`} />
            <div className='h-100 main-content container'>
                <div className='container px-5 pt-5 pb-4'>
                    <div className='mb-1 d-flex align-items-center main-banner'>
                        <FadeIn transitionDuration={400} delay={200}>
                            <div className='bg-black '>
                            <h1 className='display-1 fw-bold text-white text-start'>
                                Get the Edge in Your Job Search with AI Technology
                            </h1>
                            </div>
                            <div className='w-100 d-flex justify-content-center'>
                                <a className='text-center'>
                                    <AiFillCaretDown className="text-white p-0 mt-5 zoom" size={60} />
                                </a>
                            </div>
                        </FadeIn>
                    </div>
                    <div>
                    </div>
                </div>
                <CoveredCard />

                <div className='container w-auto mx-3 bg-light rounded-3 p-5 mb-5'>
                    <h1 className='display-5 fw-bold text-center'>
                        Intergenie
                    </h1>
                    <h1 className='text-center'>
                        Practice for your interview with the help of AI
                    </h1>
                    <hr></hr>
                    <div className='d-flex justify-content-center'>
                        <Link to={"/coverlettergenerator"} className='btn btn-primary shadow p-4 disabled'>Coming Soon</Link>
                    </div>

                </div>
            </div>
            <div>
                <Particles
                    height="100vh" width="100vw"
                    id="tsparticles" z-index="-10"
                    init={particlesInit}

                    options={linksOptions} />
            </div>
        </div>

  )
}
