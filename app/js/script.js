const { createApp } = Vue

createApp({
  data() {
    return {
        discsList : [],
    }
  },
  methods: {
    getDiscsList() {
        axios.get('http://localhost/Esercizio%2046%20-%20PHP%20Dischi%20JSON/php-dischi-json/')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
  },
  mounted() {
    this.getDiscsList();
  }

}).mount('#app')