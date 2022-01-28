import { MutationTree } from "vuex";
import { ItemState, Item } from "./types";

const mutations: MutationTree<ItemState> = {
  getItemsRequest(state) {
    state.loading.getItems = true;
    state.errors.getItems = "";
  },
  getItemsSuccess(state, items: Item[]) {
    state.loading.getItems = false;
    state.errors.getItems = "";
    state.items = items;
  },
  getItemsfailure(state, error) {
    state.loading.getItems = false;
    state.errors.getItems = error;
  },
  addItem(state, item: Item) {
    state.items = state.items.concat(item);
  },
  editItem(state, item: Item) {
    state.items = state.items.map((el) => {
      if (el.id === item.id) {
        return item;
      }
      return el;
    });
  },
  deleteItem(state, id: string) {
    state.items = state.items.filter((el) => el.id !== id);
  },
  uploadItemsRequest(state) {
    state.loading.uploadItems = true;
    state.errors.uploadItems = "";
  },
  uploadItemsSuccess(state, items: Item[]) {
    state.loading.uploadItems = false;
    state.errors.uploadItems = "";
    state.items = items;
  },
  uploadItemsfailure(state, error) {
    state.loading.uploadItems = false;
    state.errors.uploadItems = error;
  },
};
export { mutations };
