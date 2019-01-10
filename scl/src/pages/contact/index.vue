<template>
  <div>
    <div class="contact_banner">
      <img src="https://index.cuican520.com/contact.png" alt="">
      <div class="contact_info">
        <div class="contact_info_left">
          <div class="contact_info_left_title_one">CONTACT  US</div>
          <div class="contact_info_left_title_two">STRAHLEND</div>
        </div>
        <div class="contact_info_line"></div>
        <div class="contact_info_right">
          strong technical force
          <br/>
          Advanced equipment
          <br/>
          Strict quality management system
          <br/>
          Professional services
          <br/>
          competitive price
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="lineone"></div>
      <div class="contact_box">
      <div class="contact_title">
        <div class="contact_text">{{ $t('m.contact.title') }}</div>
        <div class="block blockone"></div>
        <div class="block blocktwo"></div>
      </div>
      </div>
    </div>
    <div class="contact_type">
      <div class="contact_type_box" v-for="n in contacttype" :key="n.key">
        <div class="contact_type_content">
          <div>{{ n.title }}:</div>
          <div>{{ n.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'contact',
  data () {
    return {
      contacttype: ''
    }
  },
  updated () {
    this.contacttype = this.$t('m.contact.contacttype')
  },
  created () {
    this.contacttype = this.$t('m.contact.contacttype')
  }
}
</script>
<style lang="scss" scoped>
.contact_banner {
  position: relative;
  img {
    width: 100%;
  }
  .contact_info {
    position: absolute;
    top: 50px;
    left: 50%;
    margin-left: -180px;
    .contact_info_left {
      display: inline-block;
      vertical-align: top;
      line-height: 35px;
      .contact_info_left_title_one {
        color: #F08200;
        font-size: 24px;
        font-weight: 600;
      }
      .contact_info_left_title_two {
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        text-align: right;
        letter-spacing: 2px;
      }
    }
    .contact_info_line {
      display: inline-block;
      height: 75px;
      width: 1px;
      background-color: #000;
      vertical-align: top;
      line-height: 75px;
      margin: 5px;
    }
    .contact_info_right {
      display: inline-block;
      font-size: 12px;
      color: #55524e;
    }
  }
}
.contact {
  max-width: 980px;
  text-align: center;
  margin: 100px auto 0;
  position: relative;
  .lineone {
    height: 2px;
    background-color: #000;
    width: 80%;
    position: absolute;
    top: 50%;
    z-index: 1;
    left: 10%;
  }
  .contact_box {
    display: inline-block;
    padding: 0 20px;
    background: #fff;
    position: relative;
    z-index: 2;
  }
  .contact_title {
    font-size: 30px;
    padding: 10px 20px;
    border: 2px solid #000;
    .contact_text {
      position: relative;
      z-index: 3;
    }
    .block {
      height: 30px;
      width: 60%;
      background-color: #fff;
      position: absolute;
      z-index: 2;
    }
    .blockone {
      right: -2px;
      top: -2px;
    }
    .blocktwo {
      left: -2px;
      bottom: -2px;
    }
  }
}
.contact_type {
  margin-top: 50px;
  .contact_type_box {
    margin: 0 auto;
    max-width: 980px;
    text-align: center;
    line-height: 40px;
    .contact_type_content {
      display: inline-block;
      text-align: left;
      width: 40%;
      margin-left: 20%;
      div {
        display: inline-block;
      }
    }
  }
}
</style>
