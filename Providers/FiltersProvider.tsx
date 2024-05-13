'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

type DeliveryTimeMinutes = {
  min: number;
  max: number;
} | null;

interface SelectedFiltersShape {
  filter_ids: string[];
  price_range_id: string | null;
  delivery_time_minutes: DeliveryTimeMinutes;
}

interface FilterContextType {
  selectedFilters: {
    filter_ids: string[];
    price_range_id: string | null;
    delivery_time_minutes: DeliveryTimeMinutes;
  };
  setSelectedFilters: React.Dispatch<React.SetStateAction<SelectedFiltersShape>>;
}

interface FilterProviderProps {
  children: ReactNode;
}

// Create context with initial value
const initialFilterContext: FilterContextType = {
  selectedFilters: {
    filter_ids: [],
    price_range_id: null,
    delivery_time_minutes: null,
  },
  setSelectedFilters: () => {}, // Initial setter function
};
const FilterContext = createContext<FilterContextType>(initialFilterContext);

// Custom hook for using the filter context
export const useFilterContext = () => useContext(FilterContext);

// Provider component
export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFiltersShape>({
    filter_ids: [],
    price_range_id: null,
    delivery_time_minutes: null,
  });

  return (
    <FilterContext.Provider value={{ selectedFilters, setSelectedFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
