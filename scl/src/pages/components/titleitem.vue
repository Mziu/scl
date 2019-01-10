<template>
  <div class="titleitem">
    <div class="titleitem_head">
      <div class="titleitem_head_title">{{ title }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'titleitem',
  data () {
    return {
    }
  },
  props: {
    title: String
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
.titleitem {
  .titleitem_head {
    text-align: center;
    .titleitem_head_title {
      margin: 50px 0;
      font-size: 30px;
      display: inline-block;
      padding: 10px;
      border-bottom: 2px solid #000;
    }
  }
}
</style>
