<template>
  <div class="header-page">
    <div class="instruct-arrow">
      <img src="@/assets/svg/combo/leftArrow.svg" alt="" />
      {{ title }}
    </div>
    <img src="@/assets/svg/more.svg" alt="" v-if="isImg" />
  </div>
</template>
<script setup lang="ts">
import { ref, defineProps } from "vue";
interface Props {
  title?: string;
  url?: string;
  url2?: string;
  isImg?: boolean;
}
defineProps<Props>();
</script>
<style lang="scss" scoped>
.header-page {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.2rem;
  .instruct-arrow {
    display: flex;
    align-items: center;
    font-family: Urbanist;
    font-size: 0.24rem;
    font-style: normal;
    font-weight: 700;
    columns: #212121;
    img {
      width: 0.28rem;
      height: 0.28rem;
      margin-right: 0.16rem;
    }
  }
}
</style>
