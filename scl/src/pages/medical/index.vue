<template>
  <div class="medical">
    <div class="medicalbanner">
      <div>
        <img src="https://index.cuican520.com/medicalbanner.png" alt="">
      </div>
      <div class="medicalbanner_box">
        <div class="medical_banner_info_left">
          {{ $t('m.medical.antiaging') }}
        </div>
        <div class="medical_banner_info_right">
          <div class="medical_banner_info_right_title">{{ $t('m.medical.howtoface') }}</div>
          <div v-for="n in naturaltherapylist" :key="n.key" class="medical_banner_info_right_list">
            {{ n.id }}.  {{ n.text }}
          </div>
        </div>
      </div>
    </div>
    <div class="medicalcontent">
       <medical-nav-item :tst="tst0"></medical-nav-item>
       <div class="medicalcontent_info">
         <div v-for="n in diymedicallist" :key="n.key" class="medicalcontentbox">
           <div class="medicalcontenticon">
             <img :src="n.bgicon" alt="">
           </div>
           <div class="medicalcontenttext">{{ n.text }}</div>
         </div>
         <div class="medicalcontentline"></div>
       </div>
       <div class="medicalcontentgene">{{ $t('m.medical.gene') }}</div>
       <medical-nav-item :tst="tst1"></medical-nav-item>
       <div class="medicalrecuperation">
         <div class="medicalrecuperationleftimg"></div>
         <div class="medicalrecuperationrightimg"></div>
       </div>
       <div class="medical__enginery">
         <div class="medical__enginery__text">{{ $t('m.medical.enginery') }}</div>
         <div class="medical__enginery__desc">{{ $t('m.medical.purify') }}</div>
       </div>
       <div class="medical__exp">
         <div class="medical__exp__title">{{ $t('m.medical.exp') }}</div>
         <div class="medical__exp__desc">{{ $t('m.medical.expdesc') }}</div>
       </div>
       <medical-nav-item :tst="tst2"></medical-nav-item>
       <div class="medical__repair">
         {{ $t('m.medical.repair') }}
       </div>
       <div class="medical__swot">
         <div class="medical__swot__box" v-for="n in swotlist" :key="n.key">
           <div class="medical__swot__box__content" :style="n.descborder">
              <div class="medical__swot__box__title" :style="n.bgc">{{ n.title }}</div>
              <div class="medical__swot__box__desc">{{ n.desc }}</div>
           </div>
         </div>
         <div class="medical__swot__logo">
           SWOT
         </div>
       </div>
       <medical-nav-item :tst="tst3"></medical-nav-item>
       <div class="medical__aging">
         <div class="medical__aging__desc" v-for="n in aginglist" :key="n.key">
           <div class="medical__aging__desc_point"></div><div>{{ n.text }}</div><div v-if="n.price" :style="n.color">{{ n.price }}</div>
         </div>
       </div>
    </div>
  </div>
