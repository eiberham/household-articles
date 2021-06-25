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
  align-items: center;
  background: #242a2e;
  color: #fff;
  display: flex;
  grid: {
    area: header;
    column: 1 / -1;
  }
  height: 100px;
  justify-content: flex-end;
  padding: 0 140px;
  position: relative;

  &::before {
    background: {
      image: url("../assets/icons/home.svg");
      position: center center;
      repeat: no-repeat;
      size: 32px 32px;
    }
    content: "";
    display: block;
    height: 32px;
    left: 140px;
    position: absolute;
    top: 30px;
    width: 32px;
  }
}
</style>
