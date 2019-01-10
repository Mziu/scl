<template>
  <div class="consult">
    <div class="consult__banner">
      <img src="https://index.cuican520.com/consultbanner.png" alt="">
    </div>
    <div class="consult__content">
      <consult-title-item :title=t[0]></consult-title-item>
      <div class="consult__content__produce">
        <span style="color:red">{{ $t('m.consult.immigrantproduce1') }}</span>
        <span>{{ $t('m.consult.immigrantproduce2') }}</span>
        <span style="color:red">{{ $t('m.consult.immigrantproduce3') }}</span>
        <span>{{ $t('m.consult.immigrantproduce4') }}</span>
        <span style="color:red">{{ $t('m.consult.immigrantproduce5') }}</span>
        <span>{{ $t('m.consult.immigrantproduce6') }}</span>
      </div>
      <consult-title-item :title=t[1]></consult-title-item>
      <div class="consult__content__germany">
        <div class="whycheckGermany1">{{ $t('m.consult.whycheckGermany1') }}</div>
        <div class="whycheckGermany2">{{ $t('m.consult.whycheckGermany2') }}</div>
      </div>
      <consult-title-item :title=t[2]></consult-title-item>
      <div class="consult__content__invest">
        <div class="consult__content__invest__info">{{ $t('m.consult.newcastle') }}</div>
        <div class="consult__content__invest__imglist">
            <div class="consult__content__invest__imglist__item">
              <div v-for="(n, index) in newcastleimglist" :key="n.key" v-if="index < 2">
                <img :src="n.img" alt="">
                <div class="consult__content__invest__imglist__item__desc"><div>{{ n.desc }}</div></div>
              </div>
          </div>
          <div class="consult__content__invest__imglist__item">
            <div v-for="(n, index) in newcastleimglist" :key="n.key" v-if="index >= 2">
              <img :src="n.img" alt="">
            </div>
          </div>
        </div>
      </div>
      <consult-title-item :title=t[3]><!-- 我们的流程 --></consult-title-item>
      <div class="consult__content__flow">
        {{ $t('m.consult.flow') }}
      </div>
      <consult-title-item :title=t[4]><!-- 实力展示 --></consult-title-item>
      <div class="consult__content__showStrength">
        <!-- 弹性布局 -->
        <div class="consult__content__showStrength__box">
          <!-- 相对定位 -->
          <div class="consult__content__showStrength__box__position" v-for="(n, index) in showStrength" :key="n.key" v-if="index % 2 === 0">
            <div class="consult__content__showStrength__box__position__border">
              <div class="consult__content__showStrength__box__position__border__title">{{ n.title }}</div>
              <div class="consult__content__showStrength__box__position__border__desc">{{ n.desc }}</div>
            </div>
            <div class="consult__content__showStrength__box__position__img">
              <img :src="n.img" alt="">
            </div>
           </div>
        </div>
        <div class="consult__content__showStrength__box">
        <!-- 相对定位 -->
          <div class="consult__content__showStrength__box__position" v-for="(n, index) in showStrength" :key="n.key" v-if="index % 2 !== 0">
            <div class="consult__content__showStrength__box__position__border">
              <div class="consult__content__showStrength__box__position__border__title">{{ n.title }}</div>
              <div class="consult__content__showStrength__box__position__border__desc">{{ n.desc }}</div>
            </div>
            <div class="consult__content__showStrength__box__position__img">
              <img :src="n.img" alt="">
            </div>
          </div>
        </div>
      </div>
      <consult-title-item :title=t[5]></consult-title-item>
        <div class="consult__content__advantage">
          <div v-for="n in advantage" :key="n.key" class="consult__content__advantage__box">
            <div>
              <div class="consult__content__advantage__box__title">{{ n.title }}</div>
              <div class="consult__content__advantage__box__text">{{ n.text }}</div>
            </div>
          </div>
        </div>
        <div class="consult__content__mark">
          {{ $t('m.consult.mark') }}
        </div>
    </div>
  </div>
