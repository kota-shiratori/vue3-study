const app = Vue.createApp({
  data: () => ({
    message: "Hello Vue!",
  }),
  methods: {
    clickHandler: function (event) {
      this.message = this.message.split('').reverse().join('')
    },
  },
}).mount("#app");
