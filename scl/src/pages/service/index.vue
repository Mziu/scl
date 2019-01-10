<template>
  <div class="service">
    <div class="content">
      <div class="service_title">{{$t('m.service.title')}}</div>
      <div class="service_moudle" v-for="n in servicelist" :key="n.key">
        <div class="mdeven" v-if="n.id % 2 === 1">
          <div class="leftmd"></div>
          <div class="rightmd">
            <div class="serviceid">0{{ n.id }}</div>
            <div class="servicetext">{{ n.text }}</div>
            <div class="servicedesc">{{ n.desc }}</div>
            <div class="servicedesc" v-if="n.desc2">{{ n.desc2 }}</div>
            <div class="servicemore" @click="naveto(n.path)">{{$t('m.service.more')}}</div>
          </div>
        </div>
        <div class="mdodd"  v-if="n.id % 2 === 0">
          <div class="leftmd">
            <div class="serviceid">0{{ n.id }}</div>
            <div class="servicetext">{{ n.text }}</div>
            <div class="servicedesc">{{ n.desc }}</div>
            <div class="servicemore" @click="naveto(n.path)">{{$t('m.service.more')}}</div>
          </div>
          <div class="rightmd">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'service',
  data () {
    return {
      servicelist: '' //  服务列表
    }
  },
  created () {
    this.servicelist = this.$t('m.service.servicelist')
  },
  updated () {
    this.servicelist = this.$t('m.service.servicelist')
  },
  methods: {
    naveto (p) { //  导航跳转
      this.$router.push({path: p})
    }
  }
}
</script>
<style lang="scss" scoped>
.service {
  height: 100%;
  text-align: center;
  .content {
    max-width: 580px;
    margin: 0 auto;
    .service_title {
      margin: 50px 0;
      font-size: 16px;
      letter-spacing: 2px;
    }
    .service_moudle {
      .mdeven {
        display: flex;
        justify-content: flex-start;
        height: 232px;
        border: 1px solid #2A2354;
        .leftmd {
          display: inline-block;
          width: 40%;
          background-color: #2A2354;
        }
        .rightmd {
          display: inline-block;
          width: 60%;
          background-color: #fff;
          text-align: left;
          text-indent: 4em;
          line-height: 40px;
          padding-top: 20px;
        }
      }
      .mdodd {
        display: flex;
        justify-content: flex-start;
        height: 232px;
        margin: 20px 0;
        .leftmd {
          display: inline-block;
          width: 60%;
          background-color: #fff;
          text-align: left;
          text-indent: 4em;
          line-height: 40px;
          padding-top: 20px;
          border: 1px solid #2A2354;
        }
        .rightmd {
          display: inline-block;
          width: 40%;
          background-color: #2A2354;
        }
      }
      .serviceid{
        font-size: 40px;
        letter-spacing: 5px;
        font-weight: bold;
        color: #9d9b9b;
      }
      .servicetext {
        font-size: 20px;
        color: #2a2354;
      }
      .servicedesc {
        font-size: 13px;
        color: #505050;
      }
      .servicemore {
        font-size: 12px;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}
</style>
