<template>
  <section class="sidebar">
    <nav class="menu">
      <ul class="menu__wrapper" role="list">
        <li v-active class="menu__item opening" data-name="opening">
          Opening
        </li>
        <li v-active class="menu__item equipment" data-name="equipment">
          Equipment
        </li>
        <li v-active class="menu__item ending" data-name="ending">
          Ending
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  directives: {
    active: {
      /**
       * Sets the active class whenever the item is clicked.
       *
       * @param {object} _el - The element the directive is bound to.
       * @param {object} _binding - An object containing directive properties.
       * @param {object} _vnode - The virtual node produced by vue's compiler.
       */
      inserted: function(_el, _binding, _vnode) {
        _el.addEventListener("click", _e => {
          const items = document.getElementsByClassName("menu__item");
          items.forEach(item => item.classList.remove("active"));
          _e.target.classList.toggle("active");
          _vnode.context.$emit("selected", _e.target.getAttribute("data-name"));
        });
      }
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
@mixin menuitem_icon($url) {
  &::before {
    background: {
      image: url($url);
      position: center center;
      repeat: no-repeat;
      size: 32px 32px;
    }
    content: "";
    display: block;
    height: 32px;
    left: 32px;
    position: absolute;
    top: 25px;
    width: 32px;
  }
}

.sidebar {
  align-items: center;
  background: #fff;
  display: flex;
  flex-direction: column;
  grid: {
    area: sidebar;
    column: 1 / 2;
  }
  justify-content: center;
  max-width: 100px;

  .menu {
    width: 100%;

    &__wrapper {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    &__item {
      align-items: flex-end;
      background: #fff;
      color: #000;
      display: flex;
      height: 70px;
      justify-content: center;
      line-height: 1.5;
      padding: 12px 0;
      position: relative;
      text: {
        align: center;
        decoration: none;
      }
      width: 100%;

      &:hover {
        cursor: pointer;
      }

      &.active {
        background-color: #f7f6f2;
      }

      &.opening {
        @include menuitem_icon("../assets/icons/opening.png");
      }

      &.ending {
        @include menuitem_icon("../assets/icons/ending.png");
      }

      &.equipment {
        @include menuitem_icon("../assets/icons/equipment.png");
      }
    }
  }
}
</style>
