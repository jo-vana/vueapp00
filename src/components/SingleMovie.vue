<template>
    <div>
        <h1>Single Movie</h1>
        <h2>
            {{ movie[0].title[0].value }}
        </h2>

        <p class="director">
            <strong>Director:</strong> {{movie[0].field_director[0].value}}
        </p>

        <div class="description">
            <p><strong>About:</strong></p>
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
        <div class="actors">
            <ul>
                <li v-for="item in movie">
                    {{ item }}
                    <p v-for="actor in item.field_actors">
                        {{ actor.value }}
                    </p>
                </li>
            </ul>
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
                actors: []
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
.director {
    font-size: 20px;
    color: aqua;
}
.description strong {
    color: aqua;
}
.actors {
    p {
        font-size: 16px;
        color: aqua;
    }
    ul {
        list-style-type: none;
        padding: 0;
        li {
            font-size: 16px;
            color: cadetblue;
        }
    }
}
</style>