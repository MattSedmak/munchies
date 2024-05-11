'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface SelectedFilters {
  filter_ids: string[];
  price_range_id: string | null;
}

// Define types/interfaces
interface FilterContextType {
  selectedFilters: {
    filter_ids: string[];
    price_range_id: string | null;
  };
  setSelectedFilters: React.Dispatch<React.SetStateAction<SelectedFilters>>;
}

interface FilterProviderProps {
  children: ReactNode;
}

// Create context with initial value
const initialFilterContext: FilterContextType = {
  selectedFilters: {
    filter_ids: [],
    price_range_id: null,
  },
  setSelectedFilters: () => {}, // Initial setter function
};
const FilterContext = createContext<FilterContextType>(initialFilterContext);

// Custom hook for using the filter context
export const useFilterContext = () => useContext(FilterContext);

// Provider component
export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    filter_ids: [],
    price_range_id: null,
  });

  return (
    <FilterContext.Provider value={{ selectedFilters, setSelectedFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
