<template>
  <div class="item">
    <div class="item__panel" v-for="n in list" :key="n.key">
      <div class="item__panel__title">{{ n.title }}</div>
      <div class="item__panel__content">
        <div class="item__panel__content__img" v-if="n.showimg === ''">
          <div class="item__panel__content__img__top">
            <img :src="n.imglist[0]" alt="">
            <img :src="n.imglist[1]" alt="" v-if="n.hasstyle !== ''" :style="n.hasstyle">
          </div>
          <div class="item__panel__content__img__bottom">
            <img :src="n.imglist[2]" alt="">
          </div>
        </div>
        <!-- 只有一张照片时 -->
         <div class="item__panel__content__img" v-if="n.showimg !== ''">
          <div class="item__panel__content__img__showimg">
            <img :src="n.showimg" alt="">
          </div>
          <div class="item__panel__content__img__showimg2" v-if="n.showimg2 !== ''">
            <img :src="n.showimg2" alt="">
          </div>
        </div>
        <div class="item__panel__content__info">{{ n.desc }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'itempanel',
  data () {
    return {
    }
  },
  props: {
    list: Array
  },
  mounted () {
    console.log(this.list)
  }
}
</script>
<style lang="scss" scoped>
.item {
  .item__panel {
    margin-top: 30px;
    .item__panel__title {
      font-size: 18px;
      line-height: 3em;
      font-weight: bold;
    }
    .item__panel__content {
      display: flex;
      justify-content: space-between;
      .item__panel__content__img {
        position: relative;
        width: 100%;
        .item__panel__content__img__top {
          display: flex;
          justify-content: space-between;
          img {
            margin-bottom: 5px;
          }
        }
        .item__panel__content__img__top img:nth-child(1) {
          margin-right: 10px;
        }
        .item__panel__content__img__bottom {
          img {
            width:  100%;
          }
        }
        .item__panel__content__img__showimg2 {
          margin-top: 10px;
        }
      }
      .item__panel__content__info {
        padding: 0 50px;
        text-indent: 2em;
        font-size: 16px;
        text-align: left;
        line-height: 2em;
        width: 100%;
      }
    }
  }
}
</style>
