import { PriceRange } from '@/schemas/schemas';
import { fetchData } from '@/utilis/fetchData';

export const getPriceRanges = (): Promise<PriceRange[]> => {
  return fetchData<PriceRange[]>(`${process.env.BASE_URL}/price-range`);
};
