import { create } from "zustand";
import { authSlice, IAuthSlice } from "./auth";
import { systemSlice, ISystem } from "./system";
import { basketSlice, IBasketStore } from "./basket";


const useBoundStore = create<IAuthSlice & ISystem & IBasketStore>()((...a) => ({
  ...authSlice(...a),
  ...systemSlice(...a),
  ...basketSlice(...a),

}));

export default useBoundStore;
