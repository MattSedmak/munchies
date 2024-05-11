import { OpenStatus, Restaurants, Restaurant } from '@/schemas/schemas';
import { fetchData } from '@/utilis/fetchData';

export const getRestaurantOpenStatus = async (id: string): Promise<OpenStatus> => {
  try {
    const openStatus = await fetchData<OpenStatus>(
      `${process.env.BASE_URL}/open/${id}`
    );
    return openStatus;
  } catch (error) {
    console.error('Error fetching restaurant open status:', error);
    throw error;
  }
};

export const getRestaurants = async (): Promise<Restaurant[]> => {
  try {
    const restaurants = await fetchData<Restaurants>(
      `${process.env.BASE_URL}/restaurants`
    );

    // Fetch open status for each restaurant
    const restaurantsWithOpenStatus = await Promise.all(
      restaurants.restaurants.map(async (restaurant) => {
        const openStatus = await getRestaurantOpenStatus(restaurant.id);
        return { ...restaurant, open_status: openStatus };
      })
    );

    return restaurantsWithOpenStatus;
  } catch (error) {
    console.error('Error fetching restaurants with open status:', error);
    throw error;
  }
};
