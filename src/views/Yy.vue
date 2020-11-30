<template>
  <div id="main">
    <p>『{{ data.message }}』</p>
    <p>
      --{{ data.from }}<span v-if="data.from_who">「{{ data.from_who }}」</span>
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
  mounted() {
    setInterval(() => {
      this.fetch();
    }, 5000);
  },
};
</script>

<style>
#main {
}
</style>
