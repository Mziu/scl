<template>
  <div class="worditem">
    <div class="worditem_box">
      <div class="worditem_box_ohtertitle"> {{ othertitle }}</div>
      <div v-for="n in list" :key="n.key" class="worditem_info">
        <div v-if="n.title === undefined"><span class="worditem_no">{{ n.id }}.  </span>{{ n.text }}</div>
        <div v-if="n.title !== undefined"><div class="worditem_no">{{ n.title }}.  </div><div class="worditem_info_text">{{ n.text }}</div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'worditem',
  data () {
    return {
    }
  },
  props: {
    list: Array,
    othertitle: String
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
.worditem {
  .worditem_box {
    max-width: 980px;
    margin: 0 auto;
    .worditem_box_ohtertitle {
      font-size: 14px;
      color: #505050;
      line-height: 40px;
    }
    .worditem_info {
      line-height: 40px;
      margin: 20px 0;
      .worditem_no {
        font-size: 18px;
      }
    }
  }
  .worditem_info_text {
    font-size: 13px;
  }
}
</style>
