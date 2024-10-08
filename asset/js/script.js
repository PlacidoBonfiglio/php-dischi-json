const { createApp } = Vue

createApp({
  data() {
    return {
        discsList : [],
    }
  },
  methods: {
    getDiscsList() {
        axios.get('http://localhost/Esercizio%2046%20-%20PHP%20Dischi%20JSON/php-dischi-json/api/dischi.json')
            .then((response) => {
                // handle success
                console.log(response.data);
                this.discsList = response.data;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    },
  },
  mounted() {
    this.getDiscsList();
  }

}).mount('#app')