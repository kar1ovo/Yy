<template>
  <div id="app">
    <h1>来一点句子🍊吧</h1>
    <div>点击句子🍊切换</div>
    <div id="nav">
      <router-link to="/dh">动画</router-link> |
      <router-link to="/mh">漫画</router-link> |
      <router-link to="/yx">游戏</router-link> |
      <router-link to="/wx">文学</router-link> |
      <router-link to="/ys">影视</router-link> |
      <router-link to="/sc">诗词</router-link> |
      <router-link to="/wyy">网易云</router-link> |
      <router-link to="/zx">哲学</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
