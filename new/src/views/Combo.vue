<template>
  <div class="combo">
    <Header :title="titleValue" :isImg="true"></Header>
    <n-carousel draggable>
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
      />
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
      />
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
      />
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
      />
    </n-carousel>
    <div class="card-introduce">
      <div class="introduce">
        <img src="@/assets/svg/combo/introduce1.svg" alt="" />
        <div>Private Connection</div>
      </div>
      <div class="introduce">
        <img src="@/assets/svg/combo/introduce2.svg" alt="" />
        <div>Unlock All Location</div>
      </div>
    </div>
    <div class="card-introduce">
      <div class="introduce">
        <img src="@/assets/svg/combo/introduce3.svg" alt="" />
        <div>Fast & More Secure</div>
      </div>
      <div class="introduce">
        <img src="@/assets/svg/combo/introduce4.svg" alt="" />
        <div>Free Use & Remove Ads</div>
      </div>
    </div>
    <label
      for="basic-demo"
      class="introduce-select"
      style="margin-top: 0.2rem"
      @click="selectRadio(1)"
    >
      <div class="introduce-info">
        <span>1 Month</span>
        <span>Billed monthly</span>
      </div>
      <div class="introduce-money">
        <span>$4.99</span>
        <n-radio
          :checked="checkedValue === 1"
          value="Definitely Maybe"
          name="basic-demo"
          @change="handleChange"
          style="margin-left: 0.15rem"
        >
        </n-radio>
      </div>
    </label>
    <label for="basic-demo" class="introduce-select" @click="selectRadio(2)">
      <div class="introduce-info">
        <span>1 Month</span>
        <span>Billed monthly</span>
      </div>
      <div class="introduce-money">
        <span>$4.99</span>
        <n-radio
          :checked="checkedValue === 2"
          value="Definitely Maybe"
          name="basic-demo"
          @change="handleChange"
          style="margin-left: 0.15rem"
        >
        </n-radio>
      </div>
    </label>
    <label for="basic-demo" class="introduce-select" @click="selectRadio(3)">
      <div class="introduce-info">
        <span>1 Month</span>
        <span>Billed monthly</span>
      </div>
      <div class="introduce-money">
        <span>$4.99</span>
        <n-radio
          :checked="checkedValue === 3"
          value="Definitely Maybe"
          name="basic-demo"
          @change="handleChange"
          style="margin-left: 0.15rem"
        >
        </n-radio>
      </div>
    </label>
  </div>
  <div class="submit-butt" @click="">
    Continue
  </div>
</template>
<script setup lang="ts">
import Header from "./components/header.vue";
import { NCarousel, NRadio,NButton } from "naive-ui";
import { ref } from "vue";
const titleValue = "套餐";
let checkedValue = ref<number | null>(1);
const handleChange = () => {};
const selectRadio = (obj) => {
  checkedValue.value = obj;
};
</script>
<style lang="scss" scoped>
.combo {
  //background-image: url("../assets/svg/address2.svg");
  //background-repeat: no-repeat;
  //background-size: 100% 100%;
  .card-introduce {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.15rem;
    .introduce {
      width: 1.7rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ffffff;
      margin-top: 0.16rem;
      border-radius: 0.24rem;
      padding: 0.12rem 0.1rem;
      img {
        width: 0.32rem;
        height: 0.32rem;
        margin-right: 0.12rem;
      }
      div {
        color: #212121;
        font-family: Urbanist;
        font-size: 0.16rem;
        font-style: normal;
        font-weight: 700;
      }
    }
  }
  .introduce-select {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem 0.3rem;
    border-radius: 0.24rem;
    box-shadow: 0px 0.4rem 0.6rem 0px rgba(4, 6, 15, 0.05);
    margin: 0 0.15rem 0.15rem 0.15rem;
    .introduce-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      span:nth-child(1) {
        font-family: Urbanist;
        font-size: 0.2rem;
        font-style: normal;
        font-weight: 700;
        color: #212121;
      }
      span:nth-child(2) {
        font-family: Urbanist;
        font-size: 0.12rem;
        font-style: normal;
        font-weight: 500;
        color: #616161;
      }
    }
    .introduce-money {
      display: flex;
      align-items: center;
      font-family: Urbanist;
      font-size: 0.24rem;
      font-style: normal;
      font-weight: 700;
      color: #335ef7;
    }
  }
}
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
.submit-butt{
  border-radius: 1rem;
  background-color: #335EF7;
  box-shadow: 0.04rem 0.08rem 0.24rem 0px rgba(51, 94, 247, 0.25);
  font-family: Urbanist;
  font-size: 0.16rem;
  font-style: normal;
  font-weight: 700;
  color: #FFF;
  width: 90%;
  margin: 0.3rem auto;
  padding: 0.15rem 0;
  text-align: center;
  margin-bottom: 0.8rem;
}
</style>
