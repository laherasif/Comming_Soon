import React from 'react'
import uk from "../../assets/images/u_k.png"
const TopForm = () => {
    return (
        <section className='row mb-1'>
            <div className="col-12">
                <div className='text-center mt-5'>
                    <img src={uk} className="w-14 absolute left-[32%]" />
                    <input type="text" className="md:w-[35%] w-4/5 placeholder:pl-3 placeholder:font-Poppins placeholder:font-medium p-2" placeholder="Your Name?" />
                    <button className='bg-light-red md:w-[13%] w-1/5 h-[40px] text-white font-Poppins font-medium'>Enter</button>
                </div>

            </div>

        </section>
    )
}

export default TopForm