import { StateCreator } from "zustand";
import { storage } from "services";

// export interface IProduct {
//   _id: number;
//   name: string;
//   price: number;
// }

export interface IBasketItem {
  product: any;
  quantity: number;
  totalPrice: number;
}

export interface IBasketStore {
  basket: IBasketItem[];
  addToBasket: (product: any) => void;
  removeFromBasket: (productId: number) => void;
  clearBasket: any;
  updateQuantity: (productId: number, quantity: number, price?: number) => void;
}

export const basketSlice: StateCreator<IBasketStore, [], []> = (
  set
): IBasketStore => {

  return {
    basket: JSON.parse(storage.get("basket") || "[]"),
    addToBasket: (product) =>
      set((state) => {
        const existingItem = state.basket.find(
          (item) => item.product._id === product._id
        );
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.basket.push({ product, quantity: 1, totalPrice: 0 });
        }
        storage.set("basket", JSON.stringify([...state.basket]))
        return { basket: [...state.basket] };
      }),
    removeFromBasket: (productId) => {
      const basketInStorage = JSON.parse(storage.get('basket') || "")
      const updatedBasketInStorage = JSON.stringify(basketInStorage.filter((item: any) => item.product._id !== productId))
      storage.set('basket', updatedBasketInStorage)
      set((state) => ({
        basket: state.basket.filter((item) => item.product._id !== productId),
      }))
    },
    clearBasket: () => {
      storage.set('basket', "[]")
      set((state) => ({
        basket: [],
      }))
    },
    updateQuantity: (productId, quantity, price) =>
      set((state) => {
        const updatedBasket = state.basket.map((item) =>
          //@ts-ignore
          item.product._id === productId ? { ...item, quantity, totalPrice: (+quantity * +price) } : item
        );
        storage.set("basket", JSON.stringify(updatedBasket))
        return { basket: updatedBasket };
      })
  };
};
