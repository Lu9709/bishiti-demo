<template>
  <div class="layout-wrapper">
    <div class="content">
      <slot/>
    </div>
    <Nav/>
  </div>

</template>
<script>
import Nav from "./Home/Nav"
export default {
  name: "Layout",
  components:{Nav}
}
</script>
<style>
.layout-wrapper{
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content{
  overflow: auto;
  flex-grow: 1;
}
</style>
