import { Header } from '@/components/header/Header';
import { Filters, PriceRange, Restaurants } from '@/schemas/schemas';
import { TopBar } from '@/components/top-bar/TopBar';
import { FoodCategories } from '@/components/filter/FoodCatrgories';
import { RestaurantGrid } from '@/components/restaurant-grid/RestaurantGrid';
import { fetchData } from '@/utilis/fetchData';
import { PriceRanges } from '@/components/filter/PriceRanges';
import { DeliveryTimes } from '@/components/filter/DeliveryTimes';

async function getRestaurants(): Promise<Restaurants> {
  return fetchData<Restaurants>(
    'https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/restaurants'
  );
}

async function getFilters(): Promise<Filters> {
  return fetchData<Filters>(
    'https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/filter'
  );
}

async function getPriceRanges(): Promise<PriceRange[]> {
  return fetchData<PriceRange[]>(
    'https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/price-range'
  );
}

export default async function Home() {
  const restaurantsData = await getRestaurants();
  const categoriesData = await getFilters();
  const priceRangesData = await getPriceRanges();

  const [restaurants, categories, priceRages] = await Promise.all([
    restaurantsData,
    categoriesData,
    priceRangesData,
  ]);

  const deliveryTimes = Array.from(
    new Set(restaurants.restaurants.map((rest) => rest.delivery_time_minutes))
  );
  console.log(deliveryTimes);

  return (
    <main className='flex mx-auto max-w-[1440px] flex-col px-6 md:px-10 border border-red-400 overflow-hidden'>
      <Header />
      <section className='grid grid-cols-4 md:grid-cols-16 gap-x-5'>
        <aside className='col-start-1 col-span-3 row-span-2 bg-white p-6 rounded-[10px] hidden md:flex md:flex-col md:gap-8'>
          <h3 className='text-heading'>Filter</h3>
          <FoodCategories filters={categories.filters} />
          <PriceRanges prices={priceRages} />
          <DeliveryTimes restaurants={restaurants} />
        </aside>
        <TopBar filters={categories.filters} />
        <RestaurantGrid restaurants={restaurants.restaurants} />
      </section>
    </main>
  );
}
