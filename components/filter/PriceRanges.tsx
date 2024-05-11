'use client';
import React from 'react';
import { FilterButton } from '../filter-button/FilterButton';
import { PriceRange } from '@/schemas/schemas';
import { useFilterContext } from '@/Providers/FiltersProvider';

interface PriceRangesProps {
  prices: PriceRange[];
}

export const PriceRanges = ({ prices }: PriceRangesProps) => {
  const { selectedFilters, setSelectedFilters } = useFilterContext();

  const handlePriceRangeSelection = (id: string) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      price_range_id: prevFilters.price_range_id === id ? null : id,
    }));
  };

  return (
    <div className='flex flex-col gap-4'>
      <h4 className='text-body uppercase text-black/40 font-semibold'>
        Price range
      </h4>
      <div className='flex flex-wrap gap-2.5'>
        {prices.map((price) => (
          <FilterButton
            key={price.id}
            filterId={price.id}
            label={price.range}
            isActive={selectedFilters.price_range_id === price.id}
            handleClick={() => handlePriceRangeSelection(price.id)}
          />
        ))}
      </div>
    </div>
  );
};
