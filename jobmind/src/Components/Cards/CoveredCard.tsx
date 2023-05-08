import React from 'react'
import { containerStyle } from '../../Presets/Bootstrap/DefaultStyles';

export default function CoveredCard() {
    return (
        <div className={containerStyle} style={{ background: "linear-gradient(45deg, rgb(44, 60, 148), rgb(44, 148, 123))" }}>
            <div className="row p-4">
                <div className="container text-center text-light">
                    <img className="img-fluid shadow" src={`${process.env.PUBLIC_URL}/images/Covered.png`} style={{ width: "20vh" }} alt="Covered logo" />
                    <div className="d-flex justify-content-center align-items-bottom">
                        <h5 className="my-1 display-5 fw-bold h-auto px-2 w-auto">Covered</h5>
                    </div>
                    <h5>AI Powered Cover Letter Generation</h5>
                    <p>Generate professional cover letter tailored to your needs in seconds.</p>
                    <hr></hr>
                    <p className="lead">
                        <a href="https://covered.jobmindai.xyz/" className='btn btn-primary btn-lg shadow p-3'>
                            Open Covered
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
