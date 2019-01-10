<template lang="pug">
  ul
    li item1
    li item2
    li item3
    div#shaprt(style='color:red') hello vue {{ this.name }}

    div.btn.btn__icon.btn__text.btn__icon__success hello
</template>
<script>
export default {
  name: 'demo',
  data () {
    return {
      name: 'lol',
      list: [
        {
          title: 'first title'
        },
        {
          title: 'sec title'
        },
        {
          title: 'thrid title'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

.btn {
  background-color #000
  &__icon {
    color #ffffff
    &__success {
      font-size 20px
    }
  }
}
</style>
