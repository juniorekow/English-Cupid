export interface Profile {
  id: string;
  userId: string;
  fullName: string;
  age: number;
  gender: string;
  interestedIn: string[];
  location: {
    city: string;
    country: string;
    latitude: number;
    longitude: number;
  };
}
