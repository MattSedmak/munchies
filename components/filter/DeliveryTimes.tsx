'use client';
import React from 'react';
import { FilterButton } from '../filter-button/FilterButton';
import { useFilterContext } from '@/Providers/FiltersProvider';

const DELIVERY_TIMES = [
  { label: '0-10 min', value: { min: 0, max: 10 } },
  { label: '10-30 min', value: { min: 10, max: 30 } },
  { label: '30-60 min', value: { min: 30, max: 60 } },
  { label: '1 hour+', value: { min: 60, max: Infinity } },
] as const;

export const DeliveryTimes = () => {
  const { selectedFilters, setSelectedFilters } = useFilterContext();

  const handleDeliveryTimeSelection = (obj: { min: number; max: number }) => {
    setSelectedFilters((prevFilters) => {
      const isDeliveryTimeSelected =
        prevFilters.delivery_time_minutes &&
        prevFilters.delivery_time_minutes.min === obj.min &&
        prevFilters.delivery_time_minutes.max === obj.max;

      return {
        ...prevFilters,
        delivery_time_minutes: isDeliveryTimeSelected ? null : obj,
      };
    });
  };

  return (
    <div className='flex flex-col gap-4'>
      <h4 className='text-body uppercase text-black/40 font-semibold'>
        Delivery Time
      </h4>
      <div className='flex flex-wrap gap-2.5'>
        {DELIVERY_TIMES.map((time) => (
          <FilterButton
            key={time.label}
            filterId={time.value}
            label={time.label}
            isActive={selectedFilters.delivery_time_minutes === time.value}
            handleClick={() => handleDeliveryTimeSelection(time.value)}
          />
        ))}
      </div>
    </div>
  );
};
