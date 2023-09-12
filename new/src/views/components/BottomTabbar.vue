<template>
<div class="tabbar">
  <div class="tabbar-item" :class="rputerValue == ''?'active':''" @click="enterPage('')">
    <img src="@/assets/svg/tabbar/home2.svg" alt=""  v-if="rputerValue == ''">
    <img src="@/assets/svg/tabbar/home.svg" alt="" v-else>
    Home
  </div>
  <div class="tabbar-item" :class="rputerValue == 'log'?'active':''" @click="enterPage('log')" >
    <img src="@/assets/svg/tabbar/logs2.svg" alt="" v-if="rputerValue == 'log'">
    <img src="@/assets/svg/tabbar/logs.svg" alt="" v-else>
    Logs
  </div>
  <div class="tabbar-item" :class="rputerValue == 'combo'?'active':''" @click="enterPage('combo')">
    <img src="@/assets/svg/tabbar/speedtest2.svg" alt="" v-if="rputerValue == 'combo'">
    <img src="@/assets/svg/tabbar/speedtest.svg" alt=""  v-else >
    Speedtest
  </div>
  <div class="tabbar-item" :class="rputerValue == 'node'?'active':''" @click="enterPage('node')">
    <img src="@/assets/svg/tabbar/history2.svg" alt="" v-if="rputerValue == 'node'">
    <img src="@/assets/svg/tabbar/historyImg.svg" alt=""  v-else>
    History
  </div>
  <div class="tabbar-item" :class="rputerValue == 'my'?'active':''" @click="enterPage('my')">
    <img src="@/assets/svg/tabbar/profile2.svg" alt=""  v-if="rputerValue == 'my'">
    <img src="@/assets/svg/tabbar/profile.svg" alt="" v-else>
    Profile
  </div>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { onBeforeRouteUpdate,useRouter } from "vue-router";
const router = useRouter();
let rputerValue:Ref<UnwrapRef<string>> = ref('')
onBeforeRouteUpdate((to, from) => {
  console.log('to.fullPath',to.fullPath)
});
const enterPage = (obj)=>{
  router.push(`/${obj}`)
  rputerValue.value = obj
}
</script>
<style lang="scss" scoped>
.tabbar{
  padding: 0.1rem 0.2rem 0.2rem 0.2rem;
  background-color: #FFFFFF;
  border-radius: 0.32rem 0.32rem 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .tabbar-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      width: 0.24rem;
      height: 0.24rem;
    }
    font-family: Urbanist;
    font-size: 0.10rem;
    font-style: normal;
    font-weight: 500;
    color: rgba(158, 158, 158, 1);
  }
}
.active{
  color: #335EF7 !important;
}
</style>
