const app = Vue.createApp({
  data: () => ({
    message: 'Hello Vue!',
    km: 0,
    m: 0,
    colors: [
      {name: 'red'},
      {name: 'green'},
      {name: 'blue'},
    ],
  }),
  methods: {
    onClick: function(event) {
      this.colors[1].name = 'white'
    }
  },
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
    },
    colors: {
      handler: function (newValue,oldValue) {
        console.log('Update!')
      },
      deep: true
    },
  },
}).mount("#app");
