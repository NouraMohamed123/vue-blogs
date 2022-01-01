<template>
    <div class="blog-card">
        <div class="card-image">
            <div class="ratio-img">
                <img :src="data.image" alt="" />
            </div>
        </div>
        <div class="card-content">
            <h2 class="card-title">{{ data.title }}</h2>
            <p class="card-summary">{{ data.summary }}</p>
            <router-link  :to="`/blog/${data.id}`" class="read-more">continuio reading</router-link>
            
        </div>
    </div>
</template>
<style>
.blog-card {
    width: 33%;
    padding: 0 15px;
    box-sizing: border-box;
    padding: 30px 10px 0;
}
@media (max-width: 900px) {
    .blog-card {
        width: 50%;
    }
}

@media (max-width: 600px) {
    .blog-card {
        width: 100%;
    }
}
.card-image {
}
.card-image .ratio-img {
}
.blog-card .card-image img {
    width: 100%;
    border-radius: 5px;
}
.blog-card .card-title {
    color: #990099;
    font-size: 20px;
    font-weight: 700;
}

.blog-card .card-summary {
    margin-top: 0px;
    font-weight: 300;
    color: #333;
}

.blog-card .read-more {
    color: #333;
    font-size: 14px;
    font-weight: 400;
    font-style: italic;
}
</style>
<script>
export default {
    props: {
        data: {
            required: true,
        },
    },
};
</script>
