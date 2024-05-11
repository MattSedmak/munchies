export interface Filter {
  id: string;
  name: string;
  image_url: string;
}

export interface Filters {
  filters: Filter[];
}

export interface Restaurant {
  id: string;
  name: string;
  rating: number;
  filter_ids: string[];
  image_url: string;
  delivery_time_minutes: number;
  price_range_id: string;
}

export interface Restaurants {
  restaurants: Restaurant[];
}

export interface PriceRange {
  id: string;
  range: string;
}
