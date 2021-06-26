/* import { storiesOf } from "@storybook/vue";
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
  data() {
    return {};
  },
  template: '<Button @click="onClick">Click me</Button>',
  methods
}));

storiesOf("Button", module).add("Icon", () => ({
  title: "Components/Button",
  components: {
    Button
  },
  data() {
    return {};
  },
  template: '<Button icon="plus" @click="onClick"></Button>'
})); */

import { action } from "@storybook/addon-actions";
import Button from "../components/Button.vue";

export default {
  title: "Components/Button",
  component: Button
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
  components: { Button },
  template: `<Button>Click me</Button>`,
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

/**
 * @param args
 * @param root0
 * @param root0.argTypes
 * @returns {object}
 */
export const Icon = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: `<Button icon="plus" />`,
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
