import { storiesOf } from "@storybook/vue";

import Button from "../components/Button.vue";

storiesOf("Button", module).add("Default Button", () => ({
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
  template: "<Button>Click me</Button>"
}));
