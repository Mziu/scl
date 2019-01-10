<template>
  <div class="gelatin">
    <div class="gelatin__banner">
      <img src="https://index.cuican520.com/gelatin__banner.png" alt="">
    </div>
    <div class="gelatin__content">
      <consult-title-item :title="title[0]"></consult-title-item>
      <div class="mod1">
        <div class="mod1__title">{{ materiel[0].title }}</div>
        <div class="consult__content__advantage">
          <div v-for="n in materiel[0].list" :key="n.key" class="consult__content__advantage__box">
            <div>
              <div class="consult__content__advantage__box__title">{{ n.title }}</div>
              <div class="consult__content__advantage__box__text">{{ n.desc }}</div>
            </div>
          </div>
        </div>
      </div><!-- 模块1 -->
      <consult-title-item :title="title[1]"></consult-title-item>
      <div class="mod2">
        <div v-for="n in materiel[1]" :key="n.key" class="mod2__img">
          <img :src="n.img" alt="">
          <div>{{ n.title }}</div>
        </div>
      </div><!-- 模块2 -->
       <consult-title-item :title="title[2]"></consult-title-item>
       <div class="mod3">
         <div v-for="n in materiel[2]" :key="n.key" class="mod3__img">
          <img :src="n.img" alt="">
        </div>
       </div><!-- 模块3 -->
       <consult-title-item :title="title[3]"></consult-title-item>
       <div class="mod4">
         <div v-for="n in materiel[3]" :key="n.key" class="mod4__img">
          <img :src="n.img" alt="">
         </div>
       </div><!-- 模块4 -->
       <consult-title-item :title="title[4]"></consult-title-item>
       <div class="mod5">
          <div v-for="n in materiel[4]" :key="n.key" class="mod5__img">
            <img :src="n.img" alt="">
            <div>{{ n.title }}</div>
          </div>
       </div><!-- 模块5 -->
       <consult-title-item :title="title[5]"></consult-title-item>
       <div class="mod6">
         <div v-for="n in materiel[5]" :key="n.key" class="mod6__img">
            <img :src="n.img" alt="">
          </div>
       </div><!-- 模块6 -->
       <consult-title-item :title="title[6]"></consult-title-item>
       <div class="mod7">
        <div v-for="n in materiel[6]" :key="n.key" class="mod7__img">
          <img :src="n.img" alt="">
        </div>
       </div><!-- 模块7 -->
    </div>
  </div>
</template>
<script>
import consultTitleItem from '../components/consulttitleitem'
export default {
  name: 'gelatin',
  data () {
    return {
      title: [],
      materiel: []
    }
  },
  components: {
    consultTitleItem
  },
  created () {
    this.title = this.$t('m.product.productshowarray').gelatin__title
    let mat = this.$t('m.product.productshowarray').materiel[0].children
    for (let n in mat) {
      this.materiel.push(mat[n])
    }
  },
  updated () {
    this.title = this.$t('m.product.productshowarray').gelatin__title
    let mat = this.$t('m.product.productshowarray').materiel[0].children
    for (let n in mat) {
      this.materiel.push(mat[n])
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.gelatin {
  .gelatin__content {
    max-width: 980px;
    margin: 0 auto;
    .mod1 {
      .mod1__title {
        text-indent: 2em;
        font-size: 16px;
        line-height: 2em;
      }
      .consult__content__advantage {
    display: flex;
    justify-content: flex-start;
    margin: 30px 0;
    .consult__content__advantage__box {
      background-image: url('https://index.cuican520.com/gelatin__six.png');
      background-size: 100% 100%;
      width: 14.2%;
      height: 159px;
      color: #fff;
      display: flex;
      justify-content:center;
      align-items:Center;
      text-align: center;
      div {
        div {
          width: 70%;
          display: inline-block;
        }
      }
      .consult__content__advantage__box__title {
        width: 100%;
        font-size: 14px;
      }
      .consult__content__advantage__box__text {
        font-size: 12px;
      }
    }
  }
    } // 模块1
    .mod2 {
      display: flex;
      justify-content: space-between;
      .mod2__img {
        text-align: center;
      }
      img {
        width: 100%;
      }
    } // 模块2
    .mod3 {
      display: flex;
      justify-content: space-between;
      .mod3__img {
        text-align: center;
      }
      img {
        width: 100%;
      }
    } // 模块3
    .mod4 {
      display: flex;
      justify-content: space-between;
      .mod4__img {
        text-align: center;
      }
      img {
        width: 100%;
      }
    } // 模块4
    .mod5 {
      display: flex;
      justify-content: space-between;
      .mod5__img {
        text-align: center;
      }
      img {
        width: 100%;
      }
    } // 模块5
    .mod6 {
      display: flex;
      justify-content: space-between;
      .mod6__img {
        text-align: center;
      }
      img {
        width: 100%;
      }
    } // 模块6
    .mod7 {
      display: flex;
      justify-content: space-between;
      .mod7__img {
        text-align: center;
      }
      img {
        width: 100%;
      }
    } // 模块7
  }
}
</style>
