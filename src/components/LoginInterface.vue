<template>
  <div class="login">
    <div :class="change ? 'container right-panel-active' : 'container'">
      <!-- 注册 -->
      <div class="container__form container--signup">
        <form class="form">
          <h2 class="form__title">注册</h2>
          <input type="text" placeholder="User" class="input" />
          <input
            type="email"
            placeholder="Email"
            class="input"
            v-model="inputEmail"
          />
          <div class="hintBox">
            <div
              @click="setInput(mail)"
              class="hintItem"
              v-for="mail in emails"
              :key="mail"
            >
              {{ mail }}
            </div>
          </div>
          <input type="password" placeholder="Password" class="input" />
          <button class="btn">注册</button>
        </form>
      </div>

      <!-- 登录 -->
      <div class="container__form container--signin">
        <form class="form">
          <h2 class="form__title">登录</h2>
          <input type="email" placeholder="Email" class="input" v-model="inputEmail" />
          <div class="hintBox hintBox--signin">
            <div
              @click="setInput(mail)"
              class="hintItem"
              v-for="mail in emails"
              :key="mail"
            >
              {{ mail }}
            </div>
          </div>
          <input type="password" placeholder="Password" class="input" />
          <button class="btn">登录</button>
        </form>
      </div>

      <!-- 切换按钮位置非数据 -->
      <div class="container__overlay">
        <div class="overlay">
          <div class="overlay__panel overlay--left">
            <button class="btn" id="signIn" @click="signIn()">登录</button>
          </div>
          <div class="overlay__panel overlay--right">
            <button class="btn" id="signUp" @click="signUp()">注册</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      change: true,
      inputEmail: "",
    };
  },
  methods: {
    signIn() {
      this.change = false;
    },
    signUp() {
      this.change = true;
    },
    // 点击该邮箱后缀是补全文本框
    setInput(mail) {
      this.inputEmail = mail;
    },
  },
  computed: {
    emails() {
      // 如果inputEmail中没有任何东西，则不处理
      if (!this.inputEmail) return [];
      // 考虑到用户自己要输@符号，如果@符号首次出现的位置大于等于第零个位置时，则不处理
      if (this.inputEmail.indexOf("@") > -1) return [];
      return [
        this.inputEmail + "@qq.com",
        this.inputEmail + "@163.com",
        this.inputEmail + "@126.com",
        this.inputEmail + "@0355.net",
        this.inputEmail + "@263.net",
        this.inputEmail + "@3721.net",
        this.inputEmail + "@yahoo.com",
        this.inputEmail + "@gmail.com",
        this.inputEmail + "@msn.com",
        this.inputEmail + "@hotmail.com",
        this.inputEmail + "@aol.com",
        this.inputEmail + "@ask.com",
        this.inputEmail + "@live.com",
        this.inputEmail + "@yeah.net",
      ];
    },
  },
};
</script>


<style lang="less" >
:root {
  /* COLORS */
  --white: #e9e9e9;
  --gray: #333;
  --blue: #0367a6;
  --lightblue: #008997;
  --button-radius: 0.7rem;
  --max-width: 758px;
  --max-height: 420px;
  font-size: 16px;
}

.hintBox {
  width: 82.5%;
  max-height: 30%;
  overflow-y: scroll;
  overflow-x: auto;
  position: absolute;
  top: 53%;
  z-index: 999;
  background-color: #fff;
}

.hintBox--signin{
    top: 45.5% !important ;
}
.hintItem {
  margin-top: 5px;
  font-size: 20px;
  font-weight: 400;
  color: #898989;
}

.login {
  align-items: center;
  background-color: var(--white);
  background-image: url("../assets/img/login-background.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  height: 100vh;
  place-items: center;
}

.form__title {
  font-family: "Times New Roman", Times, serif;
  font-weight: 600;
  margin: 0;
  margin-bottom: 1.25rem;
}

.container {
  background-color: var(--white);
  border-radius: var(--button-radius);
  box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
    0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
  height: var(--max-height);
  max-width: var(--max-width);
  overflow: hidden;
  position: relative;
  width: 100%;
}

.container__form {
  height: 100%;
  position: absolute;
  top: 0;
  transition: all 0.6s ease-in-out;
}

.container--signin {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .container--signin {
  transform: translateX(100%);
}

.container--signup {
  left: 0;
  opacity: 0;
  width: 50%;
  z-index: 1;
}

.container.right-panel-active .container--signup {
  -webkit-animation: show 0.6s;
  animation: show 0.6s;
  opacity: 1;
  transform: translateX(100%);
  z-index: 5;
}

.container__overlay {
  height: 100%;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: transform 0.6s ease-in-out;
  width: 50%;
  z-index: 100;
}

.container.right-panel-active .container__overlay {
  transform: translateX(-100%);
}

.overlay {
  background-color: var(--lightblue);
  background-image: url("../assets/img/login-background.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  left: -100%;
  position: relative;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  width: 200%;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay__panel {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: absolute;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  width: 50%;
}

.overlay--left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay--left {
  transform: translateX(0);
}

.overlay--right {
  right: 0;
  transform: translateX(0);
}

.container .right-panel-active .overlay--right {
  transform: translateX(20%);
}

.btn {
  background-color: var(--blue);
  background-image: linear-gradient(
    90deg,
    var(--blue) 0%,
    var(--lightblue) 74%
  );
  border-radius: 20px;
  border: 1px solid var(--blue);
  color: var(--white);
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  padding: 0.9rem 4rem;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

.form > .btn {
  margin-top: 1.5rem;
}

.btn:active {
  transform: scale(0.9);
}

.btn:focus {
  outline: none;
}

.form {
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 3rem;
  height: 100%;
  text-align: center;
}

.input {
  background-color: #fff;
  border: none;
  padding: 0.9rem 0.9rem;
  margin: 0.5rem 0;
  width: 100%;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }
  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}
</style>
