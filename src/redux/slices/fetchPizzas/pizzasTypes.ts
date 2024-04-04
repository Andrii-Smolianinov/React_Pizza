export type Data = {
  id: string;
  images: string;
  tittle: string;
  price: number;
  category: number[];
  rating: number;
  description: string;
};

type Items = {
  id: string;
  images: string;
  tittle: string;
  price: number;
  category: number[];
};

export interface PizzasSliceState {
  items: Items[];
  status: "loading" | "success" | "error";
}

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
