<template>
  <span class="button-wrapper">
    <button v-if="`${type} === 'add'`" :class="`button-${type}`">
      <slot/>
    </button>
  </span>
</template>
<script>
export default {
  props: ['type']
}
</script>
<style lang="less" scoped>
@import '//at.alicdn.com/t/font_2383421_7w9ppqkx4qo.css';

.button-wrapper {
  padding: 4px 4px;

  button {
    width: 172px;
    height: 82px;
    font-size: 20px;
    border-radius: 4px;
  }

  .button-add {
    border: 1px dashed #f3cf56;
    font-size: 18px;
    color: #f3cf56;
    background-color: #fefcf6;
  }

  .button-more {
    background-color: #f3cf56;
    color: white;
  }
}
</style>
