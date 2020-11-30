<template>
  <div id="main" @click="fetch">
    <p id="msg">『{{ data.message }}』</p>
    <p id="from">
      --{{ data.from
      }}<span v-show="data.from_who">「{{ data.from_who }}」</span>
    </p>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import VueAxios from "vue-axios";
import router from "vue-router";

Vue.use(VueAxios, axios, router);
var data = {
  message: "",
  from: "",
  from_who: "",
  goTo: {
    dh: "a",
    mh: "b",
    yx: "c",
    wx: "d",
    ys: "h",
    sc: "i",
    wyy: "j",
    zx: "k",
  },
};
export default {
  created() {
    this.fetch();
  },
  data: function() {
    return {
      data,
    };
  },
  methods: {
    fetch: function() {
      const ref = this.$route.params.type;
      const type = data.goTo[ref];
      Vue.axios
        .get(`https://v1.hitokoto.cn/?c=${type}&encode=json`)
        .then(function(response) {
          data.message = response.data.hitokoto;
          data.from = response.data.from;
          data.from_who = response.data.from_who;
        });
    },
  },
  // mounted() {
  //   setInterval(() => {
  //     this.fetch();
  //   }, 6000);
  // },
  watch: {
    $route() {
      this.fetch();
    },
  },
};
</script>

<style>
#main:hover {
  animation: 0.5s large linear forwards;
}
@keyframes large {
  from {
    font-size: 1rem;
  }
  to {
    font-size: 1.5rem;
  }
}
#main {
  border: 10px solid;
  border-image: linear-gradient(45deg, gold, deeppink) 1;
  clip-path: inset(0px round 10px);
  animation: huerotate 6s infinite linear;
  filter: hue-rotate(360deg);
}

@keyframes huerotate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rorate(360deg);
  }
}
</style>
