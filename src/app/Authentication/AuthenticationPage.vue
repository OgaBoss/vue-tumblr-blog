<template>
  <div class="container md:max-w-full lg:max-w-full">
    <div class="home-page h-screen">
      <div class="bg-gray-200 l-home-page h-full"></div>
      <div class="r-home-page h-full">
        <router-view />
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
    width: 60%;
    flex: 0 1 auto;
    background: url("../assets/img/undraw_blogging_vpvv.svg") no-repeat;
    background-size: contain;
    background-color: #fff;
  }

  .r-home-page {
    width: 40%;
    display: flex;
    flex: 0 1 auto;
    align-self: center;
    justify-content: space-around;
    background-color: #edf2f7;
  }
}
</style>
