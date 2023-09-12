<template>
  <Header :title="titleValue" :isImg="false"></Header>
  <div style="text-align: center">
    <img src="@/assets/svg/email/Back.svg" alt="" class="tips-logo">
  </div>
  <div class="tips-title">
    Select which contact details should we use to reset your password
  </div>
  <div class="way" @click="selectValue(1)" :class="isValue == 1?'active':''">
    <img src="@/assets/svg/email/email.svg" alt="" class="email-img">
    <div class="email-value">
      <span>via Email:</span>
      <span>and***ley@yourdomain.com</span>
    </div>
  </div>
  <div class="submit-butt" @click="nextPage">
    Continue
  </div>
</template>
<script setup lang="ts">
import Header from "./components/header.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const titleValue = "Forgot Password";
let isValue = ref(1)
const  selectValue = (obj)=>{
  isValue.value = obj
}
const nextPage = ()=>{
  router.push("/edit");
}
</script>
<style lang="scss" scoped>
.tips-logo{
  width: 2.76rem;
  height: 2.50rem;
  margin: 0.3rem 0;
}
.tips-title{
  font-family: Urbanist;
  font-size: 0.18rem;
  font-style: normal;
  font-weight: 500;
  color: #212121;
  margin: 0.1rem 0.2rem;
}
.way{
  padding: 0.2rem;
  border-radius: 0.32rem;
  background-color: #FFF;
  display: flex;
  align-items: center;
  margin: 0.2rem ;
  .email-img{
    width: 0.5rem;
    height: 0.5rem;
    margin-right: 0.2rem;
  }
  .email-value{
    display: flex;
    flex-direction: column;
    span:nth-child(1){
      font-family: Urbanist;
      font-size: 0.14rem;
      font-style: normal;
      font-weight: 500;
      color: #757575;
    }
    span:nth-child(2){
      font-family: Urbanist;
      font-size: 0.16rem;
      font-style: normal;
      font-weight: 700;
      color: #000;
      margin-top: 0.02rem;
    }
  }
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
.active{
  border: 0.01rem solid #3761F7;
}
</style>
