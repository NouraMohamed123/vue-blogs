<template>
    <div>
        <app-header> <h1>Blog</h1> </app-header>
        <div class="container" v-if="blogs">
            <blog-cart
                v-for="blog in blogs"
                :key="blog.id"
                :data="blog"></blog-cart>
        </div>
        <div class="text-center">
            <button
                type="button"
                class="lead-read-more"
                @click="loadmore"
                v-if="blogs && blogs.length < totalCount">
                load more
            </button>
        </div>
    </div>
</template>

<script>
import AppHeader from "../components/app-header.vue";
import BlogCart from "../components/blog-cart.vue";
import axios from "axios";
export default {
    data() {
        return {
            blogs: null,
            page: 1,
            totalCount: null,
        };
    },
    components: {
        AppHeader,
        BlogCart,
    },
    mounted() {
        this.getBlogs(this.page);
    },
    methods: {
        getBlogs(page) {
            axios
                .get(`http://localhost:3000/blog?_page=${page}&_limit=6`)
                .then((res) => {
                    this.blogs = this.blogs
                        ? this.blogs.concat(res.data)
                        : res.data;
                    console.log(res.headers);
                    this.totalCount = res.headers["x-total-count"];
                    console.log(res.headers["x-total-count"]);
                });
        },
        loadmore() {
            this.page++;
            this.getBlogs(this.page);
        },
    },
};
</script>
<style scoped>

.container {
    padding: 0 30px;
    display: flex;
    flex-wrap: wrap;
}
.text-center {
    text-align: center;
}
.lead-read-more {
    color: #fff;
    font-size: 18px;
    font-style: italic;
    background-color: #990099;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin-top: 50px;
    margin-bottom: 60px;
    text-align: center;
}
</style>
