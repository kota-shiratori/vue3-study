const app = Vue.createApp({
  data: () => ({
    counter: 0,
    message: '',
  }),
  methods: {
    // clickHandler: function(event) {
    //   this.counter++
    //   console.log(event)
    //   console.log(event.target)
    //   console.log(event.target.tagName)
    //   console.log(event.target.innerHTML)
    //   console.log(event.target.type)
    //   console.log(event.target.id)
    // }
    // clickHandler: function($event,message) {
    //   this.message = message
    //   console.log($event)
    // }
    clickHandler: function() {
      this.message = new Date().toLocaleDateString()
    }
  }
}).mount("#app");
