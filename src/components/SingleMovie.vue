<template>
    <div>
        <h1>Single Movie</h1>
        <div>
            {{ movie[0].title[0].value }}
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default  {
        props: ['id'],
        data() {
            return {
                movie: null
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

<style>

</style>