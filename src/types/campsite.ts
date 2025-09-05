export interface Location {
  latitude: number;
  longitude: number;
  address: string;
  region: string;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
}

export interface Campsite {
  id: string;
  name: string;
  description: string;
  type: 'doc' | 'holiday_park' | 'freedom';
  location: Location;
  price: {
    amount: number;
    currency: string;
    unit: 'per_night' | 'per_person';
  };
  capacity: {
    total: number;
    available: number;
  };
  amenities: Amenity[];
  images: string[];
  rating: number;
  reviewCount: number;
  status: 'active' | 'inactive' | 'maintenance';
  merchantId?: string;
  createdAt: string;
  updatedAt: string;
}
