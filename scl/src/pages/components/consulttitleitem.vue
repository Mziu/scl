<template>
  <div class="titleitem">
    <div class="titleitem_head">
      <div class="titleitem_head_title">{{ title }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'consulttitle',
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
    margin: 20px 0;
    height: 36px;
    line-height: 30px;
    .titleitem_head_title {
      font-size: 30px;
      color: #25204a;
      display: inline-block;
    }
    .titleitem_head_title:before {
      content: "";
      display: inline-block;
      width: 30px;
      height: 30px;
      background-color: #25204a;
      margin-right: 10px;
      vertical-align: -2px;
    }
  }
}
</style>
