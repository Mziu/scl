<template>
  <div>
    <div class="sclbanner" @click="naveto('brand')">
      <img src="https://index.cuican520.com/banner.png" alt="">
    </div>
    <div class="contentbox">
      <div class="news">{{$t('m.news')}}</div>
      <div class="probox">

        <div class="pro" v-for="n in menulist" :key="n.key">
          <div class="protitle" @click="naveto(n.path)">
            <div class="pointfront">
              <div class="proline"></div>
              <div class="protext">{{ n.title }}</div>
            </div>
            <div class="proicon">>></div>
          </div>
          <div class="prodesc">
            {{ n.desc }}
          </div>
          <div class="proimg">
            <img :src="n.images" alt="">
            <div class="proimgline"></div>
          </div>
        </div>
       <!-- end -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'xxx',
  data () {
    return {
      menulist: ''
    }
  },
  computed: {
  },
  created () {
    this.menulist = this.$t('m.area1')
  },
  updated () {
    this.menulist = this.$t('m.area1')
  },
  methods: {
    naveto (p) { //  导航跳转
      this.$router.push({path: p})
    }
  }
}
</script>
<style lang="scss" scoped>
.sclbanner {
  cursor: pointer;
  img {
    width: 100%;
  }
}
.contentbox {
  max-width: 80%;
  margin: 0 auto;
  .news {
    font-size: 36px;
    color: #423C62;
    height: 100px;
    line-height: 100px;
  }
}
.probox {
  display: flex;
  justify-content: space-around;
  .pro{
    background-color: #EEEEEE;
    width: 100%;
    margin-left: 10px;
    padding: 20px 0;
    .protitle {
      display: flex;
      justify-content: space-between;
      margin-top: 50px;
      cursor: pointer;
      .pointfront {
        display: flex;
        justify-content: flex-start;
        .proline {
          width: 8px;
          height: 20px;
          margin-top: 2px;
          background-color: #2A2354;
        }
        .protext {
          font-size: 18px;
          color: #2A2354;
          margin-left: 20px;
        }
      }
      .proicon {
        margin-right: 20px;
        color: #2A2354;
        font-size: 18px;
        margin-top: 1px;
      }
    }
    .prodesc {
      margin: 20px 10px;
      height: 80px;
      overflow: scroll;
    }
    .proimg {
      text-align: center;
      img {
        width: 90%;
        // margin: 0 5%;
      }
      .proimgline {
        width: 90%;
        height: 1px;
        display: inline-block;
        background-color: #2A2354;
      }
    }
  }
  .pro:first-child{
    margin-left: 0px;
  }
}
</style>
