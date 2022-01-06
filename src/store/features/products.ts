import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../";
import { Products } from "../../@types";

interface SavedProducts extends Products {
  isInCart: boolean;
  isLiked: boolean;
}

const initial: SavedProducts[] = [];

export const productsSlice = createSlice({
  name: "products",
  initialState: initial,
  reducers: {
    saveProduct: (state, action: PayloadAction<Products>) => {
      state.push({ ...action.payload, isInCart: false, isLiked: false });
    },
    addProductToLikes: (
      state,
      action: PayloadAction<{ id: string; actionType: "add" | "remove" }>
    ) => {
      const { actionType, id } = action.payload;
      const product = state.findIndex((p) => p.id === id);
      state[product].isLiked = actionType === "add" ? true : false;
    },
    addProductToCart: (state, action: PayloadAction<{ id: string }>) => {
      const product = state.findIndex((p) => p.id === action.payload.id);
      state[product].isInCart = true;
    },
  },
});

export const { addProductToLikes, saveProduct, addProductToCart } =
  productsSlice.actions;
export const getStoredProducts = createSelector(
  (state: RootState) => state.products,
  (products) => products
);
export const getLikedProductsById = createSelector(
  (state: RootState) => state.products,
  (products) => products.filter((p) => p.isLiked).map((p) => p.id)
);
export const getProductsInCartById = createSelector(
  (state: RootState) => state.products,
  (products) => products.filter((p) => p.isInCart).map((p) => p.id)
);
export default productsSlice.reducer;
