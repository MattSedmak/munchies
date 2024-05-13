import { Header } from '@/components/header/Header';
import { TopBar } from '@/components/top-bar/TopBar';
import { FoodCategories } from '@/components/filter/FoodCatrgories';
import { RestaurantGrid } from '@/components/restaurant-grid/RestaurantGrid';
import { PriceRanges } from '@/components/filter/PriceRanges';
import { DeliveryTimes } from '@/components/filter/DeliveryTimes';
import { getRestaurants } from '@/services/restaurantService';
import { getFilters } from '@/services/filterService';
import { getPriceRanges } from '@/services/priceRangeService';
import { Overlay } from '@/components/overlay/Overlay';

export default async function Home() {
  const restaurantsData = await getRestaurants();
  const categoriesData = await getFilters();
  const priceRangesData = await getPriceRanges();

  const [restaurants, categories, priceRages] = await Promise.all([
    restaurantsData,
    categoriesData,
    priceRangesData,
  ]);

  return (
    <main className='relative flex mx-auto max-w-[1440px] flex-col px-6 lg:px-10 overflow-hidden'>
      <Overlay />
      <Header />
      <section className='grid grid-cols-4 md:grid-cols-16 gap-x-5 mb-10'>
        <aside className='col-start-1 col-span-3 row-span-2 bg-white p-6 rounded-[10px] hidden md:flex md:flex-col md:gap-8 shadow-card border border-stroke'>
          <h3 className='text-heading'>Filter</h3>
          <FoodCategories filters={categories.filters} />
          <DeliveryTimes />
          <PriceRanges prices={priceRages} />
        </aside>
        <div className='block md:hidden col-start-1 col-span-full mb-6'>
          <DeliveryTimes />
        </div>
        <div className='grid grid-cols-subgrid col-span-4 md:col-span-13'>
          <TopBar filters={categories.filters} />
          <RestaurantGrid restaurants={restaurants} />
        </div>
      </section>
    </main>
  );
}
