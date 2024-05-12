import React from 'react';
import { MunchieLogo } from '../logos/MunchieLogo';

interface HeaderProps {
  logoColor?: 'white' | 'black';
}

export const Header = ({ logoColor }: HeaderProps) => {
  return (
    <header className='flex pb-6 md:pb-12 pt-14'>
      <MunchieLogo className='w-[164px] md:w-[274px]' fill={logoColor} />
    </header>
  );
};
