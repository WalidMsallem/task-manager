/* eslint-disable @typescript-eslint/ban-types */
import { shallowMount } from "@vue/test-utils";
// import Home from "@/views/Home.vue";
import Header from "@/components/Header.vue";
import Card from "@/components/shared/Card.vue";
import CardList from "@/components/CardList.vue";
import { Item } from "@/store/modules/Items/types";
import Vuex from "vuex";
import { getters as Getters } from "@/store/modules/Items/getters";

describe("Header.vue", () => {
  it("renders props.msg when passed", () => {
    const appTitle = "Transcriptions";
    const wrapper = shallowMount(Header, {
      // props: { msg },
    });
    console.log("wrapper.text()", wrapper.text());
    expect(wrapper.text()).toMatch(appTitle);
  });
});
describe("Card.vue", () => {
  it("renders props.msg when passed", () => {
    const item: Item = {
      title: "voice1",
      description: "description",
      id: "1",
    };
    const wrapper = shallowMount(Card, {
      props: { ...item },
    });
    expect(wrapper.text()).toMatch(item.title);
    expect(wrapper.text()).toMatch(item.description);
  });
});
