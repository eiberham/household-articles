import { storiesOf } from "@storybook/vue";

import Header from "../components/Header.vue";

storiesOf("Header", module).add("Default Header", () => ({
  title: "Components/Header",
  components: {
    Header
  },
  /**
   * Reactive data.
   *
   * @returns {object}
   */
  data() {
    return {};
  },
  template: "<Header></Header>"
}));
