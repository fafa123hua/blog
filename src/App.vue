<template>
  <div class="all">
    <!-- 导航栏 -->
    <div class="nav">
      <ms-nav msg="@/components/nav.vue"></ms-nav>
    </div>
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  name: "all",
  components: {
    msNav: Nav,
  },
};
// 顶部隐藏
</script>

<style lang="less">
@font-face {
    font-family: miaowu;
    src: url("./assets/typeface/FZMiaoWu.TTF");
}
.all{
  font-family: miaowu;
}
// 去除滚动条
::-webkit-scrollbar {
     width: 0 !important;
}
</style>