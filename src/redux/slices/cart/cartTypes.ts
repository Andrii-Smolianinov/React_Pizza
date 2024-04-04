export type ItemsCart = {
  id: string;
  images: string;
  tittle: string;
  count: number;
  price: number;
  itemPrice: number;
  selectDiameter: string;
};

export interface CartSliceState {
  itemsCart: ItemsCart[];
  totalPrice: number;
}
