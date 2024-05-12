import { Filters } from '@/schemas/schemas';
import { fetchData } from '@/utilis/fetchData';

export const getFilters = async (): Promise<Filters> => {
  try {
    return await fetchData<Filters>(`${process.env.BASE_URL}/filter`);
  } catch (error) {
    console.error('Error fetching filters:', error);
    return { filters: [] };
  }
};
