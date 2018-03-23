<template>
    <div class="wrap">

        <div class="poster">
            <a href="javascript:history.go(-1)">< Back to previous page</a>
            <img v-bind:src=poster>
        </div>
        <div class="info">
            <!--<h1>Single Movie</h1>-->
            <h2>
                {{ movie[0].title[0].value }}
            </h2>

            <p class="director">
                <strong>Director:</strong> {{movie[0].field_director[0].value}}
            </p>

            <div class="description"><strong>About:</strong>
                <p v-html="movie[0].body[0].value"> </p>
            </div>

            <!--<div class="actors">-->
            <!--<p><strong>Actors:</strong></p>-->
            <!--<ul>-->
            <!--<li v-for="actor in actors"  >-->
            <!--{{ actor.value }}-->
            <!--</li>-->

            <!--</ul>-->
            <!--</div>-->
            <div class="actors"><strong>Actors: </strong>
                <ul class="actr-list" v-for="item in movie">
                    <li v-for="actor in item.field_actors">
                            {{ actor.value }}<span>  </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default  {
        props: ['id'],
        data() {
            return {
                movie: [],
                actors: [],
                poster:''
            }
        },
        created() {
            this.fetchData()
        },
        methods: {
            fetchData(id) {
                axios.get(`http://dev.api-movies.loc/api/movies/${this.id}?_format=json`)
                    .then(response => {
                        this.movie = response.data
                        console.log(this.movie)
                        this.actors = response.data[0].field_actors
                        console.log(this.actors)
                        this.poster = response.data[0].field_movie_poster[0].url
                        console.log(this.poster)
                    })
            }
        },
        watch: {
            '$route'() {
                this.fetchData(this.id)
            }
        }

    }
</script>

<style lang="scss" scoped>
.wrap {
    display: block;
    width: 100%;
    clear: left;
    a {
        text-decoration: none;
        color: coral;
        font-weight: bold;
        padding-left: 50px;
        &:hover {
            color: #af5836;
        }
    }
    .poster {
       display: inline-block;
       float: left;
        width: 30%;
        img {
            padding: 50px;
        }
    }
    .info {
        display: inline-block;
        width: 65%;
        h2 {
            color: #882323;
            margin-top: 0;
        }
        .director {
            font-size: 20px;
            color: #882323;
            strong {
                color: black;
            }
        }
        .description strong {
            color: black;
        }
        .actors {
            p {
                font-size: 16px;
                color: aqua;
            }
            ul.actr-list {
                list-style-type: none;
                padding: 0;
                li {
                    font-size: 16px;
                    color: #882323;
                    display: inline-block;
                    span {
                        display: inline-block;
                        width: 10px;
                    }
                }
            }
        }
    }

}

</style>