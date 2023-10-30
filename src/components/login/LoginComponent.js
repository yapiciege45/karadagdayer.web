"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import { InputComponent } from '../shared/InputComponent';
import { ButtonComponent } from '../shared/ButtonComponent';

export const LoginComponent = ({ router, email, password, setEmail, setPassword, formSubmit }) => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gray-200'>
        <div className='w-3/4 h-3/4 bg-blac rounded-xl bg-white drop-shadow-2xl flex justify-between'>
            <div className='w-1/3 h-full hidden md:block'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    className='h-full w-full rounded-l-xl'
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    loop
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide className={`w-full h-full bg-cover bg-[url('https://c4.wallpaperflare.com/wallpaper/894/217/252/sveti-stefan-island-in-budva-old-town-in-montenegro-adriatic-sea-landscape-photography-1920%C3%971200-wallpaper-preview.jpg')] rounded-l-xl`}></SwiperSlide>
                    <SwiperSlide className={`w-full h-full bg-cover bg-[url('https://images.unsplash.com/photo-1502824420498-012d4c4f0c42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9udGVuZWdyb3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80')] rounded-l-xl`}></SwiperSlide>
                    <SwiperSlide className={`w-full h-full bg-cover bg-[url('https://bookaway.com/wp-content/uploads/2020/08/Kotor-Montenegro-1.jpg')] rounded-l-xl`}></SwiperSlide>
                    <SwiperSlide className={`w-full h-full bg-cover bg-[url('https://i.pinimg.com/736x/0c/48/46/0c4846dc9a7aa64366fdc39c6c62ca4e.jpg')] rounded-l-xl`}></SwiperSlide>
                </Swiper>
            </div>
            <div className='w-full md:w-2/3 h-full flex flex-col justify-center items-center'>
                <div className='w-3/4 lg:w-1/2 flex flex-col items-center'>
                    <h2 className='text-xl font-bold mt-5'>Login KARADAGDAYER</h2>
                    <InputComponent 
                        onChange={setEmail}
                        value={email}
                        placeholderText='Email'
                        labelText='Email'
                        isRequired={true}
                        inputType='email'
                        className='mt-5'
                    />
                    <InputComponent 
                        onChange={setPassword}
                        value={password}
                        placeholderText='Password'
                        labelText='Password'
                        isRequired={true}
                        inputType='password'
                        className='mt-5'
                    />
                    <ButtonComponent 
                        onClick={formSubmit}
                        buttonText='Login'
                        className='mt-16'
                        type='submit'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
