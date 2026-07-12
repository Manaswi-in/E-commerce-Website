import React from 'react'
import {assets} from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto md-5' alt=""/>
            <p className='font-semibold'>Easy Exchange</p>
            <p className='text-gray-400'>Exchange your items within 30 days of purchase.</p>
        </div>

        <div>
            <img src={assets.quality_icon} className='w-12 m-auto md-5' alt=""/>
            <p className='font-semibold'>Quality Assurance</p>
            <p className='text-gray-400'>We guarantee the quality of all our products.</p>
        </div>  

        <div>
            <img src={assets.support_img} className='w-12 m-auto md-5' alt=""/>
            <p className='font-semibold'>24/7 Support</p>
            <p className='text-gray-400'>Get help whenever you need it.</p>
        </div>  

    </div>
  )
}

export default OurPolicy
