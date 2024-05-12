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
    const { filter_ids, price_range_id, delivery_time_minutes } = selectedFilters;
    // If no filters are selected, all restaurants match
    if (
      filter_ids.length === 0 &&
      price_range_id === null &&
      delivery_time_minutes === null
    )
      return true;

    const filterIdsMatch =
      filter_ids.length === 0 ||
      restaurant.filter_ids.some((id) => filter_ids.includes(id));

    const priceRangeMatch =
      price_range_id === null || restaurant.price_range_id === price_range_id;

    const deliveryTimeMatch =
      delivery_time_minutes === null ||
      (restaurant.delivery_time_minutes >= delivery_time_minutes.min &&
        restaurant.delivery_time_minutes <= delivery_time_minutes.max);

    return filterIdsMatch && priceRangeMatch && deliveryTimeMatch;
  };

  // Filter restaurants based on selected filters
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurantMatchesFilters(restaurant)
  );

  return (
    <div className='col-start-1 col-span-12 '>
      <h1 className='mb-5 md:mb-8 text-heading-sm md:text-display'>Restaurants</h1>
      <div className='grid grid-cols-12 gap-4'>
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            isOpen={restaurant.open_status.is_open}
          />
        ))}
      </div>
    </div>
  );
};
