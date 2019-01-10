<template>
  <div class="panel">
    <watch-item :list="list"></watch-item>
  </div>
</template>
<script>
import watchItem from '../components/watchitem'
export default {
  name: 'watch',
  data () {
    return {
      list: []
    }
  },
  components: {
    watchItem
  },
  created () {
    let a = this.$route.query.id
    console.log(a)
    this.list = this.$t(`m.product.productshowarray.germanybrand[` + a + `].children`)
  },
  updated () {
    let a = this.$route.query.id
    console.log(a)
    this.list = this.$t(`m.product.productshowarray.germanybrand[` + a + `].children`)
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.panel {
  width: 980px;
  margin: 0 auto;
}
</style>
