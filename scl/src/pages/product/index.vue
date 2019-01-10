<template>
  <div class="product">
    <div class="producttypes">
      <div class="product_types_title">{{ $t('m.product.producttype') }}</div>
      <div class="product_types_line"></div>
      <div class="product_types_group">
        <div v-for="(n, index) in productlist" :key="n.key" class="product_types_item" v-bind:class="{active: ind === index}" @click="changeproduct(index)">
          <div>{{ n.text }}</div>
        </div>
      </div>
      <div class="product_types_title">{{ $t('m.product.productshow') }}</div>
      <div class="product_types_line"></div>
      <div class="productShow">
          <!-- 产品展示 -->
          <div class="productshowgroup" v-for="(n, index) in productshowlist" :key="n.key" >
            <div class="productshowitem" v-bind:class="{active: proind === index}" @click="changeproduc(index)">
              <img :src="n.images" alt="">
              <div class="productshowtext" @click="navto(n.path, n.id)">{{ n.text }}</div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'product',
  data () {
    return {
      productlist: '', //  产品分类标题
      ind: 0, //  当前选中的标题
      productshowlist: [], //  产品分类列表
      proind: 0 //  当前选中的产品展示
    }
  },
  created () {
    this.productlist = this.$t('m.product.productlist')
    this.changeproduct(0)
  },
  updated () {
    this.productlist = this.$t('m.product.productlist')
  },
  methods: {
    changeproduct (index) { //  切换产品分类
      switch (index) {
        case 0:
          this.productshowlist = this.$t('m.product.productshowarray').materiel
          break
        case 1:
          this.productshowlist = this.$t('m.product.productshowarray').germanybrand
          break
        case 2:
          this.productshowlist = this.$t('m.product.productshowarray').mybrand
          break
      }
      this.ind = index
    },
    changeproduc (index) { //  切换产品展示
      this.proind = index
    },
    navto (p, id) { //  导航跳转
      this.$router.push({path: p, query: {id: id}})
    }
  }
}
</script>
<style lang="scss" scoped>
.product {
  text-align: center;
  .producttypes {
    max-width: 980px;
    margin: 0 auto;
    .product_types_title {
      font-size: 28px;
      margin-top: 50px;
    }
    .product_types_line {
      width: 50px;
      height: 2px;
      background-color: #000;
      display: inline-block;
    }
    .product_types_group {
      // display: flex;
      // justify-content: flex-start;
      margin-top: 30px;
      .product_types_item {
        display: inline-block;
        font-size: 18px;
        color: #fff;
        background-color: #EEEEEE;
        padding: 6px 12px;
        margin-left: 2px;
      }
      .active {
        background-color: #1DD2AF;
      }
    }
  }
  // 产品展示
  .productShow {
    margin-top: 50px;
    .productshowgroup {
      display: inline-block;
      width: 25%;
      .productshowitem {
        width: 95%;
        margin: 5%;
        border: 3px solid #eee;
        border-radius: 3px;
        img {
          width: 100%;
          display: flex;
        }
        .productshowtext {
          background-color: #eee;
          height: 60px;
          line-height: 60px;
          font-size: 18px;
          text-align: left;
          text-indent: 14px;
          position: relative;
        }
        .productshowtext:hover {
          cursor: pointer;
        }
        .productshowtext:after {
          content: ">";
          position: absolute;
          right: 15px;
        }
      }
      .active {
        border: 3px solid #1DD2AF;
        border-radius: 3px;
        .productshowtext {
          background-color: #2C3E50;
          color: #fff;
        }
      }
    }
  }
}
</style>
