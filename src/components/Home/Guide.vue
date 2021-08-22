<template>
  <nav>
    <div v-for="item in guide" >
      <router-link to="/demo" active-class="selected">
        <Icon :img-url="item.imgUrl" :text="item.text"/>
      </router-link>
    </div>
  </nav>
</template>
<script>
import Icon from "../Icon"
import {mapState} from "vuex"
export default {
  components: {Icon},
  computed:{
    ...mapState(['guide'])
  }
}
</script>
<style lang="less" scoped>
nav {
  display: flex;
  justify-content: space-around;
  font-size:12px;
}

</style>
