import { GetterTree } from "vuex";
import { ItemState } from "./types";
import { RootState } from "../../types";

const getters: GetterTree<ItemState, RootState> = {
  allItems(state: ItemState) {
    return state.items;
  },
  getOrUploadloading(state: ItemState) {
    return state.loading.getItems || state.loading.uploadItems;
  },
};

export { getters };
