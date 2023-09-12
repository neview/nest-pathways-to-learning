<template>
  <BottomDrawer
    :active="isShow"
    :placement="placement"
    @enlarge-text="hide"
    @cancelDrawer="cancelButt"
    @sureDrawer="surelButt"
  ></BottomDrawer>
  <TextModal
    :showModal="isShow2"
    :isButt="false"
    :isLoading="true"
    @hideModal="hideModal"
    @buttCallBack="buttCallBack"
  ></TextModal>
  <button @click="showDrawer">点击</button>
  <button @click="showDrawer2">点击2</button>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { NSwitch } from "naive-ui";
import BottomDrawer from "./components/bottomDrawer.vue";
import TextModal from "./components/textModal.vue";
import { useRouter } from "vue-router";
const placement = "bottom";
let isShow: Ref<UnwrapRef<boolean>> = ref(false);
let isShow2: Ref<UnwrapRef<boolean>> = ref(false);
const showDrawer = () => {
  isShow.value = true;
};
const showDrawer2 = () => {
  isShow2.value = true;
};
const hide = () => {
  isShow.value = false;
};
const cancelButt = () => {
  console.log("取消");
  isShow.value = false;
};
const surelButt = () => {
  console.log("确定");
  isShow.value = false;
};
const hideModal = () => {
  console.log("对话框隐藏");
  isShow2.value = false;
};
const buttCallBack = () => {
  console.log("确定按钮");
  isShow2.value = false;
};
</script>
<style lang="scss" scoped></style>
