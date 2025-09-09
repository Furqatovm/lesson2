import React from 'react'
import Heroimg from "./assets/images/heroimg.png"

const Hero = () => {
  return (
    <section className='max-w-[1240px] mx-auto px-[1rem] py-[1rem] flex justify-between items-center'>
        <div className="w-[55%] flex flex-col gap-[1.5rem]">
            <h1 className='text-[2.875rem] text-[#000000] font-semibold leading-[100%]'>Продвижение во всех соцсетях за пару кликов</h1>
            <p className='text-[20px] text-[#000000] leading-[120%]'>Получайте подписчиков, лайки, репосты, просмотры, прослушивания и любую другую активность на свои профили в социальных сетях по самым низким ценами на рынке и в самые быстрые сроки!</p>
            <div>
            <button className='text-[18px] font-medium text-white py-[1rem] px-[1.5rem] bg-[#1D4ED8] rounded-[6px]'>Начать продвижение</button>
            </div>
        </div>
        <div className='w-[45%]'>
            <img src={Heroimg} className='w-full' alt="" />
        </div>
    </section>
  )
}

export default Hero