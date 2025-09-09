import React from 'react'
import kok from "./assets/images/kok.png"

const Discount = () => {
  return (
    <div className='bg-[#0058FF] max-w-[1250px] mx-auto rounded-[40px] flex justify-around items-center'>
    <div className="left flex flex-col gap-[20px] w-[40%]">
            <h4 className='text-[2.25rem] text-white font-semibold leading-[100%]'>Скидки до 50% <br />
            в нашем телеграм-канале</h4>
            <p className='text-white text-[18px]'>Раздаем промокоды в Telegram каждую неделю</p>
            <div>
            <button className='text-[18px] font-medium text-white py-[1rem] px-[1.5rem] bg-[#1D4ED8] rounded-[6px]'>Начать продвижение</button>
            </div>
        </div>
        <div className='w-[35%]'>
            <img src={kok} className='w-full transform scale-[1.2]' alt="" />
        </div>
    </div>
  )
}

export default Discount