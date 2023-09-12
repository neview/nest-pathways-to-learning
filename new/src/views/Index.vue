<template>
  <div class="page-header">
    <div class="user-info">
      <div class="info-slogan">
        <div class="info-avatar">
          <img src="" alt="" />
        </div>
        <div class="slogan">
          <span>Good Morning 👋</span>
          <span>Andrew Ainsley</span>
        </div>
      </div>
      <img class="info-img" src="@/assets/svg/info.svg" alt="" />
    </div>
    <div class="node-butt">
      <n-button
        ghost
        color="rgba(255, 152, 31, 1)"
        icon-placement="right"
        round
        @click="nextPage"
      >
        <template #icon>
          <n-icon>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.0575 14.3589C9.00917 14.3118 8.8025 14.134 8.6325 13.9684C7.56333 12.9975 5.81333 10.4646 5.27917 9.1389C5.19333 8.93757 5.01167 8.42856 5 8.1566C5 7.89601 5.06 7.64759 5.18167 7.41054C5.35167 7.11503 5.61917 6.87798 5.935 6.74809C6.15417 6.66447 6.81 6.53458 6.82167 6.53458C7.53917 6.40469 8.705 6.33325 9.99333 6.33325C11.2208 6.33325 12.3392 6.40469 13.0675 6.51104C13.0792 6.52322 13.8942 6.65311 14.1733 6.79518C14.6833 7.05577 15 7.56478 15 8.10951V8.1566C14.9875 8.51137 14.6708 9.25743 14.6592 9.25743C14.1242 10.5117 12.46 12.9861 11.3542 13.9806C11.3542 13.9806 11.07 14.2607 10.8925 14.3824C10.6375 14.5724 10.3217 14.6666 10.0058 14.6666C9.65333 14.6666 9.325 14.5602 9.0575 14.3589"
                fill="#FF981F"
              />
            </svg>
          </n-icon>
        </template>
        Change Location
      </n-button>
    </div>
    <div class="node-name">Germany</div>
    <div class="node-switch">
      <div class="wave1">
        <div class="wave2">
          <div class="progress">
            <!-- <img src="@/assets/svg/progress.svg" alt="" /> -->
            <div class="switch-butt" @click="openSwitch">
              <img src="@/assets/svg/switch.svg" alt="" />
              <span>Connecting ...</span>
              <span>180.179.194.63</span>
            </div>
          </div>
        </div>
      </div>
      <div class="internet-speed">
        <n-tag
          size="large"
          :bordered="false"
          round
          :color="{ color: '#f6f8fb33', textColor: '#FFF' }"
          style="index: 99999; padding: 0.15rem 0.25rem; margin-right: 0.3rem"
        >
          <template #icon>
            <n-icon>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.0066 13.165L12.3607 13.1634C13.7652 13.1513 15.0183 13.0666 15.8124 12.9206C15.8267 12.9206 16.6143 12.7613 16.8764 12.6599C17.2554 12.5006 17.577 12.2126 17.7808 11.8515C17.9262 11.5624 18 11.2592 18 10.9417C17.9884 10.6922 17.8629 10.2806 17.7576 9.98692L17.664 9.74283C17.0218 8.12612 14.9234 5.03561 13.6402 3.85199L13.5505 3.76473L13.1302 3.37527C12.8085 3.12982 12.4153 3 11.9923 3C11.6134 3 11.2344 3.11563 10.9282 3.3469C10.829 3.41614 10.7017 3.52766 10.5942 3.62693L10.1974 4.006C8.87572 5.31046 7.02183 8.13485 6.40756 9.59883C6.39435 9.59883 6.01432 10.5086 6 10.9417V10.9995C6 11.6639 6.37892 12.2846 6.99137 12.6021C7.1588 12.6888 7.48678 12.772 7.77483 12.8352L8.31871 12.949C9.19332 13.0788 10.535 13.165 12.0066 13.165ZM10.4817 19.4967C10.4817 20.3269 11.1613 21 11.9996 21C12.8378 21 13.5175 20.3269 13.5175 19.4967L13.1903 15.7975C13.1903 15.1463 12.6583 14.6183 11.9996 14.6183C11.3419 14.6183 10.8088 15.1463 10.8088 15.7975L10.4817 19.4967Z"
                  fill="white"
                />
              </svg>
            </n-icon>
          </template>
          0 KB/s
        </n-tag>
        <n-tag
          size="large"
          :bordered="false"
          round
          :color="{ color: '#f6f8fb33', textColor: '#FFF' }"
          style="index: 99999; padding: 0.1rem 0.2rem"
        >
          <template #icon>
            <n-icon>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.4825 4.50325L10.8097 8.20248C10.8097 8.85375 11.3417 9.38174 12.0004 9.38174C12.6581 9.38174 13.1912 8.85375 13.1912 8.20248L13.5183 4.50325C13.5183 3.67308 12.8387 3 12.0004 3C11.1622 3 10.4825 3.67308 10.4825 4.50325ZM10.7501 20.5141C10.8064 20.5653 10.8495 20.6046 10.8698 20.6247C11.1915 20.8702 11.5847 21 12.0077 21C12.3866 21 12.7656 20.8844 13.0718 20.6531C13.2844 20.5047 13.6258 20.1622 13.6258 20.1622C14.9532 18.9491 16.9502 15.9317 17.5924 14.4012C17.6057 14.4012 17.9857 13.4914 18 13.0583V13.0005C18 12.3361 17.6211 11.7154 17.0086 11.3979C16.7554 11.2668 16.1349 11.1437 15.8408 11.0854C15.746 11.0666 15.6851 11.0545 15.6813 11.051C14.8067 10.9212 13.465 10.835 11.9934 10.835C10.4469 10.835 9.04792 10.9212 8.18763 11.0794C8.17331 11.0794 7.38572 11.2387 7.12355 11.3401C6.74463 11.4994 6.42299 11.7874 6.2192 12.1485C6.0738 12.4376 6 12.7408 6 13.0583C6.01542 13.391 6.23352 14.0117 6.33596 14.2572C6.97815 15.8739 9.07656 18.9644 10.3598 20.148C10.4934 20.2803 10.6448 20.4181 10.7501 20.5141Z"
                  fill="white"
                />
              </svg>
            </n-icon>
          </template>
          0 KB/s
        </n-tag>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { NButton, NIcon, NTag } from "naive-ui";
