<script lang="ts" setup>

</script>

<template>
  <div class="btn-group">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.btn-group {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;

  button {
    margin-right: 4px;
    margin-bottom: 4px;
  }
}
</style>
