import { mount } from "@vue/test-utils";
import Product from "../../src/components/Product.vue";

import data from "../../src/__mocks__/data/products.json";

describe("Product", () => {
  const wrapper = mount(Product, {
    propsData: {
      title: "Equipment",
      products: data
    }
  });

  test("matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test("renders correctly", () => {
    expect(wrapper.find(".product-list__title").text()).toBe("Equipment");
    expect(wrapper.findAll(".product-list__item")).toHaveLength(2);
  });
});
