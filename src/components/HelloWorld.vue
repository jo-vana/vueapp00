<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul class="mov-list">
      <li v-for="(item, index) in results" :key="index">
        <img v-bind:src=item.field_movie_poster[0].url>
          <h2>{{ item.title[0].value }}</h2>

        <p v-html="item.body[0].value"></p>
          <router-link :to="{ name: 'movie', params: { id: item.nid[0].value } }">
              <button class="read">Read more</button>
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
<style lang="scss" scoped>
.hello {
  h1 {
    text-align: center;
    color: white;
    /*font-family: 'roboto_bold',monospace;*/
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    li {
      display: inline-block;
      max-width: 90%;
      margin: 0 auto;
      margin-bottom: 30px;
      padding: 20px 20px;
      background-image: url("./../assets/paper.png");
      background-position: center;
      background-size: cover;
      img {
        float: left;
        padding-right: 20px;
      }
      h2 {
        color: #882323;
        margin-top: 0;
      }
      a {
        .read {
          color: #882323;
          font-family: 'roboto_bold',monospace;
          background-color: #ffc774;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 5px;
          &:hover {
            background-color: #e6ae48;
          }
        }
      }
    }
  }
  a {
    color: #42b983;
  }
  ul.mov-list {

  }
}

</style>
