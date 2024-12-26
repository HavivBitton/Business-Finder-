export interface Review {
  _id: string;
  userId: {
    _id: string;
    name: string;
  };
  comment: string;
  createdAt: string;
}

export interface Post {
  _id: string;
  name: string;
  description: string;
  category: string;
  owner: {
    _id: string;
    name: string;
  };
  subscribers: string[];
  reviews: Review[];
  createdAt: string;
  updatedAt: string;
}

export interface User {
  name: string;
  username: string;
  email: string;
  password: string;
  plan?: string;
  imageUrl?: string;
}
