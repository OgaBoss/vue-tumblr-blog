<template>
  <div class="md:max-w-full lg:max-w-full">
    <div class="home-page h-screen">
      <div class="bg-gray-200 l-home-page h-full"></div>
      <div class="r-home-page h-full">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthenticationPage"
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}

.home-page {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  .l-home-page {
    flex: 0 0 0;
    background-size: contain;
    background: #fff url("../assets/img/undraw_authentication_fsn5.svg")
      no-repeat center;

    @media (min-width: 768px) {
      flex: 0 1 60%;
    }
  }

  .r-home-page {
    display: flex;
    flex: 0 0 100%;
    align-self: center;
    justify-content: space-around;
    background-color: #edf2f7;

    @media (min-width: 768px) {
      flex: 0 1 40%;
    }
  }
}

.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
