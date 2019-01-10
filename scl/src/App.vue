<template>
  <div id="app">
    <div class="homecontent">
      <div class="homehead">
        <div v-for="(n, index) in titlelist" :key="n.key">
          <div class="homehead_img" v-if="n.icon !== ''"><img :src="n.icon"></div>
          <div class="homehead_title" v-bind:class="{active: ind === index}" v-if="n.icon === ''" @click="navto(n.path, index)">{{n.text}}</div>
        </div>
        <div class="lancontent" >
          <el-dropdown @command="changelan">
            <span class="el-dropdown-link">
              {{$t('m.currentlan')}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="n in lanlist" :key="n.key" :command="n">{{ n.text }}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <keep-alive>
      <router-view  class="app-router-view" v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view class="app-router-view" v-if="!$route.meta.keepAlive"></router-view>
    <!-- <router-view></router-view> -->
    <div style="height:150px;"></div>
    <div class="foot">
      <div class="footcontent">
        <div class="footgroup">
          <div class="footitem" v-for="n in footlist " :key="n.key" @click="navto(n.path)"> {{ n.text }}</div>
        </div>
        <div class="footorg">some worlds to desc</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      ind: 1,
      lanlist: [
        {
          text: '中文',
          lan: 'cn'
        },
        {
          text: 'ENGLISH',
          lan: 'en'
        }
      ],
      titlelist: '',
      footlist: ''
    }
  },
  components: {
  },
  computed: {
  },
  created () {
    this.changelan(this.lanlist[0])
  },
  mounted () {
  },
  methods: {
    changelan (v) { //  切换语言
      console.log(v.lan)
      switch (v.lan) {
        case 'cn':
          this.$i18n.locale = 'cn'
          break
        case 'en':
          this.$i18n.locale = 'en'
          break
      }
      this.titlelist = this.$t('m.lan')
      this.footlist = this.$t('m.foot')
      console.log(this.titlelist)
    },
    navto (p, index) { //  导航跳转
      // console.log(p)
      if (index) {
        this.ind = index
      }
      this.$router.push({path: p})
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
}
.homecontent {
  height: 40px;
  background-color: #E8E9EA;
  line-height: 38px;
  font-size: 14px;
}
.homehead {
  display: flex;
  justify-content: flex-start;
  max-width: 980px;
  margin: 0 auto;
  height:inherit;
  .homehead_img {
    height:100%;
    img {
      width: 30px;
      margin-top: 5px;
      border-radius: 50%;
    }
  }
  .homehead_title {
    margin-left: 50px;
  }
  .active {
    border-bottom: 2px solid #1DD2AF;
    padding: 0 5px;
    color: #2c3e50;
    font-weight: bold;
  }
  .homehead_title:hover{
    cursor: pointer;
    color: #2c3e50;
    font-weight: bold;
  }
}
.lancontent {
  margin-left: 50px;
  cursor: pointer;
}

.foot {
  background-color: #2A2354;
  height: 40px;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  .footcontent {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    color: #fff;
    font-size: 14px;
    line-height: 40px;
    .footgroup {
      display: flex;
      justify-content: flex-start;
      .footitem {
        margin-left: 30px;
        cursor: pointer;
      }
    }
    .footorg {
    }
  }
}
</style>
