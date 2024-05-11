'use client';
import { Restaurant, Restaurants } from '@/schemas/schemas';
import React from 'react';

interface DeliveryTimesProps {
  restaurants: Restaurant[];
}

export const DeliveryTimes = ({ restaurants }: DeliveryTimesProps) => {
  const mappedDeliveryTimes = [
    { name: '0-10', value: { min: 0, max: 10 } },
    { name: '10-30', value: { min: 10, max: 30 } },
    { name: '30-60', value: { min: 30, max: 60 } },
    { name: '60+', value: { min: 60, max: Infinity } },
  ];

  return (
    <div className='flex flex-col gap-4'>
      <h4 className='text-body uppercase text-black/40 font-semibold'>
        Delivery Time
      </h4>
      <div className='flex flex-col gap-2.5'>
        {/* {filters.map((filter) => (
          <FilterButton
            key={filter.id}
            filterId={filter.id}
            label={filter.name}
            isActive={selectedFilters.filter_ids.includes(filter.id)}
            handleClick={() => handleSelectedFilters(filter.id)}
          />
        ))} */}
      </div>
    </div>
  );
};
