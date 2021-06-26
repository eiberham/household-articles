import { action } from "@storybook/addon-actions";
import Sidebar from "../components/Sidebar.vue";

export default {
  title: "Components/Sidebar",
  component: Sidebar
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
  components: { Sidebar },
  template: `<Sidebar />`
});
