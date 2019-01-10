<template>
  <div class="copyright">
    <title-item :title="title"></title-item>
    <word-item :othertitle="othertitle" :list="copyrightlist"></word-item>
  </div>
</template>
<script>
import titleItem from '../components/titleitem'
import wordItem from '../components/worditem'
export default {
  name: 'copyright',
  data () {
    return {
      copyrightlist: [],
      title: '',
      othertitle: ''
    }
  },
  components: {
    titleItem,
    wordItem
  },
  created () {
    this.title = this.$t('m.copyright.title')
    this.othertitle = this.$t('m.copyright.othertitle')
    this.copyrightlist = this.$t('m.copyright.copyrightlist')
  },
  updated () {
    this.title = this.$t('m.copyright.title')
    this.othertitle = this.$t('m.copyright.othertitle')
    this.copyrightlist = this.$t('m.copyright.copyrightlist')
  }
}
</script>
<style lang="scss" scoped>
.data {
}
</style>
