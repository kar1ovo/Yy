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
    <div id="aplayer">
      <aplayer :audio="musics" :lrcType="1" fixed />
    </div>
  </div>
</template>

<script>
import axios from "axios";
let musics = [];
export default {
  data: function() {
    return {
      profile: {
        cookie: "",
      },
      musics: musics,
    };
  },
  created() {
    axios
      .get(
        "http://49.235.221.66:3000/login/cellphone?phone=19850353002&password=@wxd0213",
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        this.profile.cookie = response.data.cookie;
        this.fetchDailyMusics();
      });
  },
  methods: {
    fetchDailyMusics() {
      axios
        .get(
          `http://49.235.221.66:3000/recommend/songs?cookie=${this.profile.cookie}`
        )
        .then((response) => {
          let mdata = response.data.data.dailySongs;
          for (let i = 0; i < mdata.length; i++) {
            let music = {
              name: "",
              artist: "",
              cover: "",
              url: "",
              lrc: "",
            };
            music.name = mdata[i].name;
            music.artist = mdata[i].ar[0].name;
            music.cover = mdata[i].al.picUrl;
            axios
              .get(
                `http://49.235.221.66:3000/song/url?id=${mdata[i].id}&timestamp=1503019930006`
              )
              .then((response) => {
                music.url = response.data.data[0].url;
                axios
                  .get(
                    `http://49.235.221.66:3000/lyric?id=${mdata[i].id}&timestamp=1503019930007`
                  )
                  .then((response) => {
                    music.lrc = response.data.lrc
                      ? response.data.lrc.lyric
                      : "";
                    musics.push(music);
                  });
              });
          }
        });
    },
  },
};
</script>

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

#aplayer {
  /* margin: 100px 0px; */
  padding: 30px 400px;
}
</style>
