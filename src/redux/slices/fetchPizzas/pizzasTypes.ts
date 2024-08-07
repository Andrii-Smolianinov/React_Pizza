export type Data = {
  id: string;
  images: string;
  tittle: string;
  price: number;
  categories: number[];
  rating: number;
  description: string;
};

type Items = {
  id: string;
  images: string;
  tittle: string;
  price: number;
  categories: number[];
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface PizzasSliceState {
  items: Items[];
  status: Status;
}