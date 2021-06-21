<template>
  <section class="header">
    <select>
      <option>Guardar y salir</option>
      <option>Salir sin guardar</option>
      <option>Guardar y continuar</option>
    </select>
  </section>
</template>

<script>
export default {
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
.header {
  background: #9a9996;
  color: #fff;
  grid: {
    area: header;
    column: 1 / -1;
  }

  height: 100px;

  display: flex;
  padding: 0 140px;
  justify-content: flex-end;
  align-items: center;

  &::before {
    background: {
      image: url("../assets/icons/home.svg");
      repeat: no-repeat;
      position: center center;
      size: 32px 32px;
    }
    content: "";
    display: block;
    position: absolute;
    top: 30px;
    left: 140px;
    height: 32px;
    width: 32px;
  }
}
</style>