import { useRouter } from "vue-router";
const router = useRouter();
const openSwitch = () => {};
const nextPage = () => {
  router.push('/node')
};
</script>
<style lang="scss" scoped>
.page-header {
  background-image: url("../assets/svg/address.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 0.2rem 0.2rem;
  .user-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .info-slogan {
      display: flex;
      align-items: center;
      .info-avatar {
        width: 0.48rem;
        height: 0.48rem;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 0.2rem;
        background-color: var(--qny-index-background-color-light);
      }
      img {
        width: 0.48rem;
        height: 0.48rem;
      }
      .slogan {
        font-family: Urbanist;
        display: flex;
        flex-direction: column;
        span:nth-child(1) {
          font-size: 0.16rem;
          font-style: normal;
          font-weight: 400;
          color: var(--qny-index-color-light);
        }
        span:nth-child(2) {
          font-size: 0.2rem;
          font-style: normal;
          font-weight: 700;
          color: var(--qny-index-color-light);
        }
      }
    }
    .info-img {
      width: 0.28rem;
      height: 0.28rem;
    }
  }
  .node-butt {
    text-align: center;
    margin-top: 0.5rem;
  }
  .node-name {
    text-align: center;
    font-family: Urbanist;
    font-size: 0.4rem;
    font-style: normal;
    font-weight: 700;
    color: #ff981f;
    margin-top: 0.3rem;
  }
  .node-switch {
    width: 100%;
    height: 60vh;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: var(--qny-index-background-color2-light);
    border-radius: 0.6rem 0.6rem 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .wave1 {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background-color: var(--qny-index-background-color3-light);
      z-index: 9;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 0.5rem;
      .wave2 {
        width: 2.6rem;
        height: 2.6rem;
        border-radius: 50%;
        background-color: var(--qny-index-background-color4-light);
        z-index: 99;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .progress {
          width: 2.2rem;
          height: 2.2rem;
          border-radius: 50%;
          background-color: #ffffff;
          box-shadow: 0px 0.12rem 0.12rem 0px rgba(218, 222, 227, 0.5) inset;
          background-image: url("../assets/svg/progress.svg");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          .switch-butt {
            display: flex;
            flex-direction: column;
            align-items: center;
            img {
              margin-top: 0.4rem;
            }
            span:nth-child(2) {
              font-family: Urbanist;
              font-size: 0.16rem;
              font-style: normal;
              font-weight: 700;
              color: #ff981f;
              margin-top: 0.1rem;
            }
            span:nth-child(3) {
              font-family: Urbanist;
              font-size: 0.14rem;
              font-style: normal;
              font-weight: 500;
              color: #424242;
              margin-top: 0.05rem;
            }
          }
        }
      }
    }
    .internet-speed {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      margin-top: 0.2rem;
    }
  }
  // >>> .n-base-selection-label {
  //   border-radius: 0.2rem !important;
  // }
}
</style>
