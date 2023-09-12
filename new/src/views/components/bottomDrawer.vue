<template>
  <n-drawer
    v-model:show="props.active"
    :placement="props.placement"
    :height="props.height"
    resizable
    :on-mask-click="maskClick"
    drawer-style="border-radius: 0.3rem 0.3rem 0 0"
  >
    <n-drawer-content title="">
      <div class="line"></div>
      <div class="drawer-title">{{ props.title }}</div>
      <n-divider />
      <div class="drawer-tips">{{ props.describe }}</div>
      <div class="operate">
        <div class="cancel" @click="cancelButt">取消</div>
        <div class="sure" @click="sureButt">确定</div>
      </div>
    </n-drawer-content>
  </n-drawer>
</template>
<script setup lang="ts">
import { NDrawer, NDrawerContent, NDivider } from "naive-ui";
import { ref, onMounted, defineProps, defineEmits } from "vue";
let props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
  placement: {
    type: String,
    default: "bottom",
  },
  height: {
    type: String || Number,
    default: "300",
  },
  title: {
    type: String,
    default: "退出",
  },
  describe: {
    type: String,
    default: "你确定要退出吗",
  },
});
const emit = defineEmits(["enlarge-text", "cancelDrawer", "sureDrawer"]);
const maskClick = () => {
  emit("enlarge-text", 1);
};
const cancelButt = () => {
  emit("cancelDrawer", 1);
};
const sureButt = () => {
  emit("sureDrawer", 1);
};
</script>
<style lang="scss" scoped>
.line {
  width: 0.38rem;
  height: 0.03rem;
  background-color: #e0e0e0;
  border-radius: 0.5rem;
  margin: 0 auto;
}
.drawer-title {
  color: #f75555;
  text-align: center;
  font-family: Urbanist;
  font-size: 0.24rem;
  font-style: normal;
  font-weight: 700;
  margin-top: 0.2rem;
}
.drawer-tips {
  color: #424242;
  text-align: center;
  font-family: Urbanist;
  font-size: 0.2rem;
  font-style: normal;
  font-weight: 700;
}
.operate {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.2rem;
  .cancel {
    border-radius: 0.5rem;
    background-color: #ebeffe;
    color: #335ef7;
    text-align: center;
    text-shadow: 0.04rem 0.08rem 0.24rem 0px rgba(51, 94, 247, 0.25);
    font-family: Urbanist;
    font-size: 0.16rem;
    font-style: normal;
    font-weight: 700;
    padding: 0.1rem 0.5rem;
  }
  .sure {
    border-radius: 0.5rem;
    background-color: #335ef7;
    box-shadow: 0.04rem 0.08rem 0.24rem 0px rgba(51, 94, 247, 0.25);
    color: #fff;
    text-align: center;
    text-shadow: 0.04rem 0.08rem 0.24rem 0px rgba(51, 94, 247, 0.25);
    font-family: Urbanist;
    font-size: 0.16rem;
    font-style: normal;
    font-weight: 700;
    padding: 0.1rem 0.5rem;
    margin-left: 0.2rem;
  }
}
</style>
