import React from 'react'
import comming_soonvideo from "../../assets/videos/comming-soon.mp4"
import Countdown from '../CountDownTimer/CountDownTimer'
import TopForm from '../TopForm/TopForm'
import sabadelLogo from "../../assets/images/sabadel.png"
import worldBankLogo from "../../assets/images/wbbbb.png"
const CommingSoon = () => {
    return (
        <div className="main">
            <div className="overlay">
                <video src={comming_soonvideo} autoPlay loop muted />
                <div className="content">
                    <div className='col-12 main_wrapper '>
                        <div className='white_background'>
                            <div className='row'>
                                <div className='col-12 black_big'>COMING</div>
                                <div className='col-12 red_big'>THERAPEUTIC</div>
                                <div className='col-12 black_small'>Something Awesome is Coming</div>
                                <div className='col-12 red_small'> The life saved may be your own</div>
                                <div className='col-12 black_paragraph '>
                                    <p>
                                        The University Of Chicago Medical Center (UChicago Medicine)
                                        conducted the study of a similar plant base therapeutic usage in
                                        patients is significantly correlated with a reduction in COVID-19
                                        positivity and considered to be one Of the most positive Inhibits
                                        SARS-CoV-2 that's far examined my scientific inquisitors. The
                                        product our platform focuses on is specifically cultivated wellness
                                        and has a compounding biological effect on the aforementioned
                                        discovery, truth through science. Please join us an alert allow us to
                                        alert you the mornent The Centers for Disease Control (CDC) and
                                        The European Center for Disease Prevention and Control releases
                                        further information in this area in their quest to save lives and heal
                                        families devastated by the hurnan health consequences and
                                        mental health issues exacerbated by this recent pandemic

                                    </p>
                                </div>
                                <div className='col-12'>

                                    <Countdown date="September 30 2022 12:44 GMT+2" />

                                </div>
                                <div className='col-12 Form_Wrapper'>
                                    <TopForm />
                                </div>
                                <div className='col-12 undertext web_text'>
                                    The web portal is under construction. Will be here soon with our awesome website!
                                    Subscribe to be notified!
                                </div>
                                <div className='col-12 under_red_text'>A Fairman Company</div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 my-[-5px] footer_text '>
                        <div className="footer_wraper" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div className='col-4 col-4 text-center text-red-600 font-bold'>
                                <img src={sabadelLogo} className="sabadel_logo" />
                                <small >sponser</small>

                            </div>
                            <div className='col-4 flex items-center justify-center'>
                                <div className='text-center '>
                                    <p className='text-black' >A PUBLIC SERVICE COMPANY</p>
                                    <p className='text-black text-sm'>COPYRIGHT Ⓒ 2022 HPORx LTD</p>
                                </div>

                            </div>
                            <div className='col-4 text-center text-red-600 font-bold'>
                                <img src={worldBankLogo} className="sabadel_logo" />
                                <small >sponser</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommingSoon