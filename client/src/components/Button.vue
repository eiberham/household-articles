<template>
  <button
    class="button"
    :class="{
      minus: icon == 'minus',
      plus: icon == 'plus',
      move: icon == 'move'
    }"
    type="button"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      required: false,
      default: ""
    }
  },
  /**
   * Reactive data.
   *
   * @returns {object}
   */
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.button {
  background: #fff;
  border: 2px #f7f6f2 solid;
  border-radius: 4px;
  padding: 12px;
  color: #000;
  font: {
    size: 16px;
    family: sans-serif;
    weight: 500;
  }
  min-width: 60px;

  &:hover {
    cursor: pointer;
    background: #f7f6f2;
  }

  &.minus {
    position: relative;
    width: auto;
    min-width: unset;

    &::after {
      background: {
        image: url("../assets/icons/minus.png");
        repeat: no-repeat;
        position: center center;
        size: 16px 16px;
      }
      content: "";
      display: block;
      position: absolute;
      top: 4px;
      left: 4px;
      width: 16px;
      height: 16px;
    }
  }

  &.plus {
    position: relative;
    min-width: unset;
    width: auto;

    &::after {
      background: {
        image: url("../assets/icons/plus.png");
        repeat: no-repeat;
        position: center center;
        size: 16px 16px;
      }
      content: "";
      display: block;
      position: absolute;
      top: 4px;
      left: 4px;
      width: 16px;
      height: 16px;
    }
  }

  &.move {
    position: relative;
    width: 40px;
    height: 56px;
    min-width: unset;

    &::after {
      background: {
        image: url("../assets/icons/arrow.svg");
        repeat: no-repeat;
        position: top center;
        size: 36px 56px;
      }

      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 36px;
      height: 56px;
      transform: rotate(45deg);
    }
  }
}
</style>
