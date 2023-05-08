import React from 'react'

export default function About() {
    return (
        <>
            <div className='border border-2 rounded-3 bg-black p-5'>
                <h1 className='text-white display-1 text-center mb-3'>Experience the Next Generation of Business Tools</h1>
                <h5 className='text-white text-center mb-3'>JobMind AI is dedicated to revolutionizing businesses and careers through the power of AI.</h5>
                <p className='text-white text-center mb-3'>At JobMind AI, we are committed to creating AI business tools that enable our users to optimize their operations, increase efficiency, and drive growth. </p>
                <p className='text-white fst-italic text-center'>Together, we can transform the way you work.</p>
                <div className='d-flex justify-content-center mb-3'>
                    <a href="mailto:hector.maganahdez@gmail.com" className="btn btn-dark">Contact Us</a>
                </div>
            </div>
        </>
    )
}
