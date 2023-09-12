<template>
  <n-modal v-model:show="props.showModal" :on-mask-click="maskClick">
    <n-card
      style="width: 90%; border-radius: 0.2rem"
      title=""
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra> </template>
      <div class="text-logo">
        <img src="@/assets/svg/textModal/text.svg" alt="" />
      </div>
      <div class="text-title">Welcome to Premium!</div>
      <div class="text-info">
        You have successfully subscribed to premium for 6 months. Enjoy the
        benefits!
      </div>
      <div class="submit-butt" @click="buttClick" v-if="props.isButt">
        OK, Great!
      </div>
      <div class="loading-img" v-if="props.isLoading">
        <Loading></Loading>
      </div>
      <!-- <template #footer> </template> -->
    </n-card>
  </n-modal>
</template>
<script setup lang="ts">
import Loading from "./loading.vue";
import { NModal, NCard } from "naive-ui";
import { ref, defineProps, defineEmits } from "vue";
let props = defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },
  isButt: {
    type: Boolean,
    default: true,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["buttCallBack"]);
const maskClick = () => {
  emit("hideModal", 1);
};
const buttClick = () => {
  emit("buttCallBack", 1);
};
// const cancelButt = () => {
//   emit("cancelDrawer", 1);
// };
// const sureButt = () => {
//   emit("sureDrawer", 1);
// };
</script>
<style lang="scss" scoped>
.text-logo {
  width: 1.41rem;
  height: 1.41rem;
  background: linear-gradient(315deg, #335ef7 0%, #5f82ff 100%);
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 0.6rem;
    height: 0.6rem;
  }
}
.text-title {
  color: #335ef7;
  text-align: center;
  font-family: Urbanist;
  font-size: 0.24rem;
  font-style: normal;
  font-weight: 700;
  margin-top: 0.2rem;
}
.text-info {
  color: #212121;
  text-align: center;
  font-family: Urbanist;
  font-size: 0.16rem;
  font-style: normal;
  font-weight: 400;
  margin-top: 0.2rem;
}
.loading-img {
  width: 0.5rem;
  height: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 0.3rem;
}

.submit-butt {
  border-radius: 1rem;
  background-color: #335ef7;
  box-shadow: 0.04rem 0.08rem 0.24rem 0px rgba(51, 94, 247, 0.25);
  font-family: Urbanist;
  font-size: 0.16rem;
  font-style: normal;
  font-weight: 700;
  color: #fff;
  width: 90%;
  margin: 0.3rem auto;
  padding: 0.15rem 0;
  text-align: center;
  margin-bottom: 0.8rem;
}
</style>
7
