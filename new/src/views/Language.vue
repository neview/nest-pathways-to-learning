<template>
  <Header :title="titleValue" :isImg="false"></Header>
  <div class="suggested">Suggested</div>
  <div
    class="language-list"
    v-for="item in 5"
    :key="item"
    @click="selectValue(item)"
  >
    <span>English (US)</span>
    <n-radio
      :checked="checkedValue === item"
      value="Definitely Maybe"
      name="basic-demo"
      @change="handleChange"
      style="margin-left: 0.15rem"
    >
    </n-radio>
  </div>
</template>
<script setup lang="ts">
import Header from "./components/header.vue";
import { NRadio } from "naive-ui";
import { ref, onMounted } from "vue";
const titleValue = "Language";
let checkedValue: string | number = ref(1);
const handleChange = () => {};
const selectValue = (obj) => {
  checkedValue.value = obj;
};
onMounted(() => {
  document.documentElement.style.backgroundColor = "#ffffff";
});
</script>
<style lang="scss" scoped>
.suggested {
  padding: 0.1rem 0.2rem;
  font-family: Urbanist;
  font-size: 0.2rem;
  font-style: normal;
  font-weight: 700;
  color: #212121;
}
.language-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.1rem 0.2rem;
  font-family: Urbanist;
  font-size: 0.18rem;
  font-style: normal;
  font-weight: 600;
  color: #212121;
}
</style>
