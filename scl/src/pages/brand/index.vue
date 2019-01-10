<template>
  <div class="brand">
    <div class="brand__banner">
      <div class="brand__banner__box">
        <div class="brand__banner__box__title">{{ $t('m.brand.banner__title') }}</div>
        <div class="brand__banner__box__desc">{{ $t('m.brand.banner__desc') }}</div>
      </div>
      <div class="brand__banner__square"></div>
    </div>
    <brand-title-item :title=t[0]></brand-title-item>
    <div class="brand__origin">
      <div class="brand__origin__box">
        <div class="brand__origin__box__part1">
          <img src="https://index.cuican520.com/brand1.png" alt="">
        </div>
        <div class="brand__origin__box__part2">{{ part2 }}</div>
        <div class="brand__origin__box__part3">
          <div class="brand__origin__box__part3__info">{{ part3 }}</div>
          <div class="brand__origin__box__part3__img"><img src="https://index.cuican520.com/brand2.png" alt=""></div>
        </div>
      </div>
      <div class="brand__origin__line"></div>
    </div>
    <brand-title-item :title=t[1]></brand-title-item>
    <div class="brand__cuicanApp">
      <div v-for=" n in cuicanApp" :key="n.key">{{ n }}</div>
      <div class="brand__cuicanApp__code2">
        <div style="display: inline-block;">
          <img src="https://index.cuican520.com/code2.png" alt="">
          <div class="brand__cuicanApp__code2__scanme">{{ $t('m.brand.scanme') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import brandTitleItem from '../components/brandtitleitem'
export default {
  name: 'brand',
  data () {
    return {
      brand: {},
      t: [],
      part2: '',
      part3: '',
      cuicanApp: []
    }
  },
  components: {
    brandTitleItem
  },
  mounted () {
    this.brand = this.$t('m.brand')
    this.part2 = this.$t('m.brand.brand__origin.part2')
    this.part3 = this.$t('m.brand.brand__origin.part3')
    const b = this.brand.brand__title
    for (let i = 0; i < b.length; i++) {
      this.t.push(b[i].title)
    }
    const c = this.brand.cuicanApp
    for (let i = 0; i < c.length; i++) {
      this.cuicanApp.push(c[i].text)
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.brand {
  max-width: 960px;
  margin: 0 auto;
  .brand__banner {
    height: 220px;
    background-color: #273646;
    color: #fff;
    text-align: center;
    display: flex;
    align-items: center;
    vertical-align: middle;
    position: relative;
    .brand__banner__box {
      width: 40%;
      margin: 0 auto;
      line-height: 2em;
      .brand__banner__box__title {
        font-size: 24px;
      }
      .brand__banner__box__desc {
        font-size: 16px;
      }
    }
    .brand__banner__square {
      width: 30px;
      height: 30px;
      background-color: #273646;
      position: absolute;
      bottom: -15px;
      left: 50%;
      margin-left: -15px;
      transform: rotate(45deg)
    }
  }
  .brand__origin {
    position: relative;
    .brand__origin__box {
      display: flex;
      justify-content: flex-start;
      font-size: 14px;
      line-height: 2em;
      img {
        width: 100%;
      }
      .brand__origin__box__part1 {
        margin-top: 30px;
      }
      .brand__origin__box__part2 {
        text-indent: 2em;
        padding: 0 10px;
      }
      .brand__origin__box__part3 {
        .brand__origin__box__part3__info {
          text-indent: 2em;
        }
      }
    }
    .brand__origin__line {
      position: absolute;
      width: 600px;
      height: 1px;
      background-color: #666;
      transform: rotate(21deg);
      left: -17px;
      bottom: 120px;
    }
    .brand__origin__box>div {
      width: 33.3%;
    }
  }
  .brand__cuicanApp {
    margin: 20px 0 0 30px;
    line-height: 2em;
    font-size: 14px;
    position: relative;
    .brand__cuicanApp__code2 {
      position: absolute;
      right: 0;
      bottom: 0;
      text-align: right;
      img {
        vertical-align: bottom;
        width: 100%;
      }
      .brand__cuicanApp__code2__scanme {
        background-color: #273646;
        color: #fff;
        text-align: center;
      }
    }
    .brand__cuicanApp__code2>div {
      width: 50%;
      background-color: #273646;
      padding: 5px 5px 0 5px;
    }
  }
}
</style>
