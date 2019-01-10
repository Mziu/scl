<template>
  <div class="skill">
    <div class="skill__banner">
      <div class="skill__banner__title">{{ skill.title }}</div>
    </div>
    <div class="skill__content">
      <div class="skill__content__desc">{{ skill.desc.title }}</div>
      <ul class="skill__content__list">
        <li v-for="n in skill.desc.list" :key="n.key">
          {{ n.text }}
        </li>
      </ul>
      <div class="overseas">
        <div class="overseas__title">{{ skill.overseas.title }}</div>
        <div class="overseas__desc">{{ skill.overseas.desc }}</div>
        <div class="overseas__service">{{ skill.overseas.service }}</div>
        <ol class="overseas__list">
          <li v-for="n in skill.overseas.list" :key="n.key">
            {{ n.text }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: `skill`,
  data () {
    return {
      skill: ''
    }
  },
  created () {
    this.skill = this.$t('m.skill')
  },
  updated () {
    this.skill = this.$t('m.skill')
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.skill {
  max-width: 980px;
  margin: 0 auto;
  .skill__banner {
    height: 200px;
    background: linear-gradient( #1c798d, #2b9db0);
    text-align: center;
    .skill__banner__title {
      font-size: 140px;
      line-height: 200px;
      color: #fff;
      letter-spacing: 5px;
    }
  }
  .skill__content {
    width: 90%;
    margin: 0 auto;
    line-height: 2em;
    margin-top: 30px;
    .skill__content__desc {
      text-indent: 2em;
      margin: 20px 0;
    }
    .skill__content__list {
      line-height: 2em;
      font-size: 16px;
      padding: 10px;
    }
    .overseas {
      margin: 30px 0;
      .overseas__title {
        font-size: 24px;
        font-weight: 600;
      }
      .overseas__desc {
        text-indent: 2em;
      }
      .overseas__list {
        padding: 10px;
      }
    }
  }
}
</style>
