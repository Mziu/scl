<template>
  <div class="medicalnavitem">
    <div class="medicalnavitem_text">{{ tst }}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: {
    tst: String
  }
}
</script>
<style lang="scss" scoped>
.medicalnavitem {
  .medicalnavitem_text {
    padding: 5px 20px;
    font-size: 14px;
    color: #2a2354;
    display: inline-block;
    border-left: 1px solid #2a2354;
    background-color: #eee;
    margin: 10px 0;
  }
}
</style>
