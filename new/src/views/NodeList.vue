<template>
  <div class="node-page">
    <div style="text-align: center">
      <n-input
        placeholder="搜索"
        round
        style="padding: 0.05rem 0; width: 80vw; margin-top: 0.2rem"
      >
        <template #prefix>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="9.80589"
              cy="9.80541"
              r="7.49047"
              stroke="#BDBDBD"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.0156 15.4043L17.9523 18.3334"
              stroke="#BDBDBD"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </template>
      </n-input>
    </div>
      <label for="basic-demo" class="introduce-select" @click="selectRadio(index)" v-for="(item,index) in 10" :key="item">
        <div class="introduce-info">
          <img src="" alt="">
          <div class="info-name">
            <span>1 Month</span>
            <span>Billed monthly</span>
          </div>
        </div>
        <div class="introduce-money">
          <div class="internet-speed">
            <div v-for="(item2,index2) in 4" :key="index" :class="isShow >=item2?'active':''"></div>
          </div>
          <n-radio
              :checked="checkedValue === index"
              value="Definitely Maybe"
              name="basic-demo"
              @change="handleChange"
              style="margin-left: 0.15rem"
          >
          </n-radio>
        </div>
      </label>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { NRadio,NInput } from "naive-ui";
let checkedValue = ref<number | null>(1)
let isShow = ref(2)
const handleChange = ()=>{
}
const selectRadio = (obj)=>{
  checkedValue.value = obj
}
</script>
<style lang="scss" scoped>
.node-page {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/svg/address.svg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: 0 -1.8rem;
  margin-bottom: 3rem;
}
.introduce-select{
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 0.3rem;
  border-radius: 0.24rem;
  box-shadow: 0px 0.4rem 0.60rem 0px rgba(4, 6, 15, 0.05);
  margin: 0.15rem;
  .introduce-info{
    display: flex;
    align-items: center;
    img{
      width: 0.64rem;
      height: 0.47rem;
      margin-right: 0.16rem;
    }
    .info-name{
      display: flex;
      flex-direction: column;
      span:nth-child(1){
        font-family: Urbanist;
        font-size: 0.20rem;
        font-style: normal;
        font-weight: 700;
        color: #212121;
      }
      span:nth-child(2){
        font-family: Urbanist;
        font-size: 0.12rem;
        font-style: normal;
        font-weight: 500;
        color: #616161;
      }
    }

  }
  .introduce-money{
    display: flex;
    align-items: center;
    font-family: Urbanist;
    font-size: 0.24rem;
    font-style: normal;
    font-weight: 700;
    color: #335EF7;
    .internet-speed{
      display: flex;
      align-items: flex-end;
      div:nth-child(1){
        width: 0.04rem;
        height: 0.06rem;
        background-color: #EBEFFE;
        margin-right: 0.01rem;
      }
      div:nth-child(2){
        width: 0.04rem;
        height: 0.08rem;
        background-color: #EBEFFE;
        margin-right: 0.01rem;
      }
      div:nth-child(3){
        width: 0.04rem;
        height: 0.11rem;
        background-color: #EBEFFE;
        margin-right: 0.01rem;
      }
      div:nth-child(4){
        width: 0.04rem;
        height: 0.14rem;
        background-color: #EBEFFE;
        margin-right: 0.01rem;
      }
    }
  }
}
.active{
  background-color: #335EF7 !important;
}
</style>
