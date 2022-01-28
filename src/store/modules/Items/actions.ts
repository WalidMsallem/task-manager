/* eslint-disable @typescript-eslint/no-explicit-any */
import { ActionTree } from "vuex";
import axios from "axios";
import { ItemState, Item } from "./types";
import { RootState } from "../../types";
import { v4 as uuidv4 } from "uuid";
import urls from "./services";
const actions: ActionTree<ItemState, RootState> = {
  async fetchItems({ commit }): Promise<any> {
    console.log("fetchItems");
    try {
      commit("getItemsRequest");
      const response = await axios.get(urls.mockyApi);
      commit("getItemsSuccess", response.data);
    } catch (error) {
      console.log(error);
      commit("getItemsfailure", error);
    }
  },
  addItem({ commit }, item: Item) {
    commit("addItem", {
      ...item,
      id: uuidv4(),
    });
  },
  editItem({ commit }, item: Item) {
    commit("editItem", item);
  },
  deleteItem({ commit }, id: string) {
    commit("deleteItem", id);
  },
  async uploadItems({ state, commit }): Promise<any> {
    console.log("uploadItems");
    try {
      commit("uploadItemsRequest");
      const response = await axios.post(urls.mockyApi, state.items);
      commit("uploadItemsSuccess", response.data);
    } catch (error) {
      console.log(error);
      commit("uploadItemsfailure", error);
    }
  },
};
export { actions };
