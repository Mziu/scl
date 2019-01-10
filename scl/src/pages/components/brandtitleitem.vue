<template>
  <div class="titleitem">
    <div class="titleitem_head">
      <div class="titleitem_head_title">{{ title }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'brandtitleitem',
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
  margin-top: 30px;
  .titleitem_head {
    height: 30px;
    line-height: 30px;
    .titleitem_head_title {
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 2px;
    }
    .titleitem_head_title:before {
      content: " ";
      margin-right: 30px;
      background-color: #820000;
      height: 30px;
      width: 5px;
      vertical-align: bottom;
      border-bottom: 5px solid #000;
      display: inline-block;
    }
  }
}
</style>
