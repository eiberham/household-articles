import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";

import Button from "../components/Button.vue";

export const methods = {
  onClick: action("onClick")
};

storiesOf("Button", module).add("Default", () => ({
  title: "Components/Button",
  props: ["label", "control"],
  components: {
    Button
  },
  /**
   * Reactive data.
   *
   * @returns {object}
   */
  data() {
    return {};
  },
  template: '<Button @click="onClick">Click me</Button>',
  methods,
  argTypes: {
    label: {
      description: "overwritten description",
      table: {
        type: {
          summary: "something short",
          detail: "something really really long"
        }
      },
      control: {
        type: null
      }
    }
  }
}));

storiesOf("Button", module).add("Icon", () => ({
  title: "Components/Button",
  components: {
    Button
  },
  /**
   * Reactive data.
   *
   * @returns {object}
   */
  data() {
    return {};
  },
  template: '<Button icon="plus" @click="onClick"></Button>'
}));
