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
.sidebar {
  background: #fff;
  grid: {
    area: sidebar;
    column: 1 / 2;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .menu {
    width: 100%;

    &__wrapper {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    &__item {
      background: #fff;
      color: #000;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      line-height: 1.5;
      padding: 12px 0;
      text: {
        align: center;
        decoration: none;
      }
      width: 100%;
      position: relative;
      height: 70px;

      &:hover {
        cursor: pointer;
      }

      &.active {
        background-color: #f7f6f2;
      }

      &.opening {
        &::before {
          background: {
            image: url("../assets/icons/opening.png");
            repeat: no-repeat;
            position: center center;
            size: 32px 32px;
          }
          content: "";
          display: block;
          position: absolute;
          top: 25px;
          left: 32px;
          width: 32px;
          height: 32px;
        }
      }

      &.ending {
        &::before {
          background: {
            image: url("../assets/icons/ending.png");
            repeat: no-repeat;
            position: center center;
            size: 32px 32px;
          }
          content: "";
          display: block;
          position: absolute;
          top: 25px;
          left: 32px;
          width: 32px;
          height: 32px;
        }
      }

      &.equipment {
        &::before {
          background: {
            image: url("../assets/icons/equipment.png");
            repeat: no-repeat;
            position: center center;
            size: 32px 32px;
          }
          content: "";
          display: block;
          position: absolute;
          top: 25px;
          left: 32px;
          width: 32px;
          height: 32px;
        }
      }
    }
  }
}
</style>
