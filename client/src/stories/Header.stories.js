import { storiesOf } from "@storybook/vue";

import Header from "../components/Header.vue";

storiesOf("Header", module).add("Default", () => ({
  title: "Components/Header",
  components: {
    Header
  },
  template: "<Header></Header>"
}));
