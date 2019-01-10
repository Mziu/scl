<template>
  <div class="data">
    <title-item :title="title"></title-item>
    <word-item :othertitle="othertitle" :list="datalist"></word-item>
  </div>
</template>
<script>
import titleItem from '../components/titleitem'
import wordItem from '../components/worditem'
export default {
  name: 'dota',
  data () {
    return {
      datalist: [],
      title: '',
      othertitle: ''
    }
  },
  components: {
    titleItem,
    wordItem
  },
  updated () {
    this.title = this.$t('m.data.title')
    this.othertitle = this.$t('m.data.othertitle')
    this.datalist = this.$t('m.data.datalist')
  },
  created () {
    this.title = this.$t('m.data.title')
    this.othertitle = this.$t('m.data.othertitle')
    this.datalist = this.$t('m.data.datalist')
  }
}
</script>
<style lang="scss" scoped>
.data {
}
</style>
