'use client';
import { useFilterContext } from '@/Providers/FiltersProvider';
import { Filter } from '@/schemas/schemas';
import React from 'react';
import { FilterButton } from '../filter-button/FilterButton';

interface FoodProps {
  filters: Filter[];
}

export const FoodCategories = ({ filters }: FoodProps) => {
  const { selectedFilters, setSelectedFilters } = useFilterContext();

  const handleSelectedFilters = (id: string) => {
    setSelectedFilters((prevFilters) => {
      const selectedFilterIds = prevFilters.filter_ids.includes(id)
        ? prevFilters.filter_ids.filter((filterId) => filterId !== id)
        : [...prevFilters.filter_ids, id];
      return { ...prevFilters, filter_ids: selectedFilterIds };
    });
  };
  return (
    <div className='flex flex-col gap-4'>
      <h4 className='text-body uppercase text-black/40 font-semibold'>
        Food Category
      </h4>
      <div className='flex flex-col gap-2.5'>
        {filters.map((filter) => (
          <FilterButton
            key={filter.id}
            filterId={filter.id}
            label={filter.name}
            isActive={selectedFilters.filter_ids.includes(filter.id)}
            handleClick={() => handleSelectedFilters(filter.id)}
          />
        ))}
      </div>
    </div>
  );
};
