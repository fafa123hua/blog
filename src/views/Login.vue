<template>
  <div class="login">
    <div class="LoginInterface">
      <ms-login-interface msg="@/components/LoginInterface.vue"> </ms-login-interface> 
    </div>
  </div>
</template>

<script>
import LoginInterface from "@/components/LoginInterface.vue"

export default {
  name: "login",
  components: {
    msLoginInterface: LoginInterface,
  },
};
</script>

<style lang="less">
.LoginInterface{
  width: 100%;
  height: 100%;
}
</style>