</template>
<script>
import consultTitleItem from '../components/consulttitleitem'
export default {
  name: 'consult',
  data () {
    return {
      consult__titlt__list: [], //  标题
      t: [],
      newcastleimglist: [], //  投资项目
      showStrength: [], //  实力展示
      advantage: []
    }
  },
  components: {
    consultTitleItem
  },
  updated () {
    this.consult__titlt__list = this.$t('m.consult.consult_title_list')
    for (let i = 0; i < this.consult__titlt__list.length; i++) {
      this.t.push(this.consult__titlt__list[i].text)
    }
    this.newcastleimglist = this.$t('m.consult.newcastleimglist')
    this.showStrength = this.$t('m.consult.showStrength')
    this.advantage = this.$t('m.consult.advantage')
  },
  created () {
    this.consult__titlt__list = this.$t('m.consult.consult_title_list')
    for (let i = 0; i < this.consult__titlt__list.length; i++) {
      this.t.push(this.consult__titlt__list[i].text)
    }
    this.newcastleimglist = this.$t('m.consult.newcastleimglist')
    this.showStrength = this.$t('m.consult.showStrength')
    this.advantage = this.$t('m.consult.advantage')
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.consult {
  width: 980px;
  margin: 0 auto;
  .consult__banner {
    img {
      width: 100%;
      vertical-align: bottom;
    }
  }
 .consult__content {
    width: 80%;
    margin: 0 auto;
    .consult__content__produce {
      background-color: #efefef;
      text-indent: 2em;
      padding: 15px;
      font-size: 13px;
      line-height: 2em;
      letter-spacing: 2px;
    }
    .consult__content__germany {
      font-size: 13px;
      line-height: 2em;
      text-indent: 2em;
      background-color: #efefef;
      padding: 15px;
      letter-spacing: 2px;
      .whycheckGermany1 {
      }
      .whycheckGermany2 {
        color: #001e8a;
      }
    }
    .consult__content__invest {
      font-size: 13px;
      display: flex;
      justify-content: flex-start;
      .consult__content__invest__info {
        width: 50%;
        background-color: #efefef;
        padding: 10px;
        line-height: 2em;
        text-indent: 2em;
        height: 284px;
        overflow: scroll;
      }
      .consult__content__invest__imglist {
        width: 50%;
        .consult__content__invest__imglist__item {
          display: flex;
          justify-content: flex-start;
          img {
            width: 100%;
            vertical-align: bottom;
          }
          .consult__content__invest__imglist__item__desc {
            font-size: 16px;
            color: #fff;
            background-color: #25204a;
            text-align: center;
            height: 66px;
            overflow: hidden;
            line-height: 2em;
            div {
              width: 7em;
              display: inline-block;
            }
          }
        }
      }
    }
    .consult__content__flow {
      background-color: #efefef;
      text-indent: 2em;
      padding: 15px;
      font-size: 13px;
      line-height: 2em;
      letter-spacing: 2px;
    }
    .consult__content__showStrength {
      display: flex;
      justify-content: flex-start;
      .consult__content__showStrength__box {
        text-align: center;
        width: 50%;
        .consult__content__showStrength__box__position {
          position: relative;
          margin-top: 20px;
          .consult__content__showStrength__box__position__border {
            border-top: 1px solid #cccccc;
            padding: 15px 15px 50px 0;
            width: 50%;
            display: inline-block;
            text-align: right;
            line-height: 20px;
            .consult__content__showStrength__box__position__border__title {
              color: #fbc93b;
              width: 65%;
              text-align: left;
              margin: 0 auto;
              display: inline-block;
            }
            .consult__content__showStrength__box__position__border__desc {
              font-size: 12px;
              width: 65%;
              display: inline-block;
              margin: 0 auto;
              text-align: left;
            }
          }
          .consult__content__showStrength__box__position__img {
            position: absolute;
            z-index: 2;
            img {
              width: 50%;
            }
          }
        }
      }
      .consult__content__showStrength__box:nth-child(1) {
        border-right: 1px solid #ccc;
      }
    }
    .consult__content__showStrength__box:nth-child(1) {
      .consult__content__showStrength__box__position:nth-child(1) {
        text-align: right;
        .consult__content__showStrength__box__position__img {
          top: -15px;
          left: 55px;
        }
      }
      .consult__content__showStrength__box__position:nth-child(2) {
        text-align: right;
        .consult__content__showStrength__box__position__border {
          text-align: left;
          div {
            width: 90%;
            padding: 0 10px;
          }
        }
        .consult__content__showStrength__box__position__img {
          top: -15px;
          left: -44px;
        }
      }
    }
    .consult__content__showStrength__box:nth-child(2) {
      .consult__content__showStrength__box__position:nth-child(1) {
        text-align: left;
        margin-top: 90px;
        .consult__content__showStrength__box__position__border {
          text-align: left;
          width: 80%;
          div {
            width: 100%;
            padding: 0 10px;
          }
        }
        .consult__content__showStrength__box__position__img {
          right: -60px;
          top: -35px;
        }
      }
      .consult__content__showStrength__box__position:nth-child(2) {
        text-align: left;
        .consult__content__showStrength__box__position__border {
          text-align: left;
          width: 40%;
          div {
            width: 90%;
            padding: 0 10px;
          }
        }
        .consult__content__showStrength__box__position__img {
          right: 10px;
          top: -5px;
        }
      }
    }
  }
  .consult__content__advantage {
    display: flex;
    justify-content: flex-start;
    .consult__content__advantage__box {
      background-image: url('https://index.cuican520.com/adv.png');
      background-size: 100% 100%;
      width: 16.66%;
      height: 142px;
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
  .consult__content__mark {
    margin-top: 50px;
    color: red;
    text-align: center;
    font-size: 15px;
    letter-spacing: 2px;
  }
  .consult__content__mark:after {
    content: ' ';
    display: inline-block;
    background-image: url('https://index.cuican520.com/rrg.png');
    background-size: cover;
    width: 15px;
    height: 15px;
  }
}
</style>
