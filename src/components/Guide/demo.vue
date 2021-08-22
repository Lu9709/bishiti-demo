<template>
  <div>
    <el-empty>
      <el-button @click="ToHome" type="primary">返回</el-button>
    </el-empty>
  </div>
</template>
<script>
export default {
  methods:{
    ToHome(){
      this.$router.push('/home')
    }
  }
}
</script>
<style lang="less">

</style>
