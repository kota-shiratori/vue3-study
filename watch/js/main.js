const app = Vue.createApp({
  data: () => ({
    message: 'Hello Vue!',
    km: 0,
    m: 0,
  }),
  watch: {
    message: function(newValue,oldValue) {
      console.log('new: %s, old: %s', newValue, oldValue);
    },
    km: function(val){
      this.km = val
      this.m = val * 1000
    },
    m: function(val){
      this.km = val / 1000
      this.m = val
    }
  },
}).mount("#app");
