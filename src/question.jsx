import React from 'react'
import { useState } from "react";


const Question = () => {
  const [show, setShow] = useState(false); 

  return (
    <section className='max-w-[1240px] mx-auto px-[1rem] py-[1rem]'>
        <h3 className='text-black text-[2.25rem] font-semibold text-center'>Частые вопросы</h3>
            <div className='flex justify-between w-[100%]  mt-[2rem]'>
                <div className='flex flex-col gap-[14px] w-[49%]'>
                    <div className='flex flex-col gap-[4px] p-[22px] bg-[#F8F8F9] rounded-[10px]'>
                      <div className='flex justify-between items-center'>
                      <strong>Почему цены на ваши услуги ниже, чем у конкурентов?</strong>
                        <svg onClick={() => setShow(!show)} 
                         className={`cursor-pointer transform transition-all duration-300 ease-linear ${show ? "rotate-180" : "rotate-0"}`}width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 1.5L6.7619 6.5L12 1.5" stroke="#AAAAAA" stroke-width="2" stroke-linecap="square"/>
                        </svg>
                      </div>
                        <span className={show ? "block" :"hidden"}>Lorem ipsum dolor sit amet.</span>

                    </div>

                    <div className='flex flex-col gap-[4px] p-[22px] bg-[#F8F8F9] rounded-[10px]'>
                      <div className='flex justify-between items-center'>
                      <strong>Почему цены на ваши услуги ниже, чем у конкурентов?</strong>
                        <svg onClick={() => setShow(!show)} 
                         className={`cursor-pointer transform transition-all duration-300 ease-linear ${show ? "rotate-180" : "rotate-0"}`}width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 1.5L6.7619 6.5L12 1.5" stroke="#AAAAAA" stroke-width="2" stroke-linecap="square"/>
                        </svg>
                      </div>
                        <span className={show ? "block" :"hidden"}>Lorem ipsum dolor sit amet.</span>

                    </div>

                    <div className='flex flex-col gap-[4px] p-[22px] bg-[#F8F8F9] rounded-[10px]'>
                      <div className='flex justify-between items-center'>
                      <strong>Почему цены на ваши услуги ниже, чем у конкурентов?</strong>
                        <svg onClick={() => setShow(!show)} 
                         className={`cursor-pointer transform transition-all duration-300 ease-linear ${show ? "rotate-180" : "rotate-0"}`}width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 1.5L6.7619 6.5L12 1.5" stroke="#AAAAAA" stroke-width="2" stroke-linecap="square"/>
                        </svg>
                      </div>
                        <span className={show ? "block" :"hidden"}>Lorem ipsum dolor sit amet.</span>

                    </div>

                    <div className='flex flex-col gap-[4px] p-[22px] bg-[#F8F8F9] rounded-[10px]'>
                      <div className='flex justify-between items-center'>
                      <strong>Почему цены на ваши услуги ниже, чем у конкурентов?</strong>
                        <svg onClick={() => setShow(!show)} 
                         className={`cursor-pointer transform transition-all duration-300 ease-linear ${show ? "rotate-180" : "rotate-0"}`}width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 1.5L6.7619 6.5L12 1.5" stroke="#AAAAAA" stroke-width="2" stroke-linecap="square"/>
                        </svg>
                      </div>
                        <span className={show ? "block" :"hidden"}>Lorem ipsum dolor sit amet.</span>

                    </div>

                </div>

                <div className='flex flex-col gap-[14px] w-[49%]'>
                    <div className='flex flex-col gap-[4px] p-[22px] bg-[#F8F8F9] rounded-[10px]'>
                      <div className='flex justify-between items-center'>
                      <strong>Почему цены на ваши услуги ниже, чем у конкурентов?</strong>
                        <svg onClick={() => setShow(!show)} 
                         className={`cursor-pointer transform transition-all duration-300 ease-linear ${show ? "rotate-180" : "rotate-0"}`}width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 1.5L6.7619 6.5L12 1.5" stroke="#AAAAAA" stroke-width="2" stroke-linecap="square"/>
                        </svg>
                      </div>
                        <span className={show ? "block" :"hidden"}>Lorem ipsum dolor sit amet.</span>

                    </div>

                    <div className='flex flex-col gap-[4px] p-[22px] bg-[#F8F8F9] rounded-[10px]'>
                      <div className='flex justify-between items-center'>
                      <strong>Почему цены на ваши услуги ниже, чем у конкурентов?</strong>
                        <svg onClick={() => setShow(!show)} 
                         className={`cursor-pointer transform transition-all duration-300 ease-linear ${show ? "rotate-180" : "rotate-0"}`}width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 1.5L6.7619 6.5L12 1.5" stroke="#AAAAAA" stroke-width="2" stroke-linecap="square"/>
                        </svg>
                      </div>
                        <span className={show ? "block" :"hidden"}>Lorem ipsum dolor sit amet.</span>

                    </div>

                    <div className='flex flex-col gap-[4px] p-[22px] bg-[#F8F8F9] rounded-[10px]'>
                      <div className='flex justify-between items-center'>
                      <strong>Почему цены на ваши услуги ниже, чем у конкурентов?</strong>
                        <svg onClick={() => setShow(!show)} 
                         className={`cursor-pointer transform transition-all duration-300 ease-linear ${show ? "rotate-180" : "rotate-0"}`}width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 1.5L6.7619 6.5L12 1.5" stroke="#AAAAAA" stroke-width="2" stroke-linecap="square"/>
                        </svg>
                      </div>
                        <span className={show ? "block" :"hidden"}>Lorem ipsum dolor sit amet.</span>

                    </div>

                    <div className='flex flex-col gap-[4px] p-[22px] bg-[#F8F8F9] rounded-[10px]'>
                      <div className='flex justify-between items-center'>
                      <strong>Почему цены на ваши услуги ниже, чем у конкурентов?</strong>
                        <svg onClick={() => setShow(!show)} 
                         className={`cursor-pointer transform transition-all duration-300 ease-linear ${show ? "rotate-180" : "rotate-0"}`}width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 1.5L6.7619 6.5L12 1.5" stroke="#AAAAAA" stroke-width="2" stroke-linecap="square"/>
                        </svg>
                      </div>
                        <span className={show ? "block" :"hidden"}>Lorem ipsum dolor sit amet.</span>

                    </div>

                </div>


            </div>
    </section>
  )
}

export default Question