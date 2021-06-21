import { mount } from "@vue/test-utils";
import Sidebar from "../../src/components/Sidebar.vue";

describe("Sidebar", () => {
  const wrapper = mount(Sidebar, {});

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test("matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test("directive works", () => {
    const menu = wrapper.findAll(".menu__item");
    menu.at(0).trigger("click");

    expect(menu.at(0).classes()).toContain("active");
    expect(menu).toHaveLength(3);
  });
});
