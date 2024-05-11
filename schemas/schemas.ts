export interface Filter {
  id: string;
  name: string;
  image_url: string;
}

export interface Filters {
  filters: Filter[];
}

export interface OpenStatus {
  id: string;
  is_open: boolean;
}

export interface Restaurant {
  id: string;
  name: string;
  rating: number;
  filter_ids: string[];
  image_url: string;
  delivery_time_minutes: number;
  price_range_id: string;
  open_status: OpenStatus;
}

export interface Restaurants {
  restaurants: Restaurant[];
}

export interface PriceRange {
  id: string;
  range: string;
}
