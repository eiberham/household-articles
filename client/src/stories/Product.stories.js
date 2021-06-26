import { action } from "@storybook/addon-actions";
import Product from "../components/Product.vue";

export default {
  title: "Components/Product",
  component: Product
  /* argTypes: {
    route: {
      defaultValue: "all",
      control: { type: "string" }
    }
  } */
};

/**
 * @param args
 * @param root0
 * @param root0.argTypes
 * @returns {object}
 */
export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Product },
  template: `<Product />`,
  methods: {
    changeAction: action("changed"),
    /**
     * @param event
     */
    onChange(event) {
      this.route = event;
      this.changeAction(this.route);
    }
  }
});
