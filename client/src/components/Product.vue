<template>
  <section class="opening">
    <div class="product-list" :class="{ show: show, hide: !show }">
      <div class="product-list__toggle" role="button" @click="show = false">
        <i class="toggle-icon" />
      </div>
      <h1 class="product-list__title">
        {{ title }}
      </h1>
      <template v-if="!selected">
        <div
          v-for="product in products"
          :key="product.name"
          class="product-list__item"
          @click="onSelected(product)"
        >
          {{ product.name }}
        </div>
      </template>
      <div v-else class="items-list">
        <div
          v-for="item in selected.items"
          :key="item.name"
          class="items-list__item"
        >
          <img class="items-list__img" :src="item.img" :alt="item.name" />
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
    <div class="actions">
      <div class="config">
        <Button @click="log('fijar')">
          Fijar
        </Button>
        <Button @click="log('borrar')">
          Borrar
        </Button>
      </div>
      <div class="control">
        <div class="control-zoom">
          <Button icon="plus" @click="log('zoom in')" />
          <Button icon="minus" @click="log('zoom out')" />
        </div>
        <div class="control-move">
          <Button icon="move" @click="log('move')" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "./Button.vue";
export default {
  components: {
    Button
  },
  props: {
    title: {
      type: String,
      required: true
    },
    products: {
      type: Array,
      required: true
    }
  },
  /**
   * Reactive data.
   *
   * @returns {object}
   */
  data() {
    return {
      show: false,
      selected: null
    };
  },
  watch: {
    /**
     * @param newVal
     * @param oldVal
     */
    products: function(newVal, oldVal) {
      this.selected = null;
      if (newVal !== oldVal) {
        if (!this.show) {
          this.show = true;
        }
      }
    }
  },
  methods: {
    /**
     * Logs a message in the console.
     *
     * @param {string} _message -
     */
    log: function(_message) {
      console.log("clicked " + _message + " button");
    },
    /**
     * Gets triggered whenever a product is selected.
     *
     * @param _product
     */
    onSelected: function(_product) {
      this.selected = _product;
    }
  }
};
</script>

<style lang="scss">
.opening {
  background: #e5e8eb;
  color: #000;
  display: grid;
  grid: {
    area: content;
    auto-columns: repeat(auto-fit, minmax(460px, 1fr));
    column: 2 / -1;
    template-columns: repeat(auto-fit, minmax(460px, 1fr));
  }
  min-height: 100%;

  .product-list {
    align-items: center;
    background-color: #f7f6f2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 1rem;
    position: relative;

    &.show {
      animation: show 0.5s ease-in;
      animation-fill-mode: forwards;
      display: flex;
    }

    &.hide {
      opacity: 0;
      transition: width 0s linear 1s;
      width: 0;
    }

    &__toggle {
      background: {
        color: #f7f6f2;
        image: url("../assets/icons/active.png");
        position: center center;
        repeat: no-repeat;
        size: 16px 16px;
      }
      content: "";
      clip-path: polygon(
        30% 0%,
        0 0,
        100% 16%,
        100% 83%,
        0 100%,
        0 100%,
        0% 70%,
        0 0
      );
      display: block;
      height: 48px;
      position: absolute;
      right: -16px;
      top: 50%;
      width: 16px;

      &:hover {
        cursor: pointer;
      }
    }

    &__title {
      font-weight: bold;
      text-transform: capitalize;
    }

    &__item {
      background: #fff;
      border-radius: 8px;
      margin: 4px 2px;
      padding: 2px;
      position: relative;
      text-align: center;
      width: 100%;

      &:hover {
        cursor: pointer;
      }

      &::after {
        background: {
          image: url("../assets/icons/active.png");
          position: center center;
          repeat: no-repeat;
          size: 16px 16px;
        }
        content: "";
        display: block;
        height: 16px;
        position: absolute;
        right: 8px;
        top: 4px;
        transform: rotate(180deg);
        width: 16px;
      }
    }

    .items-list {
      display: grid;
      grid: {
        auto-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1.5rem;
        template-columns: repeat(auto-fit, minmax(150px, 1fr));
      }
      height: auto;
      justify-items: center;
      margin: 0;
      padding: 0;
      width: 100%;

      &__item {
        background: #fff;
        border: 2px solid #e5e8eb;
        display: flex;
        flex-direction: column;
        height: 180px;
        justify-content: space-between;
        max-width: 150px;
        text-align: center;
      }

      &__img {
        box-shadow: inset 10px 10px 50px #fff;
        height: 150px;
        object-fit: cover;
        transition: opacity 0.25s ease-in-out;
        width: 100%;
        width: 150px;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }

  .actions {
    align-items: flex-end;
    background: #e5e8eb;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;

    .control {
      align-items: center;
      display: flex;
      justify-content: center;

      &-zoom {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      &-move {
        margin: 0 0 0 8px;
      }
    }
  }
}

@keyframes show {
  0% {
    width: 0;
  }
  50% {
    width: 50%;
  }
  100% {
    width: 100%;
  }
}
</style>
