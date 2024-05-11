import React from 'react';

type Circle =
  | {
      show: false;
    }
  | {
      show: true;
      color: 'green' | 'black';
    };

interface BadgeProps {
  label: string;
  circle: Circle;
}
export const Badge = ({ label, circle }: BadgeProps) => {
  const circleVariants = {
    green: 'bg-brand-green',
    black: 'bg-black',
  };

  return (
    <div className='flex items-center gap-1 text-body border border-stroke rounded-full px-3 py-2'>
      {circle.show ? (
        <div
          className={`rounded-full w-2 h-2 ${circleVariants[circle.color]}`}
        ></div>
      ) : null}
      {label}
    </div>
  );
};
