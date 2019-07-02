<template>
  <div id="app" style="height:100%">
      <div class="main-">
        <div>
            <router-view class="router-view"></router-view>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lass="scss">
@import "./style/base.scss";
@import "./style/index.scss";

</style>
