import React from 'react';

interface FilterButtonProps {
  isActive: boolean;
  handleClick: (id: string | number | object) => void;
  filterId: string | number | object;
  label: string;
}

export const FilterButton = ({
  isActive,
  handleClick,
  filterId,
  label,
}: FilterButtonProps) => {
  return (
    <button
      data-active={isActive}
      className='px-3 py-2 border border-stroke bg-white text-body text-nowrap w-fit rounded-lg data-[active=true]:border-brand-green'
      onClick={() => handleClick(filterId)}
    >
      {label}
    </button>
  );
};
