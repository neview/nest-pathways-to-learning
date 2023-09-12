<template>
  <Header :title="titleValue" :isImg="true"></Header>
  <n-tabs type="line" animated justify-content="center"  size="large">
    <n-tab-pane name="oasis" tab="FAQ">
      <div class="shortcut-option">
        <n-button round class="option-button" type="info" ghost>Default</n-button>
        <n-button round class="option-button" type="info" ghost>Default</n-button>
        <n-button round class="option-button" type="info" ghost>Default</n-button>
        <n-button round class="option-button" type="info" ghost>Default</n-button>
        <n-button round class="option-button" type="info" ghost>Default</n-button>
        <n-button round class="option-button" type="info" ghost>Default</n-button>
      </div>
      <div class="question">
        <n-collapse arrow-placement="right">
          <template #header-extra>
            <n-icon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.869 16.6308C10.811 16.5743 10.563 16.3609 10.359 16.1622C9.076 14.9971 6.976 11.9576 6.335 10.3668C6.232 10.1252 6.014 9.51437 6 9.18802C6 8.8753 6.072 8.5772 6.218 8.29274C6.422 7.93814 6.743 7.65368 7.122 7.49781C7.385 7.39747 8.172 7.2416 8.186 7.2416C9.047 7.08573 10.446 7 11.992 7C13.465 7 14.807 7.08573 15.681 7.21335C15.695 7.22796 16.673 7.38383 17.008 7.55431C17.62 7.86702 18 8.47784 18 9.13151V9.18802C17.985 9.61374 17.605 10.509 17.591 10.509C16.949 12.0141 14.952 14.9834 13.625 16.1768C13.625 16.1768 13.284 16.5129 13.071 16.659C12.765 16.887 12.386 17 12.007 17C11.584 17 11.19 16.8724 10.869 16.6308Z"
                    fill="#335EF7"/>
              </svg>
            </n-icon>
          </template>
<!--          <template #arrow>-->
<!--            <n-icon color="#FFFFFF">-->
<!--              <cash-icon />-->
<!--            </n-icon>-->
<!--          </template>-->
          <n-collapse-item title="What is Levin?" name="1">
            <div >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </div>
          </n-collapse-item>
        </n-collapse>
      </div>
      <div class="question">
        <n-collapse arrow-placement="right">
          <template #header-extra>
            <n-icon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.869 16.6308C10.811 16.5743 10.563 16.3609 10.359 16.1622C9.076 14.9971 6.976 11.9576 6.335 10.3668C6.232 10.1252 6.014 9.51437 6 9.18802C6 8.8753 6.072 8.5772 6.218 8.29274C6.422 7.93814 6.743 7.65368 7.122 7.49781C7.385 7.39747 8.172 7.2416 8.186 7.2416C9.047 7.08573 10.446 7 11.992 7C13.465 7 14.807 7.08573 15.681 7.21335C15.695 7.22796 16.673 7.38383 17.008 7.55431C17.62 7.86702 18 8.47784 18 9.13151V9.18802C17.985 9.61374 17.605 10.509 17.591 10.509C16.949 12.0141 14.952 14.9834 13.625 16.1768C13.625 16.1768 13.284 16.5129 13.071 16.659C12.765 16.887 12.386 17 12.007 17C11.584 17 11.19 16.8724 10.869 16.6308Z"
                    fill="#335EF7"/>
              </svg>
            </n-icon>
          </template>
          <n-collapse-item title="How to use Levin?" name="2">
            <div>很好</div>
          </n-collapse-item>
        </n-collapse>
      </div>
      <div class="question">
        <n-collapse arrow-placement="right">
          <template #header-extra>
            <n-icon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10.869 16.6308C10.811 16.5743 10.563 16.3609 10.359 16.1622C9.076 14.9971 6.976 11.9576 6.335 10.3668C6.232 10.1252 6.014 9.51437 6 9.18802C6 8.8753 6.072 8.5772 6.218 8.29274C6.422 7.93814 6.743 7.65368 7.122 7.49781C7.385 7.39747 8.172 7.2416 8.186 7.2416C9.047 7.08573 10.446 7 11.992 7C13.465 7 14.807 7.08573 15.681 7.21335C15.695 7.22796 16.673 7.38383 17.008 7.55431C17.62 7.86702 18 8.47784 18 9.13151V9.18802C17.985 9.61374 17.605 10.509 17.591 10.509C16.949 12.0141 14.952 14.9834 13.625 16.1768C13.625 16.1768 13.284 16.5129 13.071 16.659C12.765 16.887 12.386 17 12.007 17C11.584 17 11.19 16.8724 10.869 16.6308Z"
                    fill="#335EF7"/>
              </svg>
            </n-icon>
          </template>
          <n-collapse-item title="Can I create my own server?" name="3">
            <div>真棒</div>
          </n-collapse-item>
        </n-collapse>
      </div>


    </n-tab-pane>
    <n-tab-pane name="the beatles" tab="Contact us">
      <div class="connect">
        <img src="@/assets/svg/help/customerService.svg" alt="">
        Customer Service
      </div>
      <div class="connect">
        <img src="@/assets/svg/help/customerService.svg" alt="">
        Customer Service
      </div>
      <div class="connect">
        <img src="@/assets/svg/help/customerService.svg" alt="">
        Customer Service
      </div>
      <div class="connect">
        <img src="@/assets/svg/help/customerService.svg" alt="">
        Customer Service
      </div><div class="connect">
      <img src="@/assets/svg/help/customerService.svg" alt="">
      Customer Service
    </div>
    </n-tab-pane>
  </n-tabs>
</template>
<script setup lang="ts">
import Header from "./components/header.vue";
import { NTabs, NTabPane,NButton,NCollapse,NCollapseItem, } from "naive-ui";
import { ref, onMounted } from "vue";
const titleValue = "Help Center";

onMounted(() => {
  document.documentElement.style.backgroundColor = "#FCFCFC";
});
</script>
<style lang="scss" scoped>
.shortcut-option{
  display: flex;
  align-items: center;
  overflow-x:auto ;
  padding-bottom: 0.1rem;
  .option-button{
    margin-left: 0.1rem;
  }
}
.question{
  padding: 0.1rem 0.2rem;
  border-radius: 0.24rem;
  background-color: #FFF;
  box-shadow: 0px 0.4rem 0.6rem 0px rgba(4, 6, 15, 0.05);
  margin-top: 0.2rem;
}
.connect{
  padding:0.19rem 0.24rem;
  border-radius: 24px;
  background-color:  #FFF;
  box-shadow: 0px 0.04rem 0.6rem 0px rgba(4, 6, 15, 0.05);
  color: #212121;
  font-family: Urbanist;
  font-size: 0.18rem;
  font-style: normal;
  font-weight: 700;
  display: flex;
  align-items: center;
  margin: 0 0.2rem;
  margin-bottom: 0.2rem;
  img{
    margin-right: 0.2rem;
  }
}
</style>
