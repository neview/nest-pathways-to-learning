<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import {
  NConfigProvider,
  NCard,
  NButton,
  darkTheme,
  NCarousel,
} from "naive-ui";
import BottomTabbar from "./views/components/BottomTabbar.vue";

/**
 * js 文件下使用这个做类型提示
 * @type import('naive-ui').GlobalThemeOverrides
 */
const themeOverrides = {
  common: {
    primaryColor: "#335EF7",
  }
};

let darkTheme2 = ref("");
const switchTheme = () => {
  darkTheme2.value == ""
    ? (darkTheme2.value = darkTheme)
    : (darkTheme2.value = "");
};
</script>

<template>
  <n-config-provider :theme="darkTheme2" :theme-overrides="themeOverrides">
    <!-- <n-card :bordered="false"> -->
    <RouterView />
    <!-- <n-button class="suspend" @click="switchTheme">切换主题</n-button> -->
    <!-- </n-card> -->
    <div style="position: fixed;bottom: 0;left: 0;width: 100%;">
      <BottomTabbar></BottomTabbar>
    </div>
  </n-config-provider>
</template>

<style scoped>
.suspend {
  position: fixed;
  top: 0.1rem;
  left: 0.3rem;
}
</style>
