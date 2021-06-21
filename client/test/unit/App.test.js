import { mount } from "@vue/test-utils";
import App from "../../src/App.vue";

describe("App", () => {
  const wrapper = mount(App, {});

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test("matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
