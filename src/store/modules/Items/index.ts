import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { ItemState } from "./types";
import { RootState } from "../../types";

export const state: ItemState = {
  items: [],
  errors: {
    getItems: "",
    uploadItems: "",
  },
  loading: {
    getItems: false,
    uploadItems: false,
  },
};

const Items: Module<ItemState, RootState> = {
  state,
  getters,
  actions,
  mutations,
};
export { Items };
