<template>
  <div>
    <ul>
      <li v-for="item in allArticle">
        <router-link to="/rank">
          <ReadItem :img-url="item.imgUrl" :text="item.text" :date="item.date"/>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import ReadItem from "../ReadItem"
import {mapState} from 'vuex'

export default {
  components: {ReadItem},
  computed: {
    ...mapState(['allArticle'])
  },
}
</script>

<style lang="less" scoped>

</style>
