import { Filters } from '@/schemas/schemas';
import { fetchData } from '@/utilis/fetchData';

export const getFilters = async (): Promise<Filters> => {
  return fetchData<Filters>(`${process.env.BASE_URL}/filter`);
};
