import { PriceRange } from '@/schemas/schemas';
import { fetchData } from '@/utilis/fetchData';

export const getPriceRanges = async (): Promise<PriceRange[]> => {
  try {
    return await fetchData<PriceRange[]>(`${process.env.BASE_URL}/price-range`);
  } catch (error) {
    console.error('Error fetching price range:', error);
    return [];
  }
};
