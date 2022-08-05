import React from 'react'
import comming_soonvideo from "../../assets/videos/comming-soon.mp4"
const CommingSoon = () => {
    return (
        <div className="main">
            <div className="overlay">
                <video src={comming_soonvideo} autoPlay loop muted />

                <div className="content">

                    <h4 className='theraputics'>THERAPEUTICS</h4>
                    <h4 className='fairman'>A Fairman Company</h4>




                </div>

            </div>
        </div>
    )
}

export default CommingSoon