</template>
<script>
import medicalNavItem from '../components/medicalnavitem'
export default {
  name: 'medical',
  data () {
    return {
      naturaltherapylist: [],
      tst0: '',
      tst1: '',
      tst2: '',
      tst3: '',
      diymedicallist: [],
      swotlist: [],
      aginglist: []
    }
  },
  components: {
    medicalNavItem
  },
  updated () {
    this.naturaltherapylist = this.$t('m.medical.naturaltherapy')
    this.diymedicallist = this.$t('m.medical.diymedical')
    this.swotlist = this.$t('m.medical.swot')
    this.aginglist = this.$t('m.medical.aging')
    this.tst0 = this.naturaltherapylist[0].text
    this.tst1 = this.naturaltherapylist[1].text
    this.tst2 = this.naturaltherapylist[2].text
    this.tst3 = this.naturaltherapylist[3].text
  },
  created () {
    this.naturaltherapylist = this.$t('m.medical.naturaltherapy')
    this.diymedicallist = this.$t('m.medical.diymedical')
    this.swotlist = this.$t('m.medical.swot')
    this.aginglist = this.$t('m.medical.aging')
    this.tst0 = this.naturaltherapylist[0].text
    this.tst1 = this.naturaltherapylist[1].text
    this.tst2 = this.naturaltherapylist[2].text
    this.tst3 = this.naturaltherapylist[3].text
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.medical {
  width: 980px;
  margin: 0 auto;
  .medicalbanner {
    img {
      width: 100%;
      vertical-align: bottom;
    }
    .medicalbanner_box {
      display: flex;
      justify-content: flex-start;
      .medical_banner_info_left {
        width: 80%;
        display: inline-block;
        background-color:#eee;
        text-indent: 2em;
        line-height: 2em;
        font-size: 14px;
        padding: 20px 5px;
      }
      .medical_banner_info_right {
        width: 20%;
        padding: 5px 10px;
        background-color: #2A2354;
        color: #fff;
        .medical_banner_info_right_title {
          font-size: 14px;
        }
        .medical_banner_info_right_list {
          font-size: 13px;
          text-indent: 15px;
          line-height: 22px;
        }
      }
    }
  }
  .medicalcontent {
    width: 80%;
    margin: 50px auto 0;
    .medicalcontent_info {
      background: #1bbca5;
      padding: 20px;
      position: relative;
      text-align: center;
      display: flex;
      justify-content: space-around;
      .medicalcontentbox {
        z-index: 2;
        position: relative;
        .medicalcontenticon {
          width: 50px;
          height: 50px;
          background-size: 100% 100%;
          border-radius: 50%;
          border: 2px solid #ecd1a9;
          text-align: center;
          background-color: #1bbca5;
          line-height: 50px;
          img {
            display: inline-block;
            width: 26px;
            height: 21px;
            position: relative;
            z-index: 3;
            vertical-align: middle;
          }
        }
        .medicalcontenttext {
          color: #fff;
          font-size: 13px;
          line-height: 2em;
          margin-top: 10px;
        }
      }
      .medicalcontentline {
        height: 1px;
        width: 90%;
        background: #fff;
        position: absolute;
        z-index: 1;
        top: 36%;
      }
    }
    .medicalcontentgene {
      font-size: 14px;
      text-indent: 2em;
      line-height: 2em;
      margin: 10px 0;
    }
    .medicalrecuperation {
      display: flex;
      justify-content: space-between;
      .medicalrecuperationleftimg {
        margin-right: 5px;
        background-image: url('https://index.cuican520.com/pg1.png');
        background-size: 100% 100%;
      }
      .medicalrecuperationrightimg {
        background-image: url('https://index.cuican520.com/pg2.png');
        background-size: 100% 100%;
      }
      div {
        width: 50%;
        height: 200px;
        background: #eee;
      }
    }
    .medical__enginery {
      .medical__enginery__text {
        text-align: center;
        margin: 20px 0;
        font-size: 14px;
      }
      .medical__enginery__desc {
        text-indent: 2em;
        font-size: 13px;
        line-height: 2em;
        color: #888;
      }
    }
    .medical__exp {
      background-color: #eee;
      padding: 10px;
      font-size: 14px;
      line-height: 2em;
      margin: 20px 0;
      .medical__exp__title {
        text-align: center;
        font-size: 150%;
        margin: 20px 0;
      }
      .medical__exp__desc {
        text-indent: 2em;
      }
    }
    .medical__repair {
      background-color: #2A2354;
      color: #fff;
      padding: 10px;
      text-indent: 2em;
      font-size: 14px;
      line-height: 2em;
    }
    .medical__swot {
      position: relative;
      margin-top: 30px;
      .medical__swot__box {
        width: 50%;
        display: inline-block;
        vertical-align: top;
        .medical__swot__box__content {
          .medical__swot__box__title {
            display: inline-block;
            color: #fff;
            padding: 3px;
            font-size: 14px;
            min-width: 50%;
          }
          .medical__swot__box__desc {
            font-size: 13px;
            line-height: 2em;
            height: 150px;
            overflow: hidden;
            margin-top: 10px;
          }
        }
      }
      .medical__swot__logo {
        position: absolute;
        font-size: 24px;
        color: #000;
        top: 50%;
        left: 50%;
        background-color: #ffffff;
        padding: 10px;
        margin-left: -45px;
        margin-top: -45px;
      }
    }
    .medical__aging {
      font-size: 14px;
      line-height: 2em;
      .medical__aging__desc {
        display: flex;
        justify-content: flex-start;
      }
      .medical__aging__desc_point {
        height: 10px;
        width: 10px;
        background-color: #00c89e;
        margin-right: 15px;
        border-radius: 50%;
        margin-top: 10px;
      }
    }
  }
}
</style>
