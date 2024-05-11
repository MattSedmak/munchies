import { Restaurant } from '@/schemas/schemas';
import React from 'react';

interface RestaurantCardProps {
  restaurant: Omit<Restaurant, 'filter_ids' | 'price_range_id' | 'rating'>;
}

export const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <div className='col-span-4 border border-black/10 bg-white rounded-lg p-4 text-heading'>
      {restaurant.name}
    </div>
  );
};
