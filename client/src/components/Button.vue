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
@mixin icons($url) {
  min-width: unset;
  position: relative;
  width: auto;

  &::after {
    background: {
      image: url($url);
      position: center center;
      repeat: no-repeat;
      size: 16px 16px;
    }
    content: "";
    display: block;
    height: 16px;
    left: 4px;
    position: absolute;
    top: 4px;
    width: 16px;
  }
}

.button {
  background: #fff;
  border: 2px #f7f6f2 solid;
  border-radius: 4px;
  color: #000;
  font: {
    size: 16px;
    family: sans-serif;
    weight: 500;
  }
  min-width: 60px;
  padding: 12px;

  &:hover {
    background: #f7f6f2;
    cursor: pointer;
  }

  &.minus {
    @include icons("../assets/icons/minus.png");
  }

  &.plus {
    @include icons("../assets/icons/plus.png");
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
