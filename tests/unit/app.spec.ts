/* eslint-disable @typescript-eslint/ban-types */
import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";
import Card from "@/components/shared/Card.vue";
import { Item } from "@/store/modules/Items/types";

describe("Header.vue", () => {
  it("Renders App title", () => {
    const appTitle = "Transcriptions";
    const wrapper = shallowMount(Header, {});
    expect(wrapper.text()).toMatch(appTitle);
  });
});

describe("Card.vue", () => {
  it("Should render a card with the data passed", () => {
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
