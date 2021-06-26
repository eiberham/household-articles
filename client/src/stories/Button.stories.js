import { action } from "@storybook/addon-actions";
import Button from "../components/Button.vue";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" }
    }
  }
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
  template: `<Button @click="onClick">Click me</Button>`,
  methods: {
    onClick: action("clicked")
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
  template: `<Button icon="plus" @click="onClick" />`,
  methods: {
    onClick: action("clicked")
  }
});
