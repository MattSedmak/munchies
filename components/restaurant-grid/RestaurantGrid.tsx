'use client';
import { useFilterContext } from '@/Providers/FiltersProvider';
import { Restaurant } from '@/schemas/schemas';
import React from 'react';
import { RestaurantCard } from '../restaurant-card/RestaurantCard';

interface RestaurantGridProps {
  restaurants: Restaurant[];
}

export const RestaurantGrid = ({ restaurants }: RestaurantGridProps) => {
  const { selectedFilters } = useFilterContext();

  // Check if a restaurant matches the selected filters
  const restaurantMatchesFilters = (restaurant: Restaurant) => {
    // If no filters are selected, all restaurants match
    if (
      selectedFilters.filter_ids.length === 0 &&
      selectedFilters.price_range_id === null
    )
      return true;

    return (
      (selectedFilters.filter_ids.length === 0 ||
        restaurant.filter_ids.some((id) =>
          selectedFilters.filter_ids.includes(id)
        )) &&
      (selectedFilters.price_range_id === null ||
        selectedFilters.price_range_id === restaurant.price_range_id)
    );
  };

  // Filter restaurants based on selected filters
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurantMatchesFilters(restaurant)
  );

  return (
    <div className='grid grid-cols-subgrid col-start-1 col-span-full md:col-start-4 md:col-span-12 row-span-1 gap-y-4'>
      {filteredRestaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};
