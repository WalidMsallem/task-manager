import Vuex from "vuex";
import { Items } from "./modules/Items/index";
import { RootState } from "./types";

export default new Vuex.Store<RootState>({
  modules: {
    Items,
  },
});
