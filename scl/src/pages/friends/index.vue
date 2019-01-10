<template>
  <div class="friends">
    <title-item :title="title"></title-item>
    <div>
      <div>上海极朗实业有限公司</div>
    </div>
  </div>
</template>
<script>
import titleItem from '../components/titleitem'
export default {
  name: 'friends',
  data () {
    return {
      friendslist: '',
      title: ''
    }
  },
  components: {
    titleItem
  },
  updated () {
    this.title = this.$t('m.friends.title')
    this.friendslist = this.$t('m.friends.friendslist')
  },
  created () {
    this.title = this.$t('m.friends.title')
    this.friendslist = this.$t('m.friends.friendslist')
  }
}
</script>
<style lang="scss" scoped>
.friends {
}
</style>
