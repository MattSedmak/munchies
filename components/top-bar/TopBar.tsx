'use client';
import React from 'react';
import Image from 'next/image';
import { useFilterContext } from '@/Providers/FiltersProvider';
import { Filter } from '@/schemas/schemas';

interface TopBarProps {
  filters: Filter[];
}

export const TopBar = ({ filters }: TopBarProps) => {
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
    <div className='col-start-1 md:col-start-4 col-span-full row-span-1 mb-10 gap-2.5 overflow-visible'>
      <div className='flex gap-2.5 overflow-x-auto overflow-y-clip'>
        {filters.map((cat) => (
          <button
            key={cat.id}
            data-active={selectedFilters.filter_ids.includes(cat.id)}
            className={
              'flex bg-white min-w-[160px] h-20 px-3 py-4 rounded-lg border border-black/10 text-title relative data-[active=true]:border-brand-green'
            }
            onClick={() => handleSelectedFilters(cat.id)}
          >
            {cat.name}
            <Image
              src={cat.image_url}
              alt={cat.name}
              width={80}
              height={80}
              className='absolute top-0 right-0 aspect-square'
            />
          </button>
        ))}
      </div>
    </div>
  );
};
