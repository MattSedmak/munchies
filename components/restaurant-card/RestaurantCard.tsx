import { Arrow } from '@/icons/Arrow';
import { Restaurant } from '@/schemas/schemas';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Badge } from './Badge';

interface RestaurantCardProps {
  restaurant: Omit<Restaurant, 'filter_ids' | 'price_range_id' | 'rating'>;
  isOpen?: boolean;
}

export const RestaurantCard = ({ restaurant, isOpen }: RestaurantCardProps) => {
  return (
    <div className='relative flex flex-col justify-between col-span-full sm:col-span-6 xl:col-span-4 border border-stroke bg-white rounded-lg p-4 text-heading aspect-[327/202] overflow-hidden shadow-card'>
      <Image
        src={restaurant.image_url}
        alt={restaurant.name}
        width={140}
        height={140}
        priority={true}
        className={`absolute -top-8 -right-6 aspect-square object-contain ${
          !isOpen ? 'opacity-10' : 'opacity-100'
        }`}
      />
      <div className='flex items-center gap-1'>
        <Badge
          label={isOpen ? 'open' : 'closed'}
          circle={{ show: true, color: isOpen ? 'green' : 'black' }}
        />
      </div>
      {!isOpen && (
        <p className='w-fit border border-stroke text-body bg-off-white rounded py-2 px-3 self-center'>
          Opens tomorrow at 12pm
        </p>
      )}
      <div
        className={`flex justify-between items-center gap-2 ${
          !isOpen ? 'opacity-10' : 'opacity-100'
        }`}
      >
        <span className='text-heading'>{restaurant.name}</span>
        <Link
          href=''
          className='flex items-center justify-center shrink-0 rounded-full bg-brand-green text-white w-8 h-8'
        >
          <Arrow />
        </Link>
      </div>
    </div>
  );
};
