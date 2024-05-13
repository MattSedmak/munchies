'use client';
import React, { useState } from 'react';
import { Header } from '../header/Header';

export const Overlay = () => {
  const [show, setShow] = useState(true);

  return (
    <div
      className={`flex flex-col justify-between sm:hidden fixed inset-x-0 top-0 px-6 pb-10 h-svh bg-brand-green z-20 transition-opactiy duration-300 ease-out ${
        show ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <Header logoColor='white' />

      <div className='max-w-[246px]'>
        <h1 className='text-white text-5xl font-bold mb-4'>Treat yourself.</h1>
        <p className='text-title text-white'>
          Find the best restaurants in your city and get it delivered to your place!
        </p>
      </div>

      <button
        className='border border-white rounded-lg w-full py-5 text-white font-bold text-base leading-4'
        onClick={() => setShow(false)}
      >
        Continue
      </button>
    </div>
  );
};
