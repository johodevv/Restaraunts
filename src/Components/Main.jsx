import React from 'react'

export default function Main() {
  return (
    <>
    <main className='border-2 border-white w-full  rounded-2xl
    mt-12 p-5 text-center'>
        <div>
            <img src="../public/images.jpeg" alt="Ovqat rasmi" className='rounded-xl' />
        </div>
        <h3 className='text-start mt-3'>Ovqatlarni menusini korib ovqatlarimizga buyurtma berish berishingiz mumkin yoki joy band qilishingiz mumkin</h3>
        <button className='text-center p-3 bg-[#e74409c8] rounded-2xl mt-4'>Buyurtma berish</button>
    </main>
    <h1 className='text-start text-3xl mt-6'>Biz haqimizda </h1>
    <p className='text-[#5b5b58] mt-2'><span className='text-white'>Joylashuvimiz:</span> Xorazm viloyati, Xiva tumani, Tinchliksevar kochasi 108-uy <br /> Bu sayt orqali siz bizning restaronimizda oldindan joy bron qilishingiz va ovqat zakaz berishingiz mumkin <br /> <span className='text-white'>Afzilligi:</span> siz oldindan menularni korib ovqatni zakaz berganingizdan so'ng ovqat siz belgilagan vaqtgacha tayor qilinadi natijada boshqa choyxona yoki restaronlardakidek ovqat tayyor bolguncha kutmaysiz</p>
    </>
  )
}
