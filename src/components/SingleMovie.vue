<template>
    <div class="wrap">
        <a href="javascript:history.go(-1)" class="back">< Back to previous page</a>
        <div class="single-movie">
            <div class="poster">
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
                <div class="wrap-more">
                    <a :href=link target="_blank">
                        <button class="more">More about movie</button>
                    </a>
                </div>
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
                poster:'',
                link: ''
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
                        this.link = response.data[0].field_more_about_movie[0].uri
                        console.log(this.link)

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
    a.back {
        text-decoration: none;
        color: coral;
        font-weight: bold;
        padding-left: 50px;
        &:hover {
            color: #af5836;
        }
    }
    .single-movie {
        display: block;
        padding-top: 50px;
        background-image: url("./../assets/paper.png");
        background-position: center;
        background-size: cover;
        /*background-repeat: repeat-y;*/
        min-height: 380px;
        .poster {
            display: inline-block;
            float: left;
            width: 30%;
            img {
                padding: 0 50px 50px;
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
            .wrap-more {
                a {
                    .more {
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
    }

}

</style>