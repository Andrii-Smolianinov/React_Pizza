import React from 'react'
import ukrIMG from '../../../assets/img/promotion-ukr.png'
import engIMG from '../../../assets/img/promotion-eng.png'

const Promotion = () => {
  return (
    <div className="absolute w-[276px] h-1/5 top-0">
        {/* <img src={ukrIMG} alt="akcia" className='absolute w-1/2 left-1/4 opacity-80'/> */}
        <img src={engIMG} alt="akcia" className='absolute w-1/2 left-1/4 opacity-80'/>
    </div>
  )
}

export default Promotion