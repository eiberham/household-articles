import { storiesOf } from "@storybook/vue";

import Sidebar from "../components/Sidebar.vue";

storiesOf("Sidebar", module).add("Default", () => ({
  title: "Components/Sidebar",
  components: {
    Sidebar
  },
  /**
   * Reactive data.
   *
   * @returns {object}
   */
  data() {
    return {};
  },
  template: "<Sidebar></Sidebar>"
}));
