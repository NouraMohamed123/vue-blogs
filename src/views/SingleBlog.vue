<template>
    <div v-if="blog">
    <router-link to='/' type='button' class="back-button">back</router-link>
     <app-header> <h1>{{ blog.title }}</h1> </app-header>
     <div class="blog-content">
       <div class="blog-image">
          <div class="ratio-content">
             <img :src="blog.image">
          </div>
       </div>
       <h2>{{ blog.title }}</h2>
       <p>{{ blog.content }}</p>

     </div>
    </div>
    
</template>
<script>
import AppHeader from "../components/app-header.vue";
import axios from "axios";
export default {
    data() {
        return {
            blog: null,
        };
    },
     components: {
        AppHeader,
        
    },
    mounted() {
        axios
            .get(`http://localhost:3000/blog/${this.$route.params.id}`)
            .then((res) => {
                this.blog = res.data;
            });
    },
};
</script>
<style scoped>
.blog-content {
    max-width: 1024px;
    margin: auto;
    margin-top: 50px;
  }
  .blog-image{
    position: relative;

  }
      .ratio-content{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;

    }


      img{
        width: 100%;
        max-height: 100%;
      }

    .blog-image::before{
      content: '';
      display: block;
      padding-top: 30%;
    }

    .blog-title{
    color: #990099;
  }
  .blog-content{
    color: #9e9c9c;
    font-style: italic;
  }
  
.back-button{
    color: #fff;
    text-decoration: none;
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: rgba(255,255,255,0.1);
    border-radius: 5px;
    padding: 7px 15px;
    line-height: 1;
    z-index: 999;
  }
    .back-button:hover{
      background-color: rgba(255,255,255,0.2);
    }
</style>
