

<template>
  <div class="headerTop">
    <!-- 背景 -->
    <div class="headerTop__background"></div>
    <!-- <video loop autoplay  class="headerTop-background">
      <source src="../assets/mp4/123.mp4" />
       用记得加上object-fit: fill; 
    </video> -->
    <!-- 简介 -->
    <div class="headerTop__intro">
      <!-- 名字 -->
      <div class="headerTop__intro__name">
        <p>Elbert</p>
      </div>
      <!-- b文 -->
      <vue-typed-js
        class="headerTop__intro__text"
        :strings="[
          '一个人至少拥有一个梦想^400,有一个理由去坚强。',
          '心若没有栖息的地方^400,到哪里都是在流浪。',
          '在这个世界上^300,不是所有合理的和美好的都能按照自己的愿望存在或实现。',
          '盛年不重来,一日难再晨。^500及时当勉励,岁月不待人',
        ]"
        :typeSpeed="180"
        :fadeOutClass="'fadeOutClass'"
        :loop="true"
        :startDelay="100"
        :backSpeed="100"
        :backDelay="400"
        :showCursor="false"
        :contentType="'html'"
      >
        <p class="typing"></p>
      </vue-typed-js>
      <!-- b文 -->
      <div class=""></div>
      <!-- 链接 -->
      <div class="headerTop__intro__link">
        <ul>
          <li>
            <a href="https://github.com/fafa123hua" target="_blank"
              ><i class="fab fa-github"></i
            ></a>
          </li>
          <li>
            <a href="" target="_blank"><i class="fab fa-weixin"></i></a>
          </li>
          <li>
            <a href="" target="_blank"><i class="fab fa-qq"></i></a>
          </li>
          <li>
            <a
              href="https://leetcode-cn.com/u/xian-yu-ben-yu-k/"
              target="_blank"
              >L</a
            >
          </li>
          <li>
            <a href="https://juejin.cn/user/2243435456897928" target="_blank"
              >J</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style lang="less">
.headerTop {
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  box-sizing: border-box;
  // 背景
  &__background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('../assets/img/headerTop-background.png');
    background-position: top center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    z-index: -1;
  }
  //个人简介
  &__intro {
    position: absolute;
    width: 50vw;
    height: 35vh;
    left: 25vw;
    top: 32.5vh;
    z-index: 99;
    // 名字
    &__name {
      width: 100%;
      height: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        margin: 0;
        padding: 0;
        font-size: 12vw;
        color: rgba(255, 255, 255, 0);
        -webkit-text-stroke: black 0.5px;
        background: url('../assets/img/headerTop-background.png');
        background-size: cover;
        background-clip: text;
        -webkit-background-clip: text;
        cursor: default;
      }
    }
    // b文
    &__text {
      width: 100%;
      height: 30%;
      display: flex;
      justify-content: center;
      .typing {
        margin: 0;
        top: 0;
        padding: 0;
        color: #fff;
        font-size: 1.4vw;
      }
    }
    // 外部链接
    &__link {
      width: 100%;
      height: 20%;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      ul {
        position: relative;
        width: 50%;
        height: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        li {
          position: relative;
          width: 3.5vw;
          height: 4.3vh;
          list-style: none;
          a {
            position: relative;
            width: 100%;
            height: 100%;
            display: inline-block;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            text-decoration: none;
            font-size: 1vw;
            border: 1px solid rgba(255, 255, 255, 0.4);
            border-right: 1px solid rgba(255, 255, 255, 0.2);
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 5px 45px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(2px);
            transition: all 0.8s ease 0s;
            overflow: hidden;
          }
          // 动画效果
          a:hover {
            transform: translateY(-1.2vh);
          }
          a::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 50px;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.5);
            transform: skew(45deg) translateX(10vw);
            transition: all 0.8s ease 0s;
          }
          a:hover::before {
            transform: skew(45deg) translateX(-10vw);
          }
        }
      }
    }
  }
}
</style>