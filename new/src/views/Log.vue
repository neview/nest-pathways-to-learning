<template>
  <div class="log-page">
    <div class="log-list">
      <div class="icon">
        <img src="@/assets/svg/icon.svg" alt="" />
      </div>
      <div class="log-name">
        <span>Welcome to Premium!</span>
        <span>Enjoy the benefits</span>
      </div>
    </div>
    <div class="log-list">
      <div
        class="icon"
        style="background: linear-gradient(315deg, #22bb9c 0%, #35debc 100%)"
      >
        <img src="@/assets/svg/icon2.svg" alt="" />
      </div>
      <div class="log-name">
        <span>Welcome to Premium!</span>
        <span>Enjoy the benefits</span>
      </div>
    </div>
    <div class="log-list">
      <div
        class="icon"
        style="background: linear-gradient(315deg, #facc15 0%, #ffe580 100%)"
      >
        <img src="@/assets/svg/icon3.svg" alt="" />
      </div>
      <div class="log-name">
        <span>Welcome to Premium!</span>
        <span>Enjoy the benefits</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.log-page {
  height: 90vh;
  background-image: url("../assets/svg/address2.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0 -1.2rem;
  .log-list {
    margin: 0 0.2rem;
    padding: 0.16rem;
    border-radius: 0.2rem;
    background-color: #ffffff;
    box-shadow: 0px 4px 60px 0px rgba(4, 6, 15, 0.05);
    display: flex;
    align-items: center;
    margin-top: 0.24rem;
    .icon {
      width: 0.63rem;
      height: 0.63rem;
      border-radius: 50%;
      background: linear-gradient(315deg, #335ef7 0%, #5f82ff 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 0.28rem;
      img {
        width: 0.26rem;
        height: 0.26rem;
      }
    }
    .log-name {
      display: flex;
      flex-direction: column;
      span:nth-child(1) {
        font-size: 0.16rem;
        font-weight: 600;
      }
      span:nth-child(2) {
        font-size: 0.08rem;
        margin-top: 0.05rem;
      }
    }
  }
}
</style>
