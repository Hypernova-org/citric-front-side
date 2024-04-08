import { StateCreator } from "zustand";
import { storage } from "services";

export interface IProduct {
  id: number;
  name: string;
  price: number;
}

export interface IBasketItem {
  product: IProduct;
  quantity: number;
}

export interface IBasketStore {
  basket: IBasketItem[];
  addToBasket: (product: IProduct) => void;
  removeFromBasket: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
}

export const basketSlice: StateCreator<IBasketStore, [], []> = (
  set
): IBasketStore => {

  return {
    // basket:  [],
    basket: JSON.parse(storage.get("basket") || "[]"),
    addToBasket: (product) =>
      set((state) => {
        const existingItem = state.basket.find(
          (item) => item.product.id === product.id
        );
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.basket.push({ product, quantity: 1 });
        }
        storage.set("basket", JSON.stringify([...state.basket]))
        return { basket: [...state.basket] };
      }),
    removeFromBasket: (productId) => {
      const basketInStorage = JSON.parse(storage.get('basket') || "")
      const updatedBasketInStorage = JSON.stringify(basketInStorage.filter((item: any) => item.product.id !== productId))
      storage.set('basket', updatedBasketInStorage)
      set((state) => ({
        basket: state.basket.filter((item) => item.product.id !== productId),
      }))
    },
    updateQuantity: (productId, quantity) =>
      set((state) => {
        const updatedBasket = state.basket.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        );
        storage.set("basket", JSON.stringify(updatedBasket))
        return { basket: updatedBasket };
      }),
  };
};
