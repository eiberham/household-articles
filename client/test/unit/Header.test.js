import { mount } from "@vue/test-utils";
import Header from "../../src/components/Header.vue";

describe("Heeader", () => {
  const wrapper = mount(Header, {});

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test("matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
