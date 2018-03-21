<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(item, index) in results" :key="index">
          <h2>{{ item.title[0].value }}</h2>
        <!--{{ item.body[0].value }}-->
        <p v-html="item.body[0].value"></p>
          <router-link :to="{ name: 'movie', params: { id: item.nid[0].value } }">
              <button>GOOOOOOOOOOOO</button>
          </router-link>
      </li>

    </ul>
  </div>
</template>

<script>
    import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'This is top 5 movie list',
        results: []
    }
  },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
          axios.get('http://dev.api-movies.loc/api/movies?_format=json')
              .then(response => {
                  this.results = response.data
                  console.log(this.results)
              })
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
