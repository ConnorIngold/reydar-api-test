new Vue({
  el: '#root',
  data() {
    return {
      info: null
    }
  },
  mounted() {
    axios
      .get('http://api.reydar.com/api/Products')
      .then(response => {
        this.info = response.data
        console.log(response.data)
        }
      )
      .catch(error => console.log(error))
  }
})

