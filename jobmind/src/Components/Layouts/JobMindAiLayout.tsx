import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles';
import Navbar from '../UI/Navbar'
import type { Engine } from "tsparticles-engine";
import { linksOptions } from '../../Presets/Particles/Particles';
import { Outlet } from 'react-router-dom';

export default function JobMindAiLayout() {
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
                <Outlet />
            </div>
            <Particles
                height="100vh" width="100vw"
                id="tsparticles" z-index="-10"
                init={particlesInit}
                options={linksOptions} />
        </div>


    )
}
