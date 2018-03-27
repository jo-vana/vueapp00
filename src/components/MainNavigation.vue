<template>
    <div>
        <nav>
            <ul>
                <li >
                    <router-link :to="{ name: 'HelloWorld' }" >Home</router-link>
                </li>
                <li>
                    <router-link :to = "{name: 'Contact'}">Contact</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'NewList' }">New</router-link>
                </li>
            </ul>
        </nav>

    </div>
</template>
<script>
    import axios from 'axios'

    export default {

    }
</script>
<style lang="scss" scoped>
    ul {
        list-style: none;
        text-align: center;
        li {
            display: inline-block;
            padding: 0 10px;
            color: white;
            a {
                text-decoration: none;
                color: white;
                &.router-link-exact-active {
                    color: red;
                }
            }
        }
    }

</style>