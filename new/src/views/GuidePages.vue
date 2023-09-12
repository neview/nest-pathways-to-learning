<template>
  <n-carousel
    dot-placement="bottom"
    :loop="false"
    :current-index="currentIndex"
  >
    <div class="carousel">
      <img src="@/assets/svg/introduce.svg" alt="" class="address-img" />
      <div class="text-tips">
        Connected to a secure network around the world
      </div>
    </div>
    <div class="carousel">
      <img src="@/assets/svg/introduce2.svg" alt="" class="address-img" />
      <div class="text-tips">
        Safe, fast internet, and your privacy is protected
      </div>
    </div>
    <div class="carousel">
      <img src="@/assets/svg/introduce3.svg" alt="" class="address-img" />
      <div class="text-tips">Let's surf the internet with Levin right now!</div>
    </div>
    <template #dots="{ total, currentIndex, to }">
      <ul class="custom-dots">
        <li
          v-for="index of 3"
          :key="index"
          :class="{ ['is-active']: currentIndex === index - 1 }"
          @click="to(index - 1)"
        />
      </ul>
    </template>
  </n-carousel>
  <div class="next-button">
    <n-button
      type="info"
      round
      style="width: 3rem; height: 0.45rem"
      @click="nextPage"
      >Next</n-button
    >
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { NButton, NCarousel } from "naive-ui";
import { useRouter } from "vue-router";

const router = useRouter();

const nextPage = () => {
  if (currentIndex.value == 2) {
    router.push("/login");
    return;
  }
  currentIndex.value += 1;
};
let currentIndex = ref(0);
</script>
<style lang="scss" scoped>
.address-img {
  margin-top: 0.5rem;
}
.text-tips {
  width: 100%;
  font-size: 0.28rem;
  margin: 0 auto;
  text-align: center;
  font-family: Urbanist;
  font-size: 0.4rem;
  line-height: 0.5rem;
  font-style: normal;
  font-weight: 700;
  margin-top: 0.5rem;
}
.carousel {
  width: 100%;
  height: 81vh;
  padding: 0.2rem 0.1rem;
}
// .carousel-img {
//   width: 100%;
//   height: 240px;
//   object-fit: cover;
// }

.custom-arrow {
  display: flex;
  position: absolute;
  bottom: 0.25rem;
  right: 0.1rem;
}

.custom-arrow button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 0.28rem;
  height: 0.28rem;
  margin-right: 0.12rem;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-width: 0;
  border-radius: 0.08rem;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-arrow button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.custom-arrow button:active {
  transform: scale(0.95);
  transform-origin: center;
}

.custom-dots {
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 0;
  left: calc(50vw - 0.3rem);
}

.custom-dots li {
  display: inline-block;
  width: 0.08rem;
  height: 0.04rem;
  margin: 0 0.03rem;
  border-radius: 0.04rem;
  background-color: #e0e0e0;
  transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  width: 0.15rem;
  background: #456cfa;
}
.next-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.3rem;
  font-family: Urbanist;
  font-size: 0.16rem;
  font-style: normal;
  font-weight: 700;
}
</style>
