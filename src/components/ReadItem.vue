<template>
  <div class="item-wrapper">
    <img :src="imgUrl" alt="">
    <article>
      <span>{{text}}</span>
      <p>{{date}}</p>
    </article>
  </div>
</template>
<script>
export default {
  props:['imgUrl','text','date']
}

</script>

<style lang="less" scoped>
.item-wrapper {
  display: flex;
  padding: 4px 15px;
  justify-content: space-between;
  align-items: center;

  article {
    padding-left: 10px;
    position: relative;
    color:#525251;
    display: flex;
    flex-direction: column;
    height: 60px;
    span{
      font-size: 15px;
    }
    p {
      position: absolute;
      bottom: 0;
      right: 0;
      font-size:2px;
      color:inherit;
    }
  }
}
</style>
