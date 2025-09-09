import React from 'react'
import Logo from "./assets/logo.png"

const Header = () => {
  return (
    <header className='bg-white py-[1rem] shadow-[1px_2px_3px_lightgray] sticky top-0 left-0 right-0 relative z-50'>
        <div className='max-w-[1250px] mx-auto px-[1rem] flex justify-between items-center'>
            <nav className='flex items-center gap-[2.5rem]'>
            <img src={Logo}  className='max-w-[135px] w-full' alt="" />
                <div className='flex items-center gap-[20px] max-md:hidden'>
                    <a href="#" className='text-[#000000]'>Услуги</a>
                    <a href="#" className='text-[#000000]'>Преимущества</a>
                    <a href="#" className='text-[#000000]'>Отзывы</a>
                </div>
            </nav>
            <div className='flex gap-[2rem] items-center'>
                <a href="#" className='text-[#000000]'>Войти</a>
                <button className='text-white font-medium py-[12px] px-[1.5rem] bg-[#1D4ED8] rounded-[6px]'>Быстрый заказ</button>
            </div>
        </div>
    </header>
  )
}

export default Header