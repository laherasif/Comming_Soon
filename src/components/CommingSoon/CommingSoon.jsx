import React from 'react'
import comming_soonvideo from "../../assets/videos/comming-soon.mp4"
const CommingSoon = () => {
    return (
        <div className="main">
            <div className="overlay">
                <video src={comming_soonvideo} autoPlay loop muted />

                <div className="content   " style={{ display: "flex" }}>

                    <div className='col-12 main_wrapper '>
                        <div className='white_background'>
                            <div className='row'>
                                <div className='col-12 black_big'>
                                    COMING
                                </div>
                            </div>
                        </div>
                    </div>


                </div>



            </div>
        </div>
    )
}

export default CommingSoon