<template>
  <div :class="headerChange ? 'header' : 'header header--change'">
    <!-- 标签 -->
    <div class="header-logoLink">
      <router-link class="header-logoLink-a" to="/">
        <!-- 标签文字显示 -->
        <ruby>
          <span class="header-logoLink-a-name">Elbert</span>
          <span class="header-logoLink-a-and">の</span>
          <span class="header-logoLink-a-blog">Blog</span>
          <rt class="header-logoLink-a-chinese">ZhangQiHua's Blog</rt>
        </ruby>
      </router-link>
    </div>
    <!-- 菜单 -->
    <div class="header-nav">
      <router-link class="header-nav-a" to="/home">主页</router-link>
      <router-link class="header-nav-a" to="/classify">分类</router-link>
      <router-link class="header-nav-a" to="/timeline">时光轴</router-link>
      <router-link class="header-nav-a" to="/message">留言板</router-link>
      <router-link class="header-nav-a" to="/link">友链</router-link>
      <router-link class="header-nav-a" to="/reward">赞赏</router-link>
      <router-link class="header-nav-a" to="/more">更多</router-link>
      <router-link class="header-nav-a" to="/login">登陆</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headerChange: false,
    };
  },
  mounted () {
    // 导航栏顶部隐藏
    window.addEventListener("scroll", () => {
      let top = document.documentElement.scrollTop;
      if (top > 0) {
        this.headerChange = true;
      } else {
        this.headerChange = false;
      }
    });
  },
};
</script>


<style lang="less">
.header--change {
  opacity: 0 !important;
}
.header {
  position: fixed;
  width: 100vw;
  height: 75px;
  background-color: #fff;
  box-shadow: 0 1px 40px -8px rgba(0, 0, 0, 50%);
  transition: all 0.6s ease 0s;
  opacity: 1;
  z-index: 99;
  &:hover {
    opacity: 1 !important;
  }
  // 标签logo
  .header-logoLink {
    position: absolute;
    width: 140px;
    height: 75px;
    left: 2%;
    // flex布局
    display: flex;
    justify-content: space-around;
    align-items: center;
    .header-logoLink-a {
      width: 100%;
      font-weight: bold;
      font-size: 26px;
      font-family: 'Times New Roman', Times, serif;
      color: #2c3e50;
      text-decoration: none;
      ruby-position: under;
      display: inline-block;
      // 文字样式
      ruby {
        position: absolute;
        width: 100%;
        top: 32%;
        // 前缀样式
        .header-logoLink-a-name {
          position: relative;
          float: left;
          transition: all 0.8s ease 0s;
        }
        // 的样式
        .header-logoLink-a-and {
          position: relative;
          display: inline-block; //为什么  块，行内
          left: 5px;
          top: -3px;
          font-size: 12px;
          transition: all 0.8s ease 0s;
        }
        // 后缀样式
        .header-logoLink-a-blog {
          position: relative;
          left: 10px;
          float: right;
          transition: all 0.8s ease 0s;
        }
        // 拼音
        .header-logoLink-a-chinese {
          position: relative;
          font-size: 14px;
          color: rgba(0, 0, 0, 0);
          transition: all 0.8s ease 0s;
        }
      }
      // 标签页hover效果
      &:hover {
        ruby {
          color: rgba(254, 215, 26, 1);
        }
        .header-logoLink-a-name {
          color: #fff;
          background-color: rgba(254, 215, 26, 1);
          border-radius: 8px;
        }
        //  的的旋转动画
        .header-logoLink-a-and {
          animation: span 4s linear infinite;
        }
        @keyframes span {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .header-logoLink-a-chinese {
          color: rgba(254, 215, 26, 1);
        }
      }
    }
  }
  // 导航栏
  .header-nav {
    position: absolute;
    width: 50%;
    height: 75px;
    left: 50%;
    // flex
    display: flex;
    justify-content: space-around;
    align-items: center;
    &-a {
      height: 100%;
      font-size: 1vw;
      font-weight: 600;
      line-height: 1vw;
      color: #666;
      text-transform: uppercase;
      text-decoration: none;
      transition: all 0.6s ease 0s;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      &.router-link-exact-active {
        color: rgba(254, 215, 26, 1);
      }
    }
    // a动画
    &-a:hover {
      color: rgba(254, 215, 26, 1);
    }
    &-a:hover:after {
      opacity: 1;
      transform: translate(-50%) scaleX(1);
    }
    &-a:after {
      content: '';
      position: absolute;
      left: 50%;
      top: 95%;
      width: 100%;
      color: rgba(254, 215, 26, 1);
      opacity: 0;
      border-bottom: 4px solid rgba(254, 215, 26, 1);
      transform: translate(-50%) scaleX(0);
      transition: 0.5s ease-in-out;
    }
  }
}
</style>