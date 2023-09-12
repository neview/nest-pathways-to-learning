<template>
  <div style="padding: 0.2rem 0.1rem">
    <div class="carousel">
      <img src="@/assets/svg/logo.svg" alt="" class="address-img" />
      <div class="text-tips">Login to Your Account</div>
    </div>
    <div class="authorized">
      <img src="@/assets/svg/email.svg" alt="" />
      <input type="text" placeholder="email" />
    </div>
    <div class="authorized">
      <img src="@/assets/svg/password.svg" alt="" />
      <input :type="inputType" placeholder="password" />
      <img src="@/assets/svg/passHide.svg" alt="" @click="password" />
    </div>
    <div class="protocol">
      <n-checkbox v-model:checked="disabled2"> Remember me </n-checkbox>
    </div>
    <div class="next-button">
      <n-button
        type="info"
        round
        style="width: 3rem; height: 0.45rem"
        @click="LoginButt"
        >Next</n-button
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { NButton, NInput, NCheckbox } from "naive-ui";
import { useRouter } from "vue-router";

const router = useRouter();
let inputType = ref("text");
let disabled2 = ref(false);
const password = () => {
  inputType.value == "text"
    ? (inputType.value = "password")
    : (inputType.value = "text");
};

const LoginButt = () => {
  router.push("/");
};
// const switchColor = () => {
//   let dom = document.documentElement;
//   dom.style.setProperty(
//     "--qny-background-color",
//     "var(--qny-background-color-dark)"
//   );
//   dom.style.setProperty("--qny-color", "var(--qny-color-dark)");
// };
// const switchColor2 = () => {
//   let dom = document.documentElement;
//   dom.style.setProperty(
//     "--qny-background-color",
//     "var(--qny-background-color-light)"
//   );
//   dom.style.setProperty("--qny-color", "var(--qny-color-light)");
// };
</script>
<style lang="scss" scoped>
.carousel {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .address-img {
    margin-top: 0.5rem;
  }
  .text-tips {
    width: 100%;
    font-size: 0.28rem;
    margin: 0 auto;
    text-align: center;
    font-family: Urbanist;
    font-size: 0.32rem;
    line-height: 0.5rem;
    font-style: normal;
    font-weight: 700;
    margin-top: 0.5rem;
  }
}
.authorized {
  display: flex;
  align-items: center;
  padding: 0.15rem;
  background-color: var(--qny-background-color);
  border-radius: 0.1rem;
  margin-top: 0.3rem;
  transition: all 0.5s;
}

.protocol {
  text-align: center;
  margin-top: 0.2rem;
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

input {
  width: 83%;
  border: none;
  outline: none;
  background-color: var(--qny-background-color);
  margin-left: 0.1rem;
  font-family: Urbanist;
  font-style: normal;
  font-weight: 400;
  font-size: 0.14rem;
  color: var(--qny-color);
  transition: all 0.5s;
}
input::-webkit-input-placeholder {
  color: var(--qny-color);
}
</style>
