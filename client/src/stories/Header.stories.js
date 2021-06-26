import { action } from "@storybook/addon-actions";
import Header from "../components/Header.vue";

export default {
  title: "Components/Header",
  component: Header
};

/**
 * @param args
 * @param root0
 * @param root0.argTypes
 * @returns {object}
 */
export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Header },
  template: `<Header />`
});
