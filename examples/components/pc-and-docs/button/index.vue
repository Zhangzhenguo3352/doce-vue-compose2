<template>
    <div class="kt-button">
      <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'ButtonComponent'
}
</script>
<style lang="scss" scoped>
.kt-button {
  border: 1px solid #41a259;
  background-color: #41a259;
  display: inline-block;
  border-radius: 2px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #fff;
  padding: 0px 19px;
  cursor: pointer;
  white-space: nowrap;
}
</style>

