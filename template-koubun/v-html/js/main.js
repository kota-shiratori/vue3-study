const app = Vue.createApp({
    data: () => ({
        message: 'Hello <span style="color:red;">Vue!</span>',
    }),
}).mount('#app')