<template>
    <Header :title="titleValue" :isImg="true"></Header>
    <div class="buy-tips">
      Select the payment method you want to use
    </div>
  <label for="basic-demo" class="introduce-select" @click="selectRadio(1)">
    <div class="introduce-info">
      <img src="@/assets/svg/buy/PayPal.svg" alt="">
      <span>PayPal</span>
    </div>
      <n-radio
          :checked="checkedValue === 1"
          value="Definitely Maybe"
          name="basic-demo"
          @change="handleChange"
          style="margin-left: 0.15rem"
      >
      </n-radio>
  </label>
  <label for="basic-demo" class="introduce-select" @click="selectRadio(2)">
    <div class="introduce-info">
      <img src="@/assets/svg/buy/GooglePay.svg" alt="">
      <span>GooglePay</span>
    </div>
    <n-radio
        :checked="checkedValue === 2"
        value="Definitely Maybe"
        name="basic-demo"
        @change="handleChange"
        style="margin-left: 0.15rem"
    >
    </n-radio>
  </label>
  <label for="basic-demo" class="introduce-select" @click="selectRadio(3)">
    <div class="introduce-info">
      <img src="@/assets/svg/buy/ApplePay.svg" alt="">
      <span>ApplePay</span>
    </div>
    <n-radio
        :checked="checkedValue === 3"
        value="Definitely Maybe"
        name="basic-demo"
        @change="handleChange"
        style="margin-left: 0.15rem"
    >
    </n-radio>
  </label>
  <div class="pay">
    支付
  </div>
</template>
<script setup lang="ts">
import Header from "./components/header.vue";
import { NCarousel, NRadio,NButton } from "naive-ui";
import { ref } from "vue";
const titleValue = "Payment";
let checkedValue = ref<number | null>(1);
const handleChange = () => {};
const selectRadio = (obj) => {
  checkedValue.value = obj;
};
</script>
<style lang="scss" scoped>
.buy-tips{
  font-family: Urbanist;
  font-size: 0.18rem;
  font-style: normal;
  font-weight: 500;
  color: #212121;
  text-align: center;
  padding: 0.1rem 0.2rem;
}
.introduce-select{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.15rem 0.2rem;
  border-radius: 0.24rem;
  background: #FFF;
  box-shadow: 0px 0.04rem 0.60rem 0px rgba(4, 6, 15, 0.05);
  margin: 0.15rem 0.2rem;
  .introduce-info{
    display: flex;
    align-items: center;
    font-family: Urbanist;
    font-size: 0.18rem;
    font-style: normal;
    font-weight: 700;
    color: #212121;
    img{
      width: 0.32rem;
      height: 0.32rem;
      margin-right: 0.1rem;
    }
  }
}
.pay{
  width: 90%;
  margin: 0.2rem auto;
  padding: 0.1rem 0;
  border-radius: 1rem;
  background: #EBEFFE;
  text-align: center;
  color: #335EF7;
  text-shadow: 0.04rem 0.08rem 0.24rem 0px rgba(51, 94, 247, 0.25);
  font-family: Urbanist;
  font-size: 0.16rem;
  font-style: normal;
  font-weight: 700;
}
</style>
