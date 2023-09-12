<template>
  <div class="my-page">
    <div class="header">
      <div class="header-logo">
        <img src="@/assets/svg/myLogo.svg" alt="" />
        Profile
      </div>
      <img class="more-img" src="@/assets/svg/more.svg" alt="" />
    </div>
    <div class="header-info">
      <div class="info-avatar">
        <div class="avatar">
          <img src="" alt="" />
        </div>
        <img src="@/assets/svg/editAvatar.svg" alt="" />
      </div>
      <div class="info-name">
        <span>Andrew Ainsley</span>
        <span>andrew_ainsley@yourdomain.com</span>
      </div>
    </div>
    <div class="member">
      <div class="member-img">
        <img src="@/assets/svg/memberImg3.svg" alt="" />
      </div>
      <div class="member-title">
        <div>GET PREMIUM!</div>
        <div>
          Get full app access without restrictions, ads, & unlock all location.
          Cancel anytime.
        </div>
      </div>
    </div>
    <div class="permiss-list">
      <div class="permiss-img">
        <img src="@/assets/svg/my/editProfile.svg" alt="" />
        Edit Profile
      </div>
      <img class="permiss-arrow" src="@/assets/svg/my/arrow.svg" alt="" />
    </div>
    <div class="permiss-list">
      <div class="permiss-img">
        <img src="@/assets/svg/my/security.svg" alt="" />
        Security
      </div>
      <img class="permiss-arrow" src="@/assets/svg/my/arrow.svg" alt="" />
    </div>
    <div class="permiss-list" @click="nextPage(1)">
      <div class="permiss-img">
        <img src="@/assets/svg/my/language.svg" alt="" />
        Language
      </div>
      <div class="select-language">
        English (US)
        <img class="permiss-arrow" src="@/assets/svg/my/arrow.svg" alt="" />
      </div>
    </div>
    <div class="permiss-list">
      <div class="permiss-img">
        <img src="@/assets/svg/my/darkMode.svg" alt="" />
        Dark Mode
      </div>
      <!-- <img class="permiss-arrow" src="@/assets/svg/my/arrow.svg" alt="" /> -->
      <div>
        <n-switch v-model:value="active" />
      </div>
    </div>
    <div class="permiss-list">
      <div class="permiss-img">
        <img src="@/assets/svg/my/privacyPolicy.svg" alt="" />
        Privacy Policy
      </div>
      <img class="permiss-arrow" src="@/assets/svg/my/arrow.svg" alt="" />
    </div>
    <div class="permiss-list">
      <div class="permiss-img">
        <img src="@/assets/svg/my/helpCenter.svg" alt="" />
        Help Center
      </div>
      <img class="permiss-arrow" src="@/assets/svg/my/arrow.svg" alt="" />
    </div>
    <div class="permiss-list">
      <div class="permiss-img">
        <img src="@/assets/svg/my/inviteFriends.svg" alt="" />
        Invite Friends
      </div>
      <img class="permiss-arrow" src="@/assets/svg/my/arrow.svg" alt="" />
    </div>
    <div class="permiss-list" @click="logout">
      <div class="permiss-img" style="color: #f75555">
        <img src="@/assets/svg/my/logout.svg" alt="" />
        Logout
      </div>
      <!-- <img class="permiss-arrow" src="@/assets/svg/my/arrow.svg" alt="" /> -->
    </div>
  </div>
  <BottomDrawer
      :active="isShow"
      :placement="placement"
      @enlarge-text="hide"
      @cancelDrawer="cancelButt"
      @sureDrawer="surelButt"
  ></BottomDrawer>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { NSwitch } from "naive-ui";
import BottomDrawer from "./components/bottomDrawer.vue";
import { useRouter } from "vue-router";
const router = useRouter();
let active = ref(null);
const logout = ()=>{
  isShow.value = true
}
const placement = "bottom";
let isShow: Ref<UnwrapRef<boolean>> = ref(false);
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
const nextPage = (obj)=>{
  switch (obj) {
    case 1:
      router.push('/language')
      break;
    default:
  }
}
</script>
<style lang="scss" scoped>
.my-page {
  background-image: url("../assets/svg/address2.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0.3rem;
    margin-top: 0.2rem;
    .header-logo {
      display: flex;
      align-items: center;
      font-family: Urbanist;
      font-size: 0.24rem;
      font-style: normal;
      font-weight: 700;
      color: #212121;
      img {
        width: 0.32rem;
        height: 0.32rem;
        margin-right: 0.1rem;
      }
    }
    .more-img {
      width: 0.28rem;
      height: 0.28rem;
    }
  }
  .header-info {
    display: flex;
    align-items: center;
    margin: 0 0.3rem;
    margin-top: 0.3rem;
    .info-avatar {
      position: relative;
      margin-right: 0.15rem;
      .avatar {
        width: 0.6rem;
        height: 0.6rem;
        overflow: hidden;
        border-radius: 50%;
        background-color: aqua;

        img {
          width: 0.6rem;
          height: 0.6rem;
        }
      }
      img {
        width: 0.15rem;
        height: 0.15rem;
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
    .info-name {
      display: flex;
      flex-direction: column;
      span:nth-child(1) {
        font-family: Urbanist;
        font-size: 0.2rem;
        font-style: normal;
        font-weight: 700;
      }
      span:nth-child(2) {
        font-family: Urbanist;
        font-size: 0.14rem;
        font-style: normal;
        font-weight: 600;
      }
    }
  }
  .member {
    margin: 0 0.3rem;
    margin-top: 0.3rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(315deg, #335ef7 0%, #5f82ff 100%);
    border-radius: 0.2rem;
    padding: 0.1rem 0.1rem;
    display: flex;
    align-items: center;
    .member-img {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 1rem;
        height: 1rem;
        margin-right: 0.1rem;
      }
    }
    .member-title {
      display: flex;
      flex-direction: column;
      div:nth-child(1) {
        font-family: Urbanist;
        font-size: 0.24rem;
        font-style: normal;
        font-weight: 700;
        color: #fff;
      }
      div:nth-child(2) {
        font-family: Urbanist;
        font-size: 0.14rem;
        font-style: normal;
        font-weight: 600;
        color: #fff;
      }
    }
  }
  .permiss-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0.3rem;
    margin-top: 0.2rem;
    .permiss-img {
      display: flex;
      align-items: center;
      font-family: Urbanist;
      font-size: 0.18rem;
      font-style: normal;
      font-weight: 600;
      img {
        width: 0.28rem;
        height: 0.28rem;
        margin-right: 0.2rem;
      }
    }
    .select-language {
      font-family: Urbanist;
      font-size: 0.18rem;
      font-style: normal;
      font-weight: 600;
      color: 212121;
      display: flex;
      align-items: center;
      .permiss-arrow {
        width: 0.2rem;
        height: 0.2rem;
        margin-left: 0.2rem;
      }
    }
    .permiss-arrow {
      width: 0.2rem;
      height: 0.2rem;
    }
  }
}
</style>